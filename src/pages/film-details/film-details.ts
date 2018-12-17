import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
 taillId = null;
 poidsId = null;
 res = null;
 var1:number;
 var2:number;
 state:String;
 var3:number;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.var1=parseInt(this.navParams.get('tailleVar'));
    this.var2=parseInt(this.navParams.get('poidsVar'));
    this.var3=(this.var2/((this.var1/100)*(this.var1/100)));
    if(this.var3<16){
      this.state = "denutrition ou Anorexie";
    }
    else if(this.var3<18){
      this.state = "maigreur";
    }
    else if(this.var3<25){
      this.state = "corpulance normale";
    }
    else if(this.var3<30){
      this.state = "surpoid";
    }
    else if(this.var3<35){
      this.state = "obeseté moderee";
    }
    else if(this.var3<40){
      this.state = "obeseté severe";
    }
    else {
      this.state = "obeséte morbide";
    }
    

    this.taillId = this.var1;
    this.poidsId = this.var2;
    this.res = this.state;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailsPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
}
