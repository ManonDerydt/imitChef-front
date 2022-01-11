import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../../services/show.service";
import {Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {ChooseShowService} from "../../../services/chooseShow.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  shows: Array<{}> = [];
  private router: Router;
  private showId: number




  constructor(
      public showService : ShowService,
      public chooseShowService : ChooseShowService,
  ) {}

  ngOnInit() {
    // this.getAllShow(this.showsId);
    //   console.log(this.showsId)
    // return this.showsId

  }

    getAllShow($show: any = {}) {
        console.log("hello world")
        this.chooseShowService.getAllShow()
            .subscribe((shows: Array<{}>) => {
                    this.shows = shows;
                    this.shows.forEach((show: any = {}) => {
                        let IdByShow = show.id;
                        console.log(IdByShow)
                    })
                },
                error => {
                    console.log('error', error)
                })
    }

    openShowById($show: any = {}) {
        this.router.navigate(['/show', $show.id]);
        console.log($show.id)
    }

  // getAllShow() {
  //   this.showService.getAllShow()
  //       .subscribe((shows: Array<{}>) => {
  //             this.shows = shows;
  //             this.shows.forEach((show: any = {}) => {
  //               console.log(show)
  //             })
  //           },
  //           error => {
  //             console.log('error', error)
  //           })
  // }

//
//   addColorFavorite(){
//     this.buttonColor = '#FF0000';
//   }
//
//
//
//   filterData(ev: any){
//     this.initializeJSONData();
//     const val = ev.target.value;
//     if(val && val.trim() != ''){
//       this.jsonData = this.jsonData.filter((item)=> (item.name.toLowerCase().indexOf(val.toLowerCase())>-1));
//     }
// }
//
//   initializeJSONData(){
//     this.jsonData = [
//       {
//         name: 'Choux de Bruxelles',
//         code: 'CH'
//       },
//       {
//         name: 'Lentilles',
//         code: 'LE'
//       },
//       {
//         name: 'Vanille',
//         code: 'VA'
//       },
//       {
//         name: 'Homard',
//         code: 'HO'
//       }
//     ];
//   }
//
//   selectVal(val){
//     alert('you have selected = ' + val );
//   };
//
//   eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/naming-convention

//   plats_top_chef = [
//     {
//       title: 'Choux de Bruxelles',
//       id:"1",
//       photo: '../../assets/top-chef/plats-top-chef/plat-1-top.jpg',
//       path: '/reciepe',
//       cooker: '../../assets/top-chef/candidats/thomas-top-chef.webp',
//       titleDescription:  "Hello",
//       description: "Lorem ipsum cette recette c'est la best"
//
//     },
//     {
//       title: 'Noix de Saint Jacques',
//       id:"2",
//       photo: '../../assets/top-chef/plats-top-chef/plat-3-top.jpg',
//       path: '/reciepe',
//       cooker: '../../assets/top-chef/candidats/arnaud-top-chef.webp',
//       titleDescription:  "Hello",
//       description: "Lorem ipsum cette recette c'est la best"
//     },
//     {
//       title: 'Pommes facies',
//       id:"3",
//       photo: '../../assets/top-chef/plats-top-chef/plat-4-top.jpeg',
//       path: '/reciepe',
//       cooker: '../../assets/top-chef/candidats/chloe-top-chef.webp',
//       titleDescription:  "Hello",
//       description: "Lorem ipsum cette recette c'est la best"
//     },
//     {
//       title: 'Homard revisité',
//       id:"4",
//       photo: '../../assets/top-chef/plats-top-chef/plat-2-top.jpeg',
//       path: '/reciepe',
//       cooker: '../../assets/top-chef/candidats/mathias-top-chef.webp',
//       titleDescription:  "Hello",
//       description: "Lorem ipsum cette recette c'est la best"
//     },
//   ];
//
//
//   candidat_top_chef = [
//     {
//       name: 'Mathias',
//       photo: '../../assets/top-chef/candidats/mathias-top-chef.webp',
//       path: '/mathias'
//     },
//     {
//       name: 'Bruno',
//       photo: '../../assets/top-chef/candidats/bruno-top-chef.webp',
//       path: '/bruno'
//     },
//     {
//       name: 'Chloé',
//       photo: '../../assets/top-chef/candidats/chloe-top-chef.webp',
//       path: '/chloe'
//     },
//     {
//       name: 'Thomas',
//       photo: '../../assets/top-chef/candidats/thomas-top-chef.webp',
//       path: '/thomas'
//     },
//   {
//     name: 'Arnaud',
//     photo: '../../assets/top-chef/candidats/arnaud-top-chef.webp',
//     path: '/thomas'
//   },
//   {
//     name: 'Charline',
//     photo: '../../assets/top-chef/candidats/charline-top-chef.webp',
//     path: '/thomas'
//   },
//   {
//     name: 'Pierre',
//     photo: '../../assets/top-chef/candidats/pierre-top-chef.webp',
//     path: '/thomas'
//   },
//   ];
//
//
// }
// showMovementReport(){
//   if(this.toggled){
//     this.buttonColor = '#345465';
//     this.toggled = false;
//   }
//   else{
//     this.buttonColor = '#ffffff'; //hex code for previous color
//     this.toggled = true;
//   }
}
