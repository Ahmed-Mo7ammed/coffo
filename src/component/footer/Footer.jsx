import React from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light py-4">
        <div className="row">
          {/* روابط السوشيال ميديا */}
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a
              href="https://www.facebook.com/profile.php?id=100008232544076"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaFacebook size={30} className="icon facebook" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaXTwitter size={30} className="icon twitter" />
            </a>

            <a href="mailto:dev.ahmedmohammed95@gmail.com" className="social-link">
              <FiMail size={30} className="icon email" />
            </a>

            <a
              href="https://github.com/Ahmed-Mo7ammed"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub size={30} className="icon github" />
            </a>
            <a href="https://wa.me/201062364985" target="_blank" rel="noopener noreferrer"  className="social-link"
            >
            <FaWhatsapp size={30}  className="icon whats"/></a>
          </div>

          {/* معلومات الاتصال */}
          <div className="d-flex flex-column align-items-center gap-2">
            <div>
              <FaPhone className="me-2" /> +2-01062364985
            </div>
            <div>
              <FaEnvelope className="me-2" /> dev.ahmedmohammed95@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* الجزء السفلي من الفوتر */}
      <div className="bg-danger text-light text-center py-2">
        <p className="m-0">

        Design by Ahmed Faisal  
        </p>
      </div>

      {/* تنسيق الـ CSS داخل JSX */}
      <style jsx>{`
        .social-link {
          transition: transform 0.3s ease-in-out;
        }
        .social-link:hover {
          transform: scale(1.2);
        }
        .icon {
          transition: color 0.3s ease-in-out;
        }
        .facebook:hover { color: #1877F2; }
        .twitter:hover { color: #1DA1F2; }
        .email:hover { color: #D44638; }
        .github:hover { color: #333; }
        .whats:hover {color:green}
      `}</style>
    </>
  );
}
