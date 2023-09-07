import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn , textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard =({index , title , icon }) => {
  console.log(title,'title');
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5 * index ,0.75)}
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card'>
          <div
            options={{
              max :45,
              scale :1,
              speed :450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[270px] 
            flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title}
              className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>  
    </Tilt >
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","" , 0.1,1)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
        sed do eiusmod tempor incididunt ut labore et dolore magna<br/>
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
        ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
        Duis aute irure dolor in reprehenderit in voluptate velit<br/>
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint<br/>
        occaecat cupidatat non proident, sunt in culpa qui officia <br/>
        deserunt mollit anim id est laborum.</motion.p>

        <div className='mt-10 flex flex-wrap gap-10'>
          {services.map((service,index) =>(
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}

        </div>
    </>
  )
}

export default SectionWrapper (About,"about")