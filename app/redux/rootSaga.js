import { all } from "redux-saga/effects"
import authSaga from '../modules/scenes/auth/scenes/saga'
import homeSaga from '../modules/scenes/home/saga'


export default function* rootSaga(getState) {
  yield all([
    authSaga(),
    homeSaga()
   
  
  ])
}
