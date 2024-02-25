import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ROUTE_TOKENS } from '../../route-token';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
