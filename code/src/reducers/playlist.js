
import { createSlice } from '@reduxjs/toolkit';

export const playlist = createSlice({
  name: 'playlist',
  initialState: {
    name: 'Playlist here:',
    link: 'https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=edf74aa81a244219'
  }
});