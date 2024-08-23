import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Gsap = () => {

    const [isOpen , setIsOpen] = useState(false)

return (
    <>
        {/* <motion.div layout className='parent'
            drag='x'
            dragConstraints={{ left: 0  , right: 300}}
            data-isOpen={isOpen}
            initial={ { opacity : 1 } }
            onClick={()=> setIsOpen(!isOpen)}
        >
            <motion.div layout className='child'
                transition={ { ease : 'anticipate' , duration: 0.5  , type: 'spring' , stiffness: 600 , damping: 10} }
                whileHover={ { scale : 1.3 } }></motion.div>

            <motion.div layout className='child' 
                transition={ { ease : 'anticipate' , duration: 0.5 , type: 'spring' , stiffness: 600 , damping: 10 } }
                whileHover={ { scale : 1.3 } }
            ></motion.div>
            <motion.div layout className='child'
                transition={ { ease : 'anticipate', duration: 0.5 , type: 'spring' ,  stiffness: 600 , damping: 10 } }
                whileHover={ { scale : 1.3 } }
            ></motion.div> 
        </motion.div> */}

        {/* <motion.div className='dragging'
            drag='x'
            dragConstraints={{ left: 0 , right: 300}}
            dragElastic={1}
            dragTransition={{ bounceStiffness: 400}}
            // whileDrag={{scale: 0.7}}
            transition={{ type :  'spring' , stiffness: 2000 }}
        >

        </motion.div> */}
    </>
)
}

export default Gsap