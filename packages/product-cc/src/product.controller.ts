import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Product } from './product.model';

@Controller('product')
export class ProductController extends ConvectorController {
  @Invokable()
  public async create(
    @Param(Product)
    product: Product
  ) {
    await product.save();
  }
}