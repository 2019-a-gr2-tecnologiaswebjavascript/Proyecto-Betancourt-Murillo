import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteLoginComponent } from './routes/route-login/route-login.component';
import { RouteMainAdminComponent } from './routes/route-main-admin/route-main-admin.component';
import { RouteAcquisitionOrdersComponent } from './routes/route-acquisition-orders/route-acquisition-orders.component';
import { RouteAcquisitionOrderDetailsComponent } from './routes/route-acquisition-order-details/route-acquisition-order-details.component';
import { RouteNewOrderComponent } from './routes/route-new-order/route-new-order.component';
import { RouteWarehouseComponent } from './routes/route-warehouse/route-warehouse.component';
import { RouteNewWarehouseComponent } from './routes/route-new-warehouse/route-new-warehouse.component';
import { RouteWarehouseContentComponent } from './routes/route-warehouse-content/route-warehouse-content.component';
import { RouteUsersAdminComponent } from './routes/route-users-admin/route-users-admin.component';
import { RouteNewUsersAdminComponent } from './routes/route-new-users-admin/route-new-users-admin.component';
import { RouteSalesComponent } from './routes/route-sales/route-sales.component';
import { RouteSalesDetailsComponent } from './routes/route-sales-details/route-sales-details.component';
import { GuardService } from './services/auth/guard/guard.service';
import { RouteEditUserAdminComponent } from './routes/route-edit-user-admin/route-edit-user-admin.component';

const routes: Routes = [
  {
    path : 'login',
    component : RouteLoginComponent
  },
  {
    path : 'homeAdmin',
    component : RouteMainAdminComponent,
    canActivate : [
      GuardService
    ],
    children : [
      {
        path : 'acqOrders',
        component : RouteAcquisitionOrdersComponent
      },
      {
        path : 'acqOrdersDetail',
        component : RouteAcquisitionOrderDetailsComponent
      },
      {
        path : 'newOrder',
        component : RouteNewOrderComponent
      },
      {
        path : 'warehouse',
        component : RouteWarehouseComponent
      },
      {
        path : 'newWarehouse',
        component : RouteNewWarehouseComponent
      },
      {
        path : 'warehouseContent',
        component : RouteWarehouseContentComponent
      },
      {
        path : 'usersAdmin',
        component : RouteUsersAdminComponent
      },
      {
        path : 'newUserAdmin',
        component : RouteNewUsersAdminComponent
      },
      {
        path : 'sales',
        component : RouteSalesComponent
      },
      {
        path : 'salesDetail',
        component : RouteSalesDetailsComponent
      },
      {
        path : 'editUserAdmin',
        component : RouteEditUserAdminComponent
      }
    ]
  },
  {
    path : '',
    redirectTo : '/login',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
