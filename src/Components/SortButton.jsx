import { useState, useRef, useEffect } from "react";
import {
  DropDownWrapper,
  DropDownButton,
  SVG,
  OptionMenu,
  OptionRow,
  Label
} from "../Styles/DropdownStyles";

const  SortButton = ({ defaultText = "", }) => {
  const [actionDropDown, setActionDropDown] = useState(false);
  const dropdownEl = useRef(null);
  const [mainDefaultText, setMainDefaultText] = useState(defaultText);

  const dropdown = () => {
    setActionDropDown(!actionDropDown);
  };

const handleOptionRow = () => {

    setActionDropDown(!actionDropDown);
}
  useEffect(() => {
    setMainDefaultText(defaultText);
  }, [defaultText]);

  // Click event listener to close dropdown

  return (
    <DropDownWrapper>
      <div ref={dropdownEl}>
        <DropDownButton onClick={dropdown}>
          {mainDefaultText}
          <SVG>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </SVG>
        </DropDownButton>

        <DropDownWrapper>
          {actionDropDown ? (
            <>
              <OptionMenu role="menu">
               
                  <OptionRow onClick={() => handleOptionRow()}>
                    <Label>Low to High</Label>
                  </OptionRow>
                  <OptionRow onClick={() => handleOptionRow()}>
                  <Label>High to Low</Label>
                  </OptionRow>

              </OptionMenu>
            </>
          ) : null}
         
        </DropDownWrapper>
      </div>
    </DropDownWrapper>
  );
}

export default SortButton;

