import React, { useState, useEffect } from 'react';

const AlertBox = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Alert</button>
      {showAlert && <div className="alert">This is an alert!</div>}
    </div>
  );
};

export default AlertBox;