import { Component, OnInit, Input } from '@angular/core';
import { Farmer } from './../../models/farmer.model'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  listFarmers: Farmer[] = [];
  selected_farmer: Farmer;

  constructor() { }

  changeListFarmers( e )
  {
    
    switch(true){
      case e.list_farmers !== undefined :
        this.listFarmers = e.list_farmers;
        break;
      case e.select_farmer !== undefined:
        this.selected_farmer = e.select_farmer;
        break;

    }
    
  }

  ngOnInit() 
  {}

}
