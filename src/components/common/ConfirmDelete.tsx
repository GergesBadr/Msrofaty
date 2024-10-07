interface Props {
  children: React.ReactNode;
  action: () => void;
}

export default function ConfirmDelete({
  children = "متأكد إنك عاوز تأخد الإجراء ده؟",
  action,
}: Props) {
  return (
    <div className="text-center">
      <p className="sec-text"> {children} </p>
      <button
        onClick={action}
        className="mt-6 rounded-lg bg-red-600 px-6 py-1.5 text-lg font-medium text-gray-200 duration-300 hover:bg-red-700"
      >
        حذف
      </button>
    </div>
  );
}
