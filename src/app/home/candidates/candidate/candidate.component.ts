import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Candidate } from '../../../models/candidate';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent implements OnInit {
  public candidate = new Candidate();

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidatesService
  ) {
    this.route.params.subscribe(async parameter => {
      const candidateId: string = parameter.id
      this.candidateService.getCandidateById(candidateId)
        .subscribe((candidate: Candidate) => {
          this.candidate = candidate;
          console.log(this.candidate);
          
        },
          error => {
            console.log(error);

          })
      console.log(candidateId);


    })
  }

  ngOnInit() { }

}
