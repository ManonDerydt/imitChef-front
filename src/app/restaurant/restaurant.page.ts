import {Component, OnInit, ViewChild} from '@angular/core';
import {Reciepe} from "../models/reciepe";
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../services/restaurant.service";
import {Restaurant} from "../models/restaurant";
import {ReciepeService} from "../services/reciepe.service";
import {Candidate} from "../models/candidate";
import {CalendarComponent, NgCalendarModule} from 'ionic2-calendar';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
    public restaurant = new Restaurant();

  constructor(
      public RestaurantService : RestaurantService,
      private route: ActivatedRoute,
  ) { }

    ngOnInit() {
        this.getRestaurantById();
    }

    getRestaurantById() {
        this.route.params.subscribe(async parameter => {

            const restaurantId: string = parameter.id
            this.RestaurantService.getRestaurant(restaurantId)
                .subscribe((restaurant: Restaurant) => {
                        this.restaurant = restaurant;
                    },
                    error => {
                        console.log(error);
                    })
        })
    }


}
