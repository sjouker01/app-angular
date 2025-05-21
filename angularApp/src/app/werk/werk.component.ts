import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { WerkService } from './werk.service';

@Component({
  selector: 'app-werk',
  imports: [CommonModule],
  templateUrl: './werk.component.html',
  styleUrl: './werk.component.scss',
})
export class WerkComponent {
  werkService = inject(WerkService);
  werkervaring =  this.werkService.getWerkervaringList()
}


