import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { ALL, BRANDING, DESIGN, ILLUSTRATION, MOTION } from "./redux/types"
import Backgroung1 from './image/01.png'
import Backgroung2 from './image/02.png'
import Backgroung3 from './image/03.png'
import Backgroung4 from './image/04.png'
import Backgroung5 from './image/05.png'
import Backgroung6 from './image/06.png'
import Backgroung7 from './image/07.png'
import Backgroung8 from './image/08.png'
import Backgroung9 from './image/09.png'

export const defaultState = [
  { id: Math.random() * 1, text: 'SOFA', sort: 'Design', isVisible: true, display: '', background: Backgroung1 },
  { id: Math.random() * 2, text: 'KeyBoard', sort: 'Branding', isVisible: true, display: '', background: Backgroung2 },
  { id: Math.random() * 3, text: 'Work Media', sort: 'Illustration', isVisible: true, display: '', background: Backgroung3 },
  { id: Math.random() * 4, text: 'DDDone', sort: 'Motion', isVisible: true, display: '', background: Backgroung4 },
  { id: Math.random() * 5, text: 'Abstract', sort: 'Design', isVisible: true, display: '', background: Backgroung5 },
  { id: Math.random() * 6, text: 'HandP', sort: 'Branding', isVisible: true, display: '', background: Backgroung6 },
  { id: Math.random() * 7, text: 'Architect', sort: 'Motion', isVisible: true, display: '', background: Backgroung7 },
  { id: Math.random() * 8, text: 'CalC', sort: 'Design', isVisible: true, display: '', background: Backgroung8 },
  { id: Math.random() * 9, text: 'Sport', sort: 'Branding', isVisible: true, display: '', background: Backgroung9 },
]

export function rootReducer(state = defaultState, action) {

  switch (action.type) {
    case DESIGN:
      state.map((item) =>
        (item.sort === 'Design') ? item.display = '' : item.display = 'none')
      console.log('DESIGN', state)
      break

    case BRANDING:
      state.map((item) =>
        (item.sort === 'Branding') ? item.display = '' : item.display = 'none')
      console.log('BRANDING', state)
      break

    case ILLUSTRATION:
      state.map((item) =>
        (item.sort === 'Illustration') ? item.display = '' : item.display = 'none')
      console.log('ILLUSTRATION', state)
      break

    case MOTION:
      state.map((item) =>
        (item.sort === 'Motion') ? item.display = '' : item.display = 'none')
      console.log('MOTION', state)
      break

    case ALL:
      state.map((item) =>
        (item.sort === 'ALL') ? item.display = '' : item.display = '')
      console.log('ALL', state)
      break

    default:
      return state
  }
}

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
