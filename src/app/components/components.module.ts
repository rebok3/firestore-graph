import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraphicHorizontalBarComponent } from './graphic-horizontal-bar/graphic-horizontal-bar.component';



@NgModule({
  declarations: [NavbarComponent, GraphicHorizontalBarComponent],
  exports: [
    NavbarComponent,
    GraphicHorizontalBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
