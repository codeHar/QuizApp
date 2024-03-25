import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../components";
import { useEffect } from "react";
import axios from "axios";
import { URLS } from "../consts";
import { useNavigate } from "react-router-dom";

let renderCount = 0;

const collectionSchema = z.object({
  title: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Title is required" }),
  description: z.string().optional(),
  questions: z.array(
    z.object({
      text: z.string().min(1, { message: "Question Title is required" }),
      answerOptions: z.array(
        z.string().min(1, { message: "Answer is required" })
      ),
      correctAnswer: z
        .string()
        .min(1, { message: "Correct Answer is required" }),
      type: z
        .enum(["multipleChoice", "trueFalse", "openEnded", "essay"])
        .default("multipleChoice"),
    })
  ),
});

const CreateCollection = () => {
  const navigate = useNavigate();
  const methods = useForm({
    resolver: zodResolver(collectionSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  renderCount++;

  console.log(errors);

  useEffect(() => {
    append({
      text: "",
      answerOptions: ["", "", "", ""],
      correctAnswer: "0",
    });
  }, [append]);

  const submitData = async (data: any) => {
    try {
      console.log({
        ...data,
        createdBy: "65dab80488624adf28f6f8b6",
      });
      const res = await axios.post(URLS.COLLECTION.CREATE, {
        ...data,
        createdBy: "65dab80488624adf28f6f8b6",
      });
      navigate("/my-collections");
    } catch (err) {
      console.log("error while creating colections ", err);
    }
  };

  return (
    <div className="container create-collection relative h-[calc(100%_-_96px)] overflow-y-auto py-4">
      <div className="p-3 rounded-md bg-white">
        <div className="flex justify-between gap-3 items-center mb-5">
          <h1 className="title">New Collection</h1>
        </div>

        <div className="collection-form-container">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submitData)}>
              <Input name="title" />
              <Input name="description" />
              {fields.map((item, index) => (
                <div key={item.id} className="mt-10">
                  <Input
                    name={`Question ${index + 1}`}
                    registerName={`questions[${index}].text`}
                  />

                  <div className="answer-container grid grid-cols-1 md:grid-cols-2 gap-5">
                    {item?.answerOptions.map((_, answerIndex: number) => (
                      <div key={answerIndex}>
                        <Input
                          name={`Answer ${answerIndex + 1}`}
                          registerName={`questions[${index}].answerOptions[${answerIndex}]`}
                        />
                      </div>
                    ))}
                    <select
                      id="cars"
                      {...register(`questions[${index}].correctAnswer`)}
                    >
                      <option value="0">1</option>
                      <option value="1">2</option>
                      <option value="2">3</option>
                      <option value="3">4</option>
                    </select>
                    {/* <Input
                      name={`Correct Answer`}
                      registerName={`questions[${index}].correctAnswer`}
                    /> */}
                    <button type="button" onClick={() => remove(index)}>
                      Remove Ques
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => {
                    append({
                      text: "",
                      answerOptions: ["", "", "", ""],
                      correctAnswer: 0,
                    });
                  }}
                >
                  Add Question
                </button>
                <button>Submit</button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
