import { combineReducers } from '@reduxjs/toolkit'

//TODO ARCHIVO SOLO PARA PROBAR REDUCERS, se puede eliminar
const rootReducer = combineReducers({})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer