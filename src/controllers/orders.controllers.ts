import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'; // REF: conteudo do Course "Instalando o Express e inicializando a aplicação"
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private service: OrdersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    return res.status(StatusCodes.OK).json(orders);
  };
}

export default OrdersController;