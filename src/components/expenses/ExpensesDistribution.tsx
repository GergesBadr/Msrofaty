import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  getExpensesByCategory,
  getTotalExpense,
} from "../../app/features/transactionsSlice";
import { useAppSelector } from "../../app/hooks";
import EmptyExpenses from "./EmptyExpenses";
import OpacityIn from "../common/OpacityIn";

export default function ExpensesDistribution() {
  const COLORS = [
    "#a855f7",
    "#3b82f6",
    "#14b8a6",
    "#84cc16",
    "#eab308",
    "#E78F81",
    "#f97316",
    "#ef4444",
  ];

  const transactionsList = useAppSelector(
    (state) => state.transactions.transactionsList,
  );

  // Required format for the `PieChart` returns the data as an array of objects
  // Each object have `category` and `amount` properties
  const formatExpensesByCategory = (expensesData: Record<string, number>) => {
    const keyValuePairs = Object.entries(expensesData); // [category, amount]

    const arrayOfObjects = keyValuePairs.map(([category, amount]) => ({
      category: category.toLowerCase(),
      amount,
    }));

    return arrayOfObjects;
  };

  // Finial result
  const formatedData = formatExpensesByCategory(
    getExpensesByCategory(transactionsList),
  );

  return (
    <OpacityIn
      index={2}
      style="h-[475px] overflow-y-auto rounded-xl bg-white px-6 py-4"
    >
      <h3 className="heading-3 mb-4"> توزيع المصروفات:</h3>

      {getTotalExpense(transactionsList) < 1 && <EmptyExpenses />}

      {getTotalExpense(transactionsList) >= 1 && (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={formatedData}
              dataKey="amount"
              nameKey="category"
              innerRadius={65}
            >
              {formatedData.map((entry, index) => {
                return (
                  <Cell
                    key={entry.category}
                    fill={COLORS[index % COLORS.length]}
                    strokeWidth={8}
                  />
                );
              })}
            </Pie>

            <Legend iconType="circle" iconSize={16} />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </OpacityIn>
  );
}
