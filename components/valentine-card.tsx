"use client"

import { useState } from "react"
import Image from "next/image"

export default function ValentineCard() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleEnvelope = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative w-full">
      <div className={`envelope-container cursor-pointer ${isOpen ? "open" : ""}`} onClick={toggleEnvelope}>
        <div className="envelope">
          <div className="letter">
            <div className="letter-content">
              <h1 className="text-2xl font-serif text-gray-700 mb-4">{"Happy Valentine's Day"}</h1>
              <div className="heartCard"></div>
              <div className={`full-message ${isOpen ? "visible" : ""}`}>
                <p className="text-gray-600 mt-4 text-left">{"My Lovely NomNoms,"}</p>
                <p className="text-gray-600 mt-2 text-left">
                  <br/>
                  {"They say love is patient and kind—and every day with you, I see that truth come alive. Your heart mirrors the grace I’ve always prayed for, and I can’t imagine walking this path without you. This Valentine’s Day, let’s celebrate the love that brought us together. Will you be my Valentine?"}
                </p>
                <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif"
                    alt="Valentine's Day Hearts"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 mt-4 text-left">
                  {"Forever grateful for you,"}
                  <br />
                  {"THE ULTIMATE BATATA"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .envelope-container {
          width: 300px;
          height: 200px;
          margin: 2rem auto;
          perspective: 1000px;
        }

        @media (max-width: 640px) {
          .envelope-container {
            width: 200px;
            height: 150px;
          }
        }

        .envelope-container:not(.open) {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .envelope {
          width: 100%;
          height: 100%;
          background-color: #f5a9b8;
          position: relative;
          transform-style: preserve-3d;
          border-radius: 5px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.6s ease;
        }

        .envelope-container.open .envelope {
          transform: rotateX(0deg);
        }

        .letter {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          background: white;
          border: 1px dashed #666;
          padding: 20px;
          text-align: center;
          transform-origin: top;
          transition: all 0.4s ease 0.3s;
          transform: rotateX(0deg) translateY(0) translateZ(0);
          overflow-y: auto;
          max-height: calc(100vh - 40px);
        }

        .envelope-container.open .letter {
          transform: translateY(-100px) translateZ(50px) scaleX(2) scaleY(2.2);
          height: auto;
        }

        .heartCard {
          width: 20px;
          height: 20px;
          background: #ff4b6e;
          transform: rotate(45deg);
          margin: 10px auto;
          position: relative;
        }

        .heartCard:before,
        .heartCard:after {
          content: '';
          width: 20px;
          height: 20px;
          background: #ff4b6e;
          border-radius: 50%;
          position: absolute;
        }

        .heartCard:before {
          left: -10px;
        }

        .heartCard:after {
          top: -10px;
          right: 0;
        }

        .full-message {
          opacity: 0;
          transition: opacity 0.4s ease 0.6s;
          max-height: 0;
          overflow: none;
        }

        .full-message.visible {
          opacity: 1;
          max-height: 100vh;
        }

        .letter-content {
          opacity: 0;
          overflow: hidden;
          transition: opacity 0.4s ease 0.4s;
        }

        .envelope-container.open .letter-content {
          opacity: 1;
          overflow: visible;
        }
      `}</style>
    </div>
  )
}