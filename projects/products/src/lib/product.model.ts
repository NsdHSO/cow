export interface Product {
  id : number;
  name : string;
  cost : number;
  ranting : number;
  love : boolean;
  images : ProductImage[];
}

export interface ProductImage {
  fileName : string;
}
