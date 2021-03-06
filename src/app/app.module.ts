import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material components
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './login/_helpers';
import { JwtInterceptor, ErrorInterceptor } from './login/_helpers';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventComponent } from './components/event/event.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LineEventsComponent } from './components/line-events/line-events.component';
import { LineNotificationsComponent } from './components/line-notifications/line-notifications.component';
import { MyLinesComponent } from './components/my-lines/my-lines.component';
import { LineInfoComponent } from './components/line-info/line-info.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateEventFormComponent } from './components/create-event-form/create-event-form.component';

//translate
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    EventComponent,
    FooterComponent,
    HomeComponent,
    LineEventsComponent,
    LineNotificationsComponent,
    MyLinesComponent,
    LineInfoComponent,
    CreateEventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    HeaderComponent,
    MyLinesComponent,
    // provider used to create fake backend
    fakeBackendProvider,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
