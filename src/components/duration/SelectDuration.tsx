import { SubmitHandler, useForm } from "react-hook-form";
import { Duration } from "../../utils/types";
import Button from "../common/Button";

export default function SelectDuration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Duration>();

  const onSubmit: SubmitHandler<Duration> = (data) => {
    // Save duration to localStorage to use it later to get the relevant data
    localStorage.setItem("duration", JSON.stringify(data));
    reset();
    location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap items-center gap-6 border-b-2 pb-4 dark:border-b-gray-700"
    >
      <div>
        <label htmlFor="startDate" className="ml-2">
          <span className="ml-1 text-red-400">*</span>
          البداية:
        </label>
        <input
          type="month"
          id="startDate"
          {...register("startDate", { required: true })}
          aria-invalid={errors.startDate ? "true" : "false"}
          className={`dark:bg-secondary-dark rounded-xl border-2 px-4 py-1 focus:outline-offset-8 ${errors.startDate ? "border-red-400" : "border-gray-300 dark:border-gray-700"}`}
        />
      </div>

      <div>
        <label htmlFor="endDate" className="ml-2">
          <span className="ml-1 text-red-400">*</span>
          النهاية:
        </label>
        <input
          type="month"
          id="endDate"
          {...register("endDate", { required: true })}
          aria-invalid={errors.endDate ? "true" : "false"}
          className={`dark:bg-secondary-dark rounded-xl border-2 px-4 py-1 focus:outline-offset-8 ${errors.endDate ? "border-red-400" : "border-gray-300 dark:border-gray-700"}`}
        />
      </div>
      <Button>تأكيد</Button>
    </form>
  );
}
