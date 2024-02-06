import React from 'react';
import { ContactWrapper } from './Contact.styled';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => (
   <div>
      <h1>Contact</h1>
      <a href='mailto:trzcinski.tomasz.1988@gmail.com'>Write to me.</a>
   </div>
);

export default Contact;
