

export class Produto {
  
  
  constructor(
    public nome: string =      '' ,
    public preco: number =     0 ,
    public tipo: string =      null ,
    public validade: string =  '' ,
  ){}
  
  // ----------------------------
  
  static readonly tipos = ['Tipo um','Tipo dois','Tipo três'];
  
}
