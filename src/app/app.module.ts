import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoUpdateComponent } from './pages/todo-update/todo-update.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { TodoService } from './services/todo-service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoUpdateComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TodoService,{provide:'BASE_API_URL',useValue:environment.baseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
