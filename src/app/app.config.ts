import { provideRouter } from "@angular/router";
import { ApplicationConfig } from "@angular/platform-browser";

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withFetch())
    ]
}