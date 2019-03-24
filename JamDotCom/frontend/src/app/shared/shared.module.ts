import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { GeneralTableComponent } from './general-table/general-table.component';

@NgModule({
  declarations: [GeneralTableComponent],
  imports: [
    CommonModule,
    LayoutModule,

    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    CommonModule,
    LayoutModule,

    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
    GeneralTableComponent
  ]
})
export class SharedModule { }
