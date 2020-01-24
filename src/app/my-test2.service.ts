import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyTest2Service {

  constructor() { }

  /**
   * Get hello world text.
   * @returns Text.
   */
  getHello2(): Observable<string> {
    return of("Hello 2");
  }

}
