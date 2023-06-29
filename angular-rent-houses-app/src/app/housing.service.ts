import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://media.gettyimages.com/id/595504906/pt/foto/three-small-houses-in-row.jpg?s=612x612&w=gi&k=20&c=s8PFRZIBePCCFELZv9bQSyCIYgcXJWeQ935be97J9lw=',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://images.arquidicas.com.br/wp-content/uploads/2015/06/26223436/modernas-casas.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://vasselai.imb.br/storage/properties/images/828/bjflf1bDn5le6rnMNnEyS0D7B1fF5jOLNYjEef8P.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: 'https://portal.loft.com.br/wp-content/uploads/2022/12/casa-luxo-Casa-gamereira-rn-2-Olaa-Arquitetos.jpeg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://static.wixstatic.com/media/1bba87_000fdde40f714a8f99b412fd80ecf8a8~mv2.jpeg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bba87_000fdde40f714a8f99b412fd80ecf8a8~mv2.jpeg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://casasavendaorlando.com.br/wp-content/uploads/casas-estados-unidos.jpeg.webp',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://www.casadevalentina.com.br/wp-content/uploads/2022/12/31052022-IMG_9559-HDR-3-scaled.jpeg.optimal.jpeg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: 'https://static.wixstatic.com/media/1bba87_000fdde40f714a8f99b412fd80ecf8a8~mv2.jpeg/v1/fill/w_640,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1bba87_000fdde40f714a8f99b412fd80ecf8a8~mv2.jpeg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }



}
