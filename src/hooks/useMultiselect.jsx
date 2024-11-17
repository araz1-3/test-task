import React, { useState, useRef, useEffect } from "react";
import {
    DropdownOption,
    DropdownContainer,
    DropdownLabel,DropdownButton,Tag,DropdownIcon,DropdownMenu
} from "./hook.style"


const MultiSelect = ({ label, options, selectedValues, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (value) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((item) => item !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownLabel>{label}</DropdownLabel>
      <DropdownButton onClick={toggleDropdown}>
        {selectedValues.length > 0 ? (
          selectedValues.map((item) => <Tag key={item}>{item}</Tag>)
        ) : (
          <span style={{ color: "#aaa" }}>Select skills</span>
        )}
        <DropdownIcon>{isOpen ? "▲" : "▼"}</DropdownIcon>
      </DropdownButton>

      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownOption key={option}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default MultiSelect;
