import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './component/main/main.component';
import { provideHttpClient } from '@angular/common/http';
import { ListComponent } from './component/list/list.component';



@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule],
  providers : [provideHttpClient()],
  exports : [MainComponent]
})
export class ProductModule { }
