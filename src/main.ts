import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  ...appConfig
  // providers: [
  //   provideHttpClient() // <-- Required to make HttpClient available everywhere
  //   // ... other providers if you have them
  // ]
}).catch(err => console.error(err));

