import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPage ],
      imports: [IonicModule.forRoot()],
      providers:[SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('retornar ', () =>{
    const fixture = TestBed.createComponent(AppComponent)
    const app=fixture.componentInstance
    fixture.detectChanges

    let nombre_r = app.form.controls['nombre_r']
    let telefono = app.form.controls['telefono']

    usuario.setValues('')
    constraseña.setValues('')
    expect(app.form.invalid).toBeFalse
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
