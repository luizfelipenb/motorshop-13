import Routes from "./core/routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastStyles } from "./utils/toastStyles";
import { ToastWrapper } from "./utils/toastWrapper";

function App() {
  return (
    <>
      <ToastStyles />
      <Routes />
      <ToastWrapper id="custom__toast__wrapper" />
    </>
  );
}

export default App;
