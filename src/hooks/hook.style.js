import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
`;

const DropdownButton = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  background: #fff;
  position: relative;
  margin-bottom: 20px;

  &:hover {
    border-color: #007bff;
  }
`;

const Tag = styled.span`
  background-color: #007bff;
  color: white;
  padding: 5px 8px;
  border-radius: 3px;
  margin: 2px 4px 2px 0;
  font-size: 0.9em;
`;

const DropdownIcon = styled.span`
  margin-left: auto;
  font-size: 0.9em;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: 150px;
  overflow-y: auto;
  padding: 5px 0;
`;

const DropdownOption = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }

  label {
    cursor: pointer;
  }
  input {
    margin-right: 10px;
  }
`;

export {
  DropdownButton,
  DropdownContainer,
  DropdownIcon,
  DropdownLabel,
  DropdownMenu,
  DropdownOption,
  Tag,
};
