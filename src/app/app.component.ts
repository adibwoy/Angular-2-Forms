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
    model = new Employee('', '', true, '', 'default');
    hasPrimaryLanguageError = false;

    validatePrimaryLanguage(value) {
        if(value === 'default') {
            this.hasPrimaryLanguageError = true;
        } else {
            this.hasPrimaryLanguageError = false;
        }
    }
}
