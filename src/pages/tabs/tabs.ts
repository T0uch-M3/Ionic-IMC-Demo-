import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any = 'FilmsPage';
  tab2: any = 'PeoplePage';
  tab3: any = 'PlanetsPage';
  taille:String;
  poids:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCalc(taille,poids){
    this.navCtrl.push('FilmDetailsPage', {tailleVar: this.taille, poidsVar: this.poids});
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
