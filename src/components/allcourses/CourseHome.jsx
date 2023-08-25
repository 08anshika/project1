import React from "react"
import Back from "../common/back/Back"
// import CoursesCard from "./CoursesCard"
// import OnlineCourses from "./OnlineCourses"
import Bootstrapcards from "./Bootstrapcards"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      {/* <CoursesCard /> */}
      {/* <OnlineCourses /> */}
      <Bootstrapcards/>
    </>
  )
}

export default CourseHome
