import React, { useEffect ,useState} from "react"
import Alert from '@mui/material/Alert';


export const MyAlert = (props) => {
    const [showAlert, setShowAlert] = useState(true)
// console.log('this is test',message,severity,setShowAlert)
    useEffect(() => {
      const timeout = setTimeout(() => {
        props.setShowAlert(false);  // Disable your alert after 5 seconds
       }, 5000);
 
      return () => {
        clearTimeout(timeout); // Clears timer in case you close your alert somewhere else.
      }
    }, [props])
 return (
    <div>
       
    <Alert severity="success"
    color="info">This
     is a success alert — check it out!
  </Alert> 
  </div>
 )

}