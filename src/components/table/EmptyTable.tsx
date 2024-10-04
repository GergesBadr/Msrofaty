import emptyBox from "../../assets/empty-box.webp";

export default function EmptyTable() {
  return (
    <tr>
      <td colSpan={6} className="space-y-4 p-8">
        <img
          src={emptyBox}
          width="450"
          height="450"
          alt="Empty box."
          className="mx-auto size-56"
        />
        <p className="text-center text-gray-500">
          مفيش معلومات للعرض. ابدأ ضيف معاملات جديدة دلوقت!
        </p>
      </td>
    </tr>
  );
}
