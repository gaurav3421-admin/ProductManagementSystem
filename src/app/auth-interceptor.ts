import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {



  const runningInBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  if (!runningInBrowser) {
    console.log('[Auth Interceptor] Running outside browser - skipping localStorage token read for', req.url);
  }

  // Retrieve token from local storage
  const token = runningInBrowser ? window.localStorage.getItem('accessToken') : null;
  console.log('[Auth Interceptor] Intercepting request', {
    url: req.url,
    method: req.method,
    hasToken: !!token,
    originalHeaders: req.headers?.keys?.() ?? null
  });
  // Clone request to add the Bearer token if it exists
  const authReq = token ? req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  }) : req;

  return next(authReq);
};
