import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnotationComponent } from './annotation/annotation.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";



@NgModule({
  declarations: [
    AppComponent,
    AnnotationComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatListModule ,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
