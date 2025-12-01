import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Home } from "./features/home"

function App() {

  return (
    <>
      <ToastContainer />
      <Home />
    </>
  )
}

export default App
