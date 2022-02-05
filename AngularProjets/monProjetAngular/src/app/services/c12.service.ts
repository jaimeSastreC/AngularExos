import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class C12Service {

  bon = false;

  constructor() {
    
  }

  tennis(){
    this.bon = !this.bon;
    if (this.bon){
      return 'ace';
    } else {
      return 'out';
    }
  }
}
