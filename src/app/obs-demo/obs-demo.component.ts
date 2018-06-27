import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {
  num: any;
  data: any;
  myObservable: any;
  constructor() {
    Observable.interval(1000).subscribe((num) => this.num = num,
      (err) => console.log(err), () => console.log('Completed!')
    )

    this.myObservable=Observable.create((observer) => {
      setTimeout(() => {
        console.log('Inside 1 package');
        observer.next("1 Package!");
      }, 1000);
      setTimeout(() => {
        observer.next("2 Package!");
      }, 2000);
      setTimeout(() => {
        observer.next("3 Package!");
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 7000);

    }).subscribe((data) => this.data=data,
      (err) => console.log(err),
      () => console.log('Completed!'))
  }

  unsubscribe(){
    this.myObservable.unsubscribe();
  }
  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('Calling distroy');
    this.myObservable.unsubscribe();
  }

}
