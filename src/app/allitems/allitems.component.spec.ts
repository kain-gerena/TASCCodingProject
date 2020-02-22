import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { receiptService } from '../receipt.service';
import { AllitemsComponent } from './allitems.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('AllitemsComponent', () => {
  let component: AllitemsComponent;
  let fixture: ComponentFixture<AllitemsComponent>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router',['navigate']);


    TestBed.configureTestingModule({
      declarations: [ AllitemsComponent ],
      providers : [
      {provide: Router, useValue: routerSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
