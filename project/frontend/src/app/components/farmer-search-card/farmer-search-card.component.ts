import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FarmersService } from './../../providers/farmers.service'; //'src/app/providers/farmers.service';
import { Farmer } from './../../models/farmer.model';

@Component({
  selector: 'app-farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {

  // Search Value
  @Input() selected_farmer: Farmer;

  // Search Value
  search: string;

  // Event setTimeOut Container
  timeOutLocker: any;

  // If is Searching
  is_loading: boolean = false;

  @Output() onFarmersSearchEmitEvents = new EventEmitter();

  constructor( private farmersService: FarmersService ) 
  {}

  ngOnInit() 
  {}

  async onKeyUpFarmer(e)
  {
    
    let _self = this;
    let actual_value = e.target.value.trim();

    // Remove value of farmer
    this.selected_farmer = null;

    this.onFarmersSearchEmitEvents.emit( {list_farmers: null} )

    if( _self.timeOutLocker && _self.timeOutLocker !== null ){
      clearTimeout( _self.timeOutLocker );
      _self.timeOutLocker = null;
    }

    if( actual_value && actual_value != "" ){

      _self.is_loading = true;

      _self.timeOutLocker = setTimeout(() => {

        if( _self.search !== actual_value ){

          _self.search = actual_value;
          _self.getSuggestions( _self.search );
          _self.is_loading = false;

        } else {
          _self.is_loading = false;
        }

      }, 1000 );

    } else {
      _self.is_loading = false;
    }

  }

  async getSuggestions( value )
  {

    let response = await this.farmersService.listFarmers( value );

    if( response.length == 1 ){
      this.selected_farmer = response[0]
    }
console.log('enviou')
    this.onFarmersSearchEmitEvents.emit({ list_farmers: response })

    return true;

  }

}
