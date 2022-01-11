import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
