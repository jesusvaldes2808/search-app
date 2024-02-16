import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gits.interfaces';


@Component({
  selector: 'gifs-card-lis',
  templateUrl: './card-lis.component.html',
  styleUrls: ['./card-lis.component.css']
})
export class CardLisComponent {

    @Input()
    public gifs: Gif[] = [];
}
