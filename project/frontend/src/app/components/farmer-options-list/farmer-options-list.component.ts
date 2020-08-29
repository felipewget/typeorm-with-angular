import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Farmer } from './../../models/farmer.model'

@Component({
  selector: 'app-farmer-options-list',
  templateUrl: './farmer-options-list.component.html',
  styleUrls: ['./farmer-options-list.component.css']
})
export class FarmerOptionsListComponent implements OnInit {

  @Input() farmers: Farmer[] = [];

  @Output() onFarmerListEmitEvents = new EventEmitter();

  selectFarmer( farmer )
  {
    this.onFarmerListEmitEvents.emit({ select_farmer: farmer })
  }

  constructor() 
  {}

  ngOnInit() 
  {}

}
