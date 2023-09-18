type Props = {
  isYearly: boolean;
};

const Slider = ({ isYearly }: Props) => {
  return (
    <div className={"switch__container"}>
      <p className={!isYearly ? "switch__active" : "switch__inactive"}>
        Monthly
      </p>
      <label className={"switch"} htmlFor="sliderY">
        <span className={"slider"}></span>
      </label>
      <p className={isYearly ? "switch__active" : "switch__inactive"}>Yearly</p>
    </div>
  );
};

export default Slider;
