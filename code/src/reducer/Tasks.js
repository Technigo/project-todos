import { createSlice } from '@reduxjs/toolkit';

export const Tasks = createSlice({
    name: 'tasks',
    initialState: [
        { id: 1, text: 'Clean flat', complete: true },
        { id: 2, text: 'Wal bartie', complete: false },
        { id: 3, text: 'Call mum', complete: false }
    ]
});