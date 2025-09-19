import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    name: '',
    phone: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setPhone(state, action) {
      state.phone = action.payload;
    },
    addContact(state) {
      state.items.push({
        id: nanoid(),
        name: state.name,
        phone: state.phone,
      });
      state.name = '';
      state.phone = '';
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setName, setPhone, addContact, deleteContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
