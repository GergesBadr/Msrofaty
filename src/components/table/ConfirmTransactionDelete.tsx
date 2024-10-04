import { deleteTransaction } from "../../app/features/transactionsSlice";
import { useAppDispatch } from "../../app/hooks";

interface Props {
  transactionId: string;
}

export default function ConfirmTransactionDelete({ transactionId }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="text-center">
      <p>هل أنت متأكد من حذف هذه المعاملة؟</p>
      <button
        onClick={() => dispatch(deleteTransaction(transactionId))}
        className="mt-6 rounded-lg bg-red-600 px-6 py-1.5 text-lg font-medium text-gray-200 duration-300 hover:bg-red-700"
      >
        حذف
      </button>
    </div>
  );
}
