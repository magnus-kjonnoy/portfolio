import React, { useState, useEffect } from 'react'
import ImageModal from '../components/ImageModal'

import imageProject1 from '/images/Skjermbilde-Portfolio.png'
import imageProject2 from '/images/EldenRingSotE-2.jpg'
import imageProject3 from '/images/universe-blue-2.jpg'

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  useEffect(() => {
    document.title = `Prosjekter - Magnus Kjønnøy - Portefølje`
  }, [])

  const openModal = (imageSrc, imageAlt) => {
    setCurrentImage({ src: imageSrc, alt: imageAlt })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='body'>
      <div className='container-main'>
        <div className="container-text">
          <p className='title'>Prosjekter</p>
          <p className='text'>
            Her er noen av prosjektene jeg har jobbet med, som viser bredden av mine ferdigheter innen
            webutvikling. Fra å bygge en personlig portefølje til å skape kreative nettsider inspirert
            av spill og vitenskap, har jeg hatt gleden av å utforske både design og interaktiv
            funksjonalitet.
          </p>
          <p className="text">
            Du kan finne prosjektene mine på <a 
              className='link' 
              href='https://github.com/Magnus2-kodehode' 
              target='_blank'>
            GitHub</a>.
          </p>
        </div>
        <hr className="hr" />
        <div className='container-project'>
          <div className='container-text container-project-text'>
            <p className='project-title'>Portefølje</p>
            <p className="text">
              Et personlig nettsted hvor jeg viser frem mine ferdigheter og prosjekter som
              webutvikler, med fokus på responsiv design og brukeropplevelse.
            </p>
            <p className='text'>
              <a
                className='link'
                href='https://github.com/Magnus2-kodehode/portfolio-2.0'
                target='_blank'
              >
                GitHub
              </a> | <a
                className='link'
                href='https://magnus2-kodehode.github.io/portfolio-2.0'
                target='_blank'
              >
                GitHub pages
              </a>
            </p>
            <p className='text'>Laget med HTML, CSS, JavaScript og React.</p>
          </div>
          <img
            onClick={() => openModal(imageProject1, 'Portfolio')}
            src={imageProject1}
            className='project-image'
            alt='Portfolio'
          />
        </div>
        <hr className="hr" />
        <div className='container-project'>
          <div className='container-text container-project-text'>
            <p className='project-title'>Elden Café</p>
            <p className="text">
              En nettside for en café inspirert av Elden Ring, hvor jeg kombinerte kreativt design
              og interaktiv funksjonalitet for å skape en unik opplevelse for fans av spillet.
            </p>
            <p className='text'>
              <a
                className='link-inactive'
              >
                GitHub
              </a> | <a
                className='link-inactive'
              >
                GitHub pages
              </a>
            </p>
            <p className='text'>Laget med HTML, CSS, JavaScript og React.</p>
          </div>
          <img
            onClick={() => openModal(imageProject2, 'Elden Café')}
            src={imageProject2}
            className='project-image'
            alt='Elden Café'
          />
        </div>
        <hr className="hr" />
        <div className='container-project'>
          <div className='container-text container-project-text'>
            <p className='project-title'>Solsystemet</p>
            <p className="text">
              En informativ nettside som viser detaljer om alt i solsystemet, designet for å
              være både lærerik og visuelt engasjerende.
            </p>
            <p className='text'>
              <a
                className='link-inactive'
              >
                GitHub
              </a> | <a
                className='link-inactive'
              >
                GitHub pages
              </a>
            </p>
            <p className='text'>Laget med HTML, CSS, JavaScript og React.</p>
          </div>
          <img
            onClick={() => openModal(imageProject3, 'title')}
            src={imageProject3}
            className='project-image'
            alt='title'
          />
        </div>
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          src={currentImage?.src}
          alt={currentImage?.alt}
        />
      </div>
    </div>
  )
}