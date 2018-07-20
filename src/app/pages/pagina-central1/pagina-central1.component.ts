
import { first } from 'rxjs/operators';
import { Component } from '@angular/core';
import { StoreService } from '../../servicos/store.service';

@Component({
  selector: 'app-pagina-central1',
  templateUrl: './pagina-central1.component.html',
  styleUrls: ['./pagina-central1.component.scss']
})
export class PaginaCentral1Component {
  
  texto: string = '';
  
  constructor(private store: StoreService) {
    this.store.texto.pipe(first()).subscribe((txt)=>{
      this.texto = txt;
    });
  }
  
  textoChange(){
    this.store.texto.next(this.texto);
  }
  
}
