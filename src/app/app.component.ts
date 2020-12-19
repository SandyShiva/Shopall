import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SHOPALL This is For Testing';

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('On Init');
    console.log('Second Change');
  }
}
