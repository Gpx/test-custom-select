import React from "react";
import Select from "react-select";

export default function MySelector() {
  const options = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" }
  ];
  const [color, setColor] = React.useState(options[0]);

  return (
    <>
      <h1>Your favorite color is {color.label}</h1>
      <Select
        options={options}
        value={color}
        onChange={value => setColor(value)}
      />
    </>
  );
}
