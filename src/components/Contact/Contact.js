import React, { useState, useRef } from 'react';
import { Spinner, Container, Carousel, Button, Card } from "react-bootstrap";

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import emailjs from '@emailjs/browser';
import { ContactSection, Image, LeftSection, RightSection, ContactForm, ContactButton, ContactInput, ContactMessage, ContactLabel } from './ContactStyles';
import Me from "../../../public/images/Me.png"

const Contact = (props) => {
  const { msgAlert } = props

  // Send Email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_website', form.current, 'SbJwbvEIoRP7VcCav')
      .then((result) => {
          console.log(result.text);
          msgAlert({
            // heading: 'Success!',
            message: 'Message sent successfully!',
            // variant: 'success',
          })
      },
      (error) => {
          console.log(error.text);
          msgAlert({
            // heading: 'Error ' + error.text,
            message: 'Failed to send message. Please refresh and try again.',
            // variant: 'danger',
          })
      });
      e.target.reset()
  };

  return (
    <ContactSection row nopadding id="contact">
        <LeftSection>
          <SectionTitle main center>Let's Chat!</SectionTitle>
          <ContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <ContactLabel>Name</ContactLabel>
              <br />
                <ContactInput type="text" name="name" placeholder='Name' />
              <br /><br />
              <ContactLabel>Email</ContactLabel>
              <br />
                <ContactInput type="email" name="email" placeholder='Email'  />
              <br /><br />
              <ContactLabel>Subject</ContactLabel>
              <br />
                <ContactInput type="text" name="subject"  placeholder='Subject'/>
              <br /><br />
              <ContactLabel>Message</ContactLabel>
              <br />
              <ContactMessage name="message" placeholder='Message' />
              <br />
              <ContactButton type="submit" value="Send">
                Send
              </ContactButton>
            </form>
          </ContactForm>
        </LeftSection>
        <br />
        <RightSection>
          <Image src={"/images/Me.png"}/>
        </RightSection>
          <SectionDivider/>
    </ContactSection>
  )
};

export default Contact;
