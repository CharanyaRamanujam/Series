    import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Series3Page } from '../series3/series3';
/**
 * Generated class for the Series2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series2',
  templateUrl: 'series2.html',
})
export class Series2Page {
 checkScope=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Series2Page');
  }

 exp(value)
 {
   this.checkScope.push({value})
   // console.log(new Set(this.checkScope.map(v=>v.value)));
   // console.log([Array.from(new Set(this.checkScope.map(v=>v.value)))]);
   // console.log([...Array.from(new Set(this.checkScope.map(v=>v.value)))]);
   let arr=[...Array.from(new Set(this.checkScope.map(v=>v.value)))];
   console.log(arr);
   if(arr.find(f=>f=="two") && arr.find(f=>f=="Lyanna") 
   	&& arr.find(f=>f=="Mad King")){
   	this.navCtrl.push(Series3Page);
   }
 }
}