import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'

const AlertBox = (props) => {

  const [seconds, setSeconds] = useState(5);
  
  useEffect(() => {

    if (props.showAlert) {
      if (seconds >= 0) {
        const timer = setInterval(() => setSeconds(seconds - 1), 1000);
        return () => clearInterval(timer);
      } else {
        props.setShowAlert(false);
      }
    }
  }, [props, seconds]);

  return (
    <Alert variant="success">
      <Alert.Heading>Message successfully sent to Karena LI.</Alert.Heading>
      {seconds > 0 ? <p className='mb-0'>This box is going to close in {seconds} seconds.</p> : <p className='mb-0'>This box is going to close in {seconds} second.</p>}
    </Alert>
  );
};

export default AlertBox;