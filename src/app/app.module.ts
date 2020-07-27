import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOperationsComponent } from './component/list-operations/list-operations.component';
import { OperationComponent } from './component/operation/operation.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule,} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListOperationsComponent,
    OperationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
