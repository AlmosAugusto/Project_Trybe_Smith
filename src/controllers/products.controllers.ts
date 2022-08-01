import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'; // REF: conteudo do Course "Instalando o Express e inicializando a aplicação"
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private service: ProductsService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const createdProduct = await this.service.create(req.body);
    return res.status(StatusCodes.CREATED).json(createdProduct);
  };
}

export default ProductsController;