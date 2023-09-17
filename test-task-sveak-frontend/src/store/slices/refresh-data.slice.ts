import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RefreshDataState {
    isRefreshData: boolean
}

const initialState: RefreshDataState = {
    isRefreshData: false,
}

export const refreshDataSlice = createSlice({
    name: 'refreshData',
    initialState,
    reducers: {
        setIsRefreshData(
            state: RefreshDataState,
            action: PayloadAction<boolean>
        ) {
            state.isRefreshData = action.payload
        },
    },
})

export const { setIsRefreshData } = refreshDataSlice.actions
export const refreshDataReducer = refreshDataSlice.reducer
