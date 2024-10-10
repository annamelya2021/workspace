import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h1>Hola Title {{title}}</h1>`
})
export class TitleComponent {
 @Input({required: true}) title: string =''
}
