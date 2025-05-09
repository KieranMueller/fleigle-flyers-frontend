import { Component } from '@angular/core'
import { GlobalStateService } from '../../shared/global-state.service'
import { CommonModule } from '@angular/common'
import { NavigateService } from '../../shared/navigate.service'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

    constructor(public globalState: GlobalStateService, public navService: NavigateService) { }
}
