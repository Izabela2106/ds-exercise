import styled from "styled-components";

export const FiltersWrapper = styled.div`
  margin: 20px;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;

  h2,
  h1 {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Trebuchet MS", sans-serif;
  }
  h2 {
    background-color: #f3f5f7;
    margin: 15px;
    padding-left: 8px;
    font-weight: normal;
  }
  h1 {
    justify-content: center;
    margin-top: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3px;
  > * {
    margin: 4px;
  }
`;

export const ResultsButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  > * {
    margin: 10px;
  }
  margin-top: 10px;
`;
