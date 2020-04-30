import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  jumlahoperator=0;
  angkapertama="";
  angkakedua="";
  operator="";
  kali(){
    if(this.jumlahoperator==0){
      this.operator+='*'
      this.jumlahoperator++;
    }
    else{
      this.operator='';
      this.jumlahoperator=0;
    }
  }
  kurang(){
    if(this.jumlahoperator==0){
      this.operator+='-'
      this.jumlahoperator++;
    }
    else{
      this.operator='';
      this.jumlahoperator=0;
    }
  }
  tambah(){
    if(this.jumlahoperator==0){
      this.operator+='+'
      this.jumlahoperator++;
    }
    else{
      this.operator='';
      this.jumlahoperator=0;
    }
  }
  hapus(){
    this.operator='';
    this.angkapertama='';
    this.angkakedua='';
    this.jumlahoperator=0;
  }
  satu(){
    if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='1';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='1';
    }
  }
  dua(){
        if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='2';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='2';
    }
  }
  tiga(){
        if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='3';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='3';
    }
  }
  empat(){
    if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='4';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='4';
    }
  }
  lima(){
    if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='5';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='5';
    }
  }
  enam(){
    if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='6';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='6';
    }
  }
  tujuh(){
    if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='7';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='7';
    }
  }
  delapan(){
    if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='8';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='8';
    }
  }
  sembilan(){
    if(this.angkakedua==''&&this.operator==''){
      this.angkapertama+='9';
    } 
    if(this.angkapertama!='' && this.operator!=''){
      this.angkakedua+='9';
    }
  }

}
