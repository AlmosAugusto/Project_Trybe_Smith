import ProductsModel from '../models/products.model';
import { IProducts, ICreatedProduct } from '../interfaces/products.interface';
import connection from '../models/connection';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProducts[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: ICreatedProduct): Promise<IProducts> {
    const createdProduct = await this.model.create(product);
    return createdProduct;
  }
}

export default ProductsService;