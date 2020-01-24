import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyTestService {

  constructor() { }

  /**
   * Get hello world text.
   * @returns Text.
   */
  getHello(): Observable<string> {
    return of("Hello world");
  }

}
