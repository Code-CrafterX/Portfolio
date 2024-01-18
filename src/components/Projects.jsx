import React from 'react'
import ProjectItem from './ProjectItem'
import netflixImg from '../assets/Netflix.jpg'
import BootcampImg from '../assets/Bootcamp.jpg'
import PlantImg from '../assets/plant.jpg'
import StockImg from '../assets/Stock.jpg'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8 '>Step into my digital showcase, where I spotlight a curated selection of my most impactful and innovative projects. Witness the fusion of creativity, problem-solving, and technical prowess. Explore the spectrum of challenges I've embraced and the bespoke solutions I've engineered.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={netflixImg} title="Netflix App" tools="React JS, TailwindCSS" />
        <ProjectItem img={BootcampImg} title="Bootcamp website" tools="React, Bootstrap" />
        <ProjectItem img={PlantImg} title="Medicinal plant identification." tools="Android, Java, CNN" />
        <ProjectItem img={StockImg} title="Stock Prices Predictor" tools="Flask, LSTM"/>
      </div>
    </div>
  )
}

export default Projects
