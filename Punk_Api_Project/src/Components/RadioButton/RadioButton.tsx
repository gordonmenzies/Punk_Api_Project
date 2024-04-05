import "./RadioButton.scss";
import { ChangeEvent } from "react";

type RadioButtonProps = {
  filterChoice: string;
  readFilter: (selectedValue: string, filterChoice: string) => void;
};

const RadioButton = ({ readFilter, filterChoice }: RadioButtonProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    readFilter(event.target.value, filterChoice);
  };
  return (
    <div className="radioButton__container">
      <input
        type="radio"
        id="option1"
        name="options"
        value="option1"
        onChange={handleChange}
      />
      <p>{filterChoice}</p>
    </div>
  );
};

export default RadioButton;
