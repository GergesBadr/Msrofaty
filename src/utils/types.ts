// Transactions

export enum TransactionCategories {
  transportation = "TRANSPORTATION",
  entertainment = "ENTERTAINMENT",
  subscription = "SUBSCRIPTION",
  shopping = "SHOPPING",
  salary = "SALARY",
  bills = "BILLS",
  food = "FOOD",
  others = "OTHERS",
}

export interface Transaction {
  id: string; // Generated with `uuid` library, so it's a string id not number.
  type: "income" | "expense";
  category: TransactionCategories;
  amount: number;
  description: string;
  date: string;
}

// User
export interface User {
  name: string;
  theme: "light" | "dark";
}

// Duration
export interface Duration {
  startDate: string;
  endDate: string;
}
