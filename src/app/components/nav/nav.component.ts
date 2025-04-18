import { Component, OnInit } from '@angular/core'
import { GlobalStateService } from '../../shared/global-state.service'

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
    dropdownOpen = false
    links = ['About', 'Events', 'Coaches', 'Resources', 'Register']

    constructor(public globalState: GlobalStateService) { }

    ngOnInit() {
        this.globalState.setMobile(window.innerWidth)
        window.addEventListener('resize', () => {
            this.globalState.setMobile(window.innerWidth)
        })
    }

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

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen
    }
}
