import { Component, ViewChildren, QueryList, ViewChild, ElementRef } from '@angular/core';
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
    console.log('PaginaDireita2Component.constructor');
    this.store.produto.subscribe((produto)=>{
      this.produto = produto;
    });
  }
  
  //----------------------------------------
  
  ngOnChanges(){
    console.log('PaginaDireita2Component.ngOnChanges');
  }
  ngOnInit(){
    console.log('PaginaDireita2Component.ngOnInit');
  }
  ngDoCheck(){
    console.log('PaginaDireita2Component.ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('PaginaDireita2Component.ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('PaginaDireita2Component.ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('PaginaDireita2Component.ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('PaginaDireita2Component.ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('PaginaDireita2Component.ngOnDestroy');
  }
  
}
