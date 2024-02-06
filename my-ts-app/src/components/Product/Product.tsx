import React, { FC } from 'react';
import { ProductWrapper } from './Product.styled';

interface ProductProps {}

const Product: FC<ProductProps> = () => (
 <ProductWrapper data-testid="Product">
    Product Component
 </ProductWrapper>
);

export default Product;
