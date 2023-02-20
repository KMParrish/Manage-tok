import React, { useState, useEffect, useRef } from 'react';
import "./Dashboard.css"
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Dashboard() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const filesRef = useRef([]);

  useEffect(() => {
    return () => {
      filesRef.current.forEach(file => {
        URL.revokeObjectURL(file.previewUrl);
      });
    };
  }, []);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    file.previewUrl = url;
    filesRef.current = [...filesRef.current, file];
    setSelectedFiles(filesRef.current);
  }

  const handleFileDelete = (file) => {
    const newSelectedFiles = filesRef.current.filter(selectedFile => selectedFile !== file);
    filesRef.current = newSelectedFiles;
    setSelectedFiles(newSelectedFiles);
  }

  const handleFolderSelect = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      file.previewUrl = url;
    }
    filesRef.current = [...files];
    setSelectedFiles(filesRef.current);
  }

  const FilePreviewBox = ({ file, onDelete }) => {
    const handlePreviewClick = () => {
      window.open(file.previewUrl);
    }
  
    const handleDeleteClick = () => {
      onDelete(file);
    }
  
    const fileName = file.name.split(' ').slice(0, 3).join(' ');
  
    return (
      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100" style={{ width: '18rem' }}>
              <img src={file.previewUrl} className="card-img-top" alt={file.name} style={{objectFit: 'cover', height: '10rem'}} />
              <div className="card-body" style={{ maxHeight: '6rem', overflow: 'hidden' }}>
              <h5 className="card-title" style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                {file.name}
              </h5>

                <div className="d-flex justify-content-between">
                  <button className="btn mr-2" onClick={handlePreviewClick}><i className="fas fa-link"></i> Preview</button>
                  <button className="btn btn-secondary" onClick={handleDeleteClick}><i className="fas fa-trash"></i> Delete</button>
                </div>
                <p className="card-text">{file.description}</p>
                <p className="card-text"><small className="text-muted">{file.uploadDate}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  const renderFilePreviews = () => {
    return (
      <div className="d-flex flex-wrap">
        {selectedFiles.map((file, index) => (
          <div key={index} className="mx-3 my-3">
            <FilePreviewBox file={file} onDelete={handleFileDelete} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <DropdownButton title="Accounts" variant="link" className="text-decoration-none text-dark" >
                  <Dropdown.Item href="#">Account 1</Dropdown.Item>
                  <Dropdown.Item href="#">Account 2</Dropdown.Item>
                  <Dropdown.Item href="#">Account 3</Dropdown.Item>
                </DropdownButton>
                <span className="badge bg-secondary ms-2">3</span>
                <div className="d-flex mb-4">
                  <label htmlFor="file-upload" className="btn btn-primary me-2">Open File</label>
                  <input id="file-upload" type="file" accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif" style={{display: 'none'}} onChange={handleFileSelect} />
                  <label htmlFor="folder-upload" className="btn btn-primary me-2">Open Folder</label>
                  <input id="folder-upload" type="file" webkitdirectory="" mozdirectory="" style={{display: 'none'}} onChange={handleFolderSelect} />
                  <DropdownButton title="Sort by" variant="secondary" className="me-2">
                    <Dropdown.Item href="#">Name</Dropdown.Item>
                    <Dropdown.Item href="#">Upload Date</Dropdown.Item>
                  </DropdownButton>
                  <button className="btn btn-danger me-2" onClick={() => setSelectedFiles([])}>Clear All</button>
                </div>
                {selectedFiles.length > 0 ? renderFilePreviews() : <p>No files selected.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Dashboard 
