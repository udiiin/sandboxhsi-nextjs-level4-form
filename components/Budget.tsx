import StepDivider from "@/components/StepDivider";
import { Dispatch } from "react";
import { Control, Controller } from "react-hook-form";
import { Radio } from "@mantine/core";
import {
  Action,
  Inputs,
  Budgets,
  BudgetValue,
  ActionTypes,
} from "@/types/index.d";
import { budgetClass } from "@/styles/classes";

const Budget = ({
  control,
  state,
  dispatch,
}: {
  control: Control<Inputs, any>;
  state: Inputs;
  dispatch: Dispatch<Action>;
}) => {
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
