import React from 'react'
import './Bootstrapcards.css';
import { Link } from 'react-router-dom'

const Bootstrapcards = () => {
  return (
    <>
    
      <section class="dark">
	<div class="container py-4">
		<h1 class="h1 text-center" id="pageHeaderTitle">Courses</h1>
        <p  id="pageParagraph">Browse Our Online Courses</p>
        

		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://vfxera.com/wp-content/uploads/2021/10/full-stack-web-training-in-Kanpur.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue"><a href="#">Full Stack Web Development Course</a></h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">India is on its way to becoming the fastest growing E-commerce market and here is your chance to grow with it*. With hiring activities expected to grow rapidly over the next couple of years, this is one of the most vibrant sector in India. Join Web development course at CODEBOX</div>
				<ul class="postcard__tagbox">
					<li class="tag__item play blue">
					<Link to='/webdevelopment'>More</Link>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard dark red">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://vfxera.com/wp-content/uploads/2021/07/digital-marketing.png" alt="Image Title" />	
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red"><a href="#">Digital Marketing Course</a></h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Digital marketing refers to the practice of promoting and advertising products, services, or brands using digital channels and technologies. It involves leveraging various online platforms and strategies to reach and engage with a target audience, drive website traffic, generate leads, and ultimately achieve business goals</div>
				<ul class="postcard__tagbox">
					<li class="tag__item play red">
					<Link to='/webdevelopment'>More</Link>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard dark green">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://vfxera.com/wp-content/uploads/2021/07/animation.png" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title green"><a href="#">Graphic & 2D Animation</a></h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">A Graphic Designer works on ideas and images and combines them to communicate the message. Adobe Flash/Animate is an animation and interactive media industry-standard software. With it, we can create animation projects such as short films, commercials, and even big projects such as television shows. Join Graphic Design and 2d animation course at Vfx era Kakadeo, Kanpur.  and get expert in designing and animation</div>
				<ul class="postcard__tagbox">
					<li class="tag__item play green">
						<a href="/webdevelopement">More</a>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard dark yellow">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://vfxera.com/wp-content/uploads/2021/07/web-development.png" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title yellow"><a href="#">Graphics Web Design & Development</a></h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Graphics Web Design & Development (GWDD) is a comprehensive program that trains you in all aspects of graphic designing, web designing, and web development. The course uses industry-endorsed techniques to make you an in-demand new media creative professional with skills in rich multimedia content, visually appealing websites, logos for advertisements, concepts of digital graphics, image editing for print & publishing, UI/UX, SEO, and content management. Join Smart professional GWDD  course at CODEBOX</div>
				<ul class="postcard__tagbox">
					<li class="tag__item play yellow">
						<a href="#">More</a>
					</li>
				</ul>
			</div>
		</article>

        <article class="postcard dark red">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://vfxera.com/wp-content/uploads/2021/09/web-designing.png" alt="Image Title" />	
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red"><a href="#">Web Designing Course</a></h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. … A web designer works on the appearance, layout, and, in some cases, content of a website. Join web designing course at CODEBOX</div>
				<ul class="postcard__tagbox">
					<li class="tag__item play red">
						<a href="#">More</a>
					</li>
				</ul>
			</div>
		</article>

        <article class="postcard dark red">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://vfxera.com/wp-content/uploads/2021/07/design.png" alt="Image Title" />	
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red"><a href="#">Graphic & Web Design Course</a></h1>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">A Graphic Designer works on ideas and images and combines them together to communicate the message.
A Web Designer needs to be both, creative and technically inclined to build an easily functional website.
With the ever-evolving design industry, the requirement for graphic designers and web designers are also
increasing.
A graphic designer mainly works with web designing companies or print publications to enhance images, videos
, and other content that require graphics. Whereas a web designer looks after the entire website and ensures
that it is easy to access and user-friendly.
Join Graphic and Web Design Course at CODEBOX</div>
				<ul class="postcard__tagbox">
					<li class="tag__item play red">
						<a href="#">More</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</section>




</>
    
  )
}

export default Bootstrapcards
