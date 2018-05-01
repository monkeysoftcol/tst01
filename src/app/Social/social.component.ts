import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {TestService} from '../Services/test.service';

@Component({
  selector: 'social',
  templateUrl: 'social.html',
  providers:[TestService]
})
export class SocialComponent implements OnInit {

  private panel1:any= true;
  private panel2:any= false;
  private panel3:any= false;
  private panel4:any= false;
  private panel5:any= false;
  private numnotf_g:number =10;
  private numnotf_p:number =5;
  private numnotf_s:number =4;
  private numnotf_gl:number =12;
  private numnotf_sc:number =1;

  constructor(
    private _testService:TestService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    //this._testService.test();
    this._testService.test().subscribe(
        (response) =>{
          console.log('Respuesta servicios test: '+response.mensaje);
        },
        (error) =>{
          console.log('Respuesta servicios test error : '+JSON.stringify(error));
          console.log('Respuesta servicios test error : '+error.error.mensaje);
        //  var body = JSON.parse(error._body);
        //  console.log(body);
        }
    );
  }

  ngOnInit() {
    console.log('social.component.ts cargado');
  }

  activarPanel(numero){
    if(numero===1){
      this.panel1= true;
      this.panel2= false;
      this.panel3= false;
      this.panel4 = false;
      this.panel5 = false;
    } else  if(numero===2){
      this.panel1= false;
      this.panel2= true;
      this.panel3= false;
      this.panel4 = false;
      this.panel5 = false;
    } else if(numero===3){
      this.panel1= false;
      this.panel2= false;
      this.panel3= true;
      this.panel4 = false;
      this.panel5 = false;
    }  else if(numero===4){
      this.panel1= false;
      this.panel2= false;
      this.panel3= false;
      this.panel4 = true;
      this.panel5 = false;
    } else if(numero==5){
      this.panel1= false;
      this.panel2= false;
      this.panel3= false;
      this.panel4 = false;
      this.panel5 = true;
    }
  }

 }
