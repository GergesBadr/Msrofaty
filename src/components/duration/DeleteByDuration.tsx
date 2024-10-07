import { deleteSpecificTransactions } from "../../app/features/transactionsSlice";
import { useAppDispatch } from "../../app/hooks";
import { Transaction } from "../../utils/types";
import ConfirmDelete from "../common/ConfirmDelete";
import Modal from "../common/Modal";

interface Props {
  filteredTransactions: Transaction[];
}

export default function DeleteByDuration({ filteredTransactions }: Props) {
  const dispatch = useAppDispatch();

  return (
    <Modal>
      <Modal.Open id="delete-this-duration-transactions">
        <button className="mt-6 rounded-lg bg-red-800 px-6 py-1.5 text-lg font-medium text-gray-50 duration-300 hover:bg-red-900 md:mt-0">
          حذف معاملات هذه الفترة
        </button>
      </Modal.Open>

      <Modal.Window
        a11yName="Delete This Duration Transactions"
        id="delete-this-duration-transactions"
      >
        <ConfirmDelete
          action={() => {
            dispatch(deleteSpecificTransactions(filteredTransactions));
            location.reload();
          }}
        >
          متأكد إنك عاوز تحذف معاملات الفترة الزمنية المُحددة؟
        </ConfirmDelete>
      </Modal.Window>
    </Modal>
  );
}
