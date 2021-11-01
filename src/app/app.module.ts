import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StaffModule } from './staff/staff.module';
import { UiModule } from './ui/ui.module';
//import { AddUpdateDataModule } from './staff/add-update-data/add-update-data.module';

import { ErrorTailorModule } from '@ngneat/error-tailor';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UiModule,
    AuthModule,
    StaffModule,
    ReactiveFormsModule,
    
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'El campo es Requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
