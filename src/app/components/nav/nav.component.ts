import { Component, HostListener, OnInit } from '@angular/core'
import { GlobalStateService } from '../../shared/global-state.service'
import { NavigateService } from '../../shared/navigate.service'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
    dropdownOpen = false
    links: any = []
    _links = new Map<string, string>()

    constructor(public globalState: GlobalStateService, public navService: NavigateService) { }

    ngOnInit() {
        this.globalState.setMobile(window.innerWidth)
        window.addEventListener('resize', () => {
            this.globalState.setMobile(window.innerWidth)
        })
        this._links.set('About', 'about')
        this._links.set('Events', 'events')
        this._links.set('Coaches', 'coaches')
        this._links.set('Resources', 'resources')
        this._links.set('Register', 'register')
        this.links = Array.from(this._links.entries())
        console.log(this.links)
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
