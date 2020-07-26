import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationComponent} from './operation/operation.component';
import { ListOperationsComponent} from './list-operations/list-operations.component';
import { AppComponent } from './app.component';

const routes: Routes = 
[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: AppComponent},
  {path:'operation',component: OperationComponent},
  {path:'list-operations',component: ListOperationsComponent}
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
