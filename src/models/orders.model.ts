import { Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces/orders.interface';

class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    // REF: https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
    const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds 
    FROM Trybesmith.Products AS p 
    INNER JOIN Trybesmith.Orders AS o ON p.OrderId = o.id GROUP BY p.orderId ORDER BY o.userId`;

    const [orders] = await this.connection.execute(query);
    console.log(orders);
    
    return orders as IOrders[];
  }
}

export default OrdersModel;