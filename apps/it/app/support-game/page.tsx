'use client'

import React, { useState } from 'react'

const MailtoButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleEmailClick = async () => {
    setIsLoading(true)
    setHasError(false)

    try {
      const email = 'apps@deltaquest.co.jp'
      const subject = 'Support Game Inquiry'
      const body = `Hello DeltaQuest Team,

I'm reaching out regarding your support game services.

Best regards,
[Your Name]`

      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Try to open the mail client
      window.location.href = mailtoUrl

      // Set a timeout to reset loading state in case the mail client doesn't open
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to open mail client:', error)
      setHasError(true)
      setIsLoading(false)
    }
  }

  const handleFallbackClick = () => {
    // Fallback: copy email to clipboard
    const email = 'apps@deltaquest.co.jp'
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
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Get Support</h2>
            <p className="mb-6 text-gray-600">
              Need help with our support game services? Contact us directly.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Primary mailto button */}
            <button
              onClick={handleEmailClick}
              disabled={isLoading}
              className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 ${
                isLoading
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              } transform text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:transform-none disabled:shadow-lg`}
              aria-label="Open email client to contact support"
            >
              {isLoading ? (
                <>
                  <svg
                    className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Opening...
                </>
              ) : (
                <>
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
                  Contact Support
                </>
              )}
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
              Copy Email
            </button>
          </div>

          {/* Error message */}
          {hasError && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex">
                <svg className="mr-2 h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm text-red-800">
                    Unable to open email client. Please use the "Copy Email" button above or
                    manually send an email to{' '}
                    <span className="font-mono font-medium">apps@deltaquest.co.jp</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Additional contact info */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>For urgent matters, you can also reach us at:</p>
            <p className="mt-1 font-mono font-medium text-gray-700">apps@deltaquest.co.jp</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailtoButton
