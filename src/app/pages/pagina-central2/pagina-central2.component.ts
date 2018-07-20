import { Component } from '@angular/core';
import { Produto } from '../../entidades/produto';

import * as moment from 'moment';
import { first } from '../../../../node_modules/rxjs/operators';
import { StoreService } from '../../servicos/store.service';


@Component({
  selector: 'app-pagina-central2',
  templateUrl: './pagina-central2.component.html',
  styleUrls: ['./pagina-central2.component.scss'],
})
export class PaginaCentral2Component {
  
  produtoClone: Produto = null;
  produto: Produto = null;
  tipos = Produto.tipos;
  
  constructor(private store: StoreService) {
    this.store.produto.pipe(first()).subscribe((produto)=>{
      this.produto = produto;
      this.cloneProduto();
    });
  }
  
  enviar(){
    this.store.produto.next(this.produto);
    this.cloneProduto();
  }
  
  // ----------------------------------------------------
  
  private cloneProduto(){
    let produtoClone = JSON.parse( JSON.stringify(this.produto) );
    if( produtoClone.validade ){
      produtoClone.validade = moment( produtoClone.validade );
    }
    this.produtoClone = produtoClone;
  }
  
}
