import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayTraversingComponent } from './components/array-traversing/array-traversing.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { ArrayInsertionComponent } from './components/array-insertion/array-insertion.component';
import { ArrayDeletionComponent } from './components/array-deletion/array-deletion.component';
import { ArraySearchingComponent } from './components/array-searching/array-searching.component';
import { ArrayMergeComponent } from './components/array-merge/array-merge.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayTraversingComponent,
    HomePageComponent,
    ArrayInsertionComponent,
    ArrayDeletionComponent,
    ArraySearchingComponent,
    ArrayMergeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
