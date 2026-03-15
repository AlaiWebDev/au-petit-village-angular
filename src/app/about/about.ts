import { Component } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private store: Store) {}
}
