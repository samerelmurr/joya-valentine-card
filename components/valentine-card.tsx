"use client"

import { useState } from "react"
import Image from "next/image"
import "@/styles/ValentineCard.css"

export default function ValentineCard() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleEnvelope = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative w-full container flex items-center justify-center">
      <div className={`envelope-container flex items-center justify-center cursor-pointer ${isOpen ? "open" : ""}`} onClick={toggleEnvelope}>
        <div className="envelope flex items-center justify-center">
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
    </div>
  )
}