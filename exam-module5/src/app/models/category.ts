import {Product} from "./product";

export interface Category {
  id?: string;
  product?: Product;
  amount?: number;
  importDate?: string;
  exportDate?: string;
  expireDate?: string;
}
