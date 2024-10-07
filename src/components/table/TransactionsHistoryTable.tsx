import { useAppSelector } from "../../app/hooks";
import EmptyTable from "./EmptyTable";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
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

      <div className="max-h-[725px] overflow-x-auto">
        <table className="w-full min-w-[950px]">
          <TableHeader />

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

          {reversedTransactions.length >= 1 && <TableFooter />}
        </table>
      </div>
    </section>
  );
}
