import AppRoutes from "./routes/routes";
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


function App() {
  return (
  <>
    <ToastContainer />
    <AppRoutes />
  </>
  )
}

export default App;
