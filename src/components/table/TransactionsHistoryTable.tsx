import { useAppSelector } from "../../app/hooks";
import EmptyTable from "./EmptyTable";
import TransactionsHistoryRow from "./TransactionsHistoryRow";

export default function TransactionsHistoryTable() {
  const transactionsList = useAppSelector(
    (state) => state.transactions.transactionsList,
  );

  // Reversed transactions (latest added transactions first)
  const reversedTransactions = transactionsList.slice().reverse();

  return (
    <section className="responsive-container">
      <h2 className="heading-2 mb-6">سجل جميع المعاملات</h2>

      <div className="max-h-[600px] overflow-x-auto">
        <table className="w-full min-w-[950px] border-b-2 border-b-gray-300">
          <thead className="">
            <tr className="[&>th:first-child]:rounded-tr-2xl [&>th:last-child]:rounded-tl-2xl [&>th]:sticky [&>th]:top-0 [&>th]:bg-indigo-100 [&>th]:p-5">
              <th></th>
              <th>التصنيف</th>
              <th>الوصف</th>
              <th>النوع</th>
              <th>المبلغ</th>
              <th>التاريخ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reversedTransactions.length < 1 && <EmptyTable />}

            {reversedTransactions.length >= 1 &&
              reversedTransactions.map((item, index) => {
                return (
                  <TransactionsHistoryRow
                    key={item.id}
                    item={item}
                    index={index}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
