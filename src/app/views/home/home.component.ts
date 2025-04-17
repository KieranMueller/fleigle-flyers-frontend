import { Component, OnInit } from '@angular/core'
import { CarouselComponent } from '../../components/carousel/carousel.component'
import { GlobalStateService } from '../../shared/global-state.service'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CarouselComponent, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    constructor(public globalState: GlobalStateService) { }

    ngOnInit(): void {
        this.globalState.setMobile(window.innerWidth)
    }
}
