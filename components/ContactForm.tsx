'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formAction = `https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_CONTACT_EMAIL}`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(
          Object.entries(Object.fromEntries(formData)).map(([k, v]) => [k, String(v)])
        ).toString(),
      })

      if (response.ok) {
        setIsSent(true)

        setTimeout(() => {
          setIsSent(false)
        }, 3000)
      } else {
        setErrorMessage('フォームの送信に失敗しました。もう一度お試しください。')
      }
    } catch (error) {
      setErrorMessage('フォームの送信中にエラーが発生しました。')
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-gray-100">
        お問い合わせフォーム
      </h2>
      <AnimatePresence>
        {isSent ? (
          <motion.div
            key="success-message"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
            className="flex h-64 flex-col items-center justify-center gap-6 rounded-lg border border-blue-600 bg-blue-600/10 p-6 text-center shadow-lg dark:border-blue-500 dark:bg-blue-500/10"
          >
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-500">
              メッセージを送信しました！
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              ご連絡ありがとうございます。追ってご連絡いたします。
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
            action={formAction}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>

            <input type="hidden" name="_next" value="/contact-success" />
            <input type="hidden" name="_captcha" value="false" />
            {errorMessage && (
              <div className="mb-4 text-red-600 dark:text-red-400">{errorMessage}</div>
            )}
            <div>
              <button
                type="submit"
                className="inline-flex cursor-pointer justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500"
              >
                送信
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContactForm
