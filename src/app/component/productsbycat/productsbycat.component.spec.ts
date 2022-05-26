import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsbycatComponent } from './productsbycat.component';

describe('ProductsbycatComponent', () => {
  let component: ProductsbycatComponent;
  let fixture: ComponentFixture<ProductsbycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsbycatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
