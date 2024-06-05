export interface Payer {
  value: string;
  label: string;
}

export interface Bill {
  price: number;
  expense: number;
  expenseFriend: number;
  payer: Payer;
}
