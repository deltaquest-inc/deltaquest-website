import { genPageMetadata } from 'app/seo'
import PrivacyPolicyClient from './page.client'

export const metadata = genPageMetadata({
  title: 'DeltaQuest, Inc. Privacy Policy',
  description:
    'DeltaQuest, Inc. Privacy Policy. Learn how we collect, use, and protect your personal information.',
})

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />
}