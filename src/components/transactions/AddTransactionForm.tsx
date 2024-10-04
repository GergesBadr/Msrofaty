import { SubmitHandler, useForm } from "react-hook-form";
import { addTransaction } from "../../app/features/transactionsSlice";
import { useAppDispatch } from "../../app/hooks";
import { Transaction } from "../../utils/types";
import FormElement from "../common/FormElement";
import Button from "../common/Button";

export default function AddTransactionForm() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Transaction>();

  const onSubmit: SubmitHandler<Transaction> = (data) => {
    dispatch(addTransaction(data));
    reset();
  };

  return (
    <>
      <h3 className="heading-3">إضافة معاملة جديدة</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        {/* Type */}
        <FormElement
          htmlFor="type"
          label="نوع المعاملة:"
          describedBy="type-error"
          error={errors.type?.message}
        >
          <select
            id="type"
            {...register("type", { required: "حدّد نوع المعاملة." })}
            aria-describedby="type-error"
            aria-invalid={errors.type ? true : false}
            className="rounded-xl border-2 px-4 py-1"
          >
            <option value="">اختر النوع:</option>
            <option value="expense">مصروفات</option>
            <option value="income">دخل</option>
          </select>
        </FormElement>

        {/* Category */}
        <FormElement
          htmlFor="category"
          label="التصنيف:"
          describedBy="category-error"
          error={errors.category?.message}
        >
          <select
            id="category"
            {...register("category", { required: "حدّد تصنيف المعاملة." })}
            aria-describedby="category-error"
            aria-invalid={errors.category ? true : false}
            className="rounded-xl border-2 px-4 py-1"
          >
            <option value="">اختر التصنيف:</option>
            <option value="TRANSPORTATION">مواصلات</option>
            <option value="SUBSCRIPTION">اشتراكات</option>
            <option value="SHOPPING">تسوق</option>
            <option value="SALARY">مرتب</option>
            <option value="BILLS">فواتير</option>
            <option value="FOOD">طعام</option>
            <option value="ENTERTAINMENT">ترفيه</option>
            <option value="OTHERS">أخرى</option>
          </select>
        </FormElement>

        {/* Amount */}
        <FormElement
          htmlFor="amount"
          label="المبلغ:"
          describedBy="amount-error"
          error={errors.amount?.message}
        >
          <input
            type="number"
            id="amount"
            {...register("amount", {
              required: "حدّد مبلغ المعاملة.",
              min: { value: 10, message: "أقل مبلغ ممكن تضيفه هو (5)" },
              valueAsNumber: true,
            })}
            aria-describedby="amount-error"
            aria-invalid={errors.amount ? true : false}
            placeholder="مثال: 400"
            className="rounded-xl border-2 px-4 py-1"
          />
        </FormElement>

        {/* Desc */}
        <FormElement
          htmlFor="description"
          label="الوصف:"
          isRequired={false}
          describedBy="description-error"
          error={errors.description?.message}
        >
          <input
            type="text"
            id="description"
            {...register("description", { required: false })}
            placeholder="مثال: شراء وجبة عشاء."
            aria-describedby="description-error"
            aria-invalid={errors.description ? true : false}
            className="rounded-xl border-2 px-4 py-1"
          />
        </FormElement>

        {/* Date */}
        <FormElement
          htmlFor="date"
          label="التاريخ:"
          describedBy="date-error"
          error={errors.date?.message}
        >
          <input
            type="date"
            id="date"
            aria-describedby="date-error"
            aria-invalid={errors.date ? true : false}
            {...register("date", {
              required: "حدّد تاريخ المعاملة.",
            })}
            className="rounded-xl border-2 px-4 py-1"
          />
        </FormElement>

        <Button extraClasses="mt-10">إضافة المعاملة</Button>
      </form>
    </>
  );
}
