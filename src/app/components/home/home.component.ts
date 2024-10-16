import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  age: number=0;
  height:number=0;
  weight: number=0;
  bmi:number | null=null;
  gender: string = 'male';


  calculateBMI (): void{
    if (this.weight > 0 && this.height > 0) {
      const heightInMeters = this.height / 100; // Convert height to meters
      this.bmi = this.weight / (heightInMeters * heightInMeters);
    } else {
      this.bmi = null; // Handle invalid input
    }
  } 
}
