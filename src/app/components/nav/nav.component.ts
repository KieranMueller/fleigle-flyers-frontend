import { Component, HostListener, OnInit } from '@angular/core'
import { GlobalStateService } from '../../shared/global-state.service'
import { NavigateService } from '../../shared/navigate.service'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import { filter } from 'rxjs'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
    dropdownOpen = false
    home = ['Home', 'home']
    links: any = []
    _links = new Map<string, string>()
    currentLink: null | number = null
    onHomePage = false

    constructor(public globalState: GlobalStateService, public navService: NavigateService, private route: Router) { }

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
        this.route.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                const currentEndpoint = event.urlAfterRedirects
                if (currentEndpoint === '/home') this.onHomePage = true
                else this.onHomePage = false
                for (let i = 0; i < this._links.size; i++) {
                    if (currentEndpoint === '/' + this.links[i][1]) {
                        this.currentLink = i
                        break
                    } else this.currentLink = null
                }
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
