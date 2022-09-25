import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('prueba ngOnInit');
  }
  ngOnDestroy() {
    console.log('prueba ngOnDestroy');
  }
  ionViewWillEnter() {
    console.log('prueba ionViewWillEnter');
  }
  ionViewDidEnter(){
    console.log('prueba ionViewDidEnter');
  }
  ionViewWillLeave(){
    console.log('prueba ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('prueba ionViewDidLeave');
  }
}
