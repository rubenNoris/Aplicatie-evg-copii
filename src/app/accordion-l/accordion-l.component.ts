import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-l',
  templateUrl: './accordion-l.component.html',
  styleUrl: './accordion-l.component.css',
})
export class AccordionLComponent {
  filter: string = '';
  accordions: any[] = [
    {
      id: 1,
      title: '1.Moise - eliberatorul ales',
      content: ` Exodul 1:11-2:1,
        –> verset de memorat: 1 Ioan 1:8`,
      tags: ['tag1', 'tag2'],
      isOpen: false,
    },
    {
      id: 2,
      title: '2. Chemarea lui Moise',
      content: `Exodul 2:10-4:18, Fapte 7:22-3,
        Evrei 11:24-,
        ->verset de memorat : 2 Samuel 22:31 `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 3,
      title: '3. Moise prezintă mesajul lui Dumnezeu',
      content: ` Exodul 4:18-6,
        -> Verset de memorat: Ieremia 17:7`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 4,
      title: '4. Moise vede puterea lui Dumnezeu',
      content: `Exodul 7:1-12:,
        -> verset de memorat: Galateni 4:31 `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 5,
      title: '5. Trecerea triumfală',
      content: `Exodul 13:17-15:,
        -> Verset de memorat: Matei 28:20 `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 6,
      title: ' 6. Oamenii se plâng, Dumnezeu le poartă de grijă',
      content: ` Exodul 15:22-17:,
        -> Verset de memorat: Psalmul 37:4`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 7,
      title: '7. 1. Dumnezeu vorbește la Sinai',
      content: `     - Exodul 17:1-7, Exodul 19,,
        -> Verset de memorat: Luca 11:28 `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      "id": 8,
      "title": "8. Idolatria poporului Israel",
      "content": [
        "Exodul 24:12- 13:1",
        "Exodul 31:18",
        "Exodul 32, 34",
        "-> Verset de memorat: Psalmul 51:4"
      ],
      "tags": ["tag2", "tag3"],
      "isOpen": false
    },
    
    
    
    
    {
      id: 9,
      title: '9. Explorarea țării promise',
      content: `Numeri 13, 14  Deuteronomul 1:19 --> verset de memorat:
        Isaia 63:1`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 10,
      title: '10. Moise păcătuiește împotriva lui Dumnezeu',
      content: ` Numeri 20 -> Verset de memorat: 1 Ioan 4:4b`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 11,
      title: '11. Șarpele de aramă',
      content: ` Numeri 21:1-9,Ioan 3:1-16-> Verset de memorat: Ioan 6:47`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 12,
      title: '12. Moise și schimbarea la față',
      content: `Numeri 27:12-23,
        Deuteronomul 31:1-8,11-12,
        Deuteronomul 34,
        Luca 9:28-36-> verset de memorat: Psalmul 100:5a`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 13,
      title: '13. Iosua este ales de Dumnezeu să conducă poporul',
      content: `Numeri 27:15-23,
        Deuteronom 31:7,
        Deuteronom 34:9,
        Iosua 1:1-18--> Verset de memorat: Iosua 1:9`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 14,
      title: '14. Funia cărămizie la fereastră',
      content: `Iosua 2:1-24-> Verset de memorat: Romani 8:1`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 15,
      title: ' 15. Căderea Ierihonului',
      content: `Iosua 3, 4:1-18,
        Iosua 5:13-16:27-> Verset de memorat: Psalmul 118:15`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 16,
      title: '16. Păcatul lui Acan',
      content: ` Iosua 7:1-26-> Verset de memorat: 1 Petru 1:16`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 17,
      title: '17. Povestirea despre gabaoniți',
      content: `EIosua 9:1-10:27-> Verset de memorat: Proverbe 3:5`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 18,
      title: '18. Iosua își ia rămas bun de la popor',
      content: `Numeri 13:17-33,
        Iosua 14:1-15,
        Iosua 23:1-24:26-> Verset de memorat: recapitulare 1 Petru 1:16,
        Proverbe 3:5`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 19,
      title: '19. Israel își calcă promisiunea',
      content: `Iosua 24,
        Judecători 1, 2:1-23-> Verset de memorat: Matei 22:37`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 20,
      title: '20. Debora și Barac eliberează Israelul',
      content: ` Judecători 4:1-24, 5:1-31-> Verset de memorat: Psalmul 103:19 `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 21,
      title: '21. Ghedeon învață să fie curajos pentru Dumnezeu',
      content: ` Judecători 6:1-40-> Verset de memorat: Iacov 4:7-8`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 22,
      title: '22. Ghedeon și cei 300 împotriva madianiților',
      content: ` Judecători 7:1-25, 8:22-23,28-> verset de memorat: 2 Timotei 4:7`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 23,
      title: '23. Dumnezeu îl alege pe Samson',
      content: `Judecători 13:15-20-> verset de memorat: Psalmul 40:5`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 24,
      title: '24. Samson și Dalila',
      content: ` Judecători 16:4-31-> Verset de memorat: Evrei 12:1`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 25,
      title: '25. Israel alege un împărat',
      content: `1 Samuel 8-10-> Verset de memorat: Psalmul 23:1`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 26,
      title: ' 26. Neascultarea lui Saul',
      content: `1 Samuel 12-15-> Verset de memorat: Psalmul 23:2`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 27,
      title: '27. Dumnezeu alege un împărat',
      content: ` 1 Samuel 16-> Verset de memorat: Psalmul 23:3`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 28,
      title: '28. David și Goliat',
      content: `1 Samuel 17:1-54
        -> Verset de memorat: Psalmul 23:4`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 29,
      title: '29. Un prieten și un dușman',
      content: `1 Samuel 18:1-16, 19:1-10,
        1 Samuel 20-> Verset de memorat: Psalmul 23:5`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 30,
      title: '30. David își cruță dușmanul',
      content: `  1 Samuel 21:1-22:2,
        1 Samuel 22:17-19,
        1 Samuel 23:1-24:22,
        1 Samuel 26:1-25-> Verset de memorat: Psalmul 23:6`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 31,
      title: '31. David în fața filistenilor',
      content: ` 1 Samuel 27:1-7,
        1 Samuel 28:1-2,
        1 Samuel 29:1-11,
        1 Samuel 30:1-19, -> Verset de memorat: recapitulare Psalmul 23`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 32,
      title: '32. Saul merge la o ghicitoare',
      content: ` 1 Samuel 28:1-25,
        1 Samuel 31:1-7,
        2 Samuel 1:12,17-27
        -> verset de memorat: Leveticul 19:31n`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 33,
      title: '33. David ajunge împărat după cum a spus Dumnezeu',
      content: ` 2 Samuel 2:1-4,8-10,
        2 Samuel 3:1,
        6-12, 17-39,
        2 Samuel 4:5-7, 2 Samuel 5:1-12,
        2 Samuel 7:1-13-> Verset de memorat 1Petru 5:6`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 34,
      title: '34. Chivotul legământului este recuperat și adus înapoi',
      content: ` 1 Samuel 4:2-11,
        1 Samuel 5:1-6:21,
        2 Samuel 6:1-19,Numeri 4:5,15,20-> Verset de memorat: Isaia
        55:8`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 35,
      title: ' 35. David și Bat-Șeba',
      content: ` 1 Samuel 11:1-27,
        2 Samuel 12:1-24-> Verset de memorat: 1 Timotei 5:22b `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 36,
      title: '36.  David și Mefiboșet',
      content: `  2 Samuel 4:4,
        2 Samuel 9:1-13,
        2 Samuel 16:1-4,
        2 Samuel 19:15, 
        24-30 ->Verset de memorat: Psalmul 27:1`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 37,
      title: '37. Solomon-succesorul lui David la tron',
      content: ` 1 Cronici 22:2-23:5,
        2 Samuel 7:11b-29,
        1 Împărați 1:3,34,
        1 Împărați 2:1-4,
        2 Cronici 29:28,
        Luca 1:26-33,
        Luca 11:31,
        Zaharia 14:9,
        Apocalipsa 11:15->Verset de memorat: recapitulare versete`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 38,
      title: ' 38. Ilie aduce o veste înspăimântătoare',
      content: `1 Împărați 17:1-16<br />-> Verset de memorat: 1 Cronici 29:11 `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 39,
      title: '39. Ilie luptă împotriva dumnezeului fals',
      content: ` 1 Împărați 18:1-2,<br />
        17-46 <br />-> Verset de memorat: Isaia 44:6 `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 40,
      title: '40. Ilie fuge de împărăteasa Izabela',
      content: `(1 Împărați19:1-21<br />-> Verset de memorat: Psalmul 145:8`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 41,
      title: '41. Ilie și via lui Nabot',
      content: `1 Împărați 21:1-26<br />-> Verset de memorat: Deuteronom 32:4`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 42,
      title: '42.Ilie este luat la cer',
      content: ` 2 Împărați 2:1-15<br />-> Versetul de memorat: Psalmul 32:8`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 43,
      title: '43.Ilie vorbește cu Domnul Isus',
      content: `Matei 17:1-8,<br />
        Marcu 9:2-8<br />-> Verset de memorat: recapitulare versete`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 44,
      title: '44. Începutul lucrării lui Elisei',
      content: ` 2 Împărați 2:13-25<br />-> Verset de memorat: Galateni 6:9`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 45,
      title: '45.Minunea cu uleiul din vasul văduvei',
      content: `2 Împărați 4:1-7<br />-> Verset de memorat: Filipeni 4:19`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 46,
      title: ' 46. Învierea fiului sunamitei',
      content: `“2 Împărați 4:8-37<br />-> Verset de memorat: Luca 18:27
    `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 47,
      title: '47. Vindecarea lui Naaman de lepră',
      content: `2 Împărați 5:1-16<br />-> Verset de memorat: 1 Ioan 1:9`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 48,
      title: '48. Orbirea sirienilor și conducerea lor în Samaria',
      content: `2 Împărați 6:8-23<br />-> Verset de memorat: recapitulare versete`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 49,
      title: '49. Împresurarea Samariei+ Fuga filistenilor',
      content: `2 Împărați 6:24-7:1-16<br />-> Verset de memorat: recapitulare versete`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 50,
      title: '50. Estera ajunge împărăteasă',
      content: `2 Împărați 24:10-25:30,<br />
        Estera 1:1-2:20<br />-> verset de memorat: Ieremia 29:11`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 51,
      title: '51. Mardoheu este neclintit în hotărârea lui',
      content: `Estera 2:21-4:3<br />->Verset de memorat: Faptele Apostolilor 5:29`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 52,
      title: '52. Un strigăt după ajutor',
      content: `Estera 3:15b-5:2<br />->Verset de memorat: Psalmul 34:15`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 53,
      title: '53.One door and only one',
      content: ` One door, and only one, and yet its sides are two,
      “Inside” and “outside”, on which side are you?
      One door, and only one, and yet its sides are two,
      I’m on the inside, on which side are you?
    
      One Lord, and only one, and yet the ways are two,
      “Right way” and “wrong way”, on which side are you?
      One Lord, and only one, and yet the ways are two,
      I’m on the right way, on which way are you?
    
      One Book, and only one, which tells of places two,
      “Good place” and “bad place”, oh, which place choose you?
      One Book and only one, which tells of places two,
      I choose the good place, and which place choose you?
    `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 54,
      title: '54. One way God said to get to heaven',
      content: `One way God said to get to heaven,
      Jesus is the only way.
      One way to reach those pearly mansions,
      Jesus is the only way.
      No other way, no other way,
      No other way to go.
      One way God said to get to heaven
      Jesus is the only way.`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
  ];

  toggleAccordion(accordion: any): void {
    if (!this.isFilteredOut(accordion)) {
      accordion.isOpen = !accordion.isOpen;
      this.accordions.forEach((a) => {
        if (a !== accordion) a.isOpen = false;
      });
    }
  }

  setFilter(filter: string): void {
    this.filter = filter.toLowerCase();
  }

  isFilteredOut(accordion: any): boolean {
    if (!this.filter) return false;
    return !accordion.tags.includes(this.filter);
  }
}
