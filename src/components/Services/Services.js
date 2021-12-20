import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import ServiceCard from '../cards/ServiceCard/ServiceCard';

// images -> will be moved to another file
import service_1 from '../../assets/images/services/service-1.svg';
import service_2 from '../../assets/images/services/service-2.svg';
import service_3 from '../../assets/images/services/service-3.svg';
import service_4 from '../../assets/images/services/service-4.svg';
import service_5 from '../../assets/images/services/service-5.svg';
import service_6 from '../../assets/images/services/service-6.svg';
import service_7 from '../../assets/images/services/service-7.svg';
import service_8 from '../../assets/images/services/service-8.svg';

// Will be moved to another file
const services = [
  {
    id: uuidv4(),
    title: 'ChatBot', 
    imgUrl: service_1,
    imgAlt: '',
    body: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',
  
  },
  {
    id: uuidv4(),
    title: 'CRM & CXM', 
    imgUrl: service_2,
    imgAlt: '',
    body: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',
    
  },
  {
    id: uuidv4(),
    title: 'Enterprise solution', 
    imgUrl: service_3,
    imgAlt: '',
    body: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',
  },
  {
    id: uuidv4(),
    title: 'Mobile applications', 
    imgUrl: service_4,
    imgAlt: '',
    body: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',

  },
  {
    id: uuidv4(),
    title: 'CRM & CXM', 
    imgUrl: service_5,
    imgAlt: '',
    body: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',

  },
  {
    id: uuidv4(),
    title: 'Smart cities', 
    imgUrl: service_6,
    imgAlt: '',
    body: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',

  },
  {
    id: uuidv4(),
    title: 'UI / UX Design', 
    imgUrl: service_7,
    imgAlt: '',
    body: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',

  },
  {
    id: uuidv4(),
    title: 'Web application', 
    imgUrl: service_8,
    imgAlt: '',
    body: 'We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence. We are committed to pulling in and creating a different workforce of experts that share the common esteem collaboration . As an organization, we accept that by joining beside each other, and our clients, able to see past the surface of changes and issues showcase confront in this other might miss and confront long-standing time with more noteworthy confidence.',

  },

];

export default function Services() {
  return (
    <div className="card-grid grid gap-6">
      {
        services.map( service => (
          <ServiceCard 
            key={service.id}
            id={service.id}
            title={service.title}
            imgUrl={service.imgUrl}
            imgAlt={service.imgAlt}
            body={service.body}
          />
        ))
      }
    </div>
  )
}
