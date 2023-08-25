import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>



<div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Feedbacks</a></li>
                            <li><a href="#">Contact us</a></li>

                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                      
                        <h1>CODEBOX</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
            <br></br>CODEBOX is Computer Training Institute in Kanpur 
                    </div>
                </div>
                <p class="copyright">Copyright ©2023 All rights reserved </p>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Footer
