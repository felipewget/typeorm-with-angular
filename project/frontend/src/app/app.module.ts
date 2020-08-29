import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

// Component
import { FarmerSearchCardComponent } from './components/farmer-search-card/farmer-search-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundCardComponent } from './components/page-not-found-card/page-not-found-card.component';
import { FarmerOptionsListComponent } from './components/farmer-options-list/farmer-options-list.component'

// Pages
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// Providers/Services/Actions
import { FarmersService } from './providers/farmers.service';

@NgModule({
  declarations: [
    AppComponent,
    FarmerSearchCardComponent,
    FooterComponent,
    PageNotFoundCardComponent,
    SearchPageComponent,
    NotFoundPageComponent,
    FarmerOptionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  providers: [
    FarmersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
