import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IUser, ILoginResponse } from '../interfaces/authentication';
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  private _isuserLoggedIn: boolean = false;
  private base = 'https://dummyjson.com';
  private tokenKey = 'accessToken';
  private refreshKey = 'refreshToken';
  private userKey = 'auth_user';
  private userRoleKey = 'auth_user_role';

  // optional HttpClient (won't throw if provider missing)
  private httpClientRequest: HttpClient | null = inject(HttpClient, { optional: true } as any);

  constructor() { }

  // safe check for storage availability
  private storageAvailable(): boolean {
    return (typeof window !== 'undefined') && (typeof window.localStorage !== 'undefined');
  }

  // init signal in a safe way (no direct global localStorage access at module eval time)
  private isAuthenticatedSignal = signal<boolean>((typeof window !== 'undefined' && !!(window as any).localStorage?.getItem('token')) ?? false);

  userlogin(token: string, userRole: any): void {
    if (this.storageAvailable()) {
      window.localStorage.setItem('token', token);
      this.setUser(userRole);
      console.log("Called =>  Authentication service =>userlogin=>Set token");
    }
    this.isAuthenticatedSignal.set(true);
    console.log("Called =>  Authentication service =>userlogin=>Value of isAuthenticatedSignal :", this.isAuthenticatedSignal());
  }

  userlogout(): void {
    if (this.storageAvailable()) {
      console.log("Called =>  Authentication service =>userlogout=>Remove token");
      window.localStorage.removeItem('token');
    }
    this.isAuthenticatedSignal.set(false);
    console.log("Called =>  Authentication service =>userlogout=>Value of isAuthenticatedSignal :", this.isAuthenticatedSignal());
  }

  isuserLoggedIn(): boolean {
    return this.isAuthenticatedSignal();
  }

  userlogintokenid(loginUser: any): Observable<any> | undefined {
    if (!this.httpClientRequest) {
      console.warn('HttpClient not available; userlogintokenid will not perform HTTP call.');
      return undefined;
    }

    const url = `${this.base}/auth/login`;
    const loginData = {
      username: loginUser.username,
      password: loginUser.password,
      expiresInMins: 30
    };
    this.setUser(loginUser.role);
    this.isAuthenticatedSignal.set(true);
    console.log("Called =>  Authentication service =>userlogin=>Value of isAuthenticatedSignal :", this.isAuthenticatedSignal());
    console.log("Authentication Service Call=>Data Request:", loginData);

    return this.httpClientRequest.post<any>(url, loginData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        return throwError(() => error);
      })
    );
  }

  userlogintokenidnew(loginUser: any): void {
    if (!this.httpClientRequest) {
      console.warn('HttpClient not available; userlogintokenidnew will not perform HTTP call.');
      return;
    }
    const loginData = {
      username: loginUser.username,
      password: loginUser.password,
      expiresInMins: 30
    };
    console.log("Login Data:", loginData);
    this.httpClientRequest.post<any>('https://dummyjson.com/auth/login', loginData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe(
      (response) => {
        console.log("Login response:", response);
        if (response.token || response.accessToken) {
          if (this.storageAvailable()) {
            window.localStorage.setItem('user', JSON.stringify(response));
            const token = response.accessToken ?? response.token;
            window.localStorage.setItem('authToken', token);
          }
          this.isAuthenticatedSignal.set(true);
        }
      },
      (error: HttpErrorResponse) => {
        console.error("Login error:", error);
        this._isuserLoggedIn = false;
      }
    );
  }

  login(username: string, password: string, expiresInMins?: number): Observable<IUser> {
    if (!this.httpClientRequest) {
      return throwError(() => new Error('HttpClient not available'));
    }
    const url = `${this.base}/auth/login`;
    const body: any = { username, password };
    if (expiresInMins) body.expiresInMins = expiresInMins;

    return this.httpClientRequest.post<ILoginResponse>(url, body).pipe(
      tap(res => {
        if (res.accessToken) {
          this.setTokens(res.accessToken, res.refreshToken ?? null);
        }
        const user: IUser = {
          id: res.id,
          username: res.username,
          email: res.email,
          firstName: res.firstName,
          lastName: res.lastName,
          image: res.image
        };
        this.setUser(user);
        this.isAuthenticatedSignal.set(true);
      }),
      map(res => ({
        id: res.id,
        username: res.username,
        email: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        image: res.image
      })),
      catchError(err => throwError(() => err))
    );
  }

  private setTokens(accessToken: string, refreshToken?: string | null) {
    if (!this.storageAvailable()) return;
    window.localStorage.setItem(this.tokenKey, accessToken);
    if (refreshToken) window.localStorage.setItem(this.refreshKey, refreshToken);
  }

  // example: call this when login response arrives to persist user + role
  private setUser(user: IUser) {
    if (this.storageAvailable()) {
      window.localStorage.setItem(this.userRoleKey, JSON.stringify(user));
    }
  }

  // return stored user object if available
  getUser(): any | null {
    //if (!this.storageAvailable()) return null;
    const raw = window.localStorage.getItem('auth_user_role');
    //if (!raw) return null;
    //try { return JSON.parse(raw); } catch { return null; }
  }
  // check single role (supports string or array on user object)
  hasRole(role: string): boolean {
    console.debug('[Auth] hasRole -> User Role=>', role);
    const u = this.getUser();
    if (!u) {
      console.debug('[Auth] hasRole -> no user, role check failed for', role);
      return false;
    }
    const r = u.role ?? u.roles;
    if (!r) {
      console.debug('[Auth] hasRole -> user has no role property');
      return false;
    }
    const result = Array.isArray(r) ? r.includes(role) : String(r) === role;
    console.debug('[Auth] hasRole -> role:', role, 'result:', result, 'userRoles:', r);
    return result;
  }

  private loadUser(): IUser | null {
    if (!this.storageAvailable()) return null;
    const raw = window.localStorage.getItem(this.userKey);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as IUser;
    } catch {
      return null;
    }
  }

  UserTokenBasedLogout(): void {
    this.clearStorage();
    this.isAuthenticatedSignal.set(false);
  }




  private clearStorage() {
    //if (!this.storageAvailable()) return;
    console.log("Called =>  Authentication service =>UserTokenBasedLogout=>Remove token");
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('auth_user');
    window.localStorage.removeItem('auth_user_role');
  }
}