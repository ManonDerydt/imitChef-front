import { Component, OnInit } from '@angular/core';
// import * as path from "path";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  jsonData: any=[];
  searchTerm: string = '';
  constructor() {
    this.initializeJSONData();
  }

  ngOnInit() {
  }
  filterData(ev: any){
    this.initializeJSONData();
    const val = ev.target.value;
    if(val && val.trim() != ''){
      this.jsonData = this.jsonData.filter((item)=> (item.name.toLowerCase().indexOf(val.toLowerCase())>-1));
    }
  }

  initializeJSONData(){
    this.jsonData = [
      {
        name: 'Choux de Bruxelles',
        code: 'CH',
        id: 'choux'
      },
      {
        name: 'Lentilles',
        code: 'LE',
        id: 'lentilles'
      },
      {
        name: 'Vanille',
        code: 'VA',
        id: 'vanille'
      },
      {
        name: 'Homard',
        code: 'HO',
        id: 'homard'
      },
    ];
  }

  selectVal(val){
    prompt('you have selected = ' + val );
    let result;
    if ( val === "Lentilles"){

    }

    };

  // ittemTapped(event, item){
  //   this.navCtrl.pushh(itemDetailsPage, {
  //     item: item
  //   })
  // }
  }
