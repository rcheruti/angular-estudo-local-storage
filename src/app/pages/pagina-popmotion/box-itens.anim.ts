
import { timeline, styler } from 'popmotion';

export class BoxItensAnim {
  
  static animarItens(itens){
    let stylers = Array.from(itens).map( (x: any) => styler(x, {}) );
    return timeline([
      [ ...stylers.map((x, i)=> ({ track: 'props'+i, to:{ y: 100, rotate: 135 } }) ) , 50 ],
      '-' + stylers.length * 50,
      [ ...stylers.map((x, i)=> ({ track: 'props'+i, to:{ y: 0, rotate: 0 } }) ) , 50 ],
    ], { duration: 2000, loop: Infinity }).start({
      update: (v, k, y)=>{ 
        //console.log('update', JSON.parse(JSON.stringify( v )) );
        for(let i in stylers) stylers[i].set( v['props'+i] ); 
      },
      complete: ()=>{
        //console.log('complete');
      }
    });
  }
  
}
