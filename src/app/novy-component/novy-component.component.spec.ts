import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovyComponentComponent } from './novy-component.component';

describe('NovyComponentComponent', () => {
  let component: NovyComponentComponent;
  let fixture: ComponentFixture<NovyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
