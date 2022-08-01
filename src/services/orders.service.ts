import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll() {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrdersService;