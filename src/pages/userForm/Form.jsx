import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFormData } from "src/app/formDataReducer";
import { Button, TextField } from "src/components/ui";
import { FormContainer } from "./Form.style";
import MultiSelect from "src/hooks/useMultiSelect";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    skills: [],
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required and cannot be empty";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required and cannot be empty";
    }
    if (!formData.birthday) {
      newErrors.birthday = "Birthday is required";
    } else {
      const age = new Date().getFullYear() - new Date(formData.birthday).getFullYear();
      if (age < 18) newErrors.birthday = "Must be at least 18 years old";
    }
    if (formData.skills.length === 0) {
      newErrors.skills = "At least one skill is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(
        addFormData({
          ...formData,
          id: Date.now().toString(),
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
        })
      );
      setFormData({ firstName: "", lastName: "", birthday: "", skills: [] });
      setErrors({});
      navigate("/table");
    }
  };

  const skillOptions = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        type="text"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        hasError={errors.firstName}
      />

      <TextField
        label="Last Name"
        type="text"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        hasError={errors.lastName}
      />

      <TextField
        label="Birthday"
        type="date"
        value={formData.birthday}
        onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
        hasError={errors.birthday}
      />

      <MultiSelect
        label="Skills"
        options={skillOptions}
        selectedValues={formData.skills}
        onChange={(selected) => setFormData({ ...formData, skills: selected })}
      />
      {errors.skills && <p style={{ color: "red",marginBottom:"10px" }}>{errors.skills}</p>}

      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default Form;
