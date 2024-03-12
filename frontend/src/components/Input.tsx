import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const inputSchema = z.object({
  name: z.string(),
  type: z.string().default("text").optional(),
  className: z.string().default("border-").optional(),
});

type inputType = z.infer<typeof inputSchema>;

export const Input = (props: inputType) => {
  const { name } = props;
  const { register } = useFormContext();

  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={name} className="capitalize mb-1">
        {name}
      </label>
      <input
        {...props}
        {...register(name)}
        className="border border-gray-700 outline-none rounded-md p-1"
      />
      <ErrorMessage
        name={name}
        render={({ message }) => <p className="form__error">{message}</p>}
      />
    </div>
  );
};

export default Input;
