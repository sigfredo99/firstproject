import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';


/* Componentes */
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { TipousuariosComponent } from './components/tipousuarios/tipousuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMatPaginatorIntl }  from './paginator-es';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    UserComponent,
    LoginComponent,
    TipousuariosComponent,
    SubjectsComponent,
    PaginationComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
