import React from 'react';
import {motion} from 'framer-motion';
import burger from '../burger2.png';
import burger2 from '../burger5.png'
import burger3 from '../burger3.png'
import burger4 from '../burger4.png'
import burger6 from '../burger6.png'
import { useState } from 'react';
import Product from './Product';

const Home = () => {

    const [first , setFirst] = useState(null);

    const [product , setProduct] = useState(false);

    const [burgerimg , setBurgerimg] = useState(burger2);

    const changeBurger = (event) => {
        setBurgerimg(
            event.target.src
        )
    }


    const expand = () => {
        document.querySelector('body').style.overflow = 'hidden';
        setProduct(!product);
        setFirst(
            <motion.div
                className='positionDiv'
                initial={{ scale:0 }}
                whileInView={{ scale:1 }}
                transition={{ 
                    ease:'linear',
                    type:'spring',
                    duration: .3
                 }}
                onClick={()=>{
                    setFirst(null);
                    document.querySelector('body').style.overflowY = 'scroll';
                }}
            >
            </motion.div> 
        )
    }

    return (
    <>

        {/* Product expansion */}

            {
                first
            }

        {/* Product expansion */}

        <motion.section className='mainBody'
        >
            <motion.div className='herotxt'
                initial={{ rotate:5 }}
            >
                <p> Welcome to <span className='bite'>Bite!</span> Your Burger Haven </p>
            </motion.div>

            <motion.div className='heroimg'>
                <motion.img src={burger} 
                    initial={{ opacity:1 , rotate:10 }}
                    whileHover={{ scale:1.1 }}
                    transition={{ ease:'linear' , duration:.5 , type:'spring' , stiffness:1000 , damping:10}}
                />
            </motion.div>
        </motion.section>

        <motion.section
            className='burgerDisplay'
        >
            <div className='productDisplay'>
                <motion.div className='productImg' 
                >
                    <motion.img 
                        initial={{ scale:0 }} 
                        whileInView={{ scale:1 }}
                        src={burgerimg}
                    />
                </motion.div>
                <div className='productDescription'>
                    <h2>Default Lorem burger Try Us Out Today.</h2>

                    <div className='lcar'>
                        <motion.div
                            whileHover={{ scale:1.3 }}
                            whileTap={{ scale:.9 }}
                            onClick={changeBurger}
                        >
                            <img src={burger2}/>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale:1.3 }}
                            whileTap={{ scale:.9 }}
                            onClick={changeBurger}
                        >
                            <img src={burger}/>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale:1.3 }}
                            whileTap={{ scale:.9 }}
                            onClick={changeBurger}
                        >
                            <img src={burger3}/>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale:1.3 }}
                            whileTap={{ scale:.9 }}
                            onClick={changeBurger}
                        >
                            <img src={burger4} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale:1.3 }}
                            whileTap={{ scale:.9 }}
                            onClick={changeBurger}
                        >
                            <img src={burger6}/>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='cta'>
                <motion.button
                    initial={{ scale:1 }}
                    whileHover={{ scale:1.05}}
                    whileTap={{ scale:.99 }}
                    transition={{
                        ease: 'linear',
                        type: 'spring',
                        stiffness: 700
                    }}
                >
                    Order Now!
                </motion.button>
            </div>
        </motion.section>

        <motion.section 
            className='section'
        >
            <header>
                <h1><span className='la'>La</span> menu</h1>
            </header>

            <div className='div_section'>
                <div className='menu_card' onClick={expand}>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
                <div className='menu_card'>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
                <div className='menu_card'>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
                <div className='menu_card'>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
                <div className='menu_card'>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
                <div className='menu_card'>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
                <div className='menu_card'>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
                <div className='menu_card'>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
                <div className='menu_card'>
                    <div className='image'>
                        <img src={burger2}></img>
                    </div>
                    <div className='txt'>
                        <h2>Lorem Burger</h2>
                    </div>
                </div>
            </div>
        </motion.section>
    </>
)
}

export default Home