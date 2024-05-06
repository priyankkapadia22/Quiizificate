import React, { useState } from 'react';
import jsPDF from 'jspdf';
import * as nodemailer from 'nodemailer';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const CertificateGenerator: React.FC = () => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleGenerateCertificate = () => {
    const doc = new jsPDF();

    // Add your certificate design here
    doc.text('Certificate of Completion', 105, 30);
    doc.text(`Awarded to ${user.firstName} ${user.lastName}`, 105, 45);

    // Save the certificate as a PDF
    doc.save('certificate.pdf');

    sendCertificate(user.email, user.firstName, user.lastName);
  };

  const sendCertificate = (email: string, firstName: string, lastName: string) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '22it053@charusat.edu.in',
        pass: 'Cspit@priyank53'
      }
    });

    const mailOptions = {
      from: '22it053@charusat.edu.in',
      to: email,
      subject: 'Certificate of Completion',
      attachments: [{
        filename: 'certificate.pdf',
        path: './certificate.pdf'
      }]
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent');
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={user.firstName}
        onChange={(e) => setUser({...user, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={user.lastName}
        onChange={(e) => setUser({...user, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value })}
      />
      <button onClick={handleGenerateCertificate}>Generate Certificate</button>
    </div>
  );
};

export default CertificateGenerator;