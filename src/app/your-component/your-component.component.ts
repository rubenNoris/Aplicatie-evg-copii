import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css'],
})
export class YourComponent {
  adminCode: string = 'Codul de admin';
  isCodeValid: boolean = false;
  isCodeIncorrect: boolean = false;

  checkCode(): void {
    const validCode = '1234';
    if (this.adminCode.toLowerCase() === validCode) {
      this.isCodeValid = true;
      this.isCodeIncorrect = false;
    } else {
      this.isCodeIncorrect = true;
      this.isCodeValid = false;
    }
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
    });
  }
  addArticle() {
    var title = (<HTMLInputElement>document.getElementById('title')).value;
    var desc = (<HTMLInputElement>document.getElementById('desc')).value;
    var checksBox = (<HTMLElement>document.getElementById('inputchecks'));
    var checks = checksBox.getElementsByTagName('input');
    var form = new FormData();
    var tags = [];
    for(let i = 0; i < checks.length; i++) { 
      if(checks[i].checked) {
        tags.push(checks[i].value);
      }
    }
    form.append("title", title);
    form.append("desc", desc);
    form.append("tags", JSON.stringify(tags));
    this.http.post(this.APIUrl + 'AddArticle', form).subscribe((data) => {
      alert(data);
      this.refreshArticles();
    })
  }

  addNotes() {
    var newNotes = (<HTMLInputElement>document.getElementById('newNotes'))
      .value;
    var formData = new FormData();
    formData.append('newNotes', newNotes);
    this.http.post(this.APIUrl + 'AddNotes', formData).subscribe((data) => {
      alert(data);
      this.refreshNotes();
    });
  }
  deleteNotes(id: any) {
    this.http.delete(this.APIUrl + 'DeleteNotes?id=' + id).subscribe((data) => {
      alert(data);
      this.refreshNotes();
    });
  }
}
