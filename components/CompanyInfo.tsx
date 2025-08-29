'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function CompanyInfo() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-blue-100 bg-gradient-to-b from-[#fffef6] via-[#fffef9] to-[#fdfcf7] p-6 shadow-lg shadow-blue-300 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400 dark:border-none dark:bg-gray-800/70 dark:bg-none dark:shadow-blue-800"
      >
        <h3 className="mb-4 text-xl font-bold text-blue-800 dark:text-gray-100">会社情報</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong className="text-blue-800 dark:text-gray-100">会社名:</strong>{' '}
            デルタクエスト株式会社
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">所在地:</strong>{' '}
            札幌市中央区南5条西15丁目2-3
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">事業内容:</strong>{' '}
            フロントエンド開発、Webアプリ構築、SEO最適化、CI/CD導入支援、クラウドインフラ設計
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">代表:</strong> ブルメ ケヴィン
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">設立:</strong> 2025年2月20日
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">資本金:</strong> 500万円
          </li>
          <li>
            <strong className="text-blue-800 dark:text-gray-100">お問い合わせ:</strong>{' '}
            <a
              href="mailto:info@deltaquest.co.jp"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              info@deltaquest.co.jp
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl border border-blue-100 bg-gradient-to-b from-[#fffef6] via-[#fffef9] to-[#fdfcf7] p-6 shadow-lg shadow-blue-300 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400 dark:border-none dark:bg-gray-800/70 dark:bg-none dark:shadow-blue-800"
      >
        <h3 className="mb-4 text-xl font-bold text-blue-800 dark:text-gray-100">ミッション</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          デルタクエスト株式会社は、最先端のIT技術を活用し、企業がデジタル市場で成功するためのソリューションを提供します。
          私たちの目標は、直感的でスケーラブルなWebアプリケーションを構築し、ビジネスの成長を支援することです。
        </p>
      </motion.div>
    </div>
  )
}
