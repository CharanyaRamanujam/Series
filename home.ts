import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SeriesPage} from '../series/series';
import {MoviesPage} from '../movies/movies';
import  {BandsPage} from '../bands/bands';
import {Tab1Page } from '../tab1/tab1';
import {AnimesPage}from'../animes/animes';
import {Tab2Page } from '../tab2/tab2';
import {Tab3Page } from '../tab3/tab3';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  me=10;


  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');}
test1()
{
	this.navCtrl.push(SeriesPage);
}
test2()
{
	this.navCtrl.push(MoviesPage);
}
test3()
{
	this.navCtrl.push(BandsPage);
}
test4()
{
	this.navCtrl.push(AnimesPage);
}
test5(pagefirst)
{
 this.navCtrl.push(Tab1Page,{pagefirst}); 
}
test6()
{
  this.navCtrl.push(Tab2Page);
}
test7()
{
  this.navCtrl.push(Tab3Page);
}
}
