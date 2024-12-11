import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//@ts-ignore
import { render } from "react-dom";
import {
  transitions,
  positions,
  Provider as AlertProvider,
  types,
} from "react-alert";
import "./index.css";
import App from "./App.tsx";
import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";
//@ts-ignore
// import AlertTemplate from "react-alert-template-basic";
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "30px",
  types: types.SUCCESS,
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
//@ts-ignore
const AlertTemplate = ({ style, options, message, close }) => (
  <div
    style={style}
    className="bg-Green-medium text-Neutral-White font-karla h-20 w-96 rounded-md "
  >
    <div className="flex justify-between items-center px-6 py-4">
      {options.type === "info" && <FaCircleExclamation />}
      {options.type === "success" && <FaCircleCheck />}
      {options.type === "error" && ":("}
      {/* {
      (style = {
        backgroundColor: "hsl(169, 82%, 27%)",
      })
    } */}
      {(message = "The form is submitted successfully!")}
      <button onClick={close}>X</button>
    </div>
  </div>
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </StrictMode>
);
