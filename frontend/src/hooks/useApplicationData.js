// import { useReducer, useEffect } from "react";
// import App from "../App";
// const useApplicationData = function() {


//   const defaultState = {
//     photos: [],
//     topics: [],
//     show: false,
//     favList: [],
//     isFavPhotoExist: false,
//     modalPhoto: "",
//     selectedTopic: ""
//   };

//   const reducer = function(state, action) {

//     switch (action.type) {
//       case "setShow":
//         let photoIndexer = state.photos.find(photo => {
//           return photo.id === action.id
//         })
//         console.log(photoIndexer)
//         return {
//           ...state,
//           show: true,
//           modalPhoto: photoIndexer
//         };
//       case "setHide":
//         return {
//           ...state,
//           show: false
//         };
//       case "toggleFav":
//         if (!state.favList.includes(action.id)) {
//           return {
//             ...state,
//             favList: [...state.favList, action.id],
//           };
//         } else {
//           const filteredFavList = [state.favList.filter(ids => ids !== action.id)];
//           return {
//             ...state,
//             favList: filteredFavList[0],
//           };
//         }
//       case "generatePhotos":
//         return {
//           ...state,
//           photos: action.data
//         };
//       case "generateTopics":
//         return {
//           ...state,
//           topics: action.data
//         };
//       case "filterTopic":
//         return {
//           ...state,
//           selectedTopic: action.topic
//         };
//       default: {
//         console.log('wuppy time');
//       }
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, defaultState);
//   console.log("SelectedTopic: ", state.selectedTopic);
//   state.isFavPhotoExist = state.favList.length > 0;


// };


// useEffect(() => {
//   fetch('http://localhost:8001/api/photos').then(data => data.json()).then(data => dispatch({ type: "generatePhotos", data }));

// }, []);
// useEffect(() => {
//   fetch('http://localhost:8001/api/topics').then(data => data.json()).then(data => dispatch({ type: "generateTopics", data }));
// }, []);
// useEffect(() => {
//   if(state.selectedTopic !== "") {

//     fetch(`http://localhost:8001/api/topics/photos/${state.selectedTopic}`).then(data => data.json()).then(data => dispatch({ type: "generatePhotos", data }));
//   }
// }, [state.selectedTopic]);


// export default useApplicationData;



// /////////
// // needs a return to get the state back from App.jsx