
import { first } from 'rxjs/operators';
import { Component } from '@angular/core';
import { TextoService } from '../../texto.service';

@Component({
  selector: 'app-pagina-central1',
  templateUrl: './pagina-central1.component.html',
  styleUrls: ['./pagina-central1.component.scss']
})
export class PaginaCentral1Component {
  
  texto: string = '';
  
  constructor(private textoService: TextoService) {
    textoService.texto.pipe(first()).subscribe((txt)=>{
      console.log('página 1 central carregando: ', txt);
      this.texto = txt;
    });
  }
  
  textoChange(){
    this.textoService.send(this.texto);
  }
  
}
