import { Component } from '@angular/core';
import { Order } from '../model/order.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'] // Correction: styleUrl -> styleUrls
})
export class MyFormComponent {

  newOrder: Order = {
    title: "",
    quantity: 0,
    date: new Date(),
    contact: ""
  };

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.newOrder);
  }
}
