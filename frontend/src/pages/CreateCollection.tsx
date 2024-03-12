import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../components";
import { useEffect } from "react";

let renderCount = 0;

const collectionSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  questions: z.array(
    z.object({
      question: z.string().min(1),
      answers: z.array(z.string().min(1)),
    })
  ),
});

const CreateCollection = () => {
  const methods = useForm({
    resolver: zodResolver(collectionSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  renderCount++;

  console.log(errors);

  useEffect(() => {
    append({ question: "", answers: ["", "", "", ""], correctAnswer: "" });
  }, [append]);

  return (
    <div className="container create-collection relative h-[calc(100%_-128px)]">
      <div className="my-4 p-3 rounded-md bg-white h-full">
        <div className="flex justify-between gap-3 items-center mb-5">
          <h1 className="title">
            New Collection<span>RenderCount{renderCount}</span>
          </h1>
        </div>

        <div className="collection-form-container">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <Input name="title" />
              <Input name="description" />
              {fields.map((item, index) => (
                <div key={item.id}>
                  <input
                    type="text"
                    {...register(`questions[${index}].question`)}
                    placeholder={`Question ${index + 1}`}
                  />
                  {errors?.questions?.[index]?.question && (
                    <p>{errors.questions[index].question.message}</p>
                  )}
                  {item.answers.map((_, answerIndex) => (
                    <div key={answerIndex}>
                      <input
                        type="text"
                        {...register(
                          `questions[${index}].answers[${answerIndex}]`
                        )}
                        placeholder={`Answer ${answerIndex + 1}`}
                      />
                      {errors?.questions?.[index]?.answers?.[answerIndex] && (
                        <p>
                          {errors.questions[index].answers[answerIndex].message}
                        </p>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  append({ question: "", answers: ["", "", "", "", ""] });
                }}
              >
                Add Question
              </button>
              <button>Submit</button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
