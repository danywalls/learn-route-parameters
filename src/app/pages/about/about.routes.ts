import { Route } from '@angular/router';
import { ROUTE_TOKENS } from '../../route-token';
import { AboutComponent } from './about.component';
import { TeamComponent } from './team/team.component';
import { CompanyComponent } from './company/company.component';

export const aboutRoutes: Route = {
  path: ROUTE_TOKENS.ABOUT,
  component: AboutComponent,
  children: [
    {
      path: ROUTE_TOKENS.TEAM,
      component: TeamComponent,
    },
    {
      path: ROUTE_TOKENS.COMPANY,
      component: CompanyComponent,
    },
  ],
};
