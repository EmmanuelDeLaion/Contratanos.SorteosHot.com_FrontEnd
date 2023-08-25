import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private script: ScriptService) { }

  ngOnInit(): void {
    this.script.load('home');
  }


}
