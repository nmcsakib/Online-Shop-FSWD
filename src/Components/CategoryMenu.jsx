import { useState, useRef, useEffect } from "react";
import {
  DropDownWrapper,
  DropDownButton,
  SVG,
  OptionMenu,
  OptionRow,
  Label
} from "../Styles/DropdownStyles";
import useProducts from "../data/useProducts";

const  CategoryMenu = ({ options = [], mainDefaultText, setMainDefaultText }) => {
  const [actionDropDown, setActionDropDown] = useState(false);
  const dropdownEl = useRef(null);
 
  const dropdown = () => {
    setActionDropDown(!actionDropDown);
  };

const handleOptionRow = (option) => {

    setActionDropDown(!actionDropDown);
    setMainDefaultText(option)
}


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
                {options.map((option, key) => (
                  <OptionRow key={key} onClick={() => handleOptionRow(option)}>
                    <Label>{`${option}`}</Label>
                    
                  </OptionRow>
                ))}
              </OptionMenu>
            </>
          ) : null}
         
        </DropDownWrapper>
      </div>
    </DropDownWrapper>
  );
}

export default CategoryMenu;

