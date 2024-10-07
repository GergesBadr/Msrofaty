import { getTotalBalance } from "../../app/features/transactionsSlice";
import { formatCurrency } from "../../utils/helpers";
import { Transaction } from "../../utils/types";
import FadeUp from "../common/FadeUp";
import BalanceIcon from "../icons/BalanceIcon";

interface Props {
  transactionsList: Transaction[];
}

export default function Balance({ transactionsList }: Props) {
  const totalBalance = getTotalBalance(transactionsList);

  return (
    <FadeUp
      index={1}
      style="flex items-center gap-6 rounded-xl duration-200 dark:bg-secondary-dark bg-white px-6 py-4"
    >
      <BalanceIcon />
      <div>
        <p>الرصيد المتبقي:</p>
        <p className="text-3xl font-medium">{formatCurrency(totalBalance)}</p>
      </div>
    </FadeUp>
  );
}
