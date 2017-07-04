import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { APP_ROUTING } from './app.routes';
import { FichasComponent } from './components/fichas/fichas.component';
import { FichaComponent } from './components/fichas/ficha.component';

import { FichasService } from './services/fichas.service';
import { ConsultasService } from './services/consultas.service';
import { KeysPipe } from './pipes/keys.pipe';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ConsultaComponent } from './components/consultas/consulta.component';
import { TruncarPipe } from './pipes/truncar.pipe';
import { TablaFichasComponent } from './components/shared/tabla-fichas/tabla-fichas.component';
import { AuthService } from './services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAwFdBaC27FVvo0d0h_pDQMAImgfEbsRQo",
  authDomain: "fichas-ostsport-1e7a7.firebaseapp.com",
  databaseURL: "https://fichas-ostsport-1e7a7.firebaseio.com",
  projectId: "fichas-ostsport-1e7a7",
  storageBucket: "fichas-ostsport-1e7a7.appspot.com",
  messagingSenderId: "68456680976"
};

@NgModule({
  declarations: [
    AppComponent,
    FichasComponent,
    FichaComponent,
    NavbarComponent,
    FichasComponent,
    FichaComponent,
    KeysPipe,
    BuscadorComponent,
    ConsultaComponent,
    TruncarPipe,
    TablaFichasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [FichasService, ConsultasService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
