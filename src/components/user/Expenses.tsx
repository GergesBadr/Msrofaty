import { getTotalExpense } from "../../app/features/transactionsSlice";
import { formatCurrency } from "../../utils/helpers";
import { Transaction } from "../../utils/types";
import FadeUp from "../common/FadeUp";
import ExpenseIcon from "../icons/ExpenseIcon";

interface Props {
  transactionsList: Transaction[];
}

export default function Expenses({ transactionsList }: Props) {
  const totalExpense = getTotalExpense(transactionsList);

  return (
    <FadeUp
      index={3}
      style="flex items-center gap-6 rounded-xl bg-white px-6 py-4"
    >
      <ExpenseIcon />
      <div>
        <p>المصروفات:</p>
        <p className="text-3xl font-medium">{formatCurrency(totalExpense)}</p>
      </div>
    </FadeUp>
  );
}
