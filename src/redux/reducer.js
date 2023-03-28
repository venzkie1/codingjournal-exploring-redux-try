import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./actions";

const initialState = {
  diaryItems: [{
    id: 1,
    title: "first item",
    date: "2020-01-01",
  }],
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let id = 1;
      if (state.diaryItems.length > 0) {
        id = state.diaryItems[0].id + 1;
      }
      let item = {
        id: id,
        title: action.payload.title,
        date: action.payload.date,
        text: action.payload.text,
      };
      // let newDiaryItems = [...state.diaryItems, item];
      // newDiaryItems = newDiaryItems.sort((a, b) => {
      //   return new Date(b.date) - new Date(a.date)
      // })
      let newArray = [...state.diaryItems];
      newArray.push(item);
      return {
        ...state,
        diaryItems: newArray,
      };
    case DELETE_ITEM:
        return {
            ...state,
            diaryItems: state.diaryItems.filter((item) => item.id !== action.payload)
        };
    case UPDATE_ITEM:
      let copyItems = state.diaryItems.map((item) => {
        if (item.id === action.payload.id){
          return {
            ...item,
            title: action.payload.title,
            date: action.payload.date,
          };
        }
        return item;
      });
      
      // const copyItems = [...state.diaryItems];
      // console.log("copyItems", copyItems);
      // console.log("Payload", action.payload);
      // copyItems[action.payload.id].title = action.payload.title;
      // copyItems[action.payload.id].date = action.payload.date;

      return {
        ...state,
        diaryItems: copyItems
      };
    default:
      return state;
  }
};

export default diaryReducer;
