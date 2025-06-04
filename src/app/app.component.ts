import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProverbsService } from './services/proverbs.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 proverb = {text:'', translation:''}

 constructor(private proService: ProverbsService){}

 ngOnInit(): void {
  this.loadProverb();
 }

 loadProverb(){
 this.proService.getRandomProverb().subscribe(data=>{
    this.proverb = data;
   })
 }
}
