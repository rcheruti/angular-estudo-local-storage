import { Component } from '@angular/core';
import { Produto } from '../../entidades/produto';


@Component({
  selector: 'app-pagina-central2',
  templateUrl: './pagina-central2.component.html',
  styleUrls: ['./pagina-central2.component.scss'],
})
export class PaginaCentral2Component {
  
  produto: Produto = new Produto();
  tipos = Produto.tipos;
  
  constructor() { }
  
}
