import './polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideFileRouter(), importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
