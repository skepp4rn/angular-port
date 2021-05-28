import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinaErfarenheterComponent } from './views/mina-erfarenheter/mina-erfarenheter.component';

import { OmMigComponent } from './views/om-mig/om-mig.component';
import { SkillsComponent } from './views/skills/skills.component';
import { StartsidaComponent } from './views/startsida/startsida.component';

const routes: Routes = [
  { path: 'mina-erfarenheter', component: MinaErfarenheterComponent},
  { path: 'om-mig', component: OmMigComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: StartsidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
