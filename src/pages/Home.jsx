import ContactInfo from '../components/ContactInfo.jsx'

import myPicture from '/images/20250207_152043.jpg'
import logoHTML from '/logos/html.png'
import logoCSS from '/logos/css.png'
import logoJavaScript from '/logos/javascript.png'
import logoReact from '/logos/react.png'
import logoFigma from '/logos/figma.png'
import logoKrita from '/logos/krita.png'

export default function Home() {
  document.title = 'Magnus Kjønnøy - Portefølje'

  return (
    <div className='body'>
      <div className='container-main'>
        <div className='container-introduction'>
          <img className='my-picture' src={myPicture} alt='Bilde av meg' />
          <div className='container-column'>
            <div className='name'>Magnus Kjønnøy</div>
            Jeg heter Magnus og er en webutvikler med en lidenskap for å skape
            brukervennlige og visuelt tiltalende nettsider. Med ferdigheter i
            HTML, CSS, JavaScript og React, jobber jeg med både front-end og
            interaktive løsninger. Jeg bruker Figma til webdesign, har litt
            erfaring med å tegne i Krita, og har også erfaring med å bygge
            datamaskiner.
          </div>
        </div>
        <hr className="hr" />
        <div className='container-column'>
          <div className='title'>Ferdigheter</div>
          <div className='container-skills'>
            <div className='skill'>
              <img src={logoHTML} alt='HTML logo' />
              <p><b>HTML:</b> Språket som brukes for å strukturere innhold på nettsider. Det definerer elementer som overskrifter, avsnitt, lenker, bilder osv.</p>
            </div>
            <div className='skill'>
              <img src={logoCSS} alt='HTML logo' />
              <p><b>CSS (Cascading Style Sheets):</b> Brukes til å style HTML-elementer - farger, fonter, animasjoner, plasseringer og layout.</p>
            </div>
            <div className='skill'>
              <img src={logoJavaScript} alt='HTML logo' />
              <p><b>JavaScript:</b> Et programmeringsspråk som gjør nettsider interaktive - som knapper, menyer, skjemaer og dynamisk innhold.</p>
            </div>
            <div className='skill'>
              <img src={logoReact} alt='HTML logo' />
              <p><b>React:</b> Et JavaScript-bibliotek for å bygge brukergrensesnitt. Gjør det enklere å lage interaktive og dynamiske webapplikasjoner ved å dele opp siden i gjenbrukbare komponenter.</p>
            </div>
            <div className='skill'>
              <img src={logoFigma} alt='HTML logo' />
              <p><b>Figma:</b> Et nettbasert designverktøy som brukes til å lage prototyper, UI-design og samarbeide visuelt med andre utviklere eller designere.</p>
            </div>
            <div className='skill'>
              <img src={logoKrita} alt='HTML logo' />
              <p><b>Krita:</b> Et gratis og åpent tegneverktøy, mest brukt til digital kunst, illustrasjon og konsepttegning.</p>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className='container-column'>
          <div className='title'>Om meg</div>
          <div className='text'>
            <div className='title2'>Min utviklingsreise</div>
            {/* Jeg heter Magnus og er en webutvikler med ferdigheter i HTML, CSS, JavaScript, React og Figma. */}
            Etter å ha fullført et intensivt kurs i webutvikling har jeg
            utviklet en solid forståelse for hvordan man bygger brukervennlige
            og responsive nettsider. Jeg er nå klar til å ta steget videre og
            anvende mine ferdigheter i et profesjonelt miljø, hvor jeg kan bidra
            til spennende prosjekter og lære mer fra erfarne utviklere.
          </div>
          <div className='text'>
            <div className='title2'>Prosjekter og praktisk erfaring</div>I løpet
            av opplæringen har jeg jobbet på flere prosjekter som har gitt meg
            både teknisk kunnskap og praktisk erfaring. Jeg har utviklet alt fra
            enkle statiske nettsider til mer interaktive applikasjoner med
            React, og har jobbet med design og prototyper i Figma. Jeg har også
            erfaring med versjonskontroll (Git) og samarbeid i team, der jeg har
            fått muligheten til å bidra til koding, testing og feilsøking.
          </div>
          <div className='text'>
            <div className='title2'>Ferdigheter fra hobby</div>
            På fritiden er jeg engasjert i dataspill, som har lært meg
            verdifulle ferdigheter som tålmodighet og samarbeid. Jeg tror at
            disse erfaringene hjelper meg med å tilnærme meg utfordringer på en
            systematisk måte, og gir meg en fleksibel og åpen tilnærming til
            problemene jeg møter i utviklingsprosessen.
          </div>
          <div className='text'>
            <div className='title2'>Neste steg</div>
            Jeg er motivert for å komme i gang med en praksisplass i
            webutvikling, og ser frem til muligheten til å bidra med mine
            ferdigheter, lære fra erfarne utviklere og utvikle meg videre i
            faget.
          </div>
        </div>
        <hr className="hr" />
        <div className='container-column container-contact-info'>
          <ContactInfo/>
        </div>
      </div>
    </div>
  )
}