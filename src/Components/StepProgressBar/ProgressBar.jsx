import "./ProgressBar.css";
export default function ProgressBar({ steps, activestep, setActivestep }) {
  const handlePreviousStep = () => {
    // The Math.max() method returns the number with the highest value.
    // Math.max(n1, n2,...)
    // n1, n2,...	Optional.One or more numbers to compare.
    setActivestep((prevstep) => Math.max(prevstep - 1, 0));
    // if the prevstep is 2 then math.max(1,0)
  };
  const handlNextStep = () => {
    // The Math.min() method returns the number with the lowest value.
    // Math.min(n1, n2,...)
    setActivestep((prevstep) => Math.min(prevstep + 1, steps.length - 1));
    // hence activestep is starting from zero we are writing step-length-1
    // if the prevstep is 2 then math.max(3,4)
  };
  const CalculateCurrentStepWidth = () => {
    return `${(100 / (steps.length - 1)) * activestep}%`;
  };
  return (
    <div>
      <div className="steps">
        {steps && steps.length > 0
          ? steps.map((stepItem, index) => {
              return (
                <div
                  className={`step ${index <= activestep ? "active" : ""}`}
                  key={index}
                  style={{ width: CalculateCurrentStepWidth() }}
                >
                  {stepItem}
                </div>
              );
            })
          : null}
      </div>
      <div className="step-buttons-wrapper">
        <button disabled={activestep === 0} onClick={handlePreviousStep}>
          Previous
        </button>
        <button
          disabled={activestep === steps.length - 1}
          onClick={handlNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
