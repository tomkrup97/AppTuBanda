import { configureStore } from '@reduxjs/toolkit'
import favReducer from '../features/favoriter/FavSlice'


export default configureStore({
  reducer: {
    bands: favReducer
  }
})