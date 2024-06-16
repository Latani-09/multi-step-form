import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    firstname: '',
    lastname: '',
    email: '',
    countryCode: '',
    phoneNo: '',
    linkedIn: '',
    selectedRange: '',
    levelKey: '',
  }
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFirstName: (state, action) => {
      state.value.firstname = action.payload;
    },
    addLastName: (state, action) => {
      state.value.lastname = action.payload;
    },
    addEmail: (state, action) => {
      state.value.email = action.payload;
    },
    addCountryCode: (state, action) => {
      state.value.countryCode = action.payload;
    },
    addPhoneNo: (state, action) => {
      state.value.phoneNo = action.payload;
    },
    addLinkedIn: (state, action) => {
      state.value.linkedIn = action.payload;
    },
    addSelectedRange: (state, action) => {
      state.value.selectedRange = action.payload;
    },
    addLevel: (state, action) => {
      state.value.levelKey = action.payload;
    },

  }
});

export const {
  addFirstName,
  addLastName,
  addEmail,
  addCountryCode,
  addPhoneNo,
  addLinkedIn,
  addSelectedRange,
  addLevel,
} = formSlice.actions;

export const selectForm = (state) => state.form.value;

export default formSlice.reducer;
