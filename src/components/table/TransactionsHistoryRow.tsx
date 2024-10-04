import { HiTrash } from "react-icons/hi2";
import {
  formatCurrency,
  formatDate,
  translateCategoryIntoArabic,
} from "../../utils/helpers";
import { Transaction } from "../../utils/types";
import Modal from "../common/Modal";
import ConfirmTransactionDelete from "./ConfirmTransactionDelete";

interface Props {
  item: Transaction;
  index: number;
}

export default function TransactionsHistoryRow({ item, index }: Props) {
  return (
    <tr className="border-b-2 duration-200 hover:bg-indigo-50 [&>td]:p-5">
      <td>{index + 1}&#41;</td>

      <td className="font-semibold">
        {translateCategoryIntoArabic(item.category)}
      </td>

      <td className="text-gray-500">
        {item.description ? (
          <span>{item.description}</span>
        ) : (
          <span aria-label="no provided description">&mdash;</span>
        )}
      </td>

      <td>
        <span
          className={`text-md mx-auto block w-fit rounded-lg px-3 py-1 text-center ${item.type === "expense" ? "bg-red-200" : "bg-green-200"}`}
        >
          {item.type === "expense" && "مصروف"}
          {item.type === "income" && "دخل"}
        </span>
      </td>

      <td> {formatCurrency(item.amount)} </td>

      <td> {formatDate(item.date)} </td>

      <td>
        <Modal>
          <Modal.Open id="delete-transaction-modal">
            <button
              aria-label="Delete This Transaction"
              title="Delete This Transaction"
              className="rounded-full bg-red-500 p-3 text-white"
            >
              <HiTrash />
            </button>
          </Modal.Open>

          <Modal.Window
            a11yName="delete-transaction-modal"
            id="delete-transaction-modal"
          >
            <ConfirmTransactionDelete transactionId={item.id} />
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}
