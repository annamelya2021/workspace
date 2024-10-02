import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
 public counter = signal(10)

 increaseBy(value: number){
  this.counter.set(this.counter() + value)
 }
}
