import { deleteAllTransactions } from "../../app/features/transactionsSlice";
import { useAppDispatch } from "../../app/hooks";
import ConfirmDelete from "../common/ConfirmDelete";
import Modal from "../common/Modal";

export default function TableFooter() {
  const dispatch = useAppDispatch();

  return (
    <tfoot>
      <tr>
        <td colSpan={7} className="p-5 pr-0 pt-10">
          <Modal>
            <Modal.Open widthIsFit={true} id="delete-all-transactions-modal">
              <button className="rounded-lg bg-red-800 px-6 py-1.5 text-lg font-medium text-gray-50 duration-300 hover:bg-red-900">
                حذف جميع المعاملات
              </button>
            </Modal.Open>

            <Modal.Window
              a11yName="Delete All Transactions Modal"
              id="delete-all-transactions-modal"
            >
              <ConfirmDelete action={() => dispatch(deleteAllTransactions())}>
                <span>متأكد إنك عاوز تحذف جميع المعاملات؟</span>
                <span className="my-1 block">
                  لو حابب تحذف معاملات فترة زمنية مُحددة، توجّه إلى قسم (بياناتك
                  حسب المدة الزمنية)
                </span>
                <span>حدّد الفترة واضغط على (حذف معاملات هذه الفترة)</span>
              </ConfirmDelete>
            </Modal.Window>
          </Modal>
        </td>
      </tr>
    </tfoot>
  );
}
