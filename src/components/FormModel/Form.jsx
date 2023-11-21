import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const Form = ({ setStep }) => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    currency: "",
    description: "",
    precedingDocument: "",
    department: "",
    owner: "",
    sourcingStrategy: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "projectTitle",
      "currency",
      "description",
      "precedingDocument",
      "department",
      "owner",
      "sourcingStrategy",
    ];

    const isFormValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isFormValid) {
      alert("Please fill in all required fields");
      return;
    }

    localStorage.setItem("headerDetails", JSON.stringify(formData));

    console.log("Updated Form Data:", formData);

    setFormData({
      projectTitle: "",
      currency: "",
      description: "",
      precedingDocument: "",
      department: "",
      owner: "",
      sourcingStrategy: "",
    });

    setStep(1);
  };

  return (
    <div>
      <Box marginTop={4} marginLeft="auto" width="80%">
        <Box
          width="95%"
          border="1px solid black"
          borderRadius={2}
          padding={2}
          backgroundColor="#f7f7f7"
        >
          <Box>
            <p style={{ fontWeight: "600" }}>HeaderDetails</p>
            <Box marginLeft={126}>
              <Button variant="outlined" >Copy Form</Button>
            </Box>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} marginBottom={2}>
              <Grid item xs={6}>
                <InputLabel htmlFor="Project Title">Project Title</InputLabel>
                <TextField
                  placeholder="Please Enter Project Title"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel htmlFor="currency">Currency</InputLabel>
                <Select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value="" disabled>
                    Select Currency
                  </MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="GBP">GBP</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={2}>
              <Grid item xs={6}>
                <InputLabel htmlFor="Description">Description</InputLabel>
                <TextField
                  placeholder=""
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel htmlFor="precedingDocument">
                  preceding Document
                </InputLabel>
                <TextField
                  placeholder="precedingDocument"
                  name="precedingDocument"
                  value={formData.precedingDocument}
                  onChange={handleChange}
                  type="number"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={2}>
             
              <Grid item xs={6} marginLeft={72}>
                <InputLabel htmlFor="Department">Department</InputLabel>
                <Select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value="" disabled>
                    Department
                  </MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Hr">Hr</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={2}>
              <Grid item xs={6}>
                <InputLabel htmlFor="Owner">Owner </InputLabel>
                <TextField
                  placeholder="Kareem Ahmed"
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel htmlFor="sourcingStrategy">
                  Sourcing Strategy{" "}
                </InputLabel>
                <TextField
                  placeholder="Please Select Sourcing Strategy"
                  name="sourcingStrategy"
                  value={formData.sourcingStrategy}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop={4}
        width="80%"
        marginLeft={31}
      >
        <Box width="46%" marginLeft={7}>
          <Button
            type="button"
            variant=""
           
            size="large"
            style={{ width: "45%" , backgroundColor:"#d7d5d5" }}
          >
            Back
          </Button>
        </Box>

        <Box display="flex" justifyContent="space-between" width="48%">
          <Button
            type="button"
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "45%" }}
          >
            Save & Close
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "45%" }}
            onClick={handleSubmit}
          >
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Form;
