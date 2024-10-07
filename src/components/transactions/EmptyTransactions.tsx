import emptyBox from "../../assets/empty.webp";

export default function EmptyTransactions() {
  return (
    <div>
      <img
        src={emptyBox}
        width="224"
        height="224"
        alt="Empty box, illustration."
        className="mx-auto size-56"
      />

      <p className="mt-10 text-center font-medium sec-text">
        ضيف معاملات جديدة، وهتظهرلك هنا!
      </p>
    </div>
  );
}

// pt-4 text-center font-medium sec-text