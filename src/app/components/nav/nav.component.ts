import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
    constructor(private router: Router) { }

    navigate(option: 'insta' | 'fb') {
        switch (option) {
            case 'fb': {
                window.open('https://www.facebook.com/fleifly/', '_blank')
                break
            }
            case 'insta': {
                window.open('https://www.instagram.com/fleiglesflyers/?hl=en', '_blank')
                break
            }
        }
    }
}
