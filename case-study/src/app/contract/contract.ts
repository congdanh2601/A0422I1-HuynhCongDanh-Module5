import {Customer} from "../customer/customer";
import {Facility} from "../service/facility";

export interface Contract {
  code: string;
  customer: Customer;
  service: Facility;
  startDate: string;
  endDate: string;
  deposit: number;

}
