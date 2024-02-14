import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home/Home'
import CourseDetails from './components/course details/CourseDetails'

export default function App() {
  let routers=createBrowserRouter([{
    path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'/courseDetails',element:<CourseDetails/>}
    ]
  }])
  return (
    <RouterProvider router={routers}>

    </RouterProvider>
  )
}
