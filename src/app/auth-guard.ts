import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { Authentication } from './services/authentication';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Authentication);
  const router = inject(Router);
  const ok = auth.isuserLoggedIn();
  console.log('authGuard fired, ok=', ok, 'url=', state.url);
  return ok ? true : router.createUrlTree(['/login']);
};

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(Authentication);
  const router = inject(Router);
  const ok = auth.isuserLoggedIn();
  console.log('authChildGuard fired for child:', childRoute.routeConfig?.path, 'ok=', ok);
  return ok ? true : router.createUrlTree(['/login']);
};