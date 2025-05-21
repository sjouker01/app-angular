import { Injectable } from '@angular/core';
interface opleidingen {
  id: number;
  naamOpleiding: string;
  locatie: string;
  datumstart: string;
  datumstop: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class OpleidingenService {
 protected OpleidingenList: opleidingen[] = [
    {
      id: 1,
      naamOpleiding: 'software developer',
      locatie: 'leiden',
      datumstart: '2022',
      datumstop: '2026',
      description: 'opleiding om een software developer te worden',
    },
    {
      id: 2,
      naamOpleiding: 'system expert and diveces',
      locatie: 'leiden',
      datumstart: '2021',
      datumstop: '2022',
      description: 'opleiding om stystembeheerder te worden',
    },
    {
      id: 3,
      naamOpleiding: 'vmbo TL',
      locatie: 'leiden',
      datumstart: 'geenIdee',
      datumstop: '2020',
      description: 'vmbo Tl opleiding geenidee wanneer ik begon ',
    },
  ];
  getOpleidingen(): opleidingen[] {
    return this.OpleidingenList;
  }
  constructor() { }
}
