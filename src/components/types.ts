export interface User {
  id: number;
  name: string;
  balance: number;
  img: string;
  isSelected: boolean;
}

export interface Bill {
  value: number;
  yourExpense: number;
  friendExpense: number;
  payer: string;
}
