import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './pages/customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './pages/customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './pages/customer/customer-list/customer-list.component';
import { EmployeeCreateComponent } from './pages/employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './pages/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { LoginComponent } from './pages/login/login.component';
import { Not404Component } from './pages/not404/not404.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { SalesCreateComponent } from './pages/sales/sales-create/sales-create.component';
import { SalesEditComponent } from './pages/sales/sales-edit/sales-edit.component';
import { SalesListComponent } from './pages/sales/sales-list/sales-list.component';

const routes: Routes = [

  { path: 'custumer', component: CustomerListComponent},
  { path: 'custumer/create', component: CustomerCreateComponent },
  { path: 'custumer/edit/:id', component: CustomerEditComponent },
  
  { path: 'employee', component: EmployeeListComponent},
    
      { path: 'employee/create', component: EmployeeCreateComponent },
      { path: 'employee/edit/:id', component: EmployeeEditComponent },
    


  { path: 'product', component: ProductListComponent}, 
      { path: 'product/create', component: ProductCreateComponent },
      { path: 'product/edit/:id', component: ProductEditComponent },
  

  { path: 'sales', component: SalesListComponent},
    { path: 'sales/create', component: SalesCreateComponent },
    { path: 'sales/edit/:id', component: SalesEditComponent },
  


  { path: 'not-404', component: Not404Component },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'not-404'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
