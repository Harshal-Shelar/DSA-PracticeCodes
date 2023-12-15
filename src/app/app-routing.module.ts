import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayTraversingComponent } from './components/array-traversing/array-traversing.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ArrayInsertionComponent } from './components/array-insertion/array-insertion.component';
import { ArrayDeletionComponent } from './components/array-deletion/array-deletion.component';
import { ArraySearchingComponent } from './components/array-searching/array-searching.component';
import { ArrayMergeComponent } from './components/array-merge/array-merge.component';

const routes: Routes = [
  {path :'', component : HomePageComponent},
  { path: 'arrayTraversing', component: ArrayTraversingComponent },
  { path: 'insertion', component: ArrayInsertionComponent },
  { path: 'deletion', component: ArrayDeletionComponent },
  { path: 'searching', component: ArraySearchingComponent },
  { path: 'merge', component: ArrayMergeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
