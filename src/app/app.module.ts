import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EntitiesComponent } from './entities/entities.component';
import { DataModelDomainsComponent } from './data-model-domains/data-model-domains.component';
import { SchemaDetailsTypesComponent } from './schema-details-types/schema-details-types.component';
import { ClassesComponent } from './classes/classes.component';
import { PropertiesComponent } from './properties/properties.component';
import { SchemaDetailsPropertiesComponent } from './schema-details-properties/schema-details-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EntitiesComponent,
    DataModelDomainsComponent,
    SchemaDetailsTypesComponent,
    ClassesComponent,
    PropertiesComponent,
    SchemaDetailsPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
