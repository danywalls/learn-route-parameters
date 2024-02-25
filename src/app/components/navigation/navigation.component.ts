import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTE_TOKENS } from '../../route-token';
import { JsonPipe } from '@angular/common';
import { NavigationModule } from '@progress/kendo-angular-navigation';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, JsonPipe, NavigationModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public readonly navigation = ROUTE_TOKENS;
}
