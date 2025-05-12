import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'

@Component({
    selector: 'app-coach-details',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './coach-details.component.html',
    styleUrl: './coach-details.component.scss'
})
export class CoachDetailsComponent implements OnInit {
    currentCoach = ''

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.currentCoach = this.route.snapshot.params['name']
    }
}
