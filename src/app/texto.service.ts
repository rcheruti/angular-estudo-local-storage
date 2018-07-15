
import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class TextoService {
  
  private textoPub: ReplaySubject<string> = new ReplaySubject(1);
  public readonly texto: Observable<string> = this.textoPub.pipe(shareReplay());
  
  constructor(){
    console.log('Carrengando "texto" de "localStorage" para o "TextoService"');
    let texto = localStorage.getItem('texto') || '';
    this.textoPub.next(texto);
  }
  
  send(txt: string){
    console.log('Gravando e enviando o "texto": ', txt)
    localStorage.setItem('texto', txt);
    this.textoPub.next(txt);
  }
  
}
