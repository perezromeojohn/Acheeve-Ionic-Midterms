import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  todoList =[{
    itemName : 'Midterms',
    itemDueDate: '13-10-21',
    itemPriority: 'high',
    itemCategory: 'Studies'
  },
  {
    itemName : 'Grocery',
    itemDueDate: '13-10-21',
    itemPriority: 'middle',
    itemCategory: 'Personal'
  },
  {
    itemName : 'SQL Server',
    itemDueDate: '27-10-21',
    itemPriority: 'low',
    itemCategory: 'Studies'
  },
]

  today : number = Date.now()

  constructor() { }

  ngOnInit() {
  }

}
