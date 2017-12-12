import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Series2Page } from '../series2/series2';
/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

checkScope=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesPage');
  }
  exp(value)
  {
    this.checkScope.push({value})
    // console.log(new Set(this.checkScope.map(v=>v.value)));
    // console.log([Array.from(new Set(this.checkScope.map(v=>v.value)))]);
    // console.log([...Array.from(new Set(this.checkScope.map(v=>v.value)))]);
    let arr=[...Array.from(new Set(this.checkScope.map(v=>v.value)))];
    console.log(arr);
    if(arr.find(f=>f=="Monica") && arr.find(f=>f=="Ben") 
    	&& arr.find(f=>f=="seven")){
    	this.navCtrl.push(Series2Page);
    }
  }

} 