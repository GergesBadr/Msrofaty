import emptyBox from "../../assets/empty-box.webp";

export default function EmptyTable() {
  return (
    <tr>
      <td colSpan={7} className="p-8">
        <img
          src={emptyBox}
          width="224"
          height="224"
          alt="Empty box."
          className="mx-auto size-56"
        />
        <p className="sec-text text-center">
          مفيش معلومات للعرض. ابدأ ضيف معاملات جديدة دلوقت!
        </p>
      </td>
    </tr>
  );
}
