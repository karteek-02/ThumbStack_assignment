import React, { useState } from 'react';

const ContactForm = () => {
  // State variables for email, message, and name
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create mailto link with subject and body
    const mailtoLink = `mailto:${email}?subject=Feedback&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;

    // Open the mail client
    window.location.href = mailtoLink;

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - karteekkarteek007@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default ContactForm;
