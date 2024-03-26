import Price from "../Features/Price";
import About from "../Features/About";
import ChatBot from "../Features/ChatBot";
import Features from "../Features/Features";
import Hero from "../Features/Hero";
import Services from "../Features/Services";
import Track from "../Features/Track";
import Testimonials from "../Features/authentication/Testimonials";
import Quotes from "../Features/Quotes";

const Home = () => {

 return (
  <>
   <Hero />
   <Features />
   <About />
   <Services />
   <Track />
   <Price />
   <Testimonials />
   <Quotes />
   <ChatBot />
  </>
 );
};

export default Home;