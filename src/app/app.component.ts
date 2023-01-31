import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  candidate:any=[
    "Tanmay Sawwalakhe", 
    "Somya Sawwalakhe",
    "Guddu Sawwalakhe",
    "Anita Sawwalakhe",
    "Mayank Sawwalakhe",
    "Pallavi Sawwalakhe",
    "Atharva Sawwalakhe",
    "Ram Gulhane",
  ]

  dose1:any=[]
  dose2:any=[]
  boosterDose:any=[]

  d1(index:any){
    this.dose1.push(this.candidate[index])
    this.candidate.splice(index,1)
  }
  delete(index:any){  
    this.candidate.splice(index,1)
  }
  d2(index:any){
    this.dose2.push(this.dose1[index])
    this.dose1.splice(index,1)
  }
  d3(index:any){
    this.boosterDose.push(this.dose2[index])
    this.dose2.splice(index,1)
  }
  d4(index:any){
    this.dose2.push(this.boosterDose[index])
    this.boosterDose.splice(index,1)
  }
  d5(index:any){
    this.dose1.push(this.dose2[index])
    this.dose2.splice(index,1)
  }
  d6(index:any){
    this.candidate.push(this.dose1[index])
    this.dose1.splice(index,1)
  }
}
