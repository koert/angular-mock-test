import { Component, OnInit } from '@angular/core';
import {MyTestService} from "../my-test.service";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  title = "Test 1";
  hello: string;

  constructor(private myTestService: MyTestService) {
  }

  ngOnInit() {
    this.myTestService.getHello().subscribe(text => this.hello = text);
  }

}
