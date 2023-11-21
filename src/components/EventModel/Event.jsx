import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextArea from "./TextArea";

const Event = ({onClose}) => {
  const [eventData, seteventData] = useState({
    eventTitle: "",
    eventType: "",
    sourcingStrategy: "",
    description: "",
  });

  const handleChange = (e) => {
    seteventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "eventTitle",
      "eventType",
      "sourcingStrategy",
      
    ];

    const isFormValid = requiredFields.every(
      (field) => eventData[field].trim() !== ""
    );

    if (!isFormValid) {
      alert("Please fill in all required fields");
      return;
    }

    localStorage.setItem("eventDetails", JSON.stringify(eventData));

    console.log("Updated Form Data:", eventData);

    seteventData({
      eventTitle: "",
      eventType: "",
      sourcingStrategy: "",
      description: "",
    });
    onClose()
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} marginBottom={2}>
        <Grid item xs={12}>
          <InputLabel htmlFor="eventTitle">eventTitle</InputLabel>
          <TextField
            placeholder="Please Enter Project Title"
            name="eventTitle"
            value={eventData.eventTitle}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="eventType">eventType</InputLabel>
          <Select
            name="eventType"
            value={eventData.eventType}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="" disabled>
              Select EventType
            </MenuItem>
            <MenuItem value="a">a</MenuItem>
            <MenuItem value="b">b</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="sourcingStrategy">sourcingStrategy</InputLabel>
          <Select
            name="sourcingStrategy"
            value={eventData.sourcingStrategy}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="" disabled>
              Select sourcingStrategy
            </MenuItem>
            <MenuItem value="x">x</MenuItem>
            <MenuItem value="y">y</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="Description">Description</InputLabel>
          <TextArea/>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-between">
        <Button
          type="button"
          variant="filledTonal"
          color="primary"
          size="large"
          style={{ width: "25%" }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "25%" }}
          
        >
          Confirm
        </Button>
        
      </Box>

    </form>
  );
};

export default Event;
