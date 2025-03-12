import { Component } from '@angular/core'

@Component({
    selector: 'app-socials',
    standalone: true,
    imports: [],
    templateUrl: './socials.component.html',
    styleUrl: './socials.component.scss'
})
export class SocialsComponent {
    socialRoute(location: 'facebook' | 'instagram') {
        switch (location) {
            case 'facebook': {
                window.open('https://www.facebook.com/fleifly/', '_blank')
                break
            }
            case 'instagram': {
                window.open('https://www.instagram.com/fleiglesflyers/?hl=en', '_blank')
                break
            }
        }
    }
}
