import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
    ],
    imports: [
      MatToolbarModule,
      MatIconModule,  
    ],
    exports:[
      MatToolbarModule,
      MatIconModule,
      FormsModule
    ],
    providers: [],
    bootstrap: []
  })

  export class AppModule {}