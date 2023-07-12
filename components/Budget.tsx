import StepDivider from "@/components/StepDivider";
import { Control, Controller } from "react-hook-form";
import { Radio } from "@mantine/core";
import { Inputs, Budgets, BudgetValue } from "@/types/index.d";
import { budgetClass } from "@/styles/classes";

const Budget = ({ control }: { control: Control<Inputs, any> }) => {
  return (
    <>
      <StepDivider />
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
            classNames={{
              root: budgetClass().classes["radiogroup-root"],
            }}
            size="md"
            {...field}
            onChange={(val: BudgetValue) => {
              field.onChange(val);
            }}
          >
            <Radio
              label={Budgets.Low}
              value={BudgetValue.Low}
              classNames={budgetClass().classes}
            />
            <Radio
              label={Budgets.Mid}
              value={BudgetValue.Mid}
              classNames={budgetClass().classes}
            />
            <Radio
              label={Budgets.High}
              value={BudgetValue.High}
              classNames={budgetClass().classes}
            />
            <Radio
              label={Budgets.Premium}
              value={BudgetValue.Premium}
              classNames={budgetClass().classes}
            />
          </Radio.Group>
        )}
      />
    </>
  );
};

export default Budget;
