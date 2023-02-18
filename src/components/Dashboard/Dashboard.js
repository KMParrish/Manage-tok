import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    return () => {
      selectedFiles.forEach(file => {
        URL.revokeObjectURL(file.previewUrl);
      });
    };
  }, [selectedFiles]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    file.previewUrl = url;
    setSelectedFiles([...selectedFiles, file]);
  }

  const handleFileDelete = (file) => {
    const newSelectedFiles = selectedFiles.filter(selectedFile => selectedFile !== file);
    setSelectedFiles(newSelectedFiles);
  }

  const FilePreview = ({ file, onDelete }) => {
    const handlePreviewClick = () => {
      window.open(file.previewUrl);
    }

    const handleDeleteClick = () => {
      onDelete(file);
    }

    return (
      <div className="mb-4">
        <h3 className="mb-3">{file.name}</h3>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={handlePreviewClick}>Preview</button>
          <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
    );
  }

  const renderFilePreviews = () => {
    return selectedFiles.map((file, index) => (
      <div key={index} className="mb-4">
        <h3 className="mb-3">{file.name}</h3>
        <button className="btn btn-primary me-2" onClick={() => window.open(file.previewUrl)}>Preview</button>
        <button className="btn btn-danger" onClick={() => handleFileDelete(file)}>Delete</button>
      </div>
    ));
  }

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 w-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 w-100">
            <div className="card bg-dark text-white" style={{borderRadius: '2rem'}}>
              <div className="card-body p-5 d-flex flex-column">
                <h2 className="fw-bold mb-1 text-uppercase text-center">Your Dashboard</h2>
                <div className="row">
                  <div className="col-md-3">
                    <div className="list-group">
                      <label htmlFor="file-input" className="list-group-item list-group-item-action">
                        <i className="fa-solid fa-folder"></i> Open File
                      </label>
                      <input id="file-input" type="file" style={{ display: "none" }} onChange={handleFileSelect} />
                    </div>
                  </div>
                  <div className="col-md-9">
                    {selectedFiles.length > 0 && (
                      <div className="mb-4">
                        {renderFilePreviews()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Dashboard;
