import React from "react"
// import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"
import './HAbout.css';

const HAbout = () => {
  return (
    <>
    <div className="bootstrap">
   <div>
    <h1 class="h1 text-beech" id="pageBeechTitle">Courses</h1>
        <p  id="pageHain">Browse Our Online Courses</p>
    </div>
  <main className="grid">
    <article>
      <img src="https://vfxera.com/wp-content/uploads/2021/07/react.png" alt="Sample photo" />
      <div className="text">
        <h3>React JS Course</h3>
        <p>At the beginners level, we have the fundamentals which include an introduction to React Js. The react developmental style, its advantages, and why people should prefer to React. Then we focus on how to get started 
            with React like how to set it up, run the React app, how to react to the ecosystem, and Virtual DOM..</p>
        <a href="" className="btn btn-primary btn-block">Read more</a>
      </div>
    </article>
    <article>
      <img src="https://vfxera.com/wp-content/uploads/2021/07/core-java.png" alt="Sample photo" />
      <div className="text">
        <h3>Core Java Courses</h3>
        <p>Java is one of the most popular programming languages out there. Released in 1995 and still widely used today, Java has many applications, including software development, mobile applications, and large systems development. Knowing Java opens a lot of possibilities for you as a developer.</p>
        <a href="" className="btn btn-primary btn-block">Read more</a>
      </div>
    </article>
    <article>
      <img src="https://vfxera.com/wp-content/uploads/2021/07/angular-js.png" alt="Sample photo" />
      <div className="text">
        <h3>Angular JS Course</h3>
        <p>The Angular JS Development course is primarily designed for UI Developer(s)/Web Developer(s) who want to learn how to create a single-page web application using Angular. You will learn the Angular2, Angular4, and TypeScript fundamentals like modules, components, life cycle hooks, pipes, directives, etc. 
           </p>
        <a href="" className="btn btn-primary btn-block">Read more</a>
      </div>
    </article>
    <article>
      <img src="https://vfxera.com/wp-content/uploads/2021/10/Untitled-design-4-1.png" alt="Sample photo" />
      <div className="text">
        <h3>Complete Android Course</h3>
        <p>The course is part of a professional Android certificate program that focuses on using the Java programming language to develop Android applications. … The program starts with basic concepts and then trains programmers  directly from Google Developer Experts.</p>
        <a href="" className="btn btn-primary btn-block">Read more</a>
      </div>
      
    </article>
    
    
  </main>
  </div>



    </>
  )
}

export default HAbout
