import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box, Grid, InputLabel, Button } from "@mui/material";
import Document from "../DocumentModel/Document";
import Event from "../EventModel/Event";
import { FaWindowClose } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Create = ({ onClose ,handleFilesUpload }) => {
  const [selectedOption, setSelectedOption] = useState("document");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box marginTop={4} display="flex" justifyContent="center" zIndex={1500}>
      <Box
        width="50%"
        border="1px solid black"
        borderRadius={2}
        padding={2}
        backgroundColor="white"
      >
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <InputLabel htmlFor="Type">Attachment Type</InputLabel>
            <Button onClick={onClose}>
              <FaWindowClose />
            </Button>
          </Box>

          <Select
            value={selectedOption}
            onChange={handleOptionChange}
            fullWidth
          >
            <MenuItem value="document">Document</MenuItem>
            <MenuItem value="event">Event</MenuItem>
          </Select>

          {selectedOption === "document" && <Document onClose={onClose} onFilesUpload={handleFilesUpload} />}
          {selectedOption === "event" && <Event onClose={onClose} />}
        </Grid>
      </Box>
    </Box>
  );
};

export default Create;
