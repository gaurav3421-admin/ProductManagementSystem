import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
//import { provideHttpClient } from '@angular/common/http'; // Import this
import { provideHttpClient,withInterceptors } from '@angular/common/http'; // Import this
import { authInterceptor } from '../app/auth-interceptor';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([authInterceptor]) // Registers your functional interceptor
    ) // Add this function to the providers array
  ]
};
