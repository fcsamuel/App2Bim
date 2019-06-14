import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatRadioModule, MatButtonModule, MatTableModule, MatIconModule,
  MatPaginatorModule, MatSort, MatSortModule, MatExpansionModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { ContainerComponent } from './cadastro/container/container.component';
import { ContainerListComponent } from './cadastro/container/container-list/container-list.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { DatePipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule, 
    MatIconModule, 
    HttpClientModule,
    MatPaginatorModule, 
    MatSortModule, 
    MatExpansionModule, 
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    NgxSpinnerModule
  ],
  providers: [HttpClient, DatePipe],
  entryComponents: [ DialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
