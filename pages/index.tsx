import { DM_Sans } from "next/font/google";
import { useReducer, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Stepper } from "@mantine/core";
import { stepperClass } from "@/styles/classes";
import Contact from "@/components/Contact";
import Service from "@/components/Service";
import Budget from "@/components/Budget";
import { Action, BudgetValue, Inputs, Services } from "@/types/index.d";
import Navigation from "@/components/Navigation";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dmsans",
});

const initialInputsValue: Inputs = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: Services.Development,
  budget: BudgetValue.Premium,
};

const reducer = (state: Inputs, action: Action): Inputs => {
  switch (action.type) {
    case "setValue":
      return { ...state, [action.name]: action.value };
    default:
      throw new Error();
  }
};

export default function Home() {
  const [step, setStep] = useState(0);
  const goToNextStep = () =>
    setStep((current) => (current < 3 ? current + 1 : current));
  const goToPrevStep = () =>
    setStep((current) => (current > 0 ? current - 1 : current));
  const [state, dispatch] = useReducer(reducer, initialInputsValue);

  const {
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      service: Services.Development,
      budget: BudgetValue.Premium,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = () => alert(JSON.stringify(state));

  return (
    <main
      className={`${dm_sans.variable} font-dmsans flex flex-col min-h-screen w-[700px] items-center justify-between py-12 m-auto gap-y-9`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="font-bold text-4xl leading-10 text-violet">
          Get a project quote
        </div>
        <div className="text-lg leading-7 text-center w-4/5 text-waterloo">
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </div>
      </div>
      <div className="font-dmsans w-full h-[600px] box-border bg-white border border-whisper shadow-[0_5px_16px_rgba(8,15,52,0.06)] rounded-[34px] p-12 flex flex-col gap-y-8">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full">
          <Stepper
            classNames={stepperClass().classes}
            active={step}
            onStepClick={setStep}
            breakpoint="sm"
            color="blueribbon"
            size="sm"
            allowNextStepsSelect={false}
          >
            <Stepper.Step completedIcon={1}>
              <Contact
                control={control}
                errors={errors}
                state={state}
                dispatch={dispatch}
              />
            </Stepper.Step>
            <Stepper.Step completedIcon={2}>
              <Service control={control} state={state} dispatch={dispatch} />
            </Stepper.Step>
            <Stepper.Step completedIcon={3}>
              <Budget control={control} state={state} dispatch={dispatch} />
            </Stepper.Step>
            <Stepper.Step completedIcon={4}>
              <div className="flex flex-col justify-between h-5/6 w-4/5 items-center self-center">
                <img src="/submit.svg" alt="submit" />
                <div className="font-bold text-2xl leading-9 text-violet text-center">
                  Submit your quote request
                </div>
                <div className="text-lg leading-7 text-center text-waterloo">
                  Please review all the information you previously typed in the
                  past steps, and if all is okay, submit your message to receive
                  a project quote in 24 - 48 hours.
                </div>
                <button
                  type="submit"
                  className="flex items-center box-border pt-[19px] px-[40px] pb-[21px] rounded-[66px] text-lg cursor-pointer bg-blueribbon text-white font-bold shadow-[0_3px_12px_rgba(74,58,255,0.18)]"
                >
                  Submit
                </button>
              </div>
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </form>
      </div>
      <Navigation
        step={step}
        goToPrevStep={goToPrevStep}
        goToNextStep={goToNextStep}
        trigger={trigger}
      />
    </main>
  );
}
