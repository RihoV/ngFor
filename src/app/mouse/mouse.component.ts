import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  mice = [
    {name: "Miki", home: "Disneyland", image: "https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png"},
    {name: "Hiir", age: 5, owner: "Kalle"},
    {name: "Minnie", age: 7, image: "https://upload.wikimedia.org/wikipedia/en/0/0f/Minnie_Mouse_Duckipedia.png"},
    {name: "Koduhiir", owner: "Sille", children: 1},
    {name: "Õuehiir", age: "14", owner: "Mallee"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
