import ExpensesDistribution from "../expenses/ExpensesDistribution";
import RecentTransactionsList from "../transactions/RecentTransactionsList";

export default function Summary() {
  return (
    <section className="responsive-container">
      <h2 className="heading-2 mb-6">ملخص</h2>

      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 [&>div]:w-full">
        <RecentTransactionsList />
        <ExpensesDistribution />
      </div>
    </section>
  );
}
