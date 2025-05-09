import { Routes } from '@angular/router'
import { HomeComponent } from './views/home/home.component'
import { BiosComponent } from './views/bios/bios.component'
import { RegistrationComponent } from './views/registration/registration.component'
import { CoachesComponent } from './views/coaches/coaches.component'

export const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'bios', component: BiosComponent, pathMatch: 'full' },
    { path: 'register', component: RegistrationComponent, pathMatch: 'full' },
    { path: 'coaches', component: CoachesComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
]
