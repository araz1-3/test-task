import styled from "styled-components";


const PieChart = styled.div`
width: 300px;
height: 300px;
`;

const SearchForm = styled.form`
  position: relative;
`;

const ButtonContainer = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;

  &.btn--primary {
    background-color: #007bff;
    color: #fff;
    &:hover {
      background-color: #0069d9;
    }
  }

  &.btn--secondary {
    background-color: #6c757d;
    color: #fff;
    &:hover {
      background-color: #5a6268;
    }
  }

  &.btn--outline {
    background-color: transparent;
    color: #007bff;
    border: 2px solid #007bff;
    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }

  &.btn--danger {
    background-color: #dc3545;
    color: #fff;
    &:hover {
      background-color: #c82333;
    }
  }
`;


const TableContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f1f1f1;
  font-weight: bold;
  color: #333;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableData = styled.td`
  padding: 12px;
  text-align: left;
  color: #333;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  background-color: ${(props) => (props.active ? "#a6c1f7" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c5daf7;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
  border-radius: 4px;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;


export {
  SearchForm,
  ButtonContainer,
  TableContainer,
  SearchInput,
  StyledTable,
  PaginationButton,
  PaginationContainer,
  TableData,
  TableHeader,
  TableRow,
  ErrorText,
  Select,
  Input,
  Label,
  InputContainer,
  PieChart
};
