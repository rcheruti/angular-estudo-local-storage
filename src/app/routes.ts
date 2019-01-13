import { Routes } from '@angular/router';

import { PaginaCentral1Component } from './pages/pagina-central1/pagina-central1.component';
import { PaginaCentral2Component } from './pages/pagina-central2/pagina-central2.component';
import { PaginaDireita1Component } from './pages/pagina-direita1/pagina-direita1.component';
import { PaginaDireita2Component } from './pages/pagina-direita2/pagina-direita2.component';
import { PaginaPopmotionComponent } from './pages/pagina-popmotion/pagina-popmotion.component';

export const rotas: Routes = [
  { path: 'pagina-central-1', component: PaginaCentral1Component, outlet: 'central' } ,
  { path: 'pagina-central-2', component: PaginaCentral2Component, outlet: 'central' } ,
  { path: 'pagina-direita-1', component: PaginaDireita1Component, outlet: 'direita' } ,
  { path: 'pagina-direita-2', component: PaginaDireita2Component, outlet: 'direita' } ,
  { path: 'pagina-popmotion', component: PaginaPopmotionComponent, outlet: 'direita' } ,
];
