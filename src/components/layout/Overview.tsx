import { useAppSelector } from "../../app/hooks";
import Balance from "../user/Balance";
import Income from "../user/Income";
import Expenses from "../user/Expenses";
import UserNameDisplay from "../user/UserNameDisplay";
import AddUserNameButton from "../user/AddUserNameButton";

export default function Overview() {
  const transactionsList = useAppSelector(
    (state) => state.transactions.transactionsList,
  );

  return (
    <section className="responsive-container pt-10">
      <div className="mb-6">
        <UserNameDisplay />
        <AddUserNameButton />
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 [&>div]:w-full">
        <Balance transactionsList={transactionsList} />
        <Income transactionsList={transactionsList} />
        <Expenses transactionsList={transactionsList} />
      </div>
    </section>
  );
}
