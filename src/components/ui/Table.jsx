import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFormData } from "src/app/formDataReducer";
import { Button, Pagination, Search } from "src/components/ui";
import { calculateAge } from "src/utils/calculateAge";
import {
  StyledTable,
  TableContainer,
  TableData,
  TableHeader,
  TableRow,
} from "./ui.style";

const Table = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const formData = useSelector((state) => state.formData.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    return formData.filter((item) =>
      Object.values(item).some((val) =>
        val.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [formData, search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteFormData(id));
  };

  return (
    <TableContainer>
      <Search handleSearchChange={handleSearchChange} />

      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>First Name</TableHeader>
              <TableHeader>Last Name</TableHeader>
              <TableHeader>Age</TableHeader>
              <TableHeader>Skills</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <TableRow key={index}>
                <TableData>{item.firstName}</TableData>
                <TableData>{item.lastName}</TableData>
                <TableData>{calculateAge(item.birthday)}</TableData>
                <TableData>
                  {item.skills.map((skill, index) => (
                    <span key={index}>
                      {skill}
                      {index < item.skills.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </TableData>
                <TableData>
                  <Button
                    onClick={() => handleEdit(item.id)}
                    style={{ marginRight: "5px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    style={{ backgroundColor: "red" }}
                  >
                    Delete
                  </Button>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>

      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        filteredData={filteredData}
        itemsPerPage={itemsPerPage}
      />
    </TableContainer>
  );
};

export default Table;
