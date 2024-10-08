import { useAppSelector } from "../../app/hooks";
import OpacityIn from "../common/OpacityIn";
import EmptyTransactions from "./EmptyTransactions";
import RecentTransactionsItem from "./RecentTransactionsItem";

export default function RecentTransactionsList() {
  const transactionsList = useAppSelector(
    (state) => state.transactions.transactionsList,
  );

  const lastSevenTransactions = transactionsList.slice(-7).reverse();

  return (
    <OpacityIn
      index={1}
      style="duration-200 rounded-xl bg-white dark:bg-secondary-dark px-6 py-4"
    >
      <div className="mb-6">
        <h3 className="heading-3">المعاملات السابقة:</h3>
        <p className="text-base sec-text">(آخر 7 معاملات)</p>
      </div>

      {lastSevenTransactions.length < 1 && <EmptyTransactions />}

      {lastSevenTransactions.length >= 1 && (
        <ul>
          {lastSevenTransactions.map((item) => {
            return <RecentTransactionsItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </OpacityIn>
  );
}
