import { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { Box, Grid } from "@mui/material";

const Document = ({ onClose, onFilesUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...files]);
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      const existingFiles =
        JSON.parse(localStorage.getItem("uploadedFiles")) || [];

      const updatedFiles = [
        ...existingFiles,
        ...selectedFiles.map((file) => {
          return {
            name: file.name,
            data: URL.createObjectURL(file),
          };
        }),
      ];

      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));

      onFilesUpload(updatedFiles);

      setSelectedFiles([]);
    }
    onClose();
  };

  return (
    <div>
      <Grid item xs={9}>
        <Input
          fullWidth
          type="file"
          onChange={handleFileChange}
          inputProps={{ accept: "image/*", multiple: true }}
        />
      </Grid>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={selectedFiles.length === 0}
        >
          Confirm
        </Button>
      </Box>
    </div>
  );
};

export default Document;
