import {
    Component, Input, OnChanges, SimpleChange, DoCheck,
    OnInit, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter, HostBinding, HostListener
} from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/dataservice';
@Component({
    selector: 'app-user',
    // template: '<h1>User Component loaded!!!</h1>'
    templateUrl: './user.component.html',
    styleUrls: [`./user.components.css`]
})

export class UserComponent {
    // @Input('title') title: string;
    // @Input('users') users: User[];
    // @Output('childChanged') childChanged = new EventEmitter<string>();

    users: User[];

    myClasses = { 'feature': true, 'transform': false }
    myColor = 'Yellow';
    onKeyUp(value: string) {
        // this.childChanged.emit(value);
    }

    constructor(private dataService: DataService) {
        console.log("Constructor called");
    }
    moreInfo(user: User) {
        this.myClasses.transform = true;
        alert(`${user.firstName} is working with ${user.company}`);
    }

    ngOnInit() {
        console.log('ngOnInit fired!');
        this.dataService.getHttpClientData()
            .subscribe(data => {
                this.users = data;
            })
    }

    // ngOnChanges() {
    //     console.log('ngOnChanges fired!');
    // }
    // ngDoCheck() {
    //     console.log('ngDoCheck fired!');
    // }

    // ngAfterContentChecked() {
    //     console.log('ngAfterContentChecked fired!');
    // }
    // ngAfterContentInit() {
    //     console.log('ngAfterContentInit fired!');
    // }
    // ngAfterViewInit() {
    //     console.log('ngAfterViewInit fired!');
    // }
    // ngAfterViewChecked() {
    //     console.log('ngAfterViewChecked fired!');
    // }
    // ngOnDestroy() {
    //     console.log('ngOnDestroy fired!');
    // }

}