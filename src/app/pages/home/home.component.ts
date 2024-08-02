import { Component } from '@angular/core';
import { CardsComponent } from "../../units/cards/cards.component";
import { CarouselComponent } from '../../units/carousel/carousel.component';
import { AccordionComponent } from '../../units/accordion/accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent,CarouselComponent,AccordionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
