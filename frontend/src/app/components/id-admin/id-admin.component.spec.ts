import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdAdminComponent } from './id-admin.component';

describe('IdAdminComponent', () => {
  let component: IdAdminComponent;
  let fixture: ComponentFixture<IdAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
