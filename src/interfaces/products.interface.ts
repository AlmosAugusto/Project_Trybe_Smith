export interface IProducts {
  id?: number;
  name: string;
  amount: string;
  orderId?: number | null;
}

// REF: uso do Omit https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
export type ICreatedProduct = Omit<IProducts, 'id' | 'orderId'>;