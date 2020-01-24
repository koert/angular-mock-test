import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MyTestService} from "../my-test.service";
import {SubSink} from "subsink";
import {Test2Component} from "../test2/test2.component";

@Component({
  selector: 'test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit, OnDestroy {
  private subs = new SubSink();

  @ViewChild("testChild2") private test2Component: Test2Component;

  title = "Test 1";
  hello: string;

  constructor(private myTestService: MyTestService) {
  }

  ngOnInit() {
    this.subs.add(this.myTestService.getHello().subscribe(text => this.hello = text));
    this.test2Component.hello = "bye B";
  }

  /**
   * Unsubscribe all Observables
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
