import { Injectable } from '@angular/core'
import { MOBILE_SCREEN_WIDTH } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class GlobalStateService {
    private _isMobile = false

    constructor() { }

    isMobile() {
        return this._isMobile
    }

    setMobile(screenWidth: number) {
        this._isMobile = screenWidth < MOBILE_SCREEN_WIDTH
    }
}
