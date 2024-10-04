import { getTotalIncome } from "../../app/features/transactionsSlice";
import { formatCurrency } from "../../utils/helpers";
import { Transaction } from "../../utils/types";
import FadeUp from "../common/FadeUp";
import IncomeIcon from "../icons/IncomeIcon";

interface Props {
  transactionsList: Transaction[];
}

export default function Income({ transactionsList }: Props) {
  const totalIncome = getTotalIncome(transactionsList);

  return (
    <FadeUp
      index={2}
      style="flex items-center gap-6 rounded-xl bg-white px-6 py-4"
    >
      <IncomeIcon />
      <div>
        <p>الدخل:</p>
        <p className="text-3xl font-medium">{formatCurrency(totalIncome)}</p>
      </div>
    </FadeUp>
  );
}
