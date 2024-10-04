import { getExpensesByCategory } from "../../app/features/transactionsSlice";
import {
  formatCurrency,
  translateCategoryIntoArabic,
} from "../../utils/helpers";
import { Transaction } from "../../utils/types";
import BillsIcon from "../icons/BillsIcon";
import EntertainmentIcon from "../icons/EntertainmentIcon";
import FoodIcon from "../icons/FoodIcon";
import OthersIcon from "../icons/OthersIcon";
import SalaryIcon from "../icons/SalaryIcon";
import ShoppingIcon from "../icons/ShoppingIcon";
import SubscriptionIcon from "../icons/SubscriptionIcon";
import TransportationIcon from "../icons/TransportationIcon";

interface Props {
  filteredTransactions: Transaction[];
}

export default function ExpensesByCategory({ filteredTransactions }: Props) {
  const expensesByCategory = getExpensesByCategory(filteredTransactions);
  return (
    <div>
      {Object.entries(expensesByCategory).map(([category, amount]) => (
        <div
          key={category}
          className="flex items-center justify-between gap-4 border-b-2 py-6 first:pt-0 last:border-b-0 last:pb-0"
        >
          {/* Icon */}
          {category === "TRANSPORTATION" && <TransportationIcon />}
          {category === "SUBSCRIPTION" && <SubscriptionIcon />}
          {category === "SHOPPING" && <ShoppingIcon />}
          {category === "SALARY" && <SalaryIcon />}
          {category === "BILLS" && <BillsIcon />}
          {category === "FOOD" && <FoodIcon />}
          {category === "ENTERTAINMENT" && <EntertainmentIcon />}
          {category === "OTHERS" && <OthersIcon />}

          {/* Name and amount */}
          <div className="space-y-1 text-left">
            <p className="font-bold">{translateCategoryIntoArabic(category)}</p>
            <p className="text-gray-500">{formatCurrency(amount)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
