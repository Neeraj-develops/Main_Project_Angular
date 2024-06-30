import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places : Place[] = [
     new Place(
      'p1',
      'Gokarna',
      'A place where time slows down',
      'https://images.unsplash.com/photo-1714466330772-097c1f9c43cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzfGVufDB8fDB8fHww',
      100
     ),
     new Place(
      'p2',
      'Goa',
      'A place where you can enjoy',
      'https://plus.unsplash.com/premium_photo-1697729600112-434ee1c7f670?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww',
      300
     ),
     new Place(
      'p3',
      'Jaipur',
      'A city of palaces',
      'https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8fDB8fHww',
      200
     )
  ];

  get places(){
    return [...this._places]
  }

  constructor() { }
}
