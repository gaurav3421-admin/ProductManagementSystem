import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IUser, ILoginResponse } from '../interfaces/authentication';
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Authentication {
  private _isuserLoggedIn: boolean = false;
  //private tokenKey = 'authToken';
  private base = 'https://dummyjson.com';
  private tokenKey = 'auth_access_token';
  private refreshKey = 'auth_refresh_token';
  private userKey = 'auth_user';

  // observable auth state
  private userSubject = new BehaviorSubject<IUser | null>(this.loadUser());
  user$ = this.userSubject.asObservable();

  //private tokenKey = 'authToken';
  //private httpClientRequest: HttpClient | null = inject(HttpClient, { optional: true } as any);

  constructor(private httpClientRequest: HttpClient) { };

  userlogin(): void {
    this._isuserLoggedIn = true;
    //localStorage.setItem(this.tokenKey, token);
    console.log("User is logged in and Value of  _isuserLoggedIn :", this._isuserLoggedIn);

  }

  userlogout(): void {
    localStorage.removeItem('authToken');
    //this._isuserLoggedIn = false;
    console.log("Value of Token :", localStorage.getItem('authToken'));

  }

  isuserLoggedIn(): boolean {


    // token = localStorage.getItem('authToken');
    //console.log("Check user status and Value of  _isuserLoggedIn :", this._isuserLoggedIn);
    //console.log("User Logged in Token:", localStorage.getItem('authToken'));
    return !!localStorage.getItem('authToken'); // Returns true if a token exists, false otherwise
  }

  userlogintokenid(loginUser: any): Observable<any> | undefined {
    const url = `${this.base}/auth/login`;
    const loginData = {
      username: loginUser.username,   //  'emilys',
      password: loginUser.password,               // 'emilyspass',
      expiresInMins: 30
    };
    console.log("Authentication Service Call=>Data Request:", loginData);

    return this.httpClientRequest.post<any>(url, loginData, {
      //withCredentials: true,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);
        return throwError(() => error);
      })
    );
  }
  userlogintokenidnew(loginUser: any): void {
    const loginData = {
      username: loginUser.username,   //  'emilys',
      password: loginUser.password,               // 'emilyspass',
      expiresInMins: 30
    };
    console.log("Login Data:", loginData);
    this.httpClientRequest.post<any>('https://dummyjson.com/auth/login', loginData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      //withCredentials: true
    }).subscribe(
      (response) => {
        //this._isuserLoggedIn = true;
        console.log("Value of _isuserLoggedIn ", this._isuserLoggedIn);
        console.log("Login response:", response);
        if (response.token) {
          localStorage.setItem('user', JSON.stringify(response));
          localStorage.setItem('authToken', response.accessToken);
          console.log("Token stored in localStorage:", response.accessToken);
        }
      },
      (error: HttpErrorResponse) => {
        console.error("Login error:", error);
        this._isuserLoggedIn = false;
      }
    );
  }

    // helper to detect browser storage availability
  private storageAvailable(): boolean {
    return (typeof window !== 'undefined') && (typeof window.localStorage !== 'undefined');
  }
  /* LOGIN
     Sends POST to /auth/login with {username, password, expiresInMins?}.
     Use withCredentials:true if you want cookies to be used (DummyJSON sets cookies too).
     Example response shape documented in DummyJSON docs. :contentReference[oaicite:1]{index=1}
  */
  login(username: string, password: string, expiresInMins?: number): Observable<IUser> {
    const url = `${this.base}/auth/login`;
    const body: any = { username, password };
    if (expiresInMins) body.expiresInMins = expiresInMins;

    return this.httpClientRequest.post<ILoginResponse>(url, body, { 
     // withCredentials: true 
    }).pipe(
      tap(res => {
        if (res.accessToken) {
          this.setTokens(res.accessToken, res.refreshToken ?? null);
        }
        // store basic user object
        const user: IUser = {
          id: res.id,
          username: res.username,
          email: res.email,
          firstName: res.firstName,
          lastName: res.lastName,
          image: res.image
        };
        this.setUser(user);
      }),
      map(res => ({
        id: res.id,
        username: res.username,
        email: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        image: res.image
      })),
      catchError(err => {
        // surface a readable error
        return throwError(() => err);
      })
    );
  }

  // ---------- storage helpers ----------
  private setTokens(accessToken: string, refreshToken?: string | null) {
     if (!this.storageAvailable()) return;
    window.localStorage.setItem(this.tokenKey, accessToken);
    if (refreshToken) window.localStorage.setItem(this.refreshKey, refreshToken);
  }

  private setUser(user: IUser) {
    if (this.storageAvailable()) {
      window.localStorage.setItem(this.userKey, JSON.stringify(user));
    }
    this.userSubject.next(user);
  }

  private loadUser(): IUser | null {
    const raw = localStorage.getItem(this.userKey);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as IUser;
    } catch {
      return null;
    }
  }
  /* LOGOUT - clear local storage and subject */
  logout(): void {
    this.clearStorage();
    this.userSubject.next(null);
  }
  private clearStorage() {
    if (!this.storageAvailable()) return;
    window.localStorage.removeItem(this.tokenKey);
    window.localStorage.removeItem(this.refreshKey);
    window.localStorage.removeItem(this.userKey);
  }

}
