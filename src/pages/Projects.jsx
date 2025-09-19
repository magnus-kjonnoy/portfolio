import React, { useState, useEffect } from 'react'

import ImageModal from '../components/ImageModal'

import img_Project1 from '/images/space.jpeg'
import img_Project2 from '/images/EldenRingSotE-2.jpg'
import img_Project3 from '/images/project-crash_bandicoot.png'

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  
  useEffect(() => {
    documentTitle()
  }, [])
  
  function documentTitle() {
    document.title = `Magnus Kjønnøy | Portfolio`
  }

  function openModal(imageSrc, imageAlt) {
    setCurrentImage({ src: imageSrc, alt: imageAlt })
    setIsModalOpen(true)
  }
  
  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <div className='main'>
      <div className='section'>
        <div className='container-text'>
          <p className='title-2 text-center'>Projects</p>
          <p className='text-margin'>
            Here are some of the projects I've worked on, showcasing my web development skills.
            From building a personal portfolio to creating different types of websites, 
            applications and games, I've explored both design and interactive functionality.
            {/* Her er noen av prosjektene jeg har jobbet med, som viser bredden av mine ferdigheter
            innen webutvikling. Fra å bygge en personlig portefølje til å skape kreative nettsider
            inspirert av spill og vitenskap, har jeg hatt gleden av å utforske både design og
            interaktiv funksjonalitet. */}
          </p>
        </div>
        <div className='container-projects'>
          <div className='project'>
            <img
              onClick={() => openModal(img_Project1, 'The Solar System')}
              src={img_Project1}
              className='project-image'
              alt='Project: The Solar System'
            />
            <p className='title-3'>The Solar System</p>
          </div>
          <div className='project'>
            <img
              onClick={() => openModal(img_Project2, 'Elden Café')}
              src={img_Project2}
              className='project-image'
              alt='Project: Elden Café'
            />
            <p className='title-3'>Elden Café</p>
          </div>
          <div className='project'>
            <img
              onClick={() => openModal('', 'Online real-time chatting application')}
              src=''
              className='project-image'
              alt='Project: online real-time chatting application'
            />
            <p className='title-3'>Online chat application</p>
          </div>
          <div className='project'>
            <img
              onClick={() => openModal(img_Project3, 'Crash Bandicoot - Pixel Pandemonium')}
              src={img_Project3}
              className='project-image'
              alt='Project: Crash Bandicoot - Pixel Pandemonium'
            />
            <p className='title-3'>Crash Bandicoot - Pixel Pandemonium</p>
          </div>
          <div className='project'>
            <img
              onClick={() => openModal('', 'untitled game')}
              src=''
              className='project-image'
              alt='Project: untitled game'
            />
            <p className='title-3'>Untitled game</p>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        src={currentImage?.src}
        alt={currentImage?.alt}
      />
    </div>
  )
}