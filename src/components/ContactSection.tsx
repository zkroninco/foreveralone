import React from 'react';
import heroImageFace from '../../forever-aloneface.jpg'; // Re-using the face image for signature avatar

interface ContactSectionProps {
  signatureText: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ signatureText }) => {
  return (
    <section className="signature-spot panel" id="signature"> {/* Changed id and class for clarity */}
      <div className="signature-content">
        <img
          src={heroImageFace}
          alt="Forever Alone avatar"
          className="signature-avatar"
        />
        <p className="signature-text">{signatureText}</p>
      </div>
    </section>
  );
};

export default ContactSection;