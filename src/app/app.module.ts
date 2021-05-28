import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartsidaComponent } from './views/startsida/startsida.component';
import { OmMigComponent } from './views/om-mig/om-mig.component';
import { SkillsComponent } from './views/skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MinaErfarenheterComponent } from './views/mina-erfarenheter/mina-erfarenheter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartsidaComponent,
    OmMigComponent,
    SkillsComponent,
    MinaErfarenheterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
