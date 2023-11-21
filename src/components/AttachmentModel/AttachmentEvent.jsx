import { useEffect, useState } from "react";
import Create from "../CreateModel/Create";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import BasicTable from "./Table";

const AttachmentTable = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    setUploadedFiles(storedFiles);
  }, [setUploadedFiles]);

  const handleFilesUpload = (files) => {
    console.log(files)
    alert("file uploded")
    setUploadedFiles(files);
  };

  const onClose = () => {
    setIsCreateModalOpen(false);
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
          <Box display="flex" marginRight="auto">
            <p style={{fontWeight:"600"}}>Event & Attachments</p>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              style={{ marginRight: "20px" }}
              onClick={() => setIsCreateModalOpen(true)}
            >
              Create
            </Button>
            <Button variant="outlined">Manage</Button>
          </Box>
          {isCreateModalOpen && (
            <Box
              position="fixed"
              top={0}
              left={0}
              width="100%"
              height="100%"
              zIndex={999}
              backgroundColor="rgba(0, 0, 0, 0.8)" 
            >
              <Box
                top="50%"
                left="50%"
                width="100%"
                transform="translate(-50%, -50%)"
              >
                <Create onClose={onClose} handleFilesUpload={handleFilesUpload}/>
              </Box>
            </Box>
          )}
        </Box>
        <Box>
          <BasicTable tableData={uploadedFiles} />
        </Box>
      </Box>
    </div>
  );
};

export default AttachmentTable;
