import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationComponent} from './component/operation/operation.component';
import { ListOperationsComponent} from './component/list-operations/list-operations.component';
import { HomeComponent} from './component/home/home.component';

const routes: Routes = 
[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'operation',component: OperationComponent},
  {path:'list-operations',component: ListOperationsComponent}
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
