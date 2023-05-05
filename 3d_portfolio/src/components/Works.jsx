import { useState } from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { github, website } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p className='mt-2 text-secondary text-[14px]'>{isTruncated ? `${text.slice(0, maxLength)}...` : text}</p>
      <button onClick={toggleTruncate}>{isTruncated ? 'Read More' : 'Read Less'}</button>
    </div>
  );
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full object-cover rounded-2xl'  
          />
          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <Link
                to={website_link}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img 
                  src={website}
                  alt='website'
                  className='w-1/2 h-1/2 object-contain'
                />
            </Link>
            <Link
              to={source_code_link}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </Link>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <ReadMore text={description} maxLength={150} />
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my skills I've acquired over the years. Each project has a brief description with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index}
            {...project}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');