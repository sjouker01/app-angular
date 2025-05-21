import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
  <div class="persoon-info">
<img [src]="persoon.fotoUrl" alt="foto van {{persoon.naam}}" width="300"/>
<h2>naam: {{persoon.naam}}</h2>
<h3>address: {{persoon.aderes}}</h3>
<h3>email: {{persoon.email}}</h3>
</div>`,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  persoon: persoon = {
    naam:"sjouk",
    aderes: 'gravenstein 2 Bodegraven',
    email: 'sjoukjonker13@gmail.com',
    fotoUrl: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png'
  }
  
}
interface persoon{
  naam: string,
  aderes: string,
  email: string,
  fotoUrl: string,
}
