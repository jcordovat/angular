import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { CustomerListComponent } from './pages/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './pages/customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './pages/customer/customer-edit/customer-edit.component';
import { EmployeeEditComponent } from './pages/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './pages/employee/employee-create/employee-create.component';
import { SalesEditComponent } from './pages/sales/sales-edit/sales-edit.component';
import { SalesCreateComponent } from './pages/sales/sales-create/sales-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { Not404Component } from './pages/not404/not404.component';
import { SalesListComponent } from './pages/sales/sales-list/sales-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    SalesEditComponent,
    SalesCreateComponent,
    SalesListComponent,
    LoginComponent,
    Not404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
