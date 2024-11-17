import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateFormData } from "src/app/formDataReducer";
import { Button, TextField } from "src/components/ui";
import { FormContainer } from "./Form.style";
import MultiSelect from "src/hooks/useMultiSelect";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const rowToEdit = useSelector((state) =>
    state.formData.data.find((item) => item.id === id)
  );

  const [editedData, setEditedData] = useState(rowToEdit || {});
  const [errors, setErrors] = useState({});
  const skillOptions = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

  useEffect(() => {
    if (!rowToEdit) {
      navigate("/table");
    }
  }, [rowToEdit, navigate]);

  const validate = () => {
    const newErrors = {};

    if (!editedData.firstName.trim()) {
      newErrors.firstName = "First Name is required and cannot be empty";
    }
    if (!editedData.lastName.trim()) {
      newErrors.lastName = "Last Name is required and cannot be empty";
    }
    if (!editedData.birthday) {
      newErrors.birthday = "Birthday is required";
    } else {
      const age = new Date().getFullYear() - new Date(editedData.birthday).getFullYear();
      if (age < 18) newErrors.birthday = "Must be at least 18 years old";
    }
    if (!editedData.skills.length) {
      newErrors.skills = "At least one skill is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const trimmedData = {
        ...editedData,
        firstName: editedData.firstName.trim(),
        lastName: editedData.lastName.trim(),
      };
      dispatch(updateFormData({ id, updatedData: trimmedData }));
      navigate("/table");
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <FormContainer onSubmit={handleEditSubmit}>
        <TextField
          label="First Name"
          type="text"
          value={editedData.firstName}
          onChange={(e) => setEditedData({ ...editedData, firstName: e.target.value })}
          hasError={errors.firstName}
        />

        <TextField
          label="Last Name"
          value={editedData.lastName}
          onChange={(e) => setEditedData({ ...editedData, lastName: e.target.value })}
          hasError={errors.lastName}
        />

        <TextField
          label="Birthday"
          type="date"
          value={editedData.birthday}
          onChange={(e) => setEditedData({ ...editedData, birthday: e.target.value })}
          hasError={errors.birthday}
        />

        <MultiSelect
          label="Skills"
          options={skillOptions}
          selectedValues={editedData.skills}
          onChange={(selected) => setEditedData({ ...editedData, skills: selected })}
        />
        {errors.skills && <p style={{ color: "red" }}>{errors.skills}</p>}
        
        <Button type="submit">Save Changes</Button>
      </FormContainer>
    </div>
  );
};

export default EditForm;
