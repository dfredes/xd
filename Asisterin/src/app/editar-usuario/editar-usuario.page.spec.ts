import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { Usuarios } from '../services/usuarios';

import { EditarUsuarioPage } from './editar-usuario.page';

describe('EditarUsuarioPage', () => {
  let component: EditarUsuarioPage;
  let fixture: ComponentFixture<EditarUsuarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('retornar ', () =>{
    const fixture = TestBed.createComponent(AppComponent)
    const app=fixture.componentInstance
    fixture.detectChanges

    let nombre_r = app.form.controls['nombre_r']
    let telefono = app.form.controls['telefono']
    let direccion = app.form.controls['direccion']
    let correo = app.form.controls['correo']

    
    nombre_r.setValues('')
    telefono.setValues('')
    direccion.setValues('')
    correo.setValues('')
    expect(component).toBeTruthy();
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
