import "./App.css"
import Header from "./components/common/header/Header"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import HInternship from "./components/home/HInternship"
import Webdevelopment from "./components/allcourses/pages/Webdevelopment"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"




function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/internship' component={HInternship}/>
          <Route exact path='/webdevelopment' component={Webdevelopment}/>
        </Switch>
        <Footer />
        </Router>
    </>
  )
}

export default App
