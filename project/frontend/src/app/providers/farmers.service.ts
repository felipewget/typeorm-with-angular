import { Injectable } from '@angular/core';
import axios from 'axios';
import { Farmer } from '../models/farmer.model'

@Injectable({
  providedIn: 'root'
})
export class FarmersService {

  response_farmer: Farmer[]

  constructor() 
  {}

  async listFarmers( search )
  {

    let auth_token = 123456;

    let url = `http://localhost:3333/farmer/search`
    let { data } = await axios.get<Farmer[]>( url, {
      params  : { search: search },
      headers : { auth_token: auth_token }
    });

    return data;

  }

}
