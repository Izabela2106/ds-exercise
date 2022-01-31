import React from "react";
import { data } from "./mockData";
import Button from "../../components/Button/Button";
import { FiltersWrapper, Buttons, ResultsButton } from "./FiltersWrapper";

const Filters = () => {
  return (
    <FiltersWrapper>
      <h1>Filters</h1>
      <h2>Requirements</h2>
      <Buttons>
        {data.requirements.map((item, index) => (
          <Button key={index} label={item} size="small" checkable={true} />
        ))}
      </Buttons>
      <h2>Category</h2>
      <Buttons>
        {data.categories.map((item, index) => (
          <Button key={index} label={item} size="small" checkable={true} />
        ))}
      </Buttons>
      <h2>Location</h2>
      <Buttons>
        {data.locations.map((item, index) => (
          <Button key={index} label={item} size="small" checkable={true} />
        ))}
      </Buttons>
      <ResultsButton>
        <Button label="Show Results" size="medium" checkable={false} />
      </ResultsButton>
    </FiltersWrapper>
  );
};

export default Filters;
