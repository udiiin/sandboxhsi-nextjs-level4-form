import StepDivider from "@/components/StepDivider";
import Image from "next/image";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextInput } from "@mantine/core";
import { Errors, Inputs } from "@/types/index.d";
import { inputClass } from "@/styles/classes";

const Contact = ({
  control,
  errors,
}: {
  control: Control<Inputs, any>;
  errors: FieldErrors<Inputs>;
}) => {
  return (
    <>
      <StepDivider />
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
              classNames={inputClass().classes}
              inputWrapperOrder={["input", "error", "label"]}
              rightSection={
                <Image src="/name.svg" alt="name" width={50} height={50} />
              }
              {...field}
              onChange={(e) => {
                field.onChange(e.target.value);
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
              classNames={inputClass().classes}
              inputWrapperOrder={["input", "error", "label"]}
              rightSection={
                <Image src="/email.svg" alt="email" width={50} height={50} />
              }
              {...field}
              onChange={(e) => {
                field.onChange(e.target.value);
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
              classNames={inputClass().classes}
              inputWrapperOrder={["input", "error", "label"]}
              rightSection={
                <Image src="/phone.svg" alt="phone" width={50} height={50} />
              }
              {...field}
              onChange={(e) => {
                field.onChange(e.target.value);
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
              classNames={inputClass().classes}
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
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
              error={errors.company?.message}
            />
          )}
        />
      </div>
    </>
  );
};

export default Contact;
