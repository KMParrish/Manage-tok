import React, { useState, useEffect, useRef } from 'react';
import "./Dashboard.css"


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

  const FilePreviewBox = ({ file, onDelete }) => {
    const handlePreviewClick = () => {
      window.open(file.previewUrl);
    }

    const handleDeleteClick = () => {
      onDelete(file);
    }

    return (
      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100" style={{ width: '18rem' }}>
              <img src={file.previewUrl} className="card-img-top" alt={file.name} style={{objectFit: 'cover', height: '10rem'}} />
              <div className="card-body">
                <h5 className="card-title">{file.name}</h5>
                <div className="d-flex justify-content-between">
                  <button className="btn mr-2" onClick={handlePreviewClick}><i className="fas fa-link"></i> Preview</button>
                  <button className="btn btn-secondary" onClick={handleDeleteClick}><i className="fas fa-trash"></i> Delete</button>
                </div>
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
        <div className="row d-flex justify-content-center align-items-center h-100 w-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 w-100">
            <div className="card bg-dark text-white" style={{borderRadius: '2rem', height: '80vh'}}>
              <div className="card-body p-5 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa-brands fa-tiktok fa-lg me-2"></i>
                  <span className="text-white me-2">Accounts</span>
                </div>
                <h2 className="fw-bold mb-1 text-uppercase text-center">Your Dashboard</h2>
                <div className="row">
                  <div className="col-md-3 d-flex flex-column justify-content-between text-center" style={{ borderRight: '2px solid white' }}>
                    <div>
                      <div className="list-group">
                        <label htmlFor="file-input" className="list-group-item list-group-item-action">
                          <i className="fa-solid fa-folder"></i> Open File
                        </label>
                        <input id="file-input" type="file" style={{ display: "none" }} onChange={handleFileSelect} />
                      </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary w-100">Upload</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div style={{ height: 'calc(80vh - 150px)', overflowY: 'auto' }}>
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
      </div>
    </section>
  );
  
  
  
  
  
  
  

                        }

export default Dashboard
