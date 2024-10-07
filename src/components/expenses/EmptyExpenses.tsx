import statistic from "../../assets/statistic.webp";

export default function EmptyExpenses() {
  return (
    <div>
      <img
        src={statistic}
        width="224"
        height="224"
        alt="Illustration of statistics."
        className="mx-auto size-56"
      />
      <p className="sec-text mt-10 text-center">
        ضيف مصروفات جديدة، والإحصائيات هتظهرلك هنا!
      </p>
    </div>
  );
}
