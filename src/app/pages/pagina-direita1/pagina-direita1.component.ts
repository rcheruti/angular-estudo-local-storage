import { Component, OnInit } from '@angular/core';
import { TextoService } from '../../texto.service';

@Component({
  selector: 'app-pagina-direita1',
  templateUrl: './pagina-direita1.component.html',
  styleUrls: ['./pagina-direita1.component.scss']
})
export class PaginaDireita1Component implements OnInit {
  
  texto: string = '';
  texto2: string = '';
  delayTexto2: number = 4000;
  
  constructor(private textoService: TextoService) { }

  ngOnInit() {
    console.log('Inicando página 1 direita');
    this.textoService.texto.subscribe( txt =>{
      console.log('página 1 direita recebeu o valor: ', txt);
      this.texto = txt;
    });
    
    setTimeout(()=>{
      console.log('Inicando página 1 direita ouvinte 2');
      this.textoService.texto.subscribe( txt =>{
        console.log('página 1 direita ouvinte 2 recebeu o valor: ', txt);
        this.texto2 = txt;
      });
    }, this.delayTexto2);
  }

}
