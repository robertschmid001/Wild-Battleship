import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from './auth.service';
import { GameService } from './game.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { appRoutes } from './components/routing/routing.component';
import { AuthGuard } from './guard/auth.guard';
import {GameGridComponent} from './components/game-grid/game-grid.component'

/*animations import */ import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    NavbarComponent,
    AuthenticationComponent,
    GameGridComponent,   
      ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule /* Animations added*/
  ],
  providers: [
    AuthService,
    GameService,
    AngularFireDatabase,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
