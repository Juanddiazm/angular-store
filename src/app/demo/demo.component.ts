import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line: member-ordering
  title = 'platzi-store';

  // tslint:disable-next-line: member-ordering
  items = ['Juan', 'Felipe', 'Brayan', 'Daniel'];


  // tslint:disable-next-line: member-ordering
  cart: Product[] = [];

  power = 10;

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  addItem() {
    this.items.push('New Element');
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
