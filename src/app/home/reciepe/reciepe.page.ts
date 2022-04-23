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
    alert("Malheureusement, cette option n'est pas encore disponible :(")
  }

  reciepes = [
    {
      title: 'Choux de Bruxelles',
      subtitle: 'Servi avec des frites',
      time : '30 min.',
      preparation : 'Préparation',
      calories : 'Calories',
      level : 'Intermédiaire',
      photo: '../../assets/top-chef/plats-top-chef/plat-1-top.jpg',
      cooker: '../../assets/top-chef/candidats/thomas-top-chef.webp',
      description: '  Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,\n' +
        '      le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée. Généralement, on utilise un\n' +
        '      texte en faux latin, le Lorem ipsum ou Lipsum.'
    },
    {
      title: 'Noix de Saint Jacques',
      subtitle: 'Servi avec des frites',
      time : '30 min.',
      preparation : 'Préparation',
      calories : 'Calories',
      level : 'Intermédiaire',
      photo: '../../assets/top-chef/plats-top-chef/plat-3-top.jpg',
      cooker: '../../assets/top-chef/candidats/arnaud-top-chef.webp',
      description: '  Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,\n' +
        '      le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée. Généralement, on utilise un\n' +
        '      texte en faux latin, le Lorem ipsum ou Lipsum.'
    },
    {
      title: 'Pommes facies',
      subtitle: 'Servi avec des frites',
      time : '30 min.',
      preparation : 'Préparation',
      calories : 'Calories',
      level : 'Intermédiaire',
      photo: '../../assets/top-chef/plats-top-chef/plat-4-top.jpeg',
      cooker: '../../assets/top-chef/candidats/chloe-top-chef.webp',
      description: '  Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,\n' +
        '      le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée. Généralement, on utilise un\n' +
        '      texte en faux latin, le Lorem ipsum ou Lipsum.'
    },
    {
      title: 'Homard revisité',
      subtitle: 'Servi avec des frites',
      time : '30 min.',
      preparation : 'Préparation',
      calories : 'Calories',
      level : 'Intermédiaire',
      photo: '../../assets/top-chef/plats-top-chef/plat-2-top.jpeg',
      cooker: '../../assets/top-chef/candidats/mathias-top-chef.webp',
      description: '  Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,\n' +
        '      le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée. Généralement, on utilise un\n' +
        '      texte en faux latin, le Lorem ipsum ou Lipsum.'
    },
  ];
}

