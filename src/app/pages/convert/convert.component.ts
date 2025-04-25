import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  // Inputs
  meters: number = 0;
  feet: number = 0;
  fahrenheit: number = 0;
  celsius: number = 0;

  // Results
  resultMetersToFeet: number | null = null;
  resultFeetToMeters: number | null = null;
  resultFahrenheitToCelsius: number | null = null;
  resultCelsiusToFahrenheit: number | null = null;

  // Methods
  convertMetersToFeet(): void {
    this.resultMetersToFeet = this.meters * 3.28084;
  }

  convertFeetToMeters(): void {
    this.resultFeetToMeters = this.feet / 3.28084;
  }

  convertFahrenheitToCelsius(): void {
    this.resultFahrenheitToCelsius = (this.fahrenheit - 32) * 5 / 9;
  }

  convertCelsiusToFahrenheit(): void {
    this.resultCelsiusToFahrenheit = (this.celsius * 9 / 5) + 32;
  }
}