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
      title: '1. Lăudați pe Isus!',
      content: ` /: /:Lăudaţi pe Isus! Lăudaţi pe Isus!
      Cu braţ puternic El domneşte.
      Lăudaţi pe Isus! Lăudaţi pe Isus! 
      Suntem poporul ce-l iubeşte:/ Suntem
      poporul Celui ce-a înviat El este Rege!
      Isus ne-a salvat Şi din nou va spun
      :/`,
      tags: ['tag1', 'tag2'],
      isOpen: false,
    },
    {
      id: 2,
      title: '2. Mare Dumnezeu avem',
      content: `/: Mare Dumnezeu avem :/
      El e cel mai mare-n putere și-n splendoare, 
      Mare Dumnezeu avem. 
      
      /: Mare Dumnezeu avem :/
      Îngerii-n lumină, Lui I se închină 
      Mare Dumnezeu avem
      
      Isus este Domnul domnilor şi-Mpăratul împăraţilor
      El e cel mai mare-n slavă și-n splendoare, 
      Mare Dumnezeu avem. `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 3,
      title: '3. Minunată-i dragostea lui Isus',
      content: ` /: Minunată-i dragostea lui Isus x
      E cea mai minunat
    
      Prea înaltă n-ajungi până su
      Prea adâncă n-ajungi până jo
      Prea lată nu poţi s-o cuprinz
      Dragostea-i minunată :/`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 4,
      title: '4. Lăudați, copii, pe Domnul',
      content: `Lăudați, copii,pe Domnu
      Lăudăm ,lăudă
      Și cântați al Lui sfânt Nume
      Îl cântam , îl cântă
    
      Câmp cu flori și cer cu stele
      Fluturași mii și mii
      Păsări ,roade,toate cel
      Le-a făcut ,El ,copii
    
      Lăudați, copii,pe Domnu
      Lăudăm ,lăudă
      Și-nvățați din Cartea sfânt
      Învățăm ,învățăm!
    
      Lăudați, copii,pe Domnu
      Lăudăm ,lăudă
      Și-ascultați ce El vă cere
      Ascultăm ,ascultăm `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 5,
      title: '5. Dă-i povara ta lui Isus',
      content: ` /: Dă-i povara ta lui Isu
      El o va purta :/
    
      /: Şi înalţă tot mai sus înalţ
      Şi înalţă numele lui Isus :/
    
      /: Şi zdrobeşte pe satan
      În picioare jos:/
    
      /: Vin la Isus cu căinț
      El te va ierta. :/ `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 6,
      title: '6. Toate poverile mele-au căzut',
      content: ` Toate poverile mele-au căzu
      /: Rostogolindu-se :/
      Toate poverile mele- au căzu
      La crucea lui Isu
    
      Pacea inundă azi inima me
      /: Inima mea :/
      Pacea inundă azi inima me
      Prin crucea lui Isu
    
      Ca un torent bucuria ţâşn
      /:În inima mea :/
      Ca un torent bucuria ţâşn
      La crucea lui Isus.`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 7,
      title: '7. Al bucuriei steag flutură în orice zi',
      content: `     /: Al bucuriei steag flutură în orice zi
      Pe castelul inimii, flutură în orice zi
      Al bucuriei steag flutură în orice zi
      Pentru că Isus e regele meu
    
      /: Lasă steagul să fluture acolo sus
      Toata lumea să-l vadă pe Isus
      Lasă steagul să fluture pe castel
      Pentru că Isus e regele meu. :/ :/ `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 8,
      title: '8. Cine a creat stelele pe cer',
      content: `Cine a creat stelele pe cer, stelele, stelele
      Cine a creat stelele pe cer? Domnul Dumnezeu
    
      - Cine a creat păsărea să zboare ...
      - Cine a creat peştele să-noate ..
      - Cine ne-a creat pe noi pe toţi ... `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 9,
      title: '9. Când mă rog Domnul răspunde, da',
      content: `3x/:Când mă ro
      Domnul răspunde: Da
      Uneori El răspunde: aşteaptă
      Alteori spune
      Nu, pentru că mă iubeşte
      Da eu ştiu că El răspunde când mă rog:/ 3`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 10,
      title: '10. Isus este calea, adevărul şi viaţa',
      content: ` Isus este calea, adevărul şi viaţa - 3 or
      Viaţa, adevărul, Isus este calea`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 11,
      title: '11. Am bucurie ca fântâna',
      content: ` 1.Am bucurie ca fântână, am bucurie ca fântână
      Am bucurie ca fântână în inima mea
      Am bucurie ca fântână, am bucurie ca fântână
      Am bucurie ca fântână în inima mea
    
      2. Am o pace ca o mare .....
      3. Am iubire ca un fluviu .....
    
      DE CE
      Fiindcă Isus e cu mine - 3 or
      E-n inima mea
    
      Fiindcă Isus mă iubeşte - 3 or
      E-n inima mea`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 12,
      title: '12. Am bucurie mare bucurie în inima',
      content: `Am bucurie mare bucurie în inim
      Unde? în inima, unde? în inima
      Am bucurie mare bucurie în inima`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 13,
      title: '13. Domnul mare e',
      content: `:/Domnul mare e, puternic şi tare
      Nimic nu-i prea greu pentru El :
      Și munţii-s a Lui şi apele toat
      Stelele-s creaţia Sa
      Domnul mare e, puternic şi tare
      Nimic nu e prea greu pentru El`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 14,
      title: '14. Isus iubeşte pe fiecare',
      content: `Isus iubeşte pe fiecare, pe fiecare, pe fiecare
      Isus iubeşte pe fiecare
      Isus iubeşte pe toţi
    
      Iubeşte copiii, iubeşte părinţii
      Iubeşte copiii şi iubeşte părinţii
      Mă iubeşte pe mine
      Te iubeşte pe tin
      Isus iubeşte pe toţi`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 15,
      title: ' 15. Calea ce duce sus în ceruri',
      content: `Calea ce duce sus în cerur
      Este doar Isus Hristos
      Calea spre Tatăl, spre bucuri
      Este doar Isus Hristos
    
      Nici o altă cale
      Nici o altă cale
      Nu are omul păcătos
      Calea ce duce sus în cerur
      Este doar Isus Hristos  `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 16,
      title: '16. Este viu, este viu',
      content: ` Este viu, este viu, aleluia, Domnul Isus e viu aleluia
      Sărbătoare e în toată lumea, azi din morţi a-nviat nemurirea
      Aleluia .......`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 17,
      title: '17. În mâna Lui',
      content: `El ţine universul în mâna Lui
      El ţine universul în mâna Lui
      El ţine uinversul în mâna Lui
      El ţine toate-n mâna Sa
    
      El ţine şi copiii ....
      El ţine și părinții ...
      El ţine grădiniţa ..`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 18,
      title: '18. Iubirea lui Isus e aşa de mare',
      content: `Iubirea lui Isus e aşa de mare, aşa de mare, aşa de mare
      Iubirea lui Isus e aşa de mare ea este pentru noi`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 19,
      title: '19. De e vânt sau de-i furtună',
      content: `De e vânt sau de-i furtun
      Domnul este-n jurul meu. - Da
      El e mare eu sunt slab, dar m-ajută ca să cresc.
      De e vânt sau de-i furtună, Domnul este-n jurul meu `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 20,
      title: '20. Ai grijă ochii micuţi unde priveşti',
      content: ` Ai grijă ochii micuţi unde priveşti
      Ai grijă ochii micuţi unde priveşti
    
      Căci părintele de sus, te priveşte ne-ncetat
      Ai grijă ochii micuţi unde priveşti
    
      - Ai grijă gură mică ce vorbeşti ..
      - Ai grijă urechiusă ce asculţi ..
      - Ai grijă mână mică ce lucrezi ..
      - Ai grijă picioruş unde păşeşti .. `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 21,
      title: '21. Fiindc-atât de mult a iubit Dumnezeu lumea',
      content: ` Fiindc-atât de mult a iubit Dumnezeu lumea
      Că a dat pe singurul Lui Fiu
      Ca oricine crede-n El să nu piară
      Ci să aibă viaţă veşnică`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 22,
      title: '22. Eu sunt mic dar Isus',
      content: ` Eu sunt mic dar Isus locuieşte-n viaţa me
      şi nimeni nu poate să-mi-l ia. - 2 or
    
      Când privesc în zori o floare ce se-naltă către soare
      Îl simt cât de bun e Isus
      Cum că El i-a dat culoare şi lumină de la soare
      Ce minunat e Isus `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 23,
      title: '23. O, Doamne bun Părinte',
      content: ` O, Doamne, bun Părinte
      Aș vrea să-Ți mulțumes
      De soare, ploaie, pâin
      Ce zilnic le primesc
      De harul Tău cel mare
      De sângele-Ți vărsa
      Curat prin El cu Tin
      Trăi-voi ne-ncetat `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 24,
      title: '2. Mare Dumnezeu avem',
      content: ` Într-un sat ne-nsemnat din Iudeea
      Într-o iesle din Betlee
      S-a născut aşteptatul Mesia
      Să-i cântăm cu îngerii în cor
    
      Refren: Cânt Osana, cânt Osana, cânt Osana rege al regilor
      Cânt Osana, cânt Osana, cânt Osana regelui
    
      Părăsiţi turma voastră-n câmpie
      Alergaţi umiliţi la El
      El este singura bucuri
      Pentru prinţ şi pentru cerşetor`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 25,
      title: '25. Isus, Nume Preaiubit',
      content: `Isus, Nume Preaiubit, Mântuitor Sfânt
      Din ceruri coborât
      Emanuel, Fiul Lui Dumnezeu
      Tu eşti Mesia
      Eşti Domnul meu `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 26,
      title: ' 26. Fiecare zi îmi place s-o trăiesc',
      content: `Fiecare zi îmi place s-o trăies
      Cu dorința de a ajuta
      Iar atunci cand mi se pare că e greu
      Îmi amintesc versetul minuna
    
      /: Pot, pot, pot, eu pot totul în Cristos
      Pot, pot, pot, să am caracter frumos
      Pot, pot, pot, luminând în jurul me
      Să-L vadă-n mine toți pe Dumnezeu :/
    
      Dacă vreun coleg la școală m-a jignit
      Eu nu îi răspund cu-același fel
      Îi zâmbesc și-i spun frumos să fi iubi
      Și-ncerc să mă împrietenesc cu e
    
      Tot ce fac în viață-i prin puterea Lui
      El îmi dăruiește dimineți `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 27,
      title: '27. Pas cu pas, zi de zi',
      content: ` /: Pas cu pas, zi de z
      Cu Isus noi mergem bucuroși pe dru
      Pas cu pas, zi de z
      Isus e calea către cer. :/
    
      El e adevăru
      Îl urmăm doar pe Isu
      Oricât de greu e drumu
      El ne va duce su
    
      Singuri nu vom merg
      El mereu cu noi va f
      Oriunde ne va duc
      Vrem și noi cu El să fi`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 28,
      title: '28. Domnul mă păzește',
      content: `Domnul mă păzește
      Oriunde aș f
      Domnul mă iubește
      Și-mi dă bucurii
    
      Chiar de sunt singur nu mă te
      Căci Domnul e cu min
      El mă păzește de-orice rău
      Și Mâna Lui mi-ntinde
    
      Domnul mă ajută
      Când eu zic că-i greu
      El îmi dă putere
      Știe gândul meu
    
      Chiar de sunt singur nu mă te
      Căci Domnul e cu min
      El mă ajută când mi-e gre
      Și Mâna Lui mi-ntinde
    
      Domnul meu mă vede
      Când sunt întrista
      Mâna-Și va ating
      Și sunt mângâiat
    
      Chiar de sunt singur nu mă te
      Căci Domnul e cu min
      Știu că mă vede ochiul Său
      Și Mâna Lui mi-ntinde`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 29,
      title: '29. Isus e-n cer și El mă vede',
      content: `Isus e-n cer și El mă ved
      Nu pot să păcătuiesc
      Isus e-n cer și El mă ved
      De El trebuie să mă tem
    
      Ochii Lui văd tot pământul
      Nu pot să păcătuies
      Ochii Lui văd tot pământul
      De El trebuie să mă tem
    
      Isus din ceruri a veni
      La Golgota El s-a jertfi
      El de sub lege m-a scolariăpa
      Pe veci ca să fiu iertat
    
      Când voi ajunge-n ceruri su
      Voi fi în slavă cu Isus
      Cu îngerii Îi voi cânt
      Pe veci doar: Aleluia
      15 /: Dă-i povara ta lui Isu
      El o va purta :/
    
      /: Şi înalţă tot mai sus înalţ
      Şi înalţă numele lui Isus :/
    
      /: Şi zdrobeşte pe satan
      În picioare jos:/
    
      /: Vin la Isus cu căinț
      El te va ierta. :/ `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 30,
      title: '30. Îmi amintesc s-a născut pentru mine',
      content: ` Îmi amintesc s-a născut pentru mine
      Nicicând înapoi nu voi da. - 2 or
    
      Refren: Nu, nu, nu, nu, nu
      Nicicând înapoi nu voi da. - 2 or
    
      Îmi amintesc - a trăit .....
      - a murit ....
      - s-a nălţat .... `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 31,
      title: '31. O uşă numai una',
      content: `O uşă, numai una, şi are două părţ
      Înăuntru ori afară, unde te-afli tu?
      O uşă, numai una, şi are două părţ
      Eu sunt deja înăuntru, unde te-afli tu
    
      O Carte numai una, Tatăl sfânt ne-a dat
      Sfânta Carte adevarată, pe toţi ne-a salvat
      O Carte numai una, Tatăl sfânt ne-a dat
      Vrei s-o crezi şi tu`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 32,
      title: '32. Domnul e bun',
      content: `Domnul e bun, Domnul e bun, Domnul e bun
      El e bun cu mine
    
      El a murit, El a murit, El a murit
      Pentru al meu păcat
    
      Liber sunt azi, liber sunt azi, liber sunt azi
      De mă-ncred în El
    
      Domnul e bun
      El a murit
      Liber sunt az
      El cu mine-I bun`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 33,
      title: '33. Fii viteaz',
      content: ` Fii viteaz, fii viteaz
      Fii tare, fii tare
      Căci Domnul Dumneze
      E cu tine mereu
      Nu am nici o frică, nu mă descurajez
      Căci eu stau în credinţă să biruiesc
      Hai să stăm în credinţă să biruim
      Căci Domnul, Dumnezeu e cu tine`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 34,
      title: '34. O carte am în gând',
      content: `O carte am în gân
      Nu-i alta pe pămân
      /:Ce viață-mi dă când citesc în ea
      E cartea Biblia:
    
      Din Biblie cites
      Cum trebuie să trăies
      /:Curat și sfânt în fapt și gân
      Pe Domnul lăudând:`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 35,
      title: ' 35. Măreț ești Dumnezeul meu',
      content: ` /: Măreţ eşti Dumnezeul me
      Al meu suflet se bucură de-a Ta prezenţ
      Măreţ eşti Dumnezeul me
      Al meu suflet te laudă mere
      Măreţia Ta pe noi ne-a cuprin
      În al Tău nume Hristos moartea a învin
      Îndurarea Ta-i peste noi mere
      /: Măreţ eşti Dumnezeul :/ :/ `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 36,
      title: '36. Doamne noi copiii Te-nălțăm prin cânt',
      content: ` /: Doamne noi copiii Te-nălțăm prin cân
      Și mărim în lume Numele Tău sfânt :/
    
      /: Laude și cinste prin cântări Îți dă
      Doamne, Domnul slavei, noi Te lăudăm :/
    
      /: Crește-ne credința ca să te-ascultă
      Gura ne-o sfințește slavă să Îți dăm :/
    
      /: Tu ești Tatăl nostru, noi ai Tăi sunte
      Și-orice daruri bune de la Tine-avem :/
    
      /: Mulțumim de toate câte tu ne-ai da
      Fi prin cântul nostru Doamne lăudat :`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 37,
      title: '37. Pentru soare-Ţi mulţumim',
      content: `Pentru soare-Ţi mulţumim
      Pentru lumina cerului seni
      Îţi mulţumim şi pentru albele culor
      Că ele plouă pe ogor
    
      Îţi mulţumim şi Te slăvi
      Că tot ce-i bun în dar primi
      Îţi mulţumim şi Te mări
      Doamne Isuse-Ţi mulţumi
    
      Pentru stele-Ţi mulţumi
      Că luminează noaptea când dormi
      Îţi mulţumim şi pentru pacea T
      Ce ne mângâie inima
    
      Pentru apă-Ţi mulţumi
      Ea ne adapă fără să plăti
      Îţi mulţumim că aerul cura
      E-aşa de bun de respira
    
      Pentru tot ce-n dar primi
      Doamne Isuse vrem să-Ţi mulţumi
      Îţi mulţumim că veşnic ne iubeşt
      Şi sus în ceruri ne primeşti`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 38,
      title: ' 38. Poţi să fii şi tu un copil care să te rogi',
      content: `Poţi să fii şi tu un copil care să te rogi /x
      /: Să te pleci în genunchi,să ridici privirea-n su
      Şi să vii cu umilinţă înaintea lui Isus! :/
    
      Poţi să fii şi tu un copil care să asculţi /x
      /: De părinţi şi de bunici,de fraţi şi de suror
      Şi Domnului Isus să-I fii ascultător :/
    
      Poţi să fii şi tu un copil care să ajuţi /x
      /: Să hrăneşti pe cel flămând,să îmbraci pe cel săra
      Şi să-ndrepţi la mântuire pe cei ce merg înspre iad:/ `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 39,
      title: '39. Roagă-te dimineaţa',
      content: ` 1. Roagă-te dimineaţa, roagă-te şi la prânz
      Roagă-te pe-nserate, roagă-te orişicân
    
      2. Citeşte ....
      3. Fă bine ... `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 40,
      title: '40. Citeşte Biblia, roagă-te mereu',
      content: `(Varianta 1
      Citeşte Biblia, roagă-te mereu, roagă-te mereu, roagă-te mereu
      Citeşte Biblia roagă-te mereu, dacă vrei să creşti
    
      (Varianta 2
      Citește Biblia în fiecare zi, în fiecare zi, in fiecare zi
      Citește Biblia în fiecare zi
      Dacă vrei să crești
    
      Roagă-te în fiecare zi, în fiecare zi, în fiecare zi
      Roagă-te în fiecare zi
      Dacă vrei să crești
    
      Ascultă în fiecare zi, în fiecare zi, în fiecare zi
      Ascultă în fiecare zi
      Dacă vrei să crești`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 41,
      title: '41. Mare este marea',
      content: `Mare este marea
      Înalt este cerul de sus
      Dar mai mare ca toate e
      Iubirea lui Isus
    
      Eu sunt un nevrednic
      El pentru mine a murit
      Sfântul Cuvânt
      Mie-mi spune mere
      Domnul m-a iubit`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 42,
      title: '42.O be careful little eyes',
      content: ` O be careful little eyes what you see,
      O be careful little eyes what you see,
      For the Father up above is looking down in love,
      So be careful little eyes what you see.
    
      O be careful little ears what you hear ...
    
      O be careful little tongue what you say 
    
      O be careful little hands what you do ...
    
      O be careful little feet where you go ...
    
      O be careful little heart whom you trust ...
    
      O be careful little mind what you think ...`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 43,
      title: '43.Jesus loves the little ones',
      content: `Jesus loves the little ones like me, me, me.
      Jesus loves the little ones like me, me, me.
      Little ones like me sat upon His knee,
      Jesus loves the little ones like me, me, me.
      Jesus loves the little ones like you, you, you.
      Jesus loves the little ones like you, you, you.
      Little ones like you, saves them through and through,
      Jesus loves the little ones like you, you, you.`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 44,
      title: '44. If you’re happy',
      content: ` If you’re happy and you know it, clap your hands,
      If you’re happy and you know it, clap your hands,
      If you’re happy and you know it, then your face will surely show it.
    
      If you’re happy and you know it, clap your hands.
    
      If you’re happy and you know it, stamp your feet,
      If you’re happy and you know it, stamp your feet,
      If you’re happy and you know it, then your face will surely show it.
    
      If you’re happy and you know it, stamp your feet.`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 45,
      title: '45.My God is so big, so strong and so mighty',
      content: `My God is so big, so strong and so mighty,
      There’s nothing my God cannot do.
      My God is so big, so strong and so mighty,
      There’s nothing my God cannot do.
      The mountains are His, the valleys are His,
      The stars are His handiwork too.
      My God is so big, so strong and so mighty,
      There’s nothing my God cannot do. `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 46,
      title: ' 46. I am the way, the truth and the life',
      content: `“I am the way, the truth and the life”, that’s what Jesus said.
    
      “I am the way, the truth and the life”, that’s what Jesus said.
      Without the way there is no going, without the truth there is no knowing,
    
      Without the life there is no growing.
      “I am the way, the truth and the life”, that’s what Jesus said.
    `,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 47,
      title: '47. Joy, joy my heart is full of joy',
      content: `Joy, joy my heart is full of joy,
      Joy, joy my heart is full of joy.
      My Saviour dear is ever near,
      that’s the reason why my heart is full of joy.
    
      Peace, peace my heart is full of peace,
      Peace, peace my heart is full of peace,
      My Saviour dear is ever near,
      that’s the reason why my heart is full of peace.`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 48,
      title: '48. He has made me glad, He has made me glad',
      content: `He has made me glad, He has made me glad.
      I will rejoice for He has made me glad.
      He has made me glad, He has made me glad.
      I will rejoice for He has made me glad.`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 49,
      title: '49. He’s got the whole world in His hands',
      content: `He’s got the whole world in His hands, (4 times)
    
      He’s got you and me in His hands, (4 times)`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 50,
      title: '50. The Lord is so good',
      content: `The Lord is so good, the Lord is so good,
      The Lord is so good, He’s so good to me.
    
      He died for me, He died for me,
      He died for me, on Calvary.
    
      Now I am free, Now I am free,
      Now I am free, He’s so good to me.`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 51,
      title: '51. Wide, wide as the ocean',
      content: `Wide, wide as the ocean,
      High as the heavens above.
      Deep, deep as the deepest sea,
      Is my Saviour’s love.
      I though so unworthy,
      Still I’m a child of His care.
      For His Word teaches m
      That His love reaches me, everywhere.`,
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    {
      id: 52,
      title: '52. Read your Bible, pray every day',
      content: `Read your Bible, pray every day,
      Pray every day, pray every day.
      Read your Bible, pray every da
      If you want to grow.
      If you want to grow, If you want to grow.
      Read your Bible pray every da
      If you want to grow.`,
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
