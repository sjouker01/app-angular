import { Injectable } from '@angular/core';
interface werkervaring {
  functie: string;
  bedrijf: string;
  locatie: string;
  datumstart: string;
  datumstop: string;
  beschrijving: string;
}


@Injectable({
  providedIn: 'root'
})
export class WerkService {

protected werkErvaringList: werkervaring[]=[
  {
    functie: 'zzp/inhuurkracht',
    bedrijf: 'sjoukjonker',
    locatie: 'nederland',
    datumstart: '1-06-2024',
    datumstop: 'NVT',
    beschrijving:
      'Ik ben werkzaam bij grote evenementen door heel Nederland zoals: Intents Festival, Emporium, Defqon.1, Pinkpop, Decibel en nog veel meer.',
  },
  {
      functie: 'stage',
      bedrijf: 'Moogue3D',
      locatie: 'Woerden',
      datumstart: '7-02-2024',
      datumstop: '28-06-2024',
      beschrijving:
        'Ik heb bij Moogue stage gelopen. Ik heb daar aan een project gewerkt: een 3D-configurator maken voor een dakkapel zodat de gebruiker een dakkapel kon samenstellen.',
    },
    {
      functie: 'spoeler',
      bedrijf: 'De Munt',
      locatie: 'Bodegraven',
      datumstart: '1-05-2018',
      datumstop: '1-05-2019',
      beschrijving:
        'Ik was spoeler bij restaurant De Munt. Ik moest alles schoonmaken qua borden en bestek.',
    },
    {
      functie: 'keukenhulp',
      bedrijf: 'De Munt',
      locatie: 'Bodegraven',
      datumstart: '1-05-2019',
      datumstop: '31-12-2023',
      beschrijving:
        'Ik was keukenhulp bij restaurant De Munt. Ik moest de koude kant bijhouden.',
    },
    {
      functie: 'kok',
      bedrijf: 'De Munt',
      locatie: 'Bodegraven',
      datumstart: '1-05-2020',
      datumstop: '31-12-2023',
      beschrijving:
        'Ik was later ook kok geworden. Ik moest toen af en toe de volledige keuken bijhouden en alles wat daarbij komt kijken.',
    },
    {
      functie: 'vrijwilliger',
      bedrijf: 'De Zon Bodegraven',
      locatie: 'Bodegraven',
      datumstart: '1-1-2015',
      datumstop: '0-0-0',
      beschrijving:
        'Ik ben vrijwilliger bij jeugdsociëteit De Zon. Ik help daar met van alles: het begeleiden van jeugd om te voorkomen dat ze in de criminaliteit terechtkomen, activiteiten organiseren en nog veel meer.',
    },
    {
      functie: 'vrijwilliger',
      bedrijf: 'Vakantiespelen Bodegraven',
      locatie: 'Bodegraven',
      datumstart: '20-08-2018',
      datumstop: '0-0-0',
      beschrijving: 'Ik help mee met het evenement in mijn dorp voor kinderen: opbouwen en andere dingen die moeten gebeuren tijdens de week.',
    },
]

 getWerkervaringList(){
  return this.werkErvaringList
 }
  constructor() { }
}
