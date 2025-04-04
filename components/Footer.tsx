import React from 'react'
import { FooterClient } from './FooterClient';
import { createClient } from '@/prismicio';

export const Footer = async () => {
 const client = createClient();
 const settings = await client.getSingle("footer");
 const { title, content, links, contact, copyright, socials } = settings.data;

 return (
   <FooterClient
     title={title}
     content={content}
     links={links}
     contact={contact}
     socials={socials}
     copyright={copyright}
   />
 );
}
