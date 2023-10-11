import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      imports:[ HttpClientModule,RouterModule,AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // fixture = TestBed.createComponent(EmployeeListComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
