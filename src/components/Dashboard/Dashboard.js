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



  const handleFileDelete = (file) => {
    const newSelectedFiles = filesRef.current.filter(selectedFile => selectedFile !== file);
    filesRef.current = newSelectedFiles;
    setSelectedFiles(newSelectedFiles);
  }

  const handleFolderSelect = (event) => {
    const files = [...event.target.files];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/mov', 'video/avi'];
    const fileTypes = files.map(file => file.type);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      file.previewUrl = url;
      if (allowedTypes.includes(file.type)) {
        if (file.type.includes('image')) {
          // For images, just use the image URL as the thumbnail URL
          file.thumbnailUrl = url;
        } else {
          // For videos, generate a thumbnail at 5 seconds using the HTML5 video element
          const video = document.createElement('video');
          video.src = url;
          video.currentTime = 5;
          video.onloadeddata = () => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            file.thumbnailUrl = canvas.toDataURL();
          };
        }
      } else {
        // For unsupported file types, set a default thumbnail URL
        file.thumbnailUrl = '/path/to/default/thumbnail';
      }
    }
    filesRef.current = [...files];
    setSelectedFiles(filesRef.current);
  };
  
  
  

  const FilePreviewBox = ({ file, onDelete }) => {
    const handlePreviewClick = () => {
      window.open(file.previewUrl);
    };
    
    const handleDeleteClick = () => {
      onDelete(file);
    };
      
    return (
      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100" style={{ width: '15rem' }}>
              <div style={{ paddingBottom: '75%', position: 'relative' }}>
                {file.type.includes('video') ?
                  <video src={file.previewUrl} className="card-img-top" poster={file.previewUrl + '?width=640'} onClick={handlePreviewClick} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '100%' }} controls></video>
                  :
                  <img src={file.previewUrl} className="card-img-top" onClick={handlePreviewClick} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                }
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name.split(' ').slice(0, 3).join(' ')}...</h5>
                <button className="btn" onClick={handleDeleteClick}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
    
    
    
    
  };
  
  

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
    <section className="vh-100 gradient-custom-2 container-padding">
      
        <div className="row d-flex justify-content-center align-items-stretch h-100">
          <div className="col-2">
            <div className="card h-100">
              <div className="card-header text-white">Sidebar</div>
              <div className="card-body">
                <label htmlFor="folder-upload" className="btn mb-2 w-100">Open Folder</label>
                <input id="folder-upload" type="file" webkitdirectory="" mozdirectory="" style={{display: 'none'}} onChange={handleFolderSelect} />
                <button className="btn mb-2 w-100" onClick={() => setSelectedFiles([])}>Clear All</button>
              </div>
            </div>
          </div>
          <div className="col-10 h-100">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                <DropdownButton title={<><i className="fab fa-tiktok fa-inverse me-2"></i>Accounts</>} variant="secondary" className="text-decoration-none text-dark">
                  <Dropdown.Item href="#">Account 1</Dropdown.Item>
                  <Dropdown.Item href="#">Account 2</Dropdown.Item>
                  <Dropdown.Item href="#">Account 3</Dropdown.Item>
                  </DropdownButton>
  
                </div>
                <DropdownButton title="Sort by" variant="secondary" className="text-decoration-none text-dark">
                  <Dropdown.Item href="#">Name</Dropdown.Item>
                  <Dropdown.Item href="#">Upload Date</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="card-body" style={{ overflow: 'auto' }}>
                {selectedFiles.length > 0 ? renderFilePreviews() : <p>No files selected.</p>}
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
  
  
  
  
  
  
  
  

  
  
  
}

export default Dashboard 
