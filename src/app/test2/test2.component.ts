import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyTest2Service} from "../my-test2.service";
import { SubSink } from 'subsink';

@Component({
  selector: 'test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit, OnDestroy {
  private subs = new SubSink();
  hello: string = "hello A";

  constructor(private myTest2Service: MyTest2Service) { }

  ngOnInit() {
    this.subs.add(this.myTest2Service.getHello2().subscribe(text => this.hello = text));
  }

  /**
   * Unsubscribe all Observables
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
