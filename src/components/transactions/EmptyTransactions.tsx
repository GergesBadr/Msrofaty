import emptyBox from "../../assets/empty.webp";

export default function EmptyTransactions() {
  return (
    <div>
      <img
        src={emptyBox}
        width="450"
        height="450"
        alt="Empty box, illustration."
        className="mx-auto size-56"
      />

      <p className="mt-10 text-center text-gray-500">
        ضيف معاملات جديدة، وهتظهرلك هنا!
      </p>
    </div>
  );
}
