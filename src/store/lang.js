const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  lang: "en",
};
const LangSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changLang(state) {
      if (state.lang === "en") state.lang = "ar";
      else state.lang = "en";
    },
  },
});

export const { changLang } = LangSlice.actions;

export default LangSlice.reducer;
