import { useReducer } from "react";
import App from "../App";
const useApplicationData = function() {

  const defaultState = {
    show: false
  };
  const reducer = function(state, action) {
    switch (type) {
      case "setShow":
        console.log("is this working???");
        (show) => show = !show 
      default: {
        console.log('wuppy time')
      }
  }
  };

  const [state, dispatch] = useReducer(reducer, defaultState);







};


export default useApplicationData;



/////////
// needs a return to get the state back from App.jsx