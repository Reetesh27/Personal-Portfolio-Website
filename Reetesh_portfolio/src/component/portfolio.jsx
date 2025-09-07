import Hero from './hero.jsx'
import Header from './header.jsx'
import About from './about.jsx'
import Skill from './skill.jsx'
import Project from './project.jsx'
import Testimonials from './testimonial.jsx'
import Contact from './contact.jsx'
import Footer from './footer.jsx'

const Protfolio = () => {
  return (
    <div className="webapp">
        <Header></Header>
        <Hero></Hero>
        <About></About>
        <Skill></Skill>
        <Project></Project>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default Protfolio;
