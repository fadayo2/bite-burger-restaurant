import './App.css';
import Home from './components/Home';
import logo from '../src/bite2.png';
import {motion} from 'framer-motion';
import {BrowserRouter as Router , Route , Routes ,Link, BrowserRouter} from 'react-router-dom';
import Menu from './components/Menu';
import Kitchen from './components/Kitchen';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';

function App() {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className="App">

      <>

      <Router>

<nav className='navbar'>
        <div className='links'>
            <motion.div 
                layout 
                initial={{ rotate: 0}}
                whileHover={{ rotate: -10 , scale:1.1}}
                transition={{ ease:'anticipate' , type:'spring' , stiffness:1000 , duration:1}}
            ><Link style={{color:'orange' , textDecoration:'none'}} to={'/'}>Home</Link></motion.div>
            <motion.div 
                layout 
                initial={{ rotate: 0}}
                whileHover={{ rotate: 10 , scale:1.1}}
                transition={{ ease:'anticipate' , type:'spring' , stiffness:1000 , duration:1}}
            ><Link style={{color:'orange' , textDecoration:'none'}} to={'/Menu'}>Menu</Link></motion.div>
            <motion.div 
                layout 
                initial={{ rotate: 0}}
                whileHover={{ rotate: -10 , scale:1.1}}
                transition={{ ease:'anticipate' , type:'spring' , stiffness:1000 , duration:1}}
            ><Link style={{color:'orange' , textDecoration:'none'}} to={'/Kitchen'}>Kitchen</Link></motion.div>
        </div>
    <motion.div className='logo' layout
        initial={{opacity:1}}
        whileHover={ { scale:1.1 } }
        transition={ { ease:'anticipate' , type:'spring' , stiffness:1000 , duration:0.5 } }
    >
        <img src={logo} alt='bite!' width={130} height={100}/>
    </motion.div>
    <div className='hamburger'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
    <div className='links'>
            <motion.div 
                layout 
                initial={{ rotate: 0}}
                whileHover={{ rotate: 10 , scale:1.1}}
                transition={{ ease:'anticipate' , type:'spring' , stiffness:1000 , duration:1}}
            ><Link style={{color:'orange' , textDecoration:'none'}} to={'/About'}>About</Link></motion.div>
            <motion.div 
                layout 
                initial={{ rotate: 0}}
                whileHover={{ rotate: -10 , scale:1.1}}
                transition={{ ease:'anticipate' , type:'spring' , stiffness:1000 , duration:1}}
            ><Link style={{color:'orange' , textDecoration:'none'}} to={'/Contact'}>Contact</Link></motion.div>
            <motion.div 
                layout 
                initial={{ rotate: 0}}
                whileHover={{ rotate: 10 , scale:1.1}}
                transition={{ ease:'anticipate' , type:'spring' , stiffness:1000 , duration:1}}
            ><Link style={{color:'orange' , textDecoration:'none'}} to={'/Blog'}>Blog</Link></motion.div>
        </div>
</nav>

<Routes>
    <Route path='/' Component={Home}/>
    <Route path='/Menu' Component={Menu}/>
    <Route path='/Kitchen' Component={Kitchen}/>
    <Route path='/About' Component={About}/>
    <Route path='/Contact' Component={Contact}/>
    <Route path='/Blog' Component={Blog}/>
</Routes>


</Router>
      
      </>
    </div>
  );
}

export default App;
