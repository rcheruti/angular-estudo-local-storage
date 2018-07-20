import { Component } from '@angular/core';
import { Produto } from '../../entidades/produto';
import { StoreService } from '../../servicos/store.service';

@Component({
  selector: 'app-pagina-direita2',
  templateUrl: './pagina-direita2.component.html',
  styleUrls: ['./pagina-direita2.component.scss']
})
export class PaginaDireita2Component {

  produto: Produto = null;
  
  constructor(private store: StoreService) {
    this.store.produto.subscribe((produto)=>{
      this.produto = produto;
    });
  }
  
}
