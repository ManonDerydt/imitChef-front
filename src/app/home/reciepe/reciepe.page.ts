import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../services/show.service";
import {ReciepeService} from "../../services/reciepe.service";
import {ActivatedRoute, Router} from "@angular/router";
import type {Reciepe} from "../../../types/Reciepe";

@Component({
  selector: 'app-reciepe',
  templateUrl: './reciepe.page.html',
  styleUrls: ['./reciepe.page.scss'],
})
export class ReciepePage implements OnInit {
  reciepe : Reciepe = null;


  constructor(
      public showService : ShowService,
      public ReciepeService : ReciepeService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.getReciepe();
  }

  // getReciepeById(id: string) {
  //   this.ReciepeService.getReciepeById(id)
  //       .subscribe((reciepe: any) => {
  //             this.reciepe = reciepe;
  //           },
  //           error => {
  //             console.log('error', error)
  //           })
  // }

  getReciepe() {
    this.route.params.subscribe(async parameter => {
      const reciepeId = Number(parameter.id)
      this.ReciepeService.getReciepes()
      .subscribe(
          (reciepes: Array<Reciepe>) => {
            this.reciepe = reciepes.find(reciepe => reciepe.id === reciepeId);
            console.log(this.reciepe)
          },
          error => {
            console.log('error', error)
          })
    })

  }

    // openShowById($reciepe: any = {}) {
    //     // @ts-ignore
    //     this.router.navigate(['home/reciepe', $reciepe.id]);
    // }

    // getReciepe(id: string) {
    //     this.ReciepeService.getReciepeById(id)
    //         .subscribe((reciepe: any) => {
    //                 this.reciepe = reciepe;
    //             },
    //             error => {
    //                 console.log('error', error)
    //             })
    // }

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

