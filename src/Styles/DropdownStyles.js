import styled from "styled-components";

export const DropDownWrapper = styled.div`
/* margin-top: 100px; */
  position: relative;
`;

export const DropDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  background-color: white;
margin-bottom: 20px;
  border-width: 1px;
  border-radius: 0.375rem;

  padding: 0.5rem;

  /* Font */
  font-size: 1rem;

  /* Shadow */
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    

  &:focus {
    outline: none;
  }

`;

export const SVG = styled.svg`
  margin-left: 4px;
  height: 1rem;
  width: 1.2rem;
`;

export const OptionMenu = styled.div`
  transform-origin: top bottom;
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  margin-top: -0.5rem;
  margin-right: -0.25rem;
  min-width: 150px;
  max-height: 16rem;
  overflow-y: scroll;
  z-index: 40;

  border-width: 0.5px;
  border-style: solid;
  border-radius: 0.375rem;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219);

  &:hover {
    outline: none;
  }
`;

export const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  background-color: salmon;
  border: 0;
  border-bottom: 1px solid gray;
  border-style: solid;
  border-color: rgba(209, 213, 219);

  &:hover {
    background-color: #73aed4;
  }
`;

export const Label = styled.label`
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  /* background-color: pink; */
  /* Font */
  font-size: 0.875rem;
  line-height: 1.25rem;

  --tw-text-opacity: 1;
  color: rgb(55, 65, 81);
`;
