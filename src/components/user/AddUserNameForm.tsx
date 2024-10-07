import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../utils/types";
import { useAppDispatch } from "../../app/hooks";
import { updateUserName } from "../../app/features/userSlice";
import FormElement from "../common/FormElement";
import Button from "../common/Button";

export default function AddUserNameForm() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    dispatch(updateUserName(data.name));
    reset();
  };

  return (
    <div>
      <h3 className="heading-3 mb-6">عرّفنا بنفسك:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormElement
          htmlFor="name"
          describedBy="name-error"
          label="الإسم:"
          error={errors.name?.message}
        >
          <input
            type="text"
            id="name"
            aria-describedby="name-error"
            aria-invalid={errors.name ? true : false}
            className="dark:bg-secondary-dark rounded-xl border-2 px-4 py-1 dark:border-gray-700"
            placeholder="اكتب الإسم هنا"
            {...register("name", { required: "عرّفنا بنفسك الأول." })}
          />
        </FormElement>

        <Button extraClasses="mt-10">تأكيد</Button>
      </form>
    </div>
  );
}
