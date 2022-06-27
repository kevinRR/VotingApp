import React, { useEffect ,useState} from "react"
import Alert from '@mui/material/Alert';


export const ErrorAlert = ({props,severity}) => {
    const [showAlert, setShowAlert] = useState(true)
// console.log('this is test',message,severity,setShowAlert)
    useEffect(() => {
      const timeout = setTimeout(() => {
        props.setShowAlert(false);  // Disable your alert after 5 seconds
       }, 20000);
 
      return () => {
        clearTimeout(timeout); // Clears timer in case you close your alert somewhere else.
      }
    }, [props])
 return  (<>
  
    <div>
    {severity==='success' && 
    <Alert severity="success" icon={false} 
      color="success">Login Successfull 
    </Alert>  }
    {severity==='error' && 
    <Alert severity="error" icon={false} 
      color="error">Invalid credential please check your credential
    </Alert>  }
    
  </div>
    </>);

}