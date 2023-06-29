import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character/character.component';

import { CharacterService } from './services/characters/character.service';
import { LoggService } from './services/loggs/logg.service';
import { LoginService } from './services/login/login.service';
import { HomeComponent } from './components/home/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoggComponent } from './components/loggs/logg/logg.component';
import { LoadingComponent } from './components/loading/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    HomeComponent,
    NavbarComponent,
    LoggComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService,LoggService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
