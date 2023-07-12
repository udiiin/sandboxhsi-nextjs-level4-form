import StepDivider from "@/components/StepDivider";
import Image from "next/image";
import { Control, Controller } from "react-hook-form";
import { Radio } from "@mantine/core";
import { Inputs, Services } from "@/types/index.d";
import { serviceClass } from "@/styles/classes";

const Service = ({ control }: { control: Control<Inputs, any> }) => {
  return (
    <>
      <StepDivider />
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
            classNames={{
              root: serviceClass().classes["radiogroup-root"],
            }}
            {...field}
            onChange={(val: Services) => {
              field.onChange(val);
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
              classNames={serviceClass().classes}
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
              classNames={serviceClass().classes}
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
              classNames={serviceClass().classes}
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
              classNames={serviceClass().classes}
            />
          </Radio.Group>
        )}
      />
    </>
  );
};

export default Service;
