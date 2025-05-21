import { CommonModule } from '@angular/common';
import { Component ,inject } from '@angular/core';
import { OpleidingenService } from './opleidingen.service';

@Component({
  selector: 'app-opleidingen',
  imports: [CommonModule],
  templateUrl: './opleidingen.component.html',
  styleUrl: './opleidingen.component.scss'
})
export class OpleidingenComponent {
opleidingService = inject(OpleidingenService);
opleidingen = this.opleidingService.getOpleidingen(); 


}
