import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class  NameComponent implements OnInit {
  firstName='Renu'
  constructor() { }

  ngOnInit(): void {
    console.log(this.firstName)
  }

}
