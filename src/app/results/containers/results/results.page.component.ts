import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
     selector: 'app-results-page',
     templateUrl: 'results.page.component.html',
})
export class ResultsPageComponent implements OnInit {
     score: number;

     constructor(private router: Router, private route: ActivatedRoute) {}

     ngOnInit(): void {
          this.route.queryParams.subscribe(params => {
               this.score = params.score;
          });
     }

     public restart(): void {
          this.router.navigate(['/quiz']);
     }

     public submit(): void {
          this.router.navigate(['/submit']);
     }
}
