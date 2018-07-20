import { Injectable } from '@angular/core';
import { ReplaySubject } from '../../../node_modules/rxjs';
import { shareReplay, tap } from '../../../node_modules/rxjs/operators';

import * as moment from 'moment';
import { Produto } from '../entidades/produto';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  readonly produto: ReplaySubject<Produto> = <ReplaySubject<Produto>> new ReplaySubject(1).pipe(gravar('produto'), shareReplay());
  readonly texto: ReplaySubject<string> = <ReplaySubject<string>> new ReplaySubject(1).pipe(gravar('texto'), shareReplay());
  
  constructor(){
    this.carregar('produto','produto',true,['validade']);
    this.carregar('texto','texto',false);
  }
  
  private carregar(attr: string, nome: string, isObj: boolean = false, moments: Array<string> = []){
    let item = localStorage.getItem(nome);
    if( isObj ){
      item = JSON.parse( item );
    }
    for(let campo of moments){
      let valor = item[campo];
      if( valor ){
        item[campo] = moment( valor );
      }
    }
    this[attr].next(item);
  }
  
}

// ----------------------

function gravar(nome: string){
  return tap((x)=>{
    let txtObj = (typeof x === 'string')? x : JSON.stringify(x);
    localStorage.setItem(nome, txtObj);
  });
}
