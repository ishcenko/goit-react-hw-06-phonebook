import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../data';

const contactsSlise = createSlice({
  name: 'contacts',
  initialData: initialData,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteContact(state, action) {
      const i = state.findIndex(contact => contact.id === action.payload);
      state.splice(i, 1);
    },
  },
});

export const contactsReducer = contactsSlise.reducer;
export const { deleteContact, addContact } = contactsSlise.actions;
