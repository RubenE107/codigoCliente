import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNComponent } from './usuario-n.component';

describe('UsuarioNComponent', () => {
  let component: UsuarioNComponent;
  let fixture: ComponentFixture<UsuarioNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
