import React, { useState, useEffect } from 'react'

import ImageModal from '../components/ImageModal'

import icon_Location from '/icons/location.png'
import icon_Email from '/icons/email.png'
import icon_GitHub from '/logos/github.png'
import icon_Code from '/icons/code.png'

import logo_HTML from '/logos/html.png'
import logo_CSS from '/logos/css.png'
import logo_JavaScript from '/logos/javascript.png'
import logo_React from '/logos/react.png'
import logo_Vite from '/logos/vite.png'
import logo_Electron from '/logos/electron.png'
import logo_Nodejs from '/logos/node-js.png'
import logo_Express from '/logos/express-js (white).png'
import logo_NPM from '/logos/npm.png'
import logo_Socketio from '/logos/socket-io.png'
import logo_Cloudflare from '/logos/cloudflare.png'
import logo_DigitalOcean from '/logos/digitalocean.png'
import logo_GitHub from '/logos/github.png'
import logo_VSCode from '/logos/visual studio code.png'
import logo_PostgreSQL from '/logos/postgresql.png'
import logo_Figma from '/logos/figma.png'
import logo_Krita from '/logos/krita.png'

import img_Myself from '/images/20250207_152043 4.jpg'
import img_Project1 from '/images/space.jpeg'
import img_Project2 from '/images/EldenRingSotE-2.jpg'
import img_Project3 from '/images/project-crash_bandicoot.png'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

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

  useEffect(() => {
    documentTitle()
  }, [])

  return (
    <div className='main'>
      <div className='section'>
        <div className='container-intro'>
          <div className='container-pic-info'>
            <img className='my-picture' src={img_Myself}/>
            <div className='container-info'>
              <p className='info'>
                <img src={icon_Location}/>
                Norway
              </p>
              <p className='info'>
                <img src={icon_Email}/>
                magnus.kjonnoy@gmail.com
              </p>
              <p className='info'>
                <img src={icon_GitHub}/>
                <a href='https://github.com/magnus-kjonnoy' target='_blank'>magnus-kjonnoy</a>
              </p>
              <p className='info'>
                <img src={icon_Code}/>
                Frontend
              </p>
            </div>
          </div>
          <p className='title-1'>Magnus Kjønnøy</p>
          <div className='text-margin text-intro'>
            <p>
              Hello world! My name is Magnus and I'm a frontend web developer with a passion for creating user-friendly and visually appealing websites, applications and games.
            </p>
            <div></div>
            <p>
              I look forward to taking the next step and apply my skills in a professional environment in web/game development where I can learn from other experienced developers.
            </p>
            <div/>
            <p>
              Currently, I am working on a fullstack application with TerraMetrix, building a customerportal for oil companies to analyse and view experiment data.
            </p>
          </div>
          {/* <p className='text-margin text-intro'>
            My name is Magnus and I'm a web developer with a passion for creating user-friendly and visually appealing websites, applications and games. 
            I work on front-end and interactive solutions.
            I use Figma for web design, 
            have som experience drawing in Krita, 
            and also have experience building computers.
          </p> */}
          {/* <p className='text-margin text-intro'>
            Jeg heter Magnus og er en webutvikler med en lidenskap for å skape brukervennlige og
            visuelt tiltalende nettsider, applikasjoner og spill. Med ferdigheter i HTML, CSS, JavaScript, React, og mer,
            jobber jeg med front-end og interaktive løsninger. Jeg bruker Figma til webdesign,
            har litt erfaring med å tegne i Krita, og har også erfaring med å bygge datamaskiner.
          </p> */}
        </div>
      </div>

      <div className='section'>
        <div className='title-2 text-center'>Technologies</div>
        <p className='text-margin'>
          These are the languages, frameworks, tools and programs I have experience with.
        </p>
        <div className='container-skills'>
          <div className='skill'>
            <img src={logo_HTML} alt='HTML logo' />
            <p>HTML</p>
          </div>
          <div className='skill'>
            <img src={logo_CSS} alt='CSS logo' />
            <p>CSS</p>
          </div>
          <div className='skill'>
            <img src={logo_JavaScript} alt='JavaScript logo' />
            <p>JavaScript</p>
          </div>
          <div className='skill'>
            <img src={logo_React} alt='React logo' />
            <p>React</p>
          </div>
          <div className='skill'>
            <img src={logo_NPM} alt='NPM logo' />
            <p>NPM</p>
          </div>
          <div className='skill'>
            <img src={logo_Vite} alt='Vite logo' />
            <p>Vite</p>
          </div>
          {/* <div className='skill'>
            <img src={logo_Electron} alt='Electron logo' />
            <p>Electron</p>
          </div> */}
          <div className='skill'>
            <img src={logo_Nodejs} alt='Node.js logo' />
            <p>Node.js</p>
          </div>
          <div className='skill'>
            <img src={logo_Express} alt='Express logo' />
            <p>Express.js</p>
          </div>
          <div className='skill'>
            <img src={logo_PostgreSQL} alt='PostgreSQL logo' />
            <p>PostgreSQL</p>
          </div>
          {/* <div className='skill'>
            <img src={logo_Socketio} alt='Socket.io logo' />
            <p>Socket.io</p>
          </div> */}
          {/* <div className='skill'>
            <img src={logo_Cloudflare} alt='Cloudflare logo' />
            <p>Cloudflare</p>
          </div> */}
          <div className='skill'>
            <img src={logo_DigitalOcean} alt='DigitalOcean logo' />
            <p>DigitalOcean</p>
          </div>
          <div className='skill'>
            <img src={logo_GitHub} alt='GitHub logo' />
            <p>GitHub</p>
          </div>
          <div className='skill'>
            <img src={logo_VSCode} alt='VS Code logo' />
            <p>VS Code</p>
          </div>
          <div className='skill'>
            <img src={logo_Figma} alt='Figma logo' />
            <p>Figma</p>
          </div>
          <div className='skill'>
            <img src={logo_Krita} alt='Krita logo' />
            <p>Krita</p>
          </div>
        </div>
      </div>

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
          {/* <p className='text-margin'>
            You can find my projects on{' '}
            <a className='link' href='https://github.com/magnus-kjonnoy' target='_blank'>
              GitHub
            </a>
            .
          </p> */}
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
            <p className='text-margin project-text'>
              An informative website with facts and details about the planets in our solar 
              system, designed to be both educational and visually engaging.
              It also includes a simulation of the solar system.
              {/* En informativ nettside som viser detaljer om planetene i solsystemet vårt, designet
              for å være både lærerik og visuelt engasjerende. */}
            </p>
            <p className='text-margin project-text'>
              <a className='link-inactive' target='_blank'>
                GitHub
              </a>
              {' '}|{' '}
              <a className='link' href='https://magnus-kjonnoy.github.io/solar-system' target='_blank'>
                Link
              </a>
            </p>
            <p className='text-margin project-text'>Made with Vite, React, JavaScript, CSS and HTML.</p>
          </div>
          {/* <div className='project'>
            <img
              onClick={() => openModal(img_Project2, 'Elden Café')}
              src={img_Project2}
              className='project-image'
              alt='Project: Elden Café'
            />
            <p className='title-3'>Elden Café</p>
            <p className='text-margin project-text'>
              A website for a fantasy café inspired by Elden Ring, where I combined creative design
              and interactive functionality to create a unique experience for fans of the game.
              
              En nettside for en café inspirert av Elden Ring, hvor jeg kombinerte kreativt design
              og interaktiv funksjonalitet for å skape en unik opplevelse for fans av spillet.
            </p>
            <p className='text-margin project-text'>
              <a className='link-inactive' target='_blank'>
                GitHub
              </a>
              {' '}|{' '}
              <a className='link-inactive' target='_blank'>
                Link
              </a>
            </p>
            <p className='text-margin project-text'>Made with Vite, React, JavaScript, CSS and HTML.</p>
          </div> */}
          {/* <div className='project'>
            <img
              onClick={() => openModal(null, 'Online real-time chatting application')}
              src={null}
              className='project-image'
              alt='Project: online real-time chatting application'
            />
            <p className='title-3'>Online chat application</p>
            <p className='text-margin project-text'>
              
            </p>
            <p className='text-margin project-text'>
              <a className='link-inactive' target='_blank'>
                GitHub
              </a>
              {' '}|{' '}
              <a className='link-inactive' target='_blank'>
                Link
              </a>
            </p>
            <p className='text-margin project-text'>Made with Cloudflare, Socket.io, Electron, Vite, React, JavaScript, CSS and HTML.</p>
          </div> */}
          {/* <div className='project'>
            <img
              onClick={() => openModal(img_Project3, 'Crash Bandicoot - Pixel Pandemonium')}
              src={img_Project3}
              className='project-image'
              alt='Project: Crash Bandicoot - Pixel Pandemonium'
            />
            <p className='title-3'>Crash Bandicoot - Pixel Pandemonium</p>
            <p className='text-margin project-text'>
              A 2D pixel-art platformer game based on Crash Bandicoot. This started as a group
              project, but wasn't finished, and so I continued developing it myself.

              Et 2D pixel-art plattformer spill basert på Crash Bandicoot.
            </p>
            <p className='text-margin project-text'>
              <a className='link-inactive' target='_blank'>
                GitHub
              </a>
              {' '}|{' '}
              <a className='link-inactive' target='_blank'>
                Link
              </a>
            </p>
            <p className='text-margin project-text'>Made with Electron, Vite, React, JavaScript, CSS and HTML.</p>
          </div> */}
          {/* <div className='project'>
            <img
              onClick={() => openModal(null, 'untitled game')}
              src={null}
              className='project-image'
              alt='Project: untitled game'
            />
            <p className='title-3'>Untitled game</p>
            <p className='text-margin project-text'>
            </p>
            <p className='text-margin project-text'>
              <a className='link-inactive' target='_blank'>
                GitHub
              </a>
              {' '}|{' '}
              <a className='link-inactive' target='_blank'>
                Link
              </a>
            </p>
            <p className='text-margin project-text'>Made with Electron, Vite, React, JavaScript, CSS and HTML.</p>
          </div> */}
        </div>
      </div>

      {/* <div className='section'>
        <div className='container-aboutme'>
          <p className='title-3 title-margin'>Min utviklingsreise</p>
          <p className='text-margin'>
            Etter å ha fullført et intensivt kurs i front-end webutvikling har jeg utviklet en solid
            forståelse for hvordan man bygger brukervennlige og responsive nettsider. Jeg er nå klar
            til å ta steget videre og anvende mine ferdigheter i et profesjonelt miljø, hvor jeg kan
            bidra til spennende prosjekter og lære mer fra erfarne utviklere.
          </p>
          <p className='title-3 title-margin'>Prosjekter og praktisk erfaring</p>
          <p className='text-margin'>
            I løpet av opplæringen har jeg jobbet på flere prosjekter som har gitt meg både teknisk
            kunnskap og praktisk erfaring. Jeg har utviklet alt fra enkle statiske nettsider til mer
            interaktive applikasjoner med React, og har jobbet med design og prototyper i Figma. Jeg
            har også erfaring med versjonskontroll (Git) og samarbeid i team, hvor jeg har
            bidratt til koding, testing og feilsøking.
          </p>
          <p className='title-3 title-margin'>Ferdigheter fra hobby</p>
          <p className='text-margin'>
            På fritiden er jeg engasjert i dataspill, som har lært meg verdifulle ferdigheter som
            tålmodighet og samarbeid. Jeg tror at disse erfaringene hjelper meg med å tilnærme meg
            utfordringer på en systematisk måte, og gir meg en fleksibel og åpen tilnærming til
            problemene jeg møter i utviklingsprosessen.
          </p>
          <p className='title-3 title-margin'>Neste steg</p>
          <p className='text-margin'>
            Jeg er motivert for å komme i gang med en arbeidsplass i webutvikling, og ser frem til
            muligheten til å bidra med mine ferdigheter, lære fra erfarne utviklere og utvikle meg
            videre i faget.
          </p>
        </div>
      </div> */}

      {/* <div className='section'>
        <div className='container-aboutme'>
          <p className='title-3'>My development journey</p>
          <p className='text-margin'>
            After completing an intensive course in front-end web development, I have developed a 
            solid understanding of how to build user-friendly, responsive and interactive websites.
            I am now ready to take the next step and apply my skills in a professional environment,
            where I can contribute to exciting projects and learn more from experienced developers.
          </p>
          <p className='title-3 title-margin'>Practical experience</p>
          <p className='text-margin'>
            During my training, I have worked on several projects that have given me both technical
            knowledge and practical experience. I have developed everything from simple static
            websites to more interactive applications with React, and have worked on designs and
            prototypes in Figma. I also have experience with version control (Git) and collaboration
            in groups/teams, where I have contributed to coding, testing and debugging.
          </p>
          <p className='title-3 title-margin'>Skills from hobby</p>
          <p className='text-margin'>
            In my free time, I am involved in video games, which have taught me valuable skills
            such as patience and teamwork. I believe that these experiences help me approach 
            challenges in a systematic way, and gives me a flexible and open-minded approach to the
            problems I may encounter in the development process.
          </p>
          <p className='title-3 title-margin'>Next step</p>
          <p className='text-margin'>
            I am motivated to get started with a job in web/game development, and look forward to 
            the opportunity to contribute with my skills, learn from experienced developers, and 
            develop further in the field.
          </p>
        </div>
      </div> */}

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        src={currentImage?.src}
        alt={currentImage?.alt}
      />
    </div>
  )
}
