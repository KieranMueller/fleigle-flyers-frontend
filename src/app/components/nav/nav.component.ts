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

    navigate(destination: 'home' | 'bio' | 'registration') {
        switch (destination) {
            case 'home': {
                this.router.navigateByUrl('/home')
                break
            }
            case 'bio': {
                this.router.navigateByUrl('/bios')
                break
            }
            case 'registration': {
                this.router.navigateByUrl('/register')
                break
            }
        }
    }
}
