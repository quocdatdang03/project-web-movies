import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [
    /* {
      id: 0,
      img: "aaaa",
      name: "blala",
      title: "",
      cate: "",
      isAcive: true
    },
    */
  ],

  reducers: {
    // Thêm phần tử (không thêm trùng nhau) :
    addToFavorite: (state, action) => {
      // Lấy ra 1 mảng chứa toàn id :
      let arrId = state.map((item, index) => item.id);
      // Kiểm tra nếu tk thêm vào có sẵn trong mảng rồi thì không thêm nữa, ngc lại nếu chưa có thì thêm vào
      if (!arrId.includes(action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      return state.filter((item, index) => item.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
