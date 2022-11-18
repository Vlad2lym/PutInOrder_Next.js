import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
    numberItems: number,
    valueItems: number,
    ascending: boolean
}

const initialState: SettingsState = {
    numberItems: 2,
    valueItems: 0,
    ascending: true
}

export const settingsSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setNumberItems: (state, action: PayloadAction<number>) => {
      state.numberItems = action.payload
    },
    setValueItems: (state, action: PayloadAction<number>) => {
      state.valueItems = action.payload
    },
    setAscending: (state) => {
      state.ascending = !state.ascending
    },
  },
})

export const { setNumberItems, setValueItems, setAscending } = settingsSlice.actions

export default settingsSlice.reducer