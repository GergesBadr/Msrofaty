import { formatCurrency } from "../../utils/helpers";
import { Transaction } from "../../utils/types";
import OpacityIn from "../common/OpacityIn";
import BalanceIcon from "../icons/BalanceIcon";
import ExpenseIcon from "../icons/ExpenseIcon";
import IncomeIcon from "../icons/IncomeIcon";

interface Props {
  filteredTransactions: Transaction[];
}

export default function Totals({ filteredTransactions }: Props) {
  const totalIncome = filteredTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, currT) => sum + currT.amount, 0);

  const totalExpenses = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((sum, currT) => sum + currT.amount, 0);

  const totalBalance = totalIncome - totalExpenses;
  return (
    <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:gap-8 [&>div]:w-full">
      <OpacityIn
        index={3}
        style="flex items-center gap-6 rounded-xl bg-indigo-50 px-6 py-4"
      >
        <BalanceIcon />
        <div>
          <p>الرصيد:</p>
          <p className="text-2xl font-medium">{formatCurrency(totalBalance)}</p>
        </div>
      </OpacityIn>

      <OpacityIn
        index={4}
        style="flex items-center gap-6 rounded-xl bg-indigo-50 px-6 py-4"
      >
        <IncomeIcon />
        <div>
          <p>الدخل:</p>
          <p className="text-2xl font-medium">{formatCurrency(totalIncome)}</p>
        </div>
      </OpacityIn>

      <OpacityIn
        index={5}
        style="flex items-center gap-6 rounded-xl bg-indigo-50 px-6 py-4"
      >
        <ExpenseIcon />
        <div>
          <p>المصروفات:</p>
          <p className="text-2xl font-medium">
            {formatCurrency(totalExpenses)}
          </p>
        </div>
      </OpacityIn>
    </div>
  );
}
