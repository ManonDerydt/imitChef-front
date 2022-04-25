import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../services/show.service";
import {ReciepeService} from "../../services/reciepe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Reciepe} from "../../models/reciepe";
import {Candidate} from "../../models/candidate";

@Component({
  selector: 'app-reciepe',
  templateUrl: './reciepe.page.html',
  styleUrls: ['./reciepe.page.scss'],
})
export class ReciepePage implements OnInit {
  reciepe : Reciepe = null;


  constructor(
      public ReciepeService : ReciepeService,
      private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.getReciepe();
  }

  getReciepe() {
    this.route.params.subscribe(async parameter => {

      const reciepeId: string = parameter.id
      this.ReciepeService.getReciepes(reciepeId)
          .subscribe((reciepe: Reciepe) => {
                this.reciepe = reciepe;
                console.log(this.reciepe);

              },
              error => {
                console.log(error);

              })
    })

  }

  displayPlate(){
    alert("Malheureusement cette option n'est pas encore disponible :(")
  }

}

