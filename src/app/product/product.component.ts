import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
id: number;
name: string;
queryParams: any;
  constructor(private route : ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
this.queryParams = this.route.snapshot.queryParams;

//Note: You can also use the subscribe method to access all the parameteres
this.route.params.subscribe(params=> console.log(params));
this.route.queryParams.subscribe(params=> console.log(params));
   }

   

  ngOnInit() {
  }

}
