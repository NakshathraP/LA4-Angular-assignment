import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Amalfi Coast',
      city: 'Positano',
      country: 'Italy',
      photo: 'https://www.visafirst.com/blog/wp-content/uploads/2022/07/Positano-Amalfi-Coast-Italy.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Le Saint Géran',
      city: 'Poste de Flacq',
      country: 'Mauritius',
      photo: 'https://i.pinimg.com/1200x/b5/c7/ef/b5c7efb630086c2da2cc42f38f018a5d.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'The Eiffel Tower',
      city: 'Paris',
      country: 'Paris',
      photo: 'https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/06/cyril-mazarin-WSvth_lwCi0-unsplash-scaled.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Malwan',
      city: 'Maharashtra',
      country: 'India',
      photo: 'https://peopleplaces.in/wp-content/uploads/2023/04/Malvan-Best-summer-destinations-in-Maharashtra.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'El Nido',
      city: 'Palawan',
      country: 'Phillipines',
      photo: 'https://handluggageonly.co.uk/wp-content/uploads/2018/12/Hand-Luggage-Only-10-5.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Boracay Islands',
      city: 'Boracay',
      country: 'Hong Kong',
      photo: 'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/12/22224603/boracay-travel-guide-philippines-beach.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}