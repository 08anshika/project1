import React from "react"
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Back from "../common/back/Back"
import "./HInternship.css"


// copy code of blog => blogCard

const HInternship = () => {
  return (
    <>
      <Back title='Internship' />

      <section className='blog'>
        <div className='internship'>
          <Heading subtitle='INTERNSHIP' title='Unlock Your Potential' />
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HInternship
