import { ProductCard as ProductCardHoc } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHoc, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})