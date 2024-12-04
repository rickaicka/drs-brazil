import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from './header/header.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterModule} from './footer/footer.module';
import {RouterOutlet} from '@angular/router';

export const ComponentModules = [
  HeaderModule,
  FooterModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
