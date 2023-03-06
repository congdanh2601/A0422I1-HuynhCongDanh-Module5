import {Facility} from "./facility";

export class FacilityService {
  private services: Facility[] = [];

  constructor() {
    this.services.push({
      name: 'Room',
      area: 1000,
      price: 10000,
      capacity: 4,
      rentType: 'byWeek',
      photo: 'https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr.jpg'
    })
    this.services.push({
      name: 'House',
      area: 1500,
      price: 15000,
      capacity: 5,
      rentType: 'byMonth',
      photo: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F.jpg'
    })
    this.services.push({
      name: 'Villa',
      area: 500,
      price: 5000,
      capacity: 3,
      rentType: 'byDay',
      photo: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas.jpg'
    })
  }

  public findAllFacilities() {
    return this.services;
  }
}
