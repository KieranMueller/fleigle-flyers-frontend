import { Component, OnInit } from '@angular/core'
import { CarouselComponent } from '../../components/carousel/carousel.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CarouselComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    ngOnInit(): void {

    }

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
