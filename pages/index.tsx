import { DM_Sans } from "next/font/google";
import { useReducer, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Divider,
  Stepper,
  TextInput,
  Radio,
  createStyles,
  rem,
} from "@mantine/core";
import Image from "next/image";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dmsans",
});

enum Services {
  Development = "Development",
  WebDesign = "Web Design",
  Marketing = "Marketing",
  Other = "Other",
}

enum Budget {
  Low = "$5.000 - $10.000",
  Mid = "$10.000 - $20.000",
  High = "$20.000 - $50.000",
  Premium = "$50.000 +",
}

enum BudgetValue {
  Low = "5000-10000",
  Mid = "10000-20000",
  High = "20000-50000",
  Premium = "50000",
}

enum Errors {
  NameRequired = "Name is required.",
  EmailRequired = "Email is required.",
  EmailInvalid = "Email is invalid.",
  PhoneRequired = "Phone is required",
  PhoneInvalid = "Phone is invalid.",
  CompanyRequired = "Company is required.",
}

enum ActionTypes {
  SetValue = "setValue",
}

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
  const nextStep = () =>
    setStep((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setStep((current) => (current > 0 ? current - 1 : current));
  const [state, dispatch] = useReducer(reducer, initialInputsValue);

  const {
    register,
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

  const stepperClass = createStyles((theme) => ({
    root: {
      height: "100%",
    },
    content: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    separator: {
      height: rem(6),
      borderRadius: rem(6),
      backgroundColor: theme.colors.whisper[0],
      "&:after": {
        content: '""',
        display: "block",
        height: rem(6),
        backgroundColor: theme.colors.blueribbon[0],
        borderRadius: rem(20),
        transition: "all 0.3s ease-in",
        width: "0",
      },
      "[data-progress] + &:after": {
        width: "50%",
      },
      "[data-completed] + &:after": {
        width: "100%",
      },
    },
    separatorActive: {
      backgroundColor: theme.colors.whisper[0],
    },
    stepIcon: {
      color: theme.colors.waterloo[0],
      "&[data-progress]": {
        color: "white",
        backgroundColor: theme.colors.blueribbon[0],
      },
    },
    stepCompletedIcon: {
      transitionProperty: "none !important",
    },
  }))().classes;

  const inputClass = createStyles((theme) => ({
    root: {
      display: "grid",
      gridTemplateRows: "40px 62px 40px",
      "&:focus-within": {
        label: {
          color: theme.colors.blueribbon[0],
        },
      },
    },
    wrapper: {
      gridRow: 2,
    },
    input: {
      padding: "20px 50px 20px 20px",
      borderColor: theme.colors.whisper[0],
      color: theme.colors.violet[0],
      boxShadow: "0px 2px 6px rgba(19, 18, 66, 0.07)",
      "&::placeholder": {
        color: theme.colors.waterloo[0],
      },
      "&:focus": {
        border: "2px solid " + theme.colors.blueribbon[0] + " !important",
      },
      "&:autofill": {
        backgroundColor: "white",
        color: theme.colors.violet[0] + " !important",
        WebkitTextFillColor: theme.colors.violet[0] + " !important",
        boxShadow: "0px 0px 0px 1000px inset white",
      },
      "&[data-invalid]": {
        "&::placeholder": {
          color: theme.colors.waterloo[0],
        },
        color: theme.colors.violet[0],
        borderColor: theme.colors.electricviolet[0],
        borderWidth: rem(2),
      },
    },
    rightSection: {
      height: rem(50),
      width: rem(36),
      right: rem(5),
      img: {
        maxWidth: rem(20),
        maxHeight: rem(28),
        objectFit: "contain",
      },
    },
    label: {
      color: theme.colors.violet[0],
      fontWeight: 500,
      gridRow: 1,
    },
    error: {
      color: theme.colors.electricviolet[0],
      fontFamily: "var(--font-dmsans)",
      fontWeight: 400,
      gridRow: 3,
      "+ label": {
        color: theme.colors.electricviolet[0],
      },
    },
  }))().classes;

  const radioClass = createStyles((theme) => ({
    "radiogroup-root": {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gridTemplateRows: "1fr 1fr",
      gap: rem(30),
    },
    root: {
      "&[data-checked]": {
        label: {
          outline: "2px solid " + theme.colors.blueribbon[0],
        },
      },
    },
    body: {
      display: "grid",
      position: "relative",
      gridTemplateRows: "1fr",
    },
    inner: {
      display: "flex",
      position: "absolute",
      left: rem(20),
      alignSelf: "center",
      gridRow: 1,
      width: rem(66),
      height: rem(66),
      borderRadius: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(74, 58, 255, 0.15)",
      filter: "drop-shadow(0 0 10px rgba(74,58,255,0.5))",
      figure: {
        maxWidth: rem(38),
        width: "auto",
        margin: "0 auto",
      },
    },
    radio: {
      display: "none",
    },
    labelWrapper: {
      gridRow: 1,
    },
    label: {
      height: rem(118),
      width: rem(284),
      display: "grid",
      alignItems: "center",
      fontFamily: "var(--font-dmsans)",
      fontWeight: 700,
      fontSize: rem(18),
      cursor: "pointer",
      padding: "0 20px 0 100px",
      boxSizing: "border-box",
      border: "1px solid " + theme.colors.whisper[0],
      borderRadius: rem(16),
      boxShadow: "0 2px 6px rgba(19,18,66,0.07)",
    },
  }))().classes;

  const budgetClass = createStyles((theme) => ({
    "radiogroup-root": {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gridTemplateRows: "1fr 1fr",
      gap: rem(30),
    },
    root: {
      "&[data-checked]": {
        label: {
          outline: "2px solid " + theme.colors.blueribbon[0],
        },
      },
    },
    body: {
      display: "grid",
      position: "relative",
      gridTemplateRows: "1fr",
    },
    inner: {
      display: "flex",
      position: "absolute",
      left: rem(20),
      alignSelf: "center",
      gridRow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    radio: {
      cursor: "pointer",
      backgroundColor: "white",
      border: "1.5px solid " + theme.colors.mischka[0],
      boxShadow: "inset 0px -3px 8px rgba(20, 20, 43, 0.07)",
      "&:checked": {
        backgroundColor: theme.colors.blueribbon[0],
        borderColor: theme.colors.blueribbon[0],
      },
    },
    labelWrapper: {
      gridRow: 1,
    },
    label: {
      height: rem(118),
      width: rem(284),
      display: "grid",
      alignItems: "center",
      fontFamily: "var(--font-dmsans)",
      fontWeight: 700,
      fontSize: rem(18),
      cursor: "pointer",
      padding: "0 20px 0 56px",
      boxSizing: "border-box",
      border: "1px solid " + theme.colors.whisper[0],
      borderRadius: rem(16),
      boxShadow: "0 2px 6px rgba(19,18,66,0.07)",
    },
  }))().classes;

  return (
    <main
      className={`${dm_sans.variable} flex flex-col min-h-screen w-[700px] items-center justify-between py-12 m-auto font-dmsans gap-y-9`}
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
            classNames={stepperClass}
            active={step}
            onStepClick={setStep}
            breakpoint="sm"
            color="blueribbon"
            size="sm"
            allowNextStepsSelect={false}
          >
            <Stepper.Step completedIcon={1}>
              <Divider size="sm" mt="sm" mb="xl" color="whisper" />
              <div className="mb-6">
                <div className="font-bold text-2xl leading-10 text-violet">
                  Contact details
                </div>
                <div className="text-lg leading-8 text-waterloo">
                  Lorem ipsum dolor sit amet consectetur adipisc.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: Errors.NameRequired }}
                  render={({ field }) => (
                    <TextInput
                      placeholder="Name"
                      label="Name"
                      radius="xl"
                      size="lg"
                      classNames={inputClass}
                      inputWrapperOrder={["input", "error", "label"]}
                      rightSection={
                        <Image
                          src="/name.svg"
                          alt="name"
                          width={50}
                          height={50}
                        />
                      }
                      {...field}
                      value={state.name}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        dispatch({
                          type: ActionTypes.SetValue,
                          name: "name",
                          value: e.target.value,
                        });
                      }}
                      error={errors.name?.message}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^[\w-\.]+@(gmail+\.com)$/g,
                      message: Errors.EmailInvalid,
                    },
                    required: Errors.EmailRequired,
                  }}
                  render={({ field }) => (
                    <TextInput
                      placeholder="Email"
                      label="Email"
                      radius="xl"
                      size="lg"
                      type="email"
                      classNames={inputClass}
                      inputWrapperOrder={["input", "error", "label"]}
                      rightSection={
                        <Image
                          src="/email.svg"
                          alt="email"
                          width={50}
                          height={50}
                        />
                      }
                      {...field}
                      value={state.email}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        dispatch({
                          type: ActionTypes.SetValue,
                          name: "email",
                          value: e.target.value,
                        });
                      }}
                      error={errors.email?.message}
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    minLength: {
                      value: 10,
                      message: Errors.PhoneInvalid,
                    },
                    maxLength: {
                      value: 14,
                      message: Errors.PhoneInvalid,
                    },
                    pattern: {
                      value: /08\d{8,12}/g,
                      message: Errors.PhoneInvalid,
                    },
                    required: Errors.PhoneRequired,
                  }}
                  render={({ field }) => (
                    <TextInput
                      placeholder="Phone"
                      label="Phone"
                      radius="xl"
                      size="lg"
                      classNames={inputClass}
                      inputWrapperOrder={["input", "error", "label"]}
                      rightSection={
                        <Image
                          src="/phone.svg"
                          alt="phone"
                          width={50}
                          height={50}
                        />
                      }
                      {...field}
                      value={state.phone}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        dispatch({
                          type: ActionTypes.SetValue,
                          name: "phone",
                          value: e.target.value,
                        });
                      }}
                      error={errors.phone?.message}
                    />
                  )}
                />
                <Controller
                  name="company"
                  control={control}
                  rules={{ required: Errors.CompanyRequired }}
                  render={({ field }) => (
                    <TextInput
                      placeholder="Company"
                      label="Company"
                      radius="xl"
                      size="lg"
                      classNames={inputClass}
                      inputWrapperOrder={["input", "error", "label"]}
                      rightSection={
                        <Image
                          src="/company.svg"
                          alt="company"
                          width={50}
                          height={50}
                        />
                      }
                      {...field}
                      value={state.company}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        dispatch({
                          type: ActionTypes.SetValue,
                          name: "company",
                          value: e.target.value,
                        });
                      }}
                      error={errors.company?.message}
                    />
                  )}
                />
              </div>
            </Stepper.Step>
            <Stepper.Step completedIcon={2}>
              <Divider size="sm" mt="sm" mb="xl" color="whisper" />
              <div className="mb-6">
                <div className="font-bold text-2xl leading-10 text-violet">
                  Our services
                </div>
                <div className="text-lg leading-8 text-waterloo">
                  Please select which service you are interested in.
                </div>
              </div>

              <Controller
                name="service"
                control={control}
                render={({ field }) => (
                  <Radio.Group
                    aria-label="Select service"
                    classNames={{ root: radioClass["radiogroup-root"] }}
                    {...field}
                    value={state.service}
                    onChange={(val: Services) => {
                      field.onChange(val);
                      dispatch({
                        type: ActionTypes.SetValue,
                        name: "service",
                        value: val,
                      });
                    }}
                  >
                    <Radio
                      value={Services.Development}
                      label={Services.Development}
                      icon={() => (
                        <Image
                          src="/development.svg"
                          alt={Services.Development}
                          width={50}
                          height={50}
                        />
                      )}
                      classNames={radioClass}
                    />
                    <Radio
                      value={Services.WebDesign}
                      label={Services.WebDesign}
                      icon={() => (
                        <Image
                          src="/design.svg"
                          alt={Services.WebDesign}
                          width={50}
                          height={50}
                        />
                      )}
                      classNames={radioClass}
                      {...register("service")}
                    />
                    <Radio
                      value={Services.Marketing}
                      label={Services.Marketing}
                      icon={() => (
                        <Image
                          src="/marketing.svg"
                          alt={Services.Marketing}
                          width={50}
                          height={50}
                        />
                      )}
                      classNames={radioClass}
                      {...register("service")}
                    />
                    <Radio
                      value={Services.Other}
                      label={Services.Other}
                      icon={() => (
                        <Image
                          src="/other.svg"
                          alt={Services.Other}
                          width={50}
                          height={50}
                        />
                      )}
                      classNames={radioClass}
                      {...register("service")}
                    />
                  </Radio.Group>
                )}
              />
            </Stepper.Step>
            <Stepper.Step completedIcon={3}>
              <Divider size="sm" mt="sm" mb="xl" color="whisper" />
              <div className="mb-6">
                <div className="font-bold text-2xl leading-10 text-violet">
                  What's your project budget?
                </div>
                <div className="text-lg leading-8 text-waterloo">
                  Please select the project budget range you have in mind.
                </div>
              </div>

              <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                  <Radio.Group
                    aria-label="Select budget"
                    classNames={{ root: budgetClass["radiogroup-root"] }}
                    size="md"
                    {...field}
                    value={state.budget}
                    onChange={(val: BudgetValue) => {
                      field.onChange(val);
                      dispatch({
                        type: ActionTypes.SetValue,
                        name: "budget",
                        value: val,
                      });
                    }}
                  >
                    <Radio
                      label={Budget.Low}
                      value={BudgetValue.Low}
                      classNames={budgetClass}
                    />
                    <Radio
                      label={Budget.Mid}
                      value={BudgetValue.Mid}
                      classNames={budgetClass}
                    />
                    <Radio
                      label={Budget.High}
                      value={BudgetValue.High}
                      classNames={budgetClass}
                    />
                    <Radio
                      label={Budget.Premium}
                      value={BudgetValue.Premium}
                      classNames={budgetClass}
                    />
                  </Radio.Group>
                )}
              />
            </Stepper.Step>
            <Stepper.Step completedIcon={4}>
              <Divider size="sm" mt="sm" mb="xl" color="whisper" />
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
      <div className="flex justify-between w-full">
        {step == 0 ? (
          <div></div>
        ) : (
          <button
            type="button"
            className="flex items-center box-border border border-blueribbon pt-[19px] px-[40px] pb-[21px] rounded-[66px] text-lg cursor-pointer bg-white text-blueribbon"
            onClick={prevStep}
          >
            Previous step
          </button>
        )}
        {step == 3 ? (
          <div></div>
        ) : (
          <button
            type="button"
            className="flex items-center box-border pt-[19px] px-[40px] pb-[21px] rounded-[66px] text-lg cursor-pointer bg-blueribbon text-white font-bold shadow-[0_3px_12px_rgba(74,58,255,0.18)]"
            onClick={async () => {
              const result = await trigger(
                ["name", "email", "phone", "company"],
                { shouldFocus: true },
              );

              if (result) nextStep();
            }}
          >
            Next step
          </button>
        )}
      </div>
    </main>
  );
}
