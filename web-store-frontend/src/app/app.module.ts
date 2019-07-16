import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteUserComponent } from './routes/route-user/route-user.component';
import { RouteUserViewComponent } from './routes/route-user-view/route-user-view.component';
import { RouteUserEditComponent } from './routes/route-user-edit/route-user-edit.component';
import { RouteUserViewMailComponent } from './routes/route-user-view-mail/route-user-view-mail.component';
import { RouteUserViewPassComponent } from './routes/route-user-view-pass/route-user-view-pass.component';
import { RouteOrdersComponent } from './routes/route-orders/route-orders.component';
import { RouteOrderDetailComponent } from './routes/route-order-detail/route-order-detail.component';
import { RouteShopCartComponent } from './routes/route-shop-cart/route-shop-cart.component';
import { RouteProductsCategoriesComponent } from './routes/route-products-categories/route-products-categories.component';
import { RouteProductsDetailsComponent } from './routes/route-products-details/route-products-details.component';
import { RouteSalesDetailsComponent } from './routes/route-sales-details/route-sales-details.component';
import { RouteSalesComponent } from './routes/route-sales/route-sales.component';
import { RouteNewUsersAdminComponent } from './routes/route-new-users-admin/route-new-users-admin.component';
import { RouteUsersAdminComponent } from './routes/route-users-admin/route-users-admin.component';
import { RouteWarehouseContentComponent } from './routes/route-warehouse-content/route-warehouse-content.component';
import { RouteWarehouseComponent } from './routes/route-warehouse/route-warehouse.component';
import { RouteAcquisitionOrdersComponent } from './routes/route-acquisition-orders/route-acquisition-orders.component';
import { RouteAcquisitionOrderDetailsComponent } from './routes/route-acquisition-order-details/route-acquisition-order-details.component';
import { RouteNewOrderComponent } from './routes/route-new-order/route-new-order.component';
import { RouteNewWarehouseComponent } from './routes/route-new-warehouse/route-new-warehouse.component';
import { RouteLoginComponent } from './routes/route-login/route-login.component';
import { RouteMainAdminComponent } from './routes/route-main-admin/route-main-admin.component';
import { RouteMainClientComponent } from './routes/route-main-client/route-main-client.component';
import { ProductComponent } from './web-components/product/product.component';
import { SaleComponent } from './web-components/sale/sale.component';
import { WarehouseComponent } from './web-components/warehouse/warehouse.component';
import { UserComponent } from './web-components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteUserComponent,
    RouteUserViewComponent,
    RouteUserEditComponent,
    RouteUserViewMailComponent,
    RouteUserViewPassComponent,
    RouteOrdersComponent,
    RouteOrderDetailComponent,
    RouteShopCartComponent,
    RouteProductsCategoriesComponent,
    RouteProductsDetailsComponent,
    RouteSalesDetailsComponent,
    RouteSalesComponent,
    RouteNewUsersAdminComponent,
    RouteUsersAdminComponent,
    RouteWarehouseContentComponent,
    RouteWarehouseComponent,
    RouteAcquisitionOrdersComponent,
    RouteAcquisitionOrderDetailsComponent,
    RouteNewOrderComponent,
    RouteNewWarehouseComponent,
    RouteLoginComponent,
    RouteMainAdminComponent,
    RouteMainClientComponent,
    ProductComponent,
    SaleComponent,
    WarehouseComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
