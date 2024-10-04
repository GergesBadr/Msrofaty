import { getTransactionsByDuration } from "../../app/features/transactionsSlice";
import DurationStatistics from "../duration/DurationStatistics";
import EmptyDuration from "../duration/EmptyDuration";
import ExpensesByCategory from "../duration/ExpensesByCategory";
import SelectDuration from "../duration/SelectDuration";
import Totals from "../duration/Totals";

export default function Duration() {
  const storedDuration = localStorage.getItem("duration");
  const parsedDuration = storedDuration ? JSON.parse(storedDuration) : {};
  const filteredTransactions = getTransactionsByDuration(parsedDuration);

  return (
    <section className="responsive-container">
      <h2 className="heading-2 mb-6">بياناتك حسب المدة الزمنية</h2>

      <div className="rounded-xl bg-white p-7 overflow-y-auto h-[700px]">
        <SelectDuration />

        {filteredTransactions.length >= 1 ? (
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
              <div className="flex flex-col-reverse gap-8 sm:flex-row sm:[&>div]:w-full">
                <ExpensesByCategory
                  filteredTransactions={filteredTransactions}
                />
                <DurationStatistics
                  filteredTransactions={filteredTransactions}
                />
              </div>
            </div>
          </div>
        ) : (
          <EmptyDuration />
        )}
      </div>
    </section>
  );
}
