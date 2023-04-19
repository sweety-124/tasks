import React from 'react';

const Alert = ({ type, message, onClose,typeAction }) => {
  return (
    <div style={{top:typeAction=='delete'?40:''}} className={`alert alert-${type}`} role="alert">
       
      {message}
      {onClose && (
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};

export default Alert;
