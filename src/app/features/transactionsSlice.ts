import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { Duration, Transaction } from "../../utils/types";

const storedTransactions = localStorage.getItem("transactions");

const initialState: { transactionsList: Transaction[] } = {
  transactionsList: storedTransactions ? JSON.parse(storedTransactions) : [],
};

export const transactionsSlice = createSlice({
  initialState,
  name: "transactions",
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      // 1. Add new transaction to state
      const newTransaction = {
        ...action.payload,
        id: uuidv4(),
      };
      state.transactionsList.push(newTransaction);
      // 2. Add state to local storage
      localStorage.setItem(
        "transactions",
        JSON.stringify(state.transactionsList),
      );
      // 3. Notification
      toast.success("تمت إضافة المعاملة بنجاح.");
    },

    deleteTransaction: (state, action: PayloadAction<string>) => {
      // 1. Filter the transaction with the matchin id
      const newList = state.transactionsList.filter(
        (t) => t.id !== action.payload,
      );
      state.transactionsList = newList;
      // 2. Update local storage
      localStorage.setItem(
        "transactions",
        JSON.stringify(state.transactionsList),
      );
      // 3. Notification
      toast.success("تم حذف المعاملة بنجاح.");
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;

// Calculate income
export const getTotalIncome = (transactions: Transaction[]): number => {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);
};

// Calculate expense
export const getTotalExpense = (transactions: Transaction[]): number => {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);
};

// Calculate balance
export const getTotalBalance = (transactions: Transaction[]): number => {
  return getTotalIncome(transactions) - getTotalExpense(transactions);
};

// Get expenses by category (for distribution)
export const getExpensesByCategory = (transactions: Transaction[]) => {
  // 1. Select all expenses
  const expenses = transactions.filter((t) => t.type === "expense");

  // 2. Iterate over expenses, for each transaction add its `amount` to the relevant `category`
  return expenses.reduce(
    (totals, { category, amount }) => {
      totals[category] = (totals[category] || 0) + amount;
      return totals;
    },
    {} as Record<string, number>,
  );
};

// Get transactions by duration
export const getTransactionsByDuration = (
  duration: Duration,
): Transaction[] => {
  // Get transactions at the start date
  const transactionsWithStartDate = initialState.transactionsList.filter(
    (t) => {
      return t.date.startsWith(duration.startDate);
    },
  );

  // Get transactions at the end date
  const transactionsWithEndDate = initialState.transactionsList.filter((t) => {
    return t.date.startsWith(duration.endDate);
  });

  // Combine both transactions
  const combinedTransactions = [
    ...transactionsWithStartDate,
    ...transactionsWithEndDate,
  ];

  // Remove duplicates based on 'id'
  const uniqueTransactions = combinedTransactions.filter(
    (transaction, index, self) =>
      index === self.findIndex((t) => t.id === transaction.id),
  );

  return uniqueTransactions;
};

export default transactionsSlice.reducer;
