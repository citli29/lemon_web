import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'page',
  imports: [RouterOutlet],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {
  protected readonly page_title = signal('dd_mm_yyyy.md');
  protected readonly page_content = signal('Once upon a time...\nJoe Mama was having fun...\nAnd then stopped. :c\n');
}
