import { getTransactionsByDuration } from "../../app/features/transactionsSlice";
import DeleteByDuration from "../duration/DeleteByDuration";
import ExpensesStatistics from "../duration/ExpensesStatistics";
import EmptyDuration from "../duration/EmptyDuration";
import ExpensesByCategory from "../duration/ExpensesByCategory";
import SelectDuration from "../duration/SelectDuration";
import Totals from "../duration/Totals";

export default function Duration() {
  const storedDuration = localStorage.getItem("duration");
  const parsedDuration = storedDuration ? JSON.parse(storedDuration) : {};
  const filteredTransactions = getTransactionsByDuration(parsedDuration);

  // To return (EmptyDuration) component if no expenses at the selected duration,
  // Most of the stats based on expenses, not incomes, that's the purpose of the website!
  const expenseTransactions = filteredTransactions.filter(
    (t) => t.type === "expense",
  );

  return (
    <section className="responsive-container">
      <h2 className="heading-2 mb-6">بياناتك حسب المدة الزمنية</h2>

      <div className="rounded-xl bg-white p-7 duration-200 dark:bg-secondary-dark">
        <SelectDuration />

        {expenseTransactions.length >= 1 ? (
          <div className="pt-4">
            <h3 className="heading-3 mb-12 text-center">
              من{" "}
              <span className="underlined-word">
                {" "}
                {parsedDuration.startDate}{" "}
              </span>
              إلى{" "}
              <span className="underlined-word">
                {" "}
                {parsedDuration.endDate}{" "}
              </span>
            </h3>

            <div>
              <Totals filteredTransactions={filteredTransactions} />
              <div className="flex flex-col gap-8 sm:flex-row sm:[&>div]:w-full">
                <ExpensesByCategory
                  filteredTransactions={filteredTransactions}
                />
                <ExpensesStatistics
                  filteredTransactions={filteredTransactions}
                />
              </div>
              <DeleteByDuration filteredTransactions={filteredTransactions} />
            </div>
          </div>
        ) : (
          <EmptyDuration />
        )}
      </div>
    </section>
  );
}
