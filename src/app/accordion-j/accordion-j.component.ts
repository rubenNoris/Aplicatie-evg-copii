import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-j',
  templateUrl: './accordion-j.component.html',
  styleUrl: './accordion-j.component.css',
})
export class AccordionJComponent {
  filter: string = '';
  filterIDtoName: any = {
    sc: 'Scolari',
    psc: 'Prescolari',
    gm: 'Gimnaziu',
    int: 'Interior',
    ext: 'Exterior',
    fm: 'Fara.materiale',
    st: 'Statice',
    ac: 'Active',
    ec: 'Echipe',
    imp: 'Impreuna',
  };
  accordions: any[] = [
    // {
    //   id: 1,
    //   title: '1. Șoarecele și pisica',
    //   content: ` Copii formează împreună cu liderii un cerc tinandu se de mâini, se alege
    //     o pisică și un șoricel, șoricelul are rolul de a fugi de pisică. Pisica
    //     se va găsi in afara cercului format de copii si lideri iar soricelul in
    //     interior. Toți copii participă la joc, apărând șoricelul prin
    //     împiedicarea intrării sau iesirii pisicii din cerc. Impedicarea se face
    //     prin apropierea copiilor unul de celălalt, iar eliberarea se face prin
    //     ridicarea mainilor creeandu se astfel un mic loc de evadare. Timp in
    //     care pisica are timp să prindă soarecele este de 1 min. Copii nu au voie
    //     sa dea drumul la mâini pe parcursul jocului. Pisicii ii este interzis
    //     bruscarea cooiilor pentru intrare sau iesire din cerc. Ambii
    //     participanți la joc nu au voie să depășească permietul hotărât de
    //     lideri. Pe parcurusul jocului copii pot fi motivați să incurajeze
    //     soricelul.`,
    //   tags: ['presc', 'ext', 'act', 'fm', 'scolari'],
    //   isOpen: false,
    // },
    // {
    //   id: 2,
    //   title: '2. Rațele și vânătorii',
    //   content: `Se formează o linie cu toți copii, iar 2 lideri sunt ori în față ori in
    //     spatele copiilor, se aruncă cu mingea spre copii cine este atins iese.`,
    //   tags: ['presc', 'scolari'],
    //   isOpen: false,
    // },
    // {
    //   id: 3,
    //   title: '3. Sari peste minge',
    //   content: ` Se formează o linie cu copii, liderii sunt de o parte și alta a unui
    //     culuar, copii trebuie să alerge acel culoar de la un capăt la altul și
    //     invers. Liderii au rolul de a arunca pe jos câte o minge, in acest timp
    //     copii aleargă, iar in dreptul mingii trebuie să sară peste ea. Cine este
    //     atins iese`,
    //   tags: ['presc', 'scolari'],
    //   isOpen: false,
    // },
    // {
    //   id: 4,
    //   title: '4. Ceasul',
    //   content: ` Se face un cerc cu copii, in centru este un lider ce va învârti sacul cu
    //     mingea legata de se sfoară, la firul ierbii. Copii trebuie să sară peste
    //     minge, cine este atins iese.`,
    //   tags: ['int', 'ext', 'act', 'presc', 'scolari'],
    //   isOpen: false,
    // },
    // {
    //   id: 5,
    //   title: '5. Zboară zboară....',
    //   content: ` Se așează copii in jurul liderului, el va incepe să zică " zboară
    //     zboară" și va da exemplu de un obiect ori care zboară ori care nu
    //     zboară, dacă acel obiect zboară, copii trebuie să ridice o mână, dacă
    //     nu, nu trebuie. Cine greșește iese `,
    //   tags: ['int', 'ext','act','toti','presc'],
    //   isOpen: false,
    // },
    // {
    //   id: 6,
    //   title: '6. Pământ, Cer, Foc.',
    //   content: ` Se trag 2 sfori pe pământ, astfel creându se 3 părți. Vom denumi acele
    //     părți create. Copii vor sta in centrul acelei părți in linie dealungul
    //     sforii iar cand liderul anunța o altă zonă ei trebuie să sară peste
    //     sfoară in locul corect, dacă in stânga e cer să se ducă acolo. Cine
    //     greșește, sau ultimul care ajunge in partea corectă este eliminat.`,
    //   tags: ['toti', 'ext','act', 'scolari','gim'],
    //   isOpen: false,
    // },
    // {
    //   id: 7,
    //   title: '7. Scaunele muzicale',
    //   content: `Se pun in cerc scaune cu un scaun in minus fata de numărul de copii, se
    //     incepe muzica, copii se învârt in jurul scaunelor, in momentul opririi
    //     muzicii copii trebuie să se așeze pe scaun, cine rămâne fara scaun iese
    //     afară. `,
    //   tags: ['toti', 'int','ext', 'act','scolari','gim'],
    //   isOpen: false,
    // },
    // {
    //   id: 8,
    //   title: '8. Am văzut cu ochiul meu...',
    //   content: `Se așează copii in jurul lideruli, el va incepe zicând "am văzut cu
    //     ochiul meu ceva roșu" sau orice altă culoare, copii trebuie să
    //     identifice in jurul lor obiectul ales de lider. Rolurile se pot schimba
    //     in functie de câștigător. `,
    //   tags: ['toti', 'int','ext', 'act','presc'],
    //   isOpen: false,
    // },
    // {
    //   id: 9,
    //   title: '9. Echipa olandeza',
    //   content: `Se face un cerc cu copii, se aleg 2 copii care sa se tina de mana se vor
    //     duce si vor da cu mana peste alta pereche care se tin de mana, atunci
    //     echipa ce a fost aleasă fuge in fata si inconjoara cercul, cealalta
    //     invers inconjoara cercul, echipa ce ajunge prima la locul gol ramas,
    //     ramane in cerc, si echipa rămasă repetă procesul`,
    //   tags: ['toti', 'ext','act', 'scolari','presc','echipe'],
    //   isOpen: false,
    // },
    // {
    //   id: 10,
    //   title: '10. Bateți din palme',
    //   content: ` Se aseaza copii in linie cu liderul in fata lor. Liderul va avea o mana
    //     sus si o mana jos, iar pe parcursul jocului le va apropia una de
    //     cealalta, copii trebuie sa faca ca si liderul, iar atunci cand liderul
    //     isi opreste mainile una in dreptul celeilalte, copii trebuie sa aplaude.
    //     Liderul va incerca sa induca in eroare copii astfel incat sa greseasca.
    //     Cine aplauda cand liderul nu are mainile una in dreptul celeilalte va
    //     iesi, sau copilul care va fi mai lent poate fi si el eliminat. Castiga
    //     cine ramane ultimul`,
    //   tags: ['toti', 'ext','act','echipe', 'scolari','presc'],
    //   isOpen: false,
    // },
    // {
    //   id: 11,
    //   title: '11.a. Cheile bunicii',
    //   content: `  La jocul acesta va fi nevoie de o legatura de chei, si o esarfa cu care
    //     se va lega la ochi unul dintre copii. Copii vor forma un cerc, iar cel
    //     legat la ochi va sta pe un scaun sau jos in centrul cercului. Cheile se
    //     vor amplasa in fata celui legat la ochi. Liderul va alege 4 copii ce au
    //     rolul de a se duce sa "fure" cheile. Cel legat la ochi va trebui,
    //     folosindu si auzul, sa indentifice din ce directie vine cel ce doreste
    //     sa i ia cheile, iar lucrul acesta il va face prin aratarea cu degetul in
    //     directia acelei persoane. Daca indicatia este corecta copilul tintit, se
    //     va intoarce in cerc. Regurile la acest joc constau in pastrarea linistii
    //     pe parcursul jocului, si alergarea, fuga, este interzisa (cei ce se vor
    //     duce sa ia cheile au voie sa se duca si sa se intoarca doar mergand
    //     usor.). Jocul se termina ori cand la finalul unui timp prestabilit,
    //     copilul din centru reuseste sa si apere cheile, ori cand toti copii
    //     alesi sunt identificati, ori cand cheile reusesc a fi luate si copilul
    //     ce le-a luat se si intoarce in cerc, sau jocul se poate incheia atunci
    //     cand regurile nu se respecta.`,
    //   tags: ['toti', 'ext','act', 'scolari','gim'],
    //   isOpen: false,
    // },
    // {
    //   id: 12,
    //   title: '11.b. Cheile bunicii V2',
    //   content: `La jocul acesta va fi nevoie de o legatura de chei, si o esarfa cu care
    //     se va lega la ochi unul dintre copii. Copii formeaza un cerc si un copil
    //     va fi in mijlocul cercului format legat la ochi. Liderul va amplasa
    //     undeva cheile in interiorul cercului, iar copilul legat la ochi are la
    //     dispozitie 1-2 minute sa gaseasca cheile. Jocul poate fi adaptat ori
    //     prin folosirea cuvintelor cald/rece a copiilor ce formeaza cercul,
    //     indicand apropierea sau departarea de chei, sau se poate proceda si prin
    //     varianta in care liderul ia cheile si le misca prin cerc, astfel incat
    //     copilul legat la ochi prin auzirea zgomotului sa identifice unde sunt si
    //     sa se duca se le ia.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 13,
    //   title: '12. Insulele',
    //   content: `La jocul acesta este nevoie de cartoane a4,a3. Aceste cartoane sunt puse
    //     pe jos, iar copii se vor plimba in jurul lor. Cartoanele acestea sunt
    //     denumite si insule. Copii se vor plimba in jurul lor pana cand liderul
    //     fluiera sau spune "Incepe furtuna" (se poate alege orice sintagma),
    //     atunci copii trebuie sa se puna cu picioarele pe bucatile de carton (pot
    //     sta mai multi copii pe o bucata de carton / insula). Copii trebuie sa nu
    //     atinga cu picirul lor exteriorul cartonului/insulei, in caz contrar va
    //     fi descalificat. La fiecare 1-2 copii iesiti se va scoate cate o
    //     insula/carton. Castigatorii sunt cei ce vor fi la final pe ultima
    //     insula.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 14,
    //   title: '13. Prinde mă dacă poți',
    //   content: `La acest joc este nevoie de un perimetru delimitat. Copii vor sta pe una
    //     din laturile acestui perimetru, iar in cetrul perimetrului va sta un
    //     copil. Scopul jocului este acela ca, copii sa alerge dintr o parte a
    //     perimetrului in cealalta parte fara sa fie prinsi. Cel din centru are
    //     rolul de ai prinde, dar ii este interzis sa mearga in spate. Cine este
    //     prins sau ajunge greoi in perimetrul opus se va alatura celui din
    //     mijloc. Copii vor pleca la fluierul liderului`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 15,
    //   title: ' 14. Statuile',
    //   content: `La jocul acesta va fi nevoie de muzică sau de un instrument muzical care
    //     vor fi pornite sau oprite de unul dintre lideri. Se va stabili locul în
    //     care se va desfășura jocul și toți copii vor alerga în zona stabilită
    //     cand va porni muzica sau se va canta la instrument. Când muzica sau
    //     instrumentul vor fi oprite copii trebuie sa ,,inghete,, ca si cum ar fi
    //     niste statui. Un lider sau mai multi trebuie sa mearga la copii si sa
    //     incerce ,fara sa-i atinga, sa-i faca sa rada sau sa zambeasca. Jocul se
    //     va repeta pana cand va ramane doar un singur copil si acela va fi
    //     castigatorul. `,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 16,
    //   title: '15. Vânătoarea obiectelor',
    //   content: ` Vânătoarea obiectelor" este un joc în care jucătorii sunt provocați să
    //     găsească diferite obiecte ascunse într-o scenă statică sau într-un mediu
    //     interactiv. Aceste obiecte pot fi ascunse în diverse locuri și pot avea
    //     dimensiuni diferite, ceea ce le face dificil de detectat la prima
    //     vedere. Scopul jocului este să găsești cât mai multe obiecte într-un
    //     timp limitat sau fără un timp limitat, în funcție de setările jocului.
    //     De obicei, jucătorii sunt răsplătiți cu puncte sau alte recompense
    //     pentru fiecare obiect găsit, iar uneori sunt oferite indicii pentru a-i
    //     ajuta să găsească obiectele mai greu de detectat`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 17,
    //   title: '16. Aruncarea in sus',
    //   content: `Pentru jocul acesta veți avea nevoie de o minge. Copii vor forma în
    //     picioare un cerc împreună cu liderul. Liderul va da mingea copilului din
    //     dreapta, iar respectivul v-a trebui să-și spună numele după care să
    //     înmâneze mingea următorului copil și tot așa. După ce toți copii și-au
    //     spus fiecare numele, mingea se aruncă de la unul la altul și fiecare
    //     copil își v-a striga numele urmat de numele altuia dintre ei(ex:
    //     Alex-Mihai). După ce aruncă mingea, copilul în cauză se așază și nu mai
    //     poate primi mingea.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 18,
    //   title: '17. Jocul numelui',
    //   content: `Jocul numelui" este un joc simplu și distractiv în care participanți
    //   se așează într-un cerc și încep să-și spună unul altuia numele proprii.
    //   În timp ce un participant spune numele său, el își indică și un alt
    //   obiect din jur (cum ar fi un animal, o culoare, un fruct etc.) care
    //   începe cu aceeași literă ca și numele său. De exemplu, dacă numele este
    //   "Ana", poate spune "Ana și măr". Apoi, următorul participant trebuie să
    //   spună numele și obiectul celui precedent, iar apoi să adauge un nou
    //   obiect care începe cu prima literă a numelui său. Jocul continuă în
    //   același mod, fiecare participant adăugând un nou obiect și păstrând
    //   secvența. Scopul jocului este să mențineți secvența corectă a numelui și
    //   a obiectului și să vă amuzați descoperind noi combinații de cuvinte care
    //   încep cu aceeași literă.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 19,
    //   title: '18. Jocul pălăriei<',
    //   content: `
    //    În acest joc sunt necesare o pălărie(sau oricare alt obiect prin care se
    //     poate identifica „bolnavul”), un fluier și scaune pentru toți copii.
    //     Copii, împreună cu 1 sau 2 lideri, se vor așeza pe scaune formând un
    //     cerc. Fiecare scaun trebuie sa fie ocupat de câte un singur copil.
    //     Liderul va purta o pălărie care arată că acesta are o boală de care
    //     copii trebuie sa se ferească. Când se va sufla prima dată cu fluierul
    //     toți cei din cerc trebuie să se ridice și se pot plimba oriunde in cerc.
    //     La a doua folosire a fluierului fiecare trebuie să se așeze pe un scaun.
    //     Copii care vor nimeri la dreapta și stânga liderului automat se vor
    //     „îmbolnăvi” și vor ieși din joc, urmând să rămână așezați pe scaunele
    //     lor în timp ce jocul reîncepe. Recomandat este ca unul dintre lideri să
    //     se asigure că acei copii, care au pierdut, rămân pe scaunele lor.
    //     Câștigători sunt ultimii 2 copii rămași.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 20,
    //   title: '19. Lovește genunchiul',
    //   content: ` Pentru acest joc va fi nevoie de scaune pentru toți copii și de un
    //   baston făcut din ziare. Jucătorii se vor așeza pe scaune formând un
    //   cerc, iar liderul va sta în picioare în mijloc. La început unul din
    //   copii va striga numele altuia. Jucătorul numit va trebui apoi să-și
    //   spună întăi numele, iar apoi să adauge numele altuia (ex: Andrei-Gabi,
    //   apoi Gabi-Mircea s.a.m.d). Copii trebuie să fie rapizi în a găsi un alt
    //   nume fiindcă liderul va încerca să-i lovească blând cu bastonul pe cei
    //   numiți. În cazul în care un copil nu reușește la timp să spună un alt
    //   nume și este lovit, el și liderul vor face schimb de roluri, liderul
    //   așezandu-se acum jos. Jocul nu are un câștigător si poate persista atât
    //   timp cât consideră potrivit liderul.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 21,
    //   title: '20. Plasa de pescuit',
    //   content: `  Acest joc nu necesită niciun obiect separat. Copii se împart pe două
    //     grupe, jumătate din ei fiind „peștii”, iar cealaltă formează „plasa”.
    //     Copii care formează „plasa” vor fi luați deoparte și li se va spune un
    //     număr secret, neștiut de cealaltă parte a copiilor. După aflarea
    //     numărului, „plasa” vor forma un cerc ținându-se de mâini cu brațele
    //     întinse. Copii „pești”, vor trebui acum să intre încontinuu în cercul
    //     format de „plasă” și să iasă pe sub mâinile lor. În tot acest timp
    //     liderul va striga numere la întâmplare. Atunci când liderul va striga
    //     numărul secret, copii care vor forma „plasa” vor trebui să-și coboare
    //     repede brațele. „Peștii” care încă se aflau în cerc atunci când ceilalți
    //     și-au coborât brațele vor fi acum „capturați” și se vor alătura
    //     „plasei”, conectându-se și ei la cerc. Se va alege apoi un alt număr și
    //     va începe o nouă rundă cu „peștii” rămași. Mai tărziu echipele pot fi
    //     inversate.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 22,
    //   title: '21. Prinde bățul',
    //   content: `  "Prinde bățul" este un joc tradițional și distractiv, jucat în principal
    //     în aer liber. Participanții stau într-un cerc și unul dintre ei,
    //     cunoscut sub numele de "prindere", ține un băț sau un baston. În timp ce
    //     ceilalți participanți se deplasează în cerc în ritmul unei melodii sau
    //     la comanda unui lider, "prinderea" aruncă bățul în sus în aer. Scopul
    //     celorlalți participanți este să se afle în poziția de a prinde bățul
    //     când acesta atinge solul. Dacă reușesc să prindă bățul, "prinderea"
    //     devine unul dintre participanți și jocul continuă. Dacă nu reușesc să
    //     prindă bățul, "prinderea" rămâne în continuare și repetă acțiunea de a
    //     arunca bățul. Jocul continuă până când toți participanții devin
    //     "prinderea" sau până când dorința de a continua jocul încetează. `,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 23,
    //   title: '22. Moarte prin clipire',
    //   content: ` Copii se vor aseza in cerc astfel incat sa se poata vedea fiecare pe
    //     fiecare. Se vor face mai multe biletele iar pe unul va fi scris un x, si
    //     pe unul o steluta. Scopul jocului este acela ca cel ce are x pe biletel,
    //     sa faca cu ochiul la ceilalti copii, iar acesti dupa 2 secunde de la
    //     clipit sa se retraga din joc (depinzand de varsta se poate si juca
    //     aceasta retragere ca si "o moarte" prin inpuscare). Cel ce are steluta
    //     are rolul de a identifica ucigasul. Jocul se termina cand ucigasul
    //     elimina copii, sau cand detectivul gaseste ucigasul. Detectivul poate fi
    //     ucis de clipirea ucigasului. Jocul se poate adapta in functie de copii
    //     prezenti, se poate mari numarul de ucigasi si detectivi. Se poate juca
    //     si fara detectivi, toti copii avand roul sa identifice ucigasul, iar in
    //     cazul acesta castigatorul e cel ce "omoara" cei mai multi copii. `,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 24,
    //   title: '23. Petru și Maria',
    //   content: ` La acest joc va fi nevoie de doua fulare sau esarfe, pentru a lega copii
    //     la ochi. Toti copii vor sta intr-un cerc mare, in picioare, tinandu-se
    //     de maini. Obiectivul jocului este ca ,,Petru,, sa o prinda pe ,,Maria,,
    //     intr-un minut. Toti copii trebuie sa faca liniste. ,,Petru,, si
    //     ,,Maria,, vor fi alesi de catre lider ,vor fi legati la ochi si va
    //     trebui sa stea in interiorul cercului format de ceilalti copii. Petru o
    //     va striga pe Maria. Ea va raspunde ,,Eu sunt Maria,, si apoi incearca sa
    //     se fereasca de el. El o striga si o urmareste pana cand o prinde. Apoi
    //     va fi aleasa o alta pereche pentru a relua jocul. Castigatorul va fi
    //     ,,Petru,, daca o prinde intr-un minut, sau ,,Maria,, daca nu o prinde.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 25,
    //   title: '24. Cine sunt eu?',
    //   content: `La acest joc va fi nevoie de nume ale unor personaje cunoscute ,scrise
    //     pe hartii sau etichete autocolante (cate un nume scris pe fiecare
    //     hartie/eticheta, pentru ca fiecare copil sa aiba cate una) si de ace de
    //     siguranta daca nu vor fi folosite etichete autocolante. Prinde sau
    //     lipeste hartia cu numele pe spatele fiecarui copil, fara ca el sa vada
    //     ce scrie pe acea hartie. Cand liderul va da startul, fiecare copil va
    //     merge la altul si va pune o intrebare la care se poate raspunde doar cu
    //     ,,da,, sau ,,nu,, , pentru a afla cat mai multe despre personajul scris
    //     pe eticheta lui. Apoi merge la altcineva si pune alta intrebare. Cand un
    //     copil isi afla numele, il comunica liderului. Castigatorul va fi primul
    //     copil care isi descopera identitatea. Pentru o alta varianta a acestui
    //     joc vei avea nevoie de creioane si hartii pentru fiecare copil. Liderul
    //     va lipi etichetele cu nume pe spatele copiilor in timp ce ei vor sta
    //     unul langa altul cu ochii inchisi. La start, copii vor avea la
    //     dispozitie 2 minute pentru a nota pe hartie cat mai multe nume de pe
    //     spatele altora, in timp ce ei vor incerca sa-i impiedice pe altii sa le
    //     vada numele lor. Catigatorul va fi copilul cu cele mai multe nume scrise
    //     dar si copilul al carui nume nu a fost vazut.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 26,
    //   title: ' 25. Furat coada celuilalt',
    //   content: `Copii se vor imparti in echipe de 5-10 persoane. Copii vor forma un
    //     trenulet prin punerea mainilor pe copilul din fata, primul copil va fi
    //     cu mainile libere, ultimul nu va avea maini pe umeri. Ultimului copil i
    //     se ataseaza la spate o esarfa putin baga in pantanoni. Cand se va da
    //     startul fiecare echipa creeata se va deplasa tinandu se de umeri in
    //     continuare spre alte echipe pentru a lua esarfa din spatele acesteie,
    //     copii pe tot parcursul jocului nu au voie sa dea drumul la umerii celui
    //     din fata. Doar primul copil va avea voie sa ia coada ultimului copil de
    //     la echipa adversa. Echipa ce isi pierde coada va iesi din perimetru.
    //     Jocul se va desfasura concomitent cu toate echipe formate. Echipa care
    //     la final are cele mai multe cozi luate castiga `,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 27,
    //   title: '26. Ciocănelele și adunat oameni când îi bati',
    //   content: ` La acest joc copii trebuie doar familiarizati cu regurile jocului bine
    //     cunoscut "ciocanelele". Dupa ce vor fi familiarizati cu regurile.
    //     Liderul va da startul. Copii se vor grupa cate 2 si vor juca acest joc
    //     cu deviza "se castiga la un punct". Cine pierde se alatura
    //     castigatorului, alaturarea se face prin punerea mainii pe umerii
    //     acestuia, sau mersul in spatele acestuia. Castigatorul continua sa si
    //     caute un alt jucator. Jocul se va desfasura in acelasti stil pana la
    //     ultimii 2 ramasi (cu tot cu grupul format in spatele acestuia). Acesti
    //     ultimii 2 vor avea dreptul sa joace "ciocanelele" pana la 3.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 28,
    //   title: '27. Pantoful Cenușăresei',
    //   content: `La jocul acesta va fi nevoie de un slap sau un pantof mic. Copii vor
    //     forma un cerc stand jos pe podea cu picioarele intinse spre interiorul
    //     cercului, iar talpile trebuie sa fie lipite intre ele. Un copil ,care va
    //     fi Cenusareasa, iese afara din camera, timp in care i se va da unui
    //     copil slapul sau pantoful. Pantoful trebuie pastrat in continua
    //     miscare,de la un copil la altul, pe sub picioare, subtil, fara a fi
    //     observat. Cenusareasa va intra in camera si spune: mi-am pierdut
    //     pantoful! Cenusareasa va ramane inafara cercului si va incerca sa
    //     gaseasca pantoful care este in miscare si sa arate spre copilul care il
    //     are in acel moment. La fiecare incercare de a ghici va fi nevoie ca ea
    //     sa se intoarca la 360 de grade, cu ochii inchisi iar apoi va mai incerca
    //     o data. Cand Cenusareasa gaseste pantoful si persoana care il are cei
    //     doi schimba locul si se continua jocul`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 29,
    //   title: '28. Apărați cetatea',
    //   content: `La jocul acesta va fi nevoie de un taburet sau o cutie de lemn care va
    //     fi folosita pe post de ,,cetate,, si de o minge de burete ce va fi
    //     folosita drept proiectil. Copii formeaza un cerc iar persoana desemnata
    //     sa apere ,,cetatea,, se va urca pe cutia/taburetul din mijloc.
    //     ,,Cetatea,, trebuie lovita de proiectil in timp ce aparatorul ei trebuie
    //     sa incerce sa o apere , rămânând in cetate. Jocul va deveni mai dificil
    //     cand mingea este data de la un copil la altul, iar ,,cetatea,, este
    //     atacata cand aparatorul nu este atent. Cand unul din copii reuseste sa
    //     tinteasca, va face schimb cu copilul din mijloc. Jocul poate avea
    //     stabilita o limita de timp sau se poate juca pana cand toti copii au
    //     avut cel putin o aruncare.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 30,
    //   title: '29. Mingea fugară',
    //   content: ` La jocul acesta va fi nevoie de o minge de fotbal. Copii formeaza un
    //     cerc, stand in picioare cu picioarele larg desfacute, picioarele
    //     copiilor trebuie sa se atinga intre ele. Un copil va fi ales sa stea in
    //     mijloc si sa loveasca mingea. Copilul va trebui sa loveasca mingea doar
    //     cu mainile si va incerca sa o dea afara din cerc. Copii din cerc trebuie
    //     sa incerce sa opreasca mingea folosindu-se doar de maini. Mingea nu
    //     trebuie lovita cu piciorul! Atunci cand mingea va iesi din cerc, copilul
    //     printre picioarele caruia a iesit mingea va merge in mijlocul cercului,
    //     ca sa loveasca mingea.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 31,
    //   title: '30. Un porc de vânzare',
    //   content: `La acest joc va fi nevoie de sticle goale de plastic, maturi sau
    //     bastoane , cate una pentru fiecare echipa. Jocul poate fi jucat sub
    //     forma de stafeta intre echipe. Sticla- ,,porcul,,-trebuie impinsa cu
    //     matura sau cu bastonul pana la linia de final. Jocul va deveni mai
    //     interesant daca in calea ,,porcului,, vor fi puse si cateva obstacole pe
    //     care acesta trebuie sa le ocoleasca.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 32,
    //   title: '31. Crap fotball',
    //   content: `La acest joc va fi nevoie de o minge de plaja mai mare, si de niste
    //     jaloane (sau ceva cu care se poate forma o poarta). Copii vor fi
    //     impartiti in echipe de 7-10 jucatori. Copii se vor aseza in teren astfel
    //     incat sa existe un portar, aparatori, mijlocasi si atacanti. Copii au
    //     voie sa se deplaseze doar ca un crab, adica in patru labe dar cu burta
    //     in sus. Ei au voie sa loveasca mingea cu tot ceea ce pot doar sa nu se
    //     ridice in picioare sau sa se aseze, deplasarea si chiar si stationarea
    //     se va face in pozita de crab, prezentata anterior. La 3 goluri inscrie
    //     de o echipa aceasta castiga. In cazul existentei a mai mult de 2 echipe
    //     se poate face un campionat de tipul (fiecare joaca cu fiecare, sau
    //     castigatorii si pierzatorii joaca intre ei) Jocul se incepe cu aruncarea
    //     mingerii la mijloc`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 33,
    //   title: '32. Fotball copii puși in linie pe jos',
    //   content: ` La acest joc va fi nevoie de o minge de plaja mai mare, si de niste
    //     jaloane (sau ceva cu care se poate forma o poarta). Copii vor fi
    //     impartiti in echipe de 7-10 jucatori. Copii se vor aseza in teren astfel
    //     incat sa existe un portar, aparatori, mijlocasi si atacanti. Copii la
    //     acest joc vor sta jos, nu au voie sa se ridice deloc si nici sa se
    //     deplaseze. Ei vor sta mereu in aceasi pozitie, si vor avea voie sa
    //     loveasca mingea doar cu mainile. Asezarea echipelor va fi putin
    //     diferita. Fiecare echipa va avea un portar, care va putea sa se tarasca
    //     putin pe marimea portii, fiecare echipa va avea si aparatori, care vor
    //     fi in fata portarului la 1 m distanta, in fata acestora la distanta de
    //     un brat de aparatori, vor fi atacantii echipei adverse, acestia se vor
    //     aseza fata in fata cu aparatorii, iar mijlocasii abelor echipe vor fi la
    //     mijlocul terenului tot in acelas mod, fata in fata. Ca si reguli
    //     importante sunt interzicerea ridicarii in picioare, interzicerea
    //     preluarii mingii si tinerii intr un loc, si ultima regula este aceea ca
    //     in cazul in care mingea se duce intr un loc neaccesibil copiilor va fi
    //     nevoie de lideri ce vor pasa mingea inapoi copiilor. Jocul se termina la
    //     3 goluri marcate. Jocul se incepe cu aruncarea mingerii la mijloc in
    //     zona ambilor mijlocasi.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 34,
    //   title: '33. Baloane și scări',
    //   content: `La acest joc se vor imparti copii in 2 echipe, sau daca sunt foarte
    //     multi copii in echipe pare. Copii vor sta intinsi pe jos, cu picioarele
    //     (talpile) lipite de oponentul echipei adverse. Intre copii aceleasi
    //     echipe se va pastra o anumita distanta. Copii intinsi vor primi un balon
    //     sau o minge cu care vor trebui sa joace volei, dar fara sa se ridice
    //     deloc de jos sau sa se miste prea mult. Punctul se va castiga atunci
    //     cand balonul ajunge in spatele oponentului. Reguli: Imobilizarea
    //     balonului de catre un copil e strict interzisa, ridicare de pe pozitia
    //     intins este interzisa. In cazul nerespectarii regulilor se va pierde un
    //     punct. Jocul se castiga la acumularea de 12 puncte (sau cate puncte
    //     decide liderul). Jocul poate fi adaptat in functie de nevoie folosindu
    //     se mingi usoare gonflabile, sau baloane cu putina apa.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 35,
    //   title: ' 34. Arunca saculetul',
    //   content: ` La acest joc va fi nevoie de un sacult mic cu nisip, sau un balon cu
    //     apa. Copii se impart in 2, cele 2 parti vor sta fata in fata. Se va da
    //     saculetul primului copil dintr o parte, acesta va pasa saculetul prin
    //     aruncare primului copil din cealalta parte, acesta va prelua si va pasa
    //     cu cel de-al 2 lea copil din prima parte, procesul se repeta pana la
    //     capat, si recursiv. Scopul jocului e in a nu scapa saculetul sau a nu
    //     gresi aruncarea. Cine greseste, va iesi afara. Pentru inceput cele 2
    //     parti vor sta fata in fata la o distanta de 2 metrii dintre ei. Cu
    //     fiecare tura de eliminare, sau de intoarcere a saculetului din punctul
    //     de unde a plecat, fiecare parte participanta va face un pas in spate,
    //     marindu-se astfel distanta dintre copii. Castigatorul este ultimul copil
    //     ramas. O alta varianta a jocului, este numerotarea copiilor, astfel
    //     incat, inainte de a se arunca saculetul se va striga un numar, copilul
    //     ce are saculetul va trebui sa paseze cu respectivul copil ce va avea
    //     atribuit numarul strigat. `,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 36,
    //   title: '35. Bariera sunetului',
    //   content: ` La acest joc va fi necesara impartirea copiilor in doua echipe, A si B.
    //     Echipa B va sta intr-un rand intre doua grupuri formate din copii din
    //     echipa A. O jumatate din echipa A isi va alege, fara sa stie ceilalti, o
    //     propozitie pe care va trebui sa o transmita coechipierilor din cealalta
    //     jumatate, aflati dupa sirul echipei B. La start, copii din echipa A care
    //     au ales propozitia o striga cat mai tare coechipierilor lor, timp in
    //     care echipa B va incerca sa-i incurce, strigand si ei tare. Jumatatea
    //     cealalta a echipei A va incerca sa inteleaga propozitia. Dupa ce aceasta
    //     reuseste, se schimba locurile si echipa A va fi pusa in mijloc iar
    //     echipa B va fi impartita in doua grupuri, ca sa transmita mesajul.
    //     Liderul va trebui sa cronometreze jocul si echipa castigatoare va fi cea
    //     care transmite mesajul in cel mai scurt timp.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 37,
    //   title: '36. Bătălia baloanelor',
    //   content: `La acest joc va fi nevoie de 4-5 baloane. Copii trebuie impartiti in
    //     doua echipe si vor sta asezati pe scaune ce vor fi aranjate spate in
    //     spate. Inceputul jocului va fi atunci cand liderul va arunca un balon
    //     deasupra capetelor copiilor asezati. Fiecare echipa va trebui sa
    //     loveasca balonul in spate,peste capul lor si a celor din echipa adversa,
    //     pentru ca balonul sa cada in fata acestora. Copii vor trebui sa faca
    //     acest lucru stand mereu asezati pe scaune. Daca reusesc vor primi 1
    //     pentru echipa si balonul se pune din nou in joc. Pot fi folosite si mai
    //     multe baloane deodata. Liderul poate pune balonul inapoi in joc daca
    //     acesta cade intr-o parte. Va castiga echipa cu cel mai mare punctaj.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 38,
    //   title: ' 37. Ia șapca',
    //   content: `La acest joc va fi nevoie de o sapca sau de o carpa. Copii vor fi
    //     impartiti in doua echipe egale si vor fi aliniati in sir indian. Fiecare
    //     copil din echipa va primi un numar: 1,2,3 etc. Fiecare copil va juca
    //     contra copilului cu acelasi numar din echipa adversa. Cand liderul
    //     striga un numar,copii cu numarul respectiv alearga catre sapca si
    //     incearca sa o aduca inapoi la echipa lor, fara sa fie atins de celalalt
    //     copil. Copilul care reuseste primeste un punct pentru echipa lui. Daca
    //     copilul este atins de adversar in timp ce tine sapca in mana, punctul se
    //     acorda echipei celeilalte. Copii se intorc inapoi la locul lor iar apoi
    //     liderul va striga alt numar. Echipa castigatoare este cea care obtine
    //     prima 10 puncte. `,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 39,
    //   title: '38. Impuls',
    //   content: ` La acest joc va fi nevoie de un obiect mic si de un scaun sau o masa.
    //     Copii vor fi impartiti in doua echipe si vor sta in picioare, in doua
    //     randuri, fata in fata, cam la 1 m distanta intre ele. Se va pune un
    //     scaun intr-un capat al sirului, la o distanta egala de ambele echipe,
    //     iar obiectul va fi pus pe scaun. Fiecare copil din echipa trebuie sa se
    //     tina de maini. Liderul va tine mainile primilor doi copii de la
    //     inceputul fiecarui sir. Cand liderul strange mainile primilor doi, ei
    //     trebuie sa transmita ,,strangerea,, sau ,,impulsul,, copilului de langa
    //     ei. Cand ultimul copil din sir simte strangerea mainii lui, trebuie sa
    //     ia rapid obiectul de pe scaun, inaintea celeilalte echipe. Dupa fiecare
    //     tura, cel din fata sirului trece in spate. Un alt lider va tine scorul.
    //     Jocul se va termina atunci cand primul copil caruia i s-a strans mana de
    //     catre lider va ajunge din nou in fata. Echipa castigatoare va fi cea
    //     care va strange cele mai multe puncte.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 40,
    //   title: '39. In jurul cercului',
    //   content: `La acest joc va fi nevoie de un baston si de o minge mare. Copii vor fi
    //     impartiti in doua echipe, echipa A si echipa B. Echipa A va sta intr-un
    //     sir indian si tine bastonul. Echipa B sta intr-un cerc si tine mingea.
    //     Ambele echipe vor incepe in acelasi timp. Primul copil din echipa A
    //     alearga cu bastonul in mana in jurul echipei B si apoi merge la
    //     sfarsitul randului. El da bastonul din mana in mana in fata,pana ajunge
    //     la primul copil din sir, care apoi alearga si el in jurul echipei B si
    //     asa mai departe. Dupa ce toti copii au alergat vor striga ,,STOP!,,. In
    //     acest timp, copii din echipa B arunca mingea unul altuia in cerc,
    //     numarand cu voce tare aruncarile. Mingea trebuie sa fie aruncata si nu
    //     data din mana in mana. Echipa B va trebui sa arunce mingea de cat mai
    //     multe ori inainte ca echipa A sa strige ,,stop,,. Un lider va tine
    //     punctajul, iar echipele vor face schimb de locuri, echipa B va sta in
    //     sir iar echipa A va sta in cerc. Echipa castigatoare va fi cea care are
    //     cele mai multe pase. Mai poate exista o varianta a jocului in care un
    //     lider sta in mijlocul cercului iar mingea va trebui aruncata intre copii
    //     din cerc si lider, in loc sa fie aruncata doar in cerc.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 41,
    //   title: '40. Lupta cu hartie',
    //   content: `La acest joc va fi nevoie de scaune pentru fiecare copil din echipa (sau
    //     pot sta si pe jos), 3-4 foi pentru fiecare copil, doua palarii din
    //     hartie sau alte obiecte care se pot pune pe capul tintei si de un lider
    //     ca va arbitra foarte atent. Copii vor fi impartiti in doua echipe si vor
    //     sta asezati pe scaun, fata in fata, in rand, cam 1 m distanta intre
    //     fiecare rand. Cate un copil din fiecare echipa va trebui sa stea pe un
    //     scaun in spatele echipei lui, cu o palarie de hartie pe cap (sau cu ceva
    //     asemanator dar sa fie la fel pentru ambele echipe). Toti ceilalti copii
    //     din echipe vor primi 3-4 foi. Cand va incepe jocul, copii cu hartii le
    //     rup si le mototolesc ca sa faca mingi din hartie cu care arunca in
    //     adversarii lor, incercand sa nimereasca palaria tintei. Daca palaria
    //     este lovita se vor acorda 5 puncte, iar daca palaria cade se vor acorda
    //     10 puncte. Va trebui sa stea in spatele fiecarei echipe cate un lider
    //     care pune palaria la loc daca aceasta cade. Atunci cand palaria cade,
    //     tinta poate fi schimbata. Copii nu au voie sa se ridice de pe scaune,
    //     pedeapsa fiind 5 puncte acordate echipei adverse. Echipa castigatoare va
    //     fi echipa care va avea cel mai mare punctaj dupa terminarea perioadei de
    //     timp ce va fi stabilita de ider de la inceput.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 42,
    //   title: '41. Lovește sticla',
    //   content: ` La acest joc va fi nevoie de doua scaune, o sticla din plastic sau o
    //     conserva si de doi saculeti umpluti cu boabe de fasole sau doua mingi
    //     (pentru aruncare). Copii vor fi impartiti in doua echipe si vor sta
    //     aliniati, unul langa altul, dupa ordinea inaltimii. Echipele vor sta
    //     fata in fata,iar cei mai inalti din echipe vor sta in directii opuse( in
    //     fata celui mai mare din echipa va sta cel mai mic din cealalta echipa).
    //     Fiecarui copil i se va da un numar, incepand cu cel mai mic. Liderul va
    //     striga un numar, iar copii cu acel numar alearga la scaunul echipei lor
    //     in partea lor dreapta. Vor lua mingea sau saculetul in mana , se urca pe
    //     scaun si arunca mingea, incercand sa loveasca sticla sau conserva care
    //     se afla in mijloc, intre cele doua scaune. Daca nu nimereste, trebuie sa
    //     coboare de pe scaun ca sa-si ia mingea si apoi se va urca inapoi pentru
    //     a incerca din nou. Ambii copii vor incerca pana ce unul dintre ei va
    //     reusi sa doboare sticla si va primi 1 punct pentru echipa lui. Copii vor
    //     pune inapoi mingea pe scaun (se poate scade un punct daca mingea nu va
    //     fi pusa inapoi pe scaun!) si se intorc la locurile lor, iar liderul va
    //     striga alt numar. Echipa castigatoare va fi cea cu cele mai multe puncte
    //     la sfarsitul jocului (va fi nevoie de un lider care sa tina scorul).
    //     Jocul poate fi adaptat prin mutarea scaunelor mai departe unul de altul
    //     pentru a fi mai greu pentru copii mai mari. Daca se rateaza de doua ori,
    //     scaunele vor fi aduse mai aproape cu cate un metru. Pentru copii mai ici
    //     scaunele vor fi mutate mai aproape`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 43,
    //   title: '42. Nu este amuzant',
    //   content: `La acest joc copii vor fi impartiti in doua echipe, echipa A si echipa
    //     B. Echipa A trebuie sa-i faca pe cei din echipa B sa rada si vor avea la
    //     dispozitie un minut pentru acest lucru. Apoi se vor inversa rolurile si
    //     echipa B va trebui sa faca echipa A sa rada. Copii nu au voie sa se
    //     atinga. Un lider trebuie sa cronometreze, sa vada cat timp dureaza pana
    //     cand echipa iese afara. Echipa castigatoare va fi cea care ramane
    //     serioasa cel mai mult timp.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 44,
    //   title: '43. Volei baloane cu apă',
    //   content: ` La acest joc va fi nevoie de 2 cearsafuri de dimensiuni egale, 1,5mx1,5m
    //     sau in jurul acestor dimensiuni si baloane cu apa. Se vor impartii copii
    //     in echipe de numar par. Jocul se desfasoara intre 2 echipe. 4 dintre
    //     copii vor tine de colturile cearsafurilor (sau 6 daca sunt copii mai
    //     mici), iar restul vor sta in centru formand un fileu, asa va face si
    //     echipa adversa. Cele 2 grupuri de copii din centru vor forma fileul, iar
    //     ceilalti vor fi jucatorii. Se va juca volei cu un balon cu apa, el nu va
    //     putea fi atins cu mainile ci doar prins si aruncat cu ajutorul
    //     cearsafului. Prin sparrgerea unui balon sau prin caderea acestuia in
    //     terenul advers se va castiga un punct. La 1/2 puncte se pot schimba
    //     copii care tin de cearsaf. Echipa castigatoare este cea care ajunge la
    //     12 puncte (sau cate va decide liderul). Se recomanda folosirea unor
    //     baloane mai rezistente.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 45,
    //   title: '44. X și 0',
    //   content: `La acest joc va fi nevoie de 9 scaune. Copii vor fi impartiti in doua
    //     echipe si vor sta in doua randuri, fata in fata. O echipa va fi ,,X,, si
    //     o echipa va fi ,,0,,. Intre cele doua echipe vor fi puse cele 9 scaune,
    //     in 3 randuri de cate 3, cu aproximativ 50 cm intre scaune. Un lider va
    //     fluiera startul si cate un copil din fiecare echipa( vor fi luati pe
    //     rand) alearga la cate un scaun si se aseaza. Se fluiera din nou si
    //     urmatorii doi( cate unul din fiecare echipa) fug si se aseaza pe scaune.
    //     Se continua asa, pana cand o echipa va avea trei copii asezati in rand,
    //     unul langa altul (in linie dreapta sau pe diagonala). Jocul va fi jucat
    //     de 3 ori pentru a se determina o echipa castigatoare. Copilul care
    //     atinge primul scaunul se poate aseza. Nu au voie sa se impinga.
    //     Castigatorul este echipa cu cel mai mare punctaj.`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
    // {
    //   id: 46,
    //   title: ' 45. Volei cerc',
    //   content: `“ Se formeaza un cerc cu copii si liderii, unul dintre lideri mai
    //     experimentat va sta in mijloc, cu ajutorul unei`,
    //   tags: ['tag2', 'tag3'],
    //   isOpen: false,
    // },
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

  title = 'aplicatieCopii';
  readonly APIUrl = 'http://localhost:5038/api/appevgcopii/';
  constructor(private http: HttpClient) {}
  notes: any = [];
  refreshNotes() {
    this.http.get(this.APIUrl + 'GetNotes').subscribe((data) => {
      this.notes = data;
    });
  }

  ngOnInit() {
    this.refreshNotes();
    this.refreshArticles();
  }
  articles: any = [];
  refreshArticles() {
    this.http.get(this.APIUrl + 'GetArticles').subscribe((data) => {
      this.articles = data;
      console.log(this.articles[0]);
    });
  }
  addArticle() {
    var title = (<HTMLInputElement>document.getElementById('title')).value;
    var desc = (<HTMLInputElement>document.getElementById('desc')).value;
    var form = new FormData();
    form.append('title', title);
    form.append('desc', desc);
    this.http.post(this.APIUrl + 'AddArticle', form).subscribe((data) => {
      alert(data);
      this.refreshArticles();
    });
  }
  deleteArticle(id: any) {
    this.http
      .delete(this.APIUrl + 'DeleteArticle?id=' + id)
      .subscribe((data) => {
        alert(data);
        this.refreshArticles();
      });
  }

  deleteNotes(id: any) {
    this.http.delete(this.APIUrl + 'DeleteNotes?id=' + id).subscribe((data) => {
      alert(data);
      this.refreshNotes();
    });
  }
}
