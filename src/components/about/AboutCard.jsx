
import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome' >
      <Heading  subtitle='Benefits About Online Learning Expertise'title='LEARN ANYTHING' />
       <div className='container flexSB'>
          <div className='left row'>
          <lottie-player src="https://lottie.host/73823460-e6b3-44b6-a41b-91224c6a80f5/CbvL7uHMoY.json" background="transparent" speed="1" style={{width: 800, height: 1000}} loop autoplay direction="1" mode="normal"></lottie-player>
          </div>
          <div className='right row'>
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
