import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
import { HttpPrincipalService } from './services/http/http-principal/http-principal.service';
import { UserHttpService } from './services/http/user-http/user-http.service';
import { GuardService } from './services/auth/guard/guard.service';
import { LoggedInService } from './services/auth/logged-in/logged-in.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonHttpService } from './services/http/person-http/person-http.service';
import { UserRolService } from './services/http/user-rol-http/user-rol.service';
import { RouteEditUserAdminComponent } from './routes/route-edit-user-admin/route-edit-user-admin.component';
import { SessionService } from './services/session/session.service';
import { WarehouseHttpService } from './services/http/warehouse-http/warehouse-http.service';
import { ProductSaleComponent } from './web-components/product-sale/product-sale.component';
import { OrderComponent } from './web-components/order/order.component';

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
    UserComponent,
    RouteEditUserAdminComponent,
    UserComponent,
    ProductSaleComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpPrincipalService,
    UserHttpService,
    GuardService,
    LoggedInService,
    PersonHttpService,
    UserRolService,
    SessionService,
    WarehouseHttpService

  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
