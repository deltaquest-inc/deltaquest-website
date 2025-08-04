import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'プライバシーポリシー',
  description: 'デルタクエスト株式会社のプライバシーポリシー。お客様の個人情報保護について詳しく説明しています。',
})

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            最終更新日: 2024年12月
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            デルタクエスト株式会社
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            1. はじめに
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              デルタクエスト株式会社（以下、「当社」）は、お客様のプライバシーを保護し、個人情報の安全性を確保することに取り組んでいます。
              このプライバシーポリシーは、モバイルアプリケーション「At All Costs」（以下、「アプリ」）をご利用いただく際に、
              当社がお客様の情報をどのように収集、使用、保存、保護するかについて説明しています。
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              このプライバシーポリシーは以下の法令に準拠しています：
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li>一般データ保護規則（GDPR）- 欧州連合</li>
              <li>カリフォルニア消費者プライバシー法（CCPA）- カリフォルニア州</li>
              <li>個人情報保護法（APPI）- 日本</li>
              <li>App Storeガイドライン - Apple Inc.</li>
              <li>Google Play開発者プログラムポリシー - Google LLC</li>
            </ul>
          </div>
        </div>

        {/* Information Collection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            2. 収集する情報
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                お客様が提供する情報
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 言語設定 - アプリのインターフェース言語</li>
                <li>• ゲーム進行データ - ゲーム履歴、スコア、進行状況</li>
                <li>• ユーザー操作 - ゲーム内での選択と決定</li>
                <li>• 設定 - アプリの設定とプリファレンス</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                自動収集される情報
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• デバイス情報（デバイス種類、OSバージョン）</li>
                <li>• 使用分析（アプリパフォーマンス、クラッシュレポート）</li>
                <li>• 広告データ（広告インタラクション、広告識別子）</li>
                <li>• IPアドレス（匿名化済み）</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Party Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            3. 第三者サービス
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              利用している第三者サービス
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Google Mobile Ads (AdMob)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  目的：パーソナライズされた広告の表示<br/>
                  収集データ：広告インタラクションデータ、デバイス識別子、IPアドレス
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Expo (開発プラットフォーム)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  目的：アプリ更新と分析<br/>
                  収集データ：アプリ使用統計、クラッシュレポート
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Usage */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            4. 情報の使用方法
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 dark:text-green-400 text-sm font-medium">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">アプリ機能</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ゲーム体験の提供と維持</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">パーソナライゼーション</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">お客様の設定に基づくコンテンツのカスタマイズ</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">パフォーマンス改善</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">アプリパフォーマンスの向上と技術的問題の修正</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">分析</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ユーザー行動の理解とサービスの改善</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            5. データの保存とセキュリティ
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              セキュリティ対策
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">暗号化</h4>
                <p>すべてのデータはSSL/TLS暗号化で送信されます</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">アクセス制御</h4>
                <p>個人データへのアクセスは制限されています</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">定期監査</h4>
                <p>セキュリティ評価と更新を定期的に実施</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">データ最小化</h4>
                <p>必要な情報のみを収集します</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Rights */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            6. お客様の権利と選択肢
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">GDPR権利（欧州ユーザー）</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                アクセス、訂正、削除、データポータビリティ、異議申し立ての権利があります
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">CCPA権利（カリフォルニアユーザー）</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                情報の開示、削除、オプトアウト、差別禁止の権利があります
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">APPI権利（日本ユーザー）</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                開示、訂正、利用停止、苦情申し立ての権利があります
              </p>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            7. 児童のプライバシー
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              年齢制限
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              当社のアプリは13歳未満の児童を対象としていません。13歳未満の児童から個人情報を故意に収集することはありません。
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">COPPA準拠（米国）</h4>
                <p className="text-gray-600 dark:text-gray-400">13歳未満の児童から個人情報を収集しません</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">GDPR準拠（欧州連合）</h4>
                <p className="text-gray-600 dark:text-gray-400">16歳未満の児童から親の同意なしで個人データを収集しません</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">APPI準拠（日本）</h4>
                <p className="text-gray-600 dark:text-gray-400">13歳未満の児童から親の同意なしで個人情報を収集しません</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            8. お問い合わせ
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              このプライバシーポリシーに関するご質問や権利の行使については、以下までご連絡ください：
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">メール</p>
                  <a 
                    href="mailto:privacy@deltaquest.co.jp" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    privacy@deltaquest.co.jp
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400">📞</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">データ保護責任者</p>
                  <a 
                    href="mailto:dpo@deltaquest.co.jp" 
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    dpo@deltaquest.co.jp
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              ※ お問い合わせへの回答は30日以内に行います
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            このプライバシーポリシーは上記の日付から有効となり、「At All Costs」モバイルアプリケーションのすべてのユーザーに適用されます。
          </p>
        </div>
      </div>
    </div>
  )
} 