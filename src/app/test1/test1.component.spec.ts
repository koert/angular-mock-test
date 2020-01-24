import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1Component } from './test1.component';
import {MyTestService} from "../my-test.service";
import {instance, mock, verify, when} from "ts-mockito";
import {MockComponent} from "ng-mocks";
import {of} from "rxjs";
import {Test2Component} from "../test2/test2.component";

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  let mockMyTestService = mock(MyTestService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1Component, MockComponent(Test2Component) ],
      providers: [
        {provide: MyTestService, useValue: instance(mockMyTestService)},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    when(mockMyTestService.getHello()).thenReturn(of("hello from test"));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    verify(mockMyTestService.getHello()).times(1);
  });

  it(`should have as h2 'Test 1'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Test 1');
  });

  it("should have hello text", () => {

    expect(component.hello).toBe("hello from test");
  });

});
