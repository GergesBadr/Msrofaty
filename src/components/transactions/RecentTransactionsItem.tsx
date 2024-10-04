import {
  formatCurrency,
  formatDate,
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
  item: Transaction;
}

export default function RecentTransactionsItem({ item }: Props) {
  return (
    <li className="flex justify-between gap-4 [&:not(:first-child)]:pt-4 [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:pb-4">
      {/* Icon, name and description */}
      <div className="flex items-center gap-3">
        {item.category === "TRANSPORTATION" && <TransportationIcon />}
        {item.category === "SUBSCRIPTION" && <SubscriptionIcon />}
        {item.category === "SHOPPING" && <ShoppingIcon />}
        {item.category === "SALARY" && <SalaryIcon />}
        {item.category === "BILLS" && <BillsIcon />}
        {item.category === "FOOD" && <FoodIcon />}
        {item.category === "ENTERTAINMENT" && <EntertainmentIcon />}
        {item.category === "OTHERS" && <OthersIcon />}
        <div>
          <p className="font-bold">
            {translateCategoryIntoArabic(item.category)}
          </p>
          <p className="text-lg text-gray-500"> {item.description} </p>
        </div>
      </div>

      {/* Amount and date */}
      <div className="shrink-0 text-left">
        {item.type === "income" && (
          <p className="font-bold text-green-500">
            + {formatCurrency(item.amount)}
          </p>
        )}
        {item.type === "expense" && (
          <p className="font-bold text-red-400">
            - {formatCurrency(item.amount)}
          </p>
        )}
        <p className="text-lg text-gray-500"> {formatDate(item.date)} </p>
      </div>
    </li>
  );
}
