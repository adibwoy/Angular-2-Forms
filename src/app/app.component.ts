import { Component } from '@angular/core';

import { Employee } from './models/employee.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    languages = ['English', 'Spanish', 'Other'];
    model = new Employee('Aditya', 'Bhandari', true, 'W2', 'English');
}
