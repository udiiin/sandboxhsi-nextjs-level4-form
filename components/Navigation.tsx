import { Inputs } from "@/types";
import { UseFormTrigger } from "react-hook-form";

const Navigation = ({
  step,
  goToPrevStep,
  goToNextStep,
  trigger,
}: {
  step: number;
  goToPrevStep: () => void;
  goToNextStep: () => void;
  trigger: UseFormTrigger<Inputs>;
}) => {
  return (
    <div className="flex justify-between w-full">
      {step == 0 ? (
        <div></div>
      ) : (
        <button
          type="button"
          className="flex items-center box-border border border-blueribbon pt-[19px] px-[40px] pb-[21px] rounded-[66px] text-lg cursor-pointer bg-white text-blueribbon"
          onClick={goToPrevStep}
        >
          Previous step
        </button>
      )}
      {step == 3 ? (
        <div></div>
      ) : (
        <button
          type="button"
          className="flex items-center box-border border border-blueribbon pt-[19px] px-[40px] pb-[21px] rounded-[66px] text-lg cursor-pointer bg-blueribbon text-white font-bold shadow-[0_3px_12px_rgba(74,58,255,0.18)]"
          onClick={async () => {
            const result = await trigger(
              ["name", "email", "phone", "company"],
              { shouldFocus: true },
            );

            if (result) goToNextStep();
          }}
        >
          Next step
        </button>
      )}
    </div>
  );
};

export default Navigation;
