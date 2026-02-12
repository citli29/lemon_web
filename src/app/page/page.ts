import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page',
  imports: [CommonModule],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {
  protected readonly page_title = signal('dd_mm_yyyy.md');
  protected readonly page_content = signal('Once upon a time...\nJoe Mama was having fun...\nAnd then stopped. :c\n');

  private api = inject(ApiService);

  page$ = this.api.getPage();
  async = "";
}
