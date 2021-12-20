import React from 'react';
import SectionIntro from '../components/SectionIntro/SectionIntro';
import Button from '.././components/Button/Button';
import Services from '../components/Services/Services';

// images
import logo_lg from '../assets/images/logo/logo-white-sm.svg';
import circle_lg from '../assets/images/About/circle-lg.png'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary-gradient py-20">
        
        <div className="container">
          <SectionIntro
            header={{
              span: 'We are',
              spanStyle: 'text-white',
              title: '',
              titleStyle: '',
              imgSrc: `${logo_lg}`,
              imgAlt: 'logo_lg',
            }}
            description={{
              style: 'fs-300 text-light-1',
              content: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',
            }}
          >
            <Button 
              text="Learn more"
              style="bg-accent text-white rounded px-3 py-1 mt-8"
            />
          </SectionIntro>
        </div>
      </section>

      {/* About Sectors */}
      <section>
        <div className="container split-evenly items-center">
          <SectionIntro
 
            header={{
              span: 'About',
              spanStyle: 'fs-700',
              title: 'Sectors',
              titleStyle: 'text-darkfs-1000',

            }}
            description={{
              style: 'fs-300 text-light-3',
              content: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',
            }}
            
          >
            <Button 
              text="Learn more"
              style="bg-accent text-white rounded px-3 py-1 mt-8"
            />
          </SectionIntro>
          <img src={circle_lg} alt="" />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-primary-gradient">
        <div className="container">
          <SectionIntro
            header={{
              span: 'Our',
              spanStyle: '',
              title: 'Services.',
              titleStyle: 'text-white',

            }}
            description={{
              style: 'fs-300 text-light-1',
              content: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',
            }}
            
          />

          <Services />
        </div>
      </section>
    </div>
  )
}
