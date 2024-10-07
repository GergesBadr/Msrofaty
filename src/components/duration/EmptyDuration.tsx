import moneyBag from "../../assets/money-bag.webp";

export default function EmptyDuration() {
  return (
    <div className="space-y-6 pt-10">
      <p className="sec-text text-center font-medium">
        لم يتم تحديد مدة زمنية صحيحة، <br /> حدّد مدة فيها بيانات (مصروفات)
        وهتظهرلك هنا!
      </p>
      <img
        src={moneyBag}
        alt="Bag full with green cash, illustration."
        className="mx-auto size-56 lg:size-64"
      />
    </div>
  );
}
