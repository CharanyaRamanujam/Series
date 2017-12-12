import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Series3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series3',
  templateUrl: 'series3.html',
})
export class Series3Page {
 checkScope=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Series3Page');
  }
   exp(value)
   {
     this.checkScope.push({value})
     // console.log(new Set(this.checkScope.map(v=>v.value)));
     // console.log([Array.from(new Set(this.checkScope.map(v=>v.value)))]);
     // console.log([...Array.from(new Set(this.checkScope.map(v=>v.value)))]);
     let arr=[...Array.from(new Set(this.checkScope.map(v=>v.value)))];
     console.log(arr);
     if(arr.find(f=>f=="sher") && arr.find(f=>f=="Detective") 
     	&& arr.find(f=>f=="mary")){
     	this.navCtrl.popToRoot();
     }
   }
}
