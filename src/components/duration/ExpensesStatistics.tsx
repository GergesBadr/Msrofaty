import { Transaction } from "../../utils/types";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { FaDollarSign } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { MdNumbers } from "react-icons/md";
import { TbCurrencyDollarOff } from "react-icons/tb";

interface Props {
  filteredTransactions: Transaction[];
}

export default function ExpensesStatistics({ filteredTransactions }: Props) {
  const expenseTransactions = filteredTransactions.filter(
    (t) => t.type === "expense",
  );

  const mostExpensiveDay: Transaction = expenseTransactions.reduce(
    (max, curr) => (curr.amount > max.amount ? curr : max),
  );

  const leastExpensiveDay: Transaction = expenseTransactions.reduce(
    (max, curr) => (curr.amount > max.amount ? max : curr),
  );

  const averageDayExpense = expenseTransactions.reduce(
    (sum, curr, _, arr) => sum + curr.amount / arr.length,
    0,
  );

  const totalExpensesLength = expenseTransactions.length;

  return (
    <div className="space-y-6">
      <p className="text-center text-2xl">إحصائيات مختلفة:</p>

      {/* Most expensive day */}
      <div className="space-y-4 rounded-xl border-2 px-6 py-4 dark:border-gray-700">
        <FaDollarSign className="size-12 rounded-full bg-indigo-100 p-3 dark:bg-gray-800" />
        <p className="text-4xl font-medium text-indigo-600 dark:text-indigo-400">
          {formatDate(mostExpensiveDay.date)}
        </p>
        <p className="sec-text">
          أكثر يوم من حيث المصروفات ({formatCurrency(mostExpensiveDay.amount)})
        </p>
      </div>

      {/* Least expensive day */}
      <div className="space-y-4 rounded-xl border-2 px-6 py-4 dark:border-gray-700">
        <TbCurrencyDollarOff className="size-12 rounded-full bg-indigo-100 p-3 dark:bg-gray-800" />
        <p className="text-4xl font-medium text-indigo-600 dark:text-indigo-400">
          {formatDate(leastExpensiveDay.date)}
        </p>
        <p className="sec-text">
          أقل يوم من حيث المصروفات ({formatCurrency(leastExpensiveDay.amount)})
        </p>
      </div>

      {/* Avearge expense spend */}
      <div className="space-y-4 rounded-xl border-2 px-6 py-4 dark:border-gray-700">
        <HiChartBar className="size-12 rounded-full bg-indigo-100 p-3 dark:bg-gray-800" />
        <p className="text-4xl font-medium text-indigo-600 dark:text-indigo-400">
          {formatCurrency(averageDayExpense)}
        </p>
        <p className="sec-text">متوسط المصروفات يوميًا</p>
      </div>

      {/* Total expense transactions `number` */}
      <div className="space-y-4 rounded-xl border-2 px-6 py-4 dark:border-gray-700">
        <MdNumbers className="size-12 rounded-full bg-indigo-100 p-3 dark:bg-gray-800" />
        <p className="text-4xl font-medium text-indigo-600 dark:text-indigo-400">
          {totalExpensesLength} معاملات
        </p>
        <p className="sec-text">عدد مجموع المصروفات</p>
      </div>
    </div>
  );
}
