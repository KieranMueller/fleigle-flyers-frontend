import { Component, OnInit } from '@angular/core'
import { CarouselComponent } from '../../components/carousel/carousel.component'
import { SocialsComponent } from '../../components/socials/socials.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CarouselComponent, SocialsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    ngOnInit(): void {

    }
}
