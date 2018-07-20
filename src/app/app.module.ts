import { BrowserModule } from '@angular/platform-browser';
//import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ContenteditableDirective } from './content-editable.directive';
//import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PaginaCentral1Component } from './pages/pagina-central1/pagina-central1.component';
import { PaginaCentral2Component } from './pages/pagina-central2/pagina-central2.component';
import { PaginaDireita1Component } from './pages/pagina-direita1/pagina-direita1.component';
import { PaginaDireita2Component } from './pages/pagina-direita2/pagina-direita2.component';

import { rotas } from './routes';
import { AppMaterialsModule } from './app.materials.module';
import { StoreService } from './servicos/store.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginaCentral1Component,
    PaginaCentral2Component,
    PaginaDireita1Component,
    PaginaDireita2Component,
    ContenteditableDirective
  ],
  imports: [
    BrowserModule ,
    FormsModule , 
    BrowserAnimationsModule ,
    AppMaterialsModule ,
    FlexLayoutModule ,
    //WorkerAppModule ,
    //CommonModule ,
    RouterModule.forRoot(rotas) ,
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
