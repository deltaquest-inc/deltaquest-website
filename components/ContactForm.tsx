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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as unknown as URLSearchParams).toString(),
      })

      if (response.ok) {
        setIsSent(true)

        setTimeout(() => {
          setIsSent(false)
        }, 3000)
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
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
            className="border-primary-500 bg-primary-500/10 flex h-64 flex-col items-center justify-center gap-6 rounded-lg border p-6 text-center shadow-lg"
          >
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
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
            action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_CONTACT_EMAIL}`}
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
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
                className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <input type="hidden" name="_next" value="/contact-success" />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex cursor-pointer justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
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
