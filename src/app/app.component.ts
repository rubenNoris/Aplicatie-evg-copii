import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
