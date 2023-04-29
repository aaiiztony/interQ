import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'
// we create the span to make sure when the scroll gif is clicked, it takes us to the span element (with a forced whitespace) in the about section. || The idName is populated from the component (first: about)
const SectionWrapper = (Component, idName) => 
    function HOC() {
        return(
            <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{once:true, amount:0.4}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span className='hash-span' id={idName}>&nbsp;</span>
                <Component/>
            </motion.section>
        )
    }

export default SectionWrapper