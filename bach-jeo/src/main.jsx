import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Redux
import { Provider } from 'react-redux';
import { store } from "./app/store";

// Routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Answer from './pages/Answer';
import Question from './pages/Question';
import FinalQuestion from './pages/FinalQuestion.jsx';
import FinalAnswer from './pages/FinalAnswer.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/question/:id',
    element: <Question />,
  },
  {
    path: '/answer/:id',
    element: <Answer />,
  },
  {
    path: '/final',
    element: <FinalQuestion />,
  },
  {
    path: '/finalanswer',
    element: <FinalAnswer />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
