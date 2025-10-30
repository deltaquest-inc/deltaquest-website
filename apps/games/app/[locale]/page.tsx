'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import ContactForm from '@/components/ContactForm'

const MailtoButton = () => {
  const t = useTranslations('games.support')
  const [showForm, setShowForm] = useState(false)

  const handleFallbackClick = () => {
    // Fallback: copy email to clipboard
    const email = t('email')
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert(`Email address copied to clipboard: ${email}`)
      })
      .catch(() => {
        alert(`Please copy this email address: ${email}`)
      })
  }

  return (
    <div
      className="-mx-4 min-h-screen w-full bg-cover bg-center bg-no-repeat sm:-mx-6 xl:mx-0"
      style={{
        backgroundImage: 'url(/static/images/contactGameBackground.png)',
        width: '100vw',
        height: '100vh',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      {/* Content */}
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="bg-opacity-95 flex flex-col items-center space-y-4 rounded-lg bg-white p-8 shadow-2xl backdrop-blur-sm">
          <div className="text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">{t('title')}</h2>
            <p className="mb-6 text-gray-600">
              {t('subtitle')}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Primary contact button - now toggles form */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transform text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label="Toggle contact form"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {showForm ? t('hideFormButton') : t('contactButton')}
            </button>

            {/* Fallback button */}
            <button
              onClick={handleFallbackClick}
              className="inline-flex transform items-center justify-center rounded-lg bg-gray-100 px-6 py-3 font-medium text-gray-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-xl focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none active:bg-gray-300"
              aria-label="Copy email address to clipboard"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              {t('copyButton')}
            </button>
          </div>


          {/* Additional contact info */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>{t('urgentInfo')}</p>
            <p className="mt-1 font-mono font-medium text-gray-700">{t('email')}</p>
          </div>
        </div>
      </div>

      {/* Contact Form - inline */}
      {showForm && (
        <div className="mt-8 w-full">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-4">Formulaire de contact</h3>
            <ContactForm />
          </div>
        </div>
      )}
      
      {/* Debug info */}
      <div className="mt-4 text-sm text-gray-500">
        Debug: showForm = {showForm ? 'true' : 'false'}
      </div>
    </div>
  )
}

export default MailtoButton
