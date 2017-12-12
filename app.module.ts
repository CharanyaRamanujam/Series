import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SeriesPageModule } from '../pages/series/series.module';
import {MoviesPageModule } from '../pages/movies/movies.module';
import {BandsPageModule } from '../pages/bands/bands.module';
import {AnimesPageModule } from '../pages/animes/animes.module';
import {Series2PageModule } from '../pages/series2/series2.module';
import {Series3PageModule } from '../pages/series3/series3.module';
import {Tab1PageModule } from '../pages/tab1/tab1.module';
import {Tab2PageModule } from '../pages/tab2/tab2.module';
import {Tab3PageModule } from '../pages/tab3/tab3.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SeriesPageModule,
    MoviesPageModule,
    BandsPageModule,
    AnimesPageModule,
    Series2PageModule,
    Series3PageModule,
    Tab1PageModule,
    Tab2PageModule,
    Tab3PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
