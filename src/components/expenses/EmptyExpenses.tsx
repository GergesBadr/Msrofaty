import statistic from "../../assets/statistic.webp";

export default function EmptyExpenses() {
  return (
    <div>
      <img
        src={statistic}
        width="450"
        height="450"
        alt="Illustration of statistics."
        className="mx-auto size-56"
      />
      <p className="mt-10 text-center text-gray-500">
        ضيف مصروفات جديدة، والإحصائيات هتظهرلك هنا!
      </p>
    </div>
  );
}
