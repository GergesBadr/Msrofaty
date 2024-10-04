import { motion } from "framer-motion";
import { Transaction } from "../../utils/types";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { FaDollarSign } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import { MdNumbers } from "react-icons/md";

interface Props {
  filteredTransactions: Transaction[];
}

export default function DurationStatistics({ filteredTransactions }: Props) {
  const mostExpensiveDay: Transaction = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((max, curr) => (curr.amount > max.amount ? curr : max));

  const averageDayExpense = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((sum, curr, _, arr) => sum + curr.amount / arr.length, 0);

  const totalExpensesLength = filteredTransactions.filter(
    (t) => t.type === "expense",
  ).length;

  return (
    <div className="space-y-6">
      {/* Most expensive day */}
      <motion.div
        className="space-y-4 rounded-xl border-2 px-6 py-4"
        whileHover={{ rotate: -3 }}
        transition={{ type: "spring", stiffness: 750, damping: 12 }}
      >
        <FaDollarSign className="size-12 rounded-full bg-indigo-100 p-3" />
        <p className="text-4xl font-medium text-indigo-600">
          {formatDate(mostExpensiveDay.date)}
        </p>
        <p className="text-gray-500">
          أكثر يوم من حيث المصروفات ({formatCurrency(mostExpensiveDay.amount)})
        </p>
      </motion.div>

      {/* Avearge expense spend */}
      <motion.div
        className="space-y-4 rounded-xl border-2 px-6 py-4"
        whileHover={{ rotate: 3 }}
        transition={{ type: "spring", stiffness: 750, damping: 12 }}
      >
        <HiChartBar className="size-12 rounded-full bg-indigo-100 p-3" />
        <p className="text-4xl font-medium text-indigo-600">
          {formatCurrency(averageDayExpense)}
        </p>
        <p className="text-gray-500">متوسط المصروفات يوميًا</p>
      </motion.div>

      {/* Total expense transactions `number` */}
      <motion.div
        className="space-y-4 rounded-xl border-2 px-6 py-4"
        whileHover={{ rotate: -3 }}
        transition={{ type: "spring", stiffness: 750, damping: 12 }}
      >
        <MdNumbers className="size-12 rounded-full bg-indigo-100 p-3" />
        <p className="text-4xl font-medium text-indigo-600">
          {totalExpensesLength} معاملات
        </p>
        <p className="text-gray-500">عدد مجموع المصروفات</p>
      </motion.div>
    </div>
  );
}
