import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MazeGameDashboardComponent } from './maze-game-dashboard/maze-game-dashboard.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';

const routes: Routes = [
  {path:'maze-game',component:MazeGameDashboardComponent},
  {path:'todo-search',component:TodoSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
