import { useState, useRef } from "react";
import {
  DropDownWrapper,
  DropDownButton,
  SVG,
  OptionMenu,
  OptionRow,
  Label
} from "../Styles/DropdownStyles";
import PropTypes from 'prop-types';

const SortButton = ({ setSortingText }) => {
  const [actionDropDown, setActionDropDown] = useState(false);
  const dropdownEl = useRef(null);

  const dropdown = () => {
    setActionDropDown(!actionDropDown);
  };

  const handleOptionRow = (text) => {
    setActionDropDown(!actionDropDown);
    setSortingText(text)
  }

  return (
    <DropDownWrapper>
      <div ref={dropdownEl}>
        <DropDownButton onClick={dropdown}>
          Sort
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

                <OptionRow onClick={() => handleOptionRow("Low to High")}>
                  <Label>Low to High</Label>
                </OptionRow>
                <OptionRow onClick={() => handleOptionRow("High to Low")}>
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

SortButton.propTypes = {
  setSortingText: PropTypes.func
}
export default SortButton;

