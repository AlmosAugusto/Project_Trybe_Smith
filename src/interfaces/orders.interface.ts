export interface IOrders {
  id: number;
  userId: number;
  productsIds: number[] | number;
}

export type IOrdersArray = Omit<IOrders, 'productsIds'>;