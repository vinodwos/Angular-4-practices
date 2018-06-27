import { Component, OnInit } from '@angular/core';
// import { resolve } from 'path';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  futureData = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("here comes the data...");
    }, 2000)
  )

todos=[{
  label: "Work A",
  status: "Pending"
},{
  label: "Work B",
  status: "Done"
},{
  label: "Work C",
  status: "Pending"
},{
  label: "Work D",
  status: "In Progress"
}];

  contactNumber = 9980353306;
  filteredStatus="";
  constructor() { }
  addTodo(){
    this.todos.push({'label': "Work XXX",
    'status': "Pending"});
  }
  ngOnInit() {
  }

}
