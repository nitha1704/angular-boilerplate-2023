import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./pages/home/home.module";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";

import { NavbarComponent } from "./components/navbar/navbar.component";

// Register swiper library
// import { register } from "swiper/element/bundle";
// register();

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
