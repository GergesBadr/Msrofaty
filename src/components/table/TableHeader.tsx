export default function TableHeader() {
  return (
    <thead>
      <tr className="[&>th]:dark:bg-secondary-dark [&>th:first-child]:rounded-tr-2xl [&>th:last-child]:rounded-tl-2xl [&>th]:sticky [&>th]:top-0 [&>th]:bg-indigo-100 [&>th]:p-5">
        <th></th>
        <th>التصنيف</th>
        <th>الوصف</th>
        <th>النوع</th>
        <th>المبلغ</th>
        <th>التاريخ</th>
        <th></th>
      </tr>
    </thead>
  );
}
