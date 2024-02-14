import React from 'react'
import Landing from '../landing/Landing'
import CompletedCource from '../completed Cource/CompletedCource'
import Navs from '../Navs/Navs'
import Course from '../course/Course'
import Instructor from '../instructor/Instructor'

export default function Home() {
  return (
    <>
        <Landing/>
        <CompletedCource/>
        <Navs/>
        <Course/>
        <Instructor/>
    </>
  )
}
