import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class NavigateService {

    constructor() { }

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
}
