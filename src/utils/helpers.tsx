export function formatCurrency(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price | 0);
}

export function formatDate(date: string): string {
  const [, month, day] = date.split("-");
  return `${parseInt(month)}/${parseInt(day)}`;
}

export function translateCategoryIntoArabic(cat: string): string {
  switch (cat) {
    case "TRANSPORTATION":
      return "مواصلات";
    case "SUBSCRIPTION":
      return "اشتراكات";
    case "SHOPPING":
      return "تسوق";
    case "SALARY":
      return "مرتب";
    case "BILLS":
      return "فواتير";
    case "FOOD":
      return "طعام";
    case "ENTERTAINMENT":
      return "ترفيه";
    case "OTHERS":
      return "أخرى";
    default:
      return "غير معروف"; // Default case for unknown categories
  }
}
