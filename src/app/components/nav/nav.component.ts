import { Component, HostListener, OnInit } from '@angular/core'
import { GlobalStateService } from '../../shared/global-state.service'
import { NavigateService } from '../../shared/navigate.service'

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

    constructor(public globalState: GlobalStateService, public navService: NavigateService) { }

    ngOnInit() {
        this.globalState.setMobile(window.innerWidth)
        window.addEventListener('resize', () => {
            this.globalState.setMobile(window.innerWidth)
        })
    }

    @HostListener('click', ['$event'])
    handleClick(event: any) {
        if (event.target.classList.contains('dropdown-backdrop'))
            this.dropdownOpen = false
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen
    }
}
