import React, { useState } from 'react';
import { Button } from 'antd';
import useSkynetUpload from '../hooks/useSkynetUpload';

const Uploader = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { skylink, status, uploadFile } = useSkynetUpload();

  return (
    <div>
      <h3>Input Field:</h3>
      <input
        type="file"
        name="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <h3>selectedFile State:</h3>
      {selectedFile && selectedFile.name}
      <h3>
        Upload Button to Call Hook: <br />
      </h3>
      <Button
        disabled={selectedFile == null}
        onClick={() => uploadFile(selectedFile)}
      >
        Upload to Skynet
      </Button>
      <h3>Upload Status:</h3>
      {status}
      <h3>Skylink:</h3>
      {skylink && (
        <a href={skylink} target="_blank" rel="noopener noreferrer">
          {skylink}
        </a>
      )}
    </div>
  );
};

export default Uploader;
