import { Observable,Observer } from "rxjs";

const obs$ = new  Observable ((observer:Observer<number>)=> {
  observer.next(1);

})


let observerA: Observer<number> = {
  next:(value:number) => {
    console.log('valore di riferimento', value);

  },
  error:(err)=>{
    console.log('errore', err);

  },
  complete:()=> {
    console.log('Operazione completata!');

  }
}

obs$.subscribe(observerA);
