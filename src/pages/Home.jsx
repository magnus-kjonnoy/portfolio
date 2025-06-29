import React, { useState, useEffect } from 'react'

import ImageModal from '../components/ImageModal'

import logo_HTML from '/logos/html.png'
import logo_CSS from '/logos/css.png'
import logo_JavaScript from '/logos/javascript.png'
import logo_React from '/logos/react.png'
import logo_Vite from '/logos/vite.png'
import logo_Electron from '/logos/electron.png'
import logo_Nodejs from '/logos/nodejs.png'
import logo_Cloudflare from '/logos/cloudflare.png'
import logo_DigitalOcean from '/logos/digitalocean.png'
import logo_GitHub from '/logos/github.png'
import logo_VSCode from '/logos/visual studio code.png'
import logo_PostgreSQL from '/logos/postgresql.png'
import logo_Figma from '/logos/figma.png'
import logo_Krita from '/logos/krita.png'

import img_Myself from '/images/20250207_152043.jpg'
import img_Project1 from '/images/universe-blue-2.jpg'
import img_Project2 from '/images/EldenRingSotE-2.jpg'
import img_Project3 from '/images/project-crash_bandicoot.png'

import ContactInfo from '../components/ContactInfo.jsx'

export default function Home() {
  useEffect(() => {
    document.title = `Magnus Kjønnøy | Portfolio`
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const openModal = (imageSrc, imageAlt) => {
    setCurrentImage({ src: imageSrc, alt: imageAlt })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='main'>
      <div className='section'>
        <div className='container-intro'>
          <img className='my-picture' src={img_Myself} alt='Bilde av meg' />
          <p className='title-1'>Magnus Kjønnøy</p>
          <p className='text text-intro'>
            Jeg heter Magnus og er en webutvikler med en lidenskap for å skape brukervennlige og
            visuelt tiltalende nettsider, applikasjoner og spill. Med ferdigheter i HTML, CSS, JavaScript, React, og mer,
            jobber jeg med front-end og interaktive løsninger. Jeg bruker Figma til webdesign,
            har litt erfaring med å tegne i Krita, og har også erfaring med å bygge datamaskiner.
          </p>
        </div>
      </div>

      <div className='section'>
        <div className='container-text'>
          <p className='title-2 text-center'>Prosjekter</p>
          <p className='text'>
            Her er noen av prosjektene jeg har jobbet med, som viser bredden av mine ferdigheter
            innen webutvikling. Fra å bygge en personlig portefølje til å skape kreative nettsider
            inspirert av spill og vitenskap, har jeg hatt gleden av å utforske både design og
            interaktiv funksjonalitet.
          </p>
          <p className='text'>
            Du kan finne prosjektene mine på{' '}
            <a className='link' href='https://github.com/magnus-kjonnoy' target='_blank'>
              GitHub
            </a>
            .
          </p>
        </div>
        <div className='container-projects'>
          <div className='project'>
            <img
              onClick={() => openModal(img_Project1, 'title')}
              src={img_Project1}
              className='project-image'
              alt='title'
            />
            <p className='title-3'>Solsystemet</p>
            <p className='text project-text'>
              En informativ nettside som viser detaljer om planetene i solsystemet vårt, designet
              for å være både lærerik og visuelt engasjerende.
            </p>
            <p className='text project-text'>
              <a className='link-inactive'>GitHub</a> | <a className='link-inactive'>Link</a>
            </p>
            <p className='text project-text'>Laget med Vite, React, JavaScript og CSS.</p>
          </div>
          <div className='project'>
            <img
              onClick={() => openModal(img_Project2, 'Elden Café')}
              src={img_Project2}
              className='project-image'
              alt='Elden Café'
            />
            <p className='title-3'>Elden Café</p>
            <p className='text project-text'>
              En nettside for en café inspirert av Elden Ring, hvor jeg kombinerte kreativt design
              og interaktiv funksjonalitet for å skape en unik opplevelse for fans av spillet.
            </p>
            <p className='text project-text'>
              <a className='link-inactive'>GitHub</a> | <a className='link-inactive'>Link</a>
            </p>
            <p className='text project-text'>Laget med Vite, React, og CSS.</p>
          </div>
          <div className='project'>
            <img
              onClick={() => openModal(img_Project3, 'Crash Bandicoot - Pixel Pandemonium')}
              src={img_Project3}
              className='project-image'
              alt='title'
            />
            <p className='title-3'>Crash Bandicoot - Pixel Pandemonium</p>
            <p className='text project-text'>
              Et 2D pixel-art plattformer spill basert på Crash Bandicoot.
            </p>
            <p className='text project-text'>
              <a className='link-inactive'>GitHub</a> | <a className='link-inactive'>Link</a>
            </p>
            <p className='text project-text'>Laget med Electron, Vite, React, JavaScript og CSS.</p>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='title-2 text-center'>Ferdigheter</div>
        <p className='text'>These are the languages, frameworks, tools and programs I have experience with.</p>
        <div className='container-skills'>
          <div className='skill'>
            <img src={logo_HTML} alt='HTML logo' />
            <p className='text-bold'>HTML</p>
            {/* <p>
              <b>HTML:</b> Språket som brukes for å strukturere innhold på nettsider. Det definerer
              elementer som overskrifter, avsnitt, lenker, bilder osv.
            </p> */}
          </div>
          <div className='skill'>
            <img src={logo_CSS} alt='CSS logo' />
            <p className='text-bold'>CSS</p>
            {/* <p>
              <b>CSS:</b> Brukes til å style HTML-elementer - farger, fonter, animasjoner,
              plasseringer og layout.
            </p> */}
          </div>
          <div className='skill'>
            <img src={logo_JavaScript} alt='JavaScript logo' />
            <p className='text-bold'>JavaScript</p>
            {/* <p>
              <b>JavaScript:</b> Et programmeringsspråk som gjør nettsider interaktive - som
              knapper, menyer, skjemaer og dynamisk innhold.
            </p> */}
          </div>
          <div className='skill'>
            <img src={logo_React} alt='React logo' />
            <p className='text-bold'>React</p>
            {/* <p>
              <b>React:</b> Et JavaScript-bibliotek for å bygge brukergrensesnitt. Gjør det enklere
              å lage interaktive og dynamiske webapplikasjoner ved å dele opp siden i gjenbrukbare
              komponenter.
            </p> */}
          </div>
          <div className='skill'>
            <img src={logo_Vite} alt='Vite logo' />
            <p className='text-bold'>Vite</p>
          </div>
          <div className='skill'>
            <img src={logo_Electron} alt='Electron logo' />
            <p className='text-bold'>Electron</p>
          </div>
          <div className='skill'>
            <img src={logo_Nodejs} alt='Node.js logo' />
            <p className='text-bold'>Node.js</p>
          </div>
          <div className='skill'>
            <img src={logo_Cloudflare} alt='Cloudflare logo' />
            <p className='text-bold'>Cloudflare</p>
          </div>
          <div className='skill'>
            <img src={logo_DigitalOcean} alt='DigitalOcean logo' />
            <p className='text-bold'>Digital <br /> Ocean</p>
          </div>
          <div className='skill'>
            <img src={logo_GitHub} alt='GitHub logo' />
            <p className='text-bold'>GitHub</p>
          </div>
          <div className='skill'>
            <img src={logo_VSCode} alt='VS Code logo' />
            <p className='text-bold'>VS Code</p>
          </div>
          <div className='skill'>
            <img src={logo_PostgreSQL} alt='PostgreSQL logo' />
            <p className='text-bold'>Postgre <br /> SQL</p>
          </div>
          <div className='skill'>
            <img src={logo_Figma} alt='Figma logo' />
            <p className='text-bold'>Figma</p>
            {/* <p>
              <b>Figma:</b> Et nettbasert designverktøy som brukes til å lage prototyper, UI-design
              og samarbeide visuelt med andre utviklere eller designere.
            </p> */}
          </div>
          <div className='skill'>
            <img src={logo_Krita} alt='Krita logo' />
            <p className='text-bold'>Krita</p>
            {/* <p>
              <b>Krita:</b> Et gratis og åpent tegneverktøy, mest brukt til digital kunst,
              illustrasjon og konsepttegning.
            </p> */}
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='container-aboutme'>
          <p className='title-3 title'>Min utviklingsreise</p>
          <p className='text'>
            {/* Jeg heter Magnus og er en webutvikler med ferdigheter i HTML, CSS, JavaScript, React og Figma. */}
            Etter å ha fullført et intensivt kurs i front-end webutvikling har jeg utviklet en solid
            forståelse for hvordan man bygger brukervennlige og responsive nettsider. Jeg er nå klar
            til å ta steget videre og anvende mine ferdigheter i et profesjonelt miljø, hvor jeg kan
            bidra til spennende prosjekter og lære mer fra erfarne utviklere.
          </p>
          <p className='title-3 title'>Prosjekter og praktisk erfaring</p>
          <p className='text'>
            I løpet av opplæringen har jeg jobbet på flere prosjekter som har gitt meg både teknisk
            kunnskap og praktisk erfaring. Jeg har utviklet alt fra enkle statiske nettsider til mer
            interaktive applikasjoner med React, og har jobbet med design og prototyper i Figma. Jeg
            har også erfaring med versjonskontroll (Git) og samarbeid i team, hvor jeg har
            bidratt til koding, testing og feilsøking.
          </p>
          <p className='title-3 title'>Ferdigheter fra hobby</p>
          <p className='text'>
            På fritiden er jeg engasjert i dataspill, som har lært meg verdifulle ferdigheter som
            tålmodighet og samarbeid. Jeg tror at disse erfaringene hjelper meg med å tilnærme meg
            utfordringer på en systematisk måte, og gir meg en fleksibel og åpen tilnærming til
            problemene jeg møter i utviklingsprosessen.
          </p>
          <p className='title-3 title'>Neste steg</p>
          <p className='text'>
            Jeg er motivert for å komme i gang med en arbeidsplass i webutvikling, og ser frem til
            muligheten til å bidra med mine ferdigheter, lære fra erfarne utviklere og utvikle meg
            videre i faget.
          </p>
        </div>
        <hr className='divider-horizontal' />
        <div className='container-column container-contact-info'>
          <ContactInfo />
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
