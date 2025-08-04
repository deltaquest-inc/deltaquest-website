import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'プライバシーポリシー',
  description:
    'デルタクエスト株式会社のプライバシーポリシー。お客様の個人情報保護について詳しく説明しています。',
})

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            プライバシーポリシー
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">最終更新日: 2025年8月</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">デルタクエスト株式会社</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">アプリ: "At All Costs"</p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">1. はじめに</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              デルタクエスト株式会社（以下、「当社」）は、お客様のプライバシーを保護し、個人情報の安全性を確保することに取り組んでいます。
              このプライバシーポリシーは、モバイルアプリケーション「At All
              Costs」（以下、「アプリ」）をご利用いただく際に、
              当社がお客様の情報をどのように収集、使用、保存、保護するかについて説明しています。
            </p>
            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
              このプライバシーポリシーは以下の法令に準拠しています：
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>一般データ保護規則（GDPR）- 欧州連合</li>
              <li>カリフォルニア消費者プライバシー法（CCPA）- カリフォルニア州</li>
              <li>個人情報保護法（APPI）- 日本</li>
              <li>App Storeガイドライン - Apple Inc.</li>
              <li>Google Play開発者プログラムポリシー - Google LLC</li>
              <li>児童オンラインプライバシー保護法（COPPA）- 米国</li>
              <li>ePrivacy指令 - 欧州連合</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
              当社のアプリをご利用いただくことで、お客様はこのプライバシーポリシーに記載されたデータ処理に同意したものとみなされます。
            </p>
          </div>
        </div>

        {/* Information Collection */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            2. 収集する情報
          </h2>
          
          {/* Information You Provide */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">2.1 お客様が提供する情報</h3>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>言語設定</strong> - アプリのインターフェース言語</li>
                <li>• <strong>ゲーム進行データ</strong> - ゲーム履歴、スコア、進行状況</li>
                <li>• <strong>ユーザー操作</strong> - ゲーム内での選択と決定</li>
                <li>• <strong>設定</strong> - アプリの設定とプリファレンス</li>
              </ul>
            </div>
          </div>

          {/* Information Collected Automatically */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">2.2 自動収集される情報</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">デバイス情報</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• デバイス種類とモデル</li>
                  <li>• オペレーティングシステムバージョン</li>
                  <li>• アプリバージョン</li>
                  <li>• ユニークデバイス識別子</li>
                  <li>• IPアドレス（匿名化済み）</li>
                </ul>
              </div>
              <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">使用分析</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• アプリパフォーマンス指標</li>
                  <li>• クラッシュレポートとエラーログ</li>
                  <li>• 機能使用統計</li>
                  <li>• セッション時間と頻度</li>
                </ul>
              </div>
              <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">広告データ</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 広告インタラクションデータ</li>
                  <li>• 広告パフォーマンス指標</li>
                  <li>• 広告識別子（IDFA/AAID）</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">2.3 第三者サービス</h3>
            <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                当社は以下の第三者サービスを使用しており、追加情報を収集する場合があります：
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Google Mobile Ads (AdMob)</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Android App ID: ca-app-pub-1248158356209419~2418856108</li>
                    <li>• iOS App ID: ca-app-pub-1248158356209419~7260119242</li>
                    <li>• 目的：パーソナライズされた広告の表示</li>
                    <li>• 収集データ：広告インタラクションデータ、デバイス識別子、IPアドレス</li>
                    <li>• 準拠：Google Play広告ポリシー、App Store広告ガイドライン</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Expo (開発プラットフォーム)</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Project ID: 371b3e97-4f1e-49f5-a802-8f58cc8586f7</li>
                    <li>• 目的：アプリ更新と分析</li>
                    <li>• 収集データ：アプリ使用統計、クラッシュレポート</li>
                    <li>• 準拠：App Storeガイドライン、Google Play開発者プログラムポリシー</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">App Store & Google Play</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• <strong>App Store:</strong> Apple Inc.が分析とクラッシュデータを収集</li>
                    <li>• <strong>Google Play:</strong> Google LLCが分析とクラッシュデータを収集</li>
                    <li>• 目的：アプリ配布、分析、クラッシュレポート</li>
                    <li>• 収集データ：アプリ使用、デバイス情報、クラッシュレポート</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            3. 情報の使用方法
          </h2>
          
          {/* Primary Uses */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">3.1 主要な用途</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">アプリ機能</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">ゲーム体験の提供と維持</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">パーソナライゼーション</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">お客様の設定に基づくコンテンツのカスタマイズ</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">パフォーマンス</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">アプリパフォーマンスの向上と技術的問題の修正</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">分析</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">ユーザー行動の理解とサービスの改善</p>
              </div>
            </div>
          </div>

          {/* Advertising */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">3.2 広告</h3>
            <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>パーソナライズ広告:</strong> 関連性の高い広告の表示</li>
                <li>• <strong>広告パフォーマンス:</strong> 広告効果の測定と最適化</li>
                <li>• <strong>収益創出:</strong> 広告収益によるアプリ開発のサポート</li>
              </ul>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">3.3 法的根拠（GDPR）</h3>
            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                当社は以下の法的根拠に基づいてお客様の個人データを処理します：
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>同意:</strong> パーソナライズ広告と分析のため</li>
                <li>• <strong>正当な利益:</strong> アプリ機能とパフォーマンス改善のため</li>
                <li>• <strong>契約:</strong> お客様が要求したサービスの提供のため</li>
                <li>• <strong>法的義務:</strong> 適用される法律と規制への準拠のため</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Storage and Security */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            4. データの保存とセキュリティ
          </h2>
          
          {/* Storage Locations */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">4.1 保存場所</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">主要保存場所</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 米国（AWS/Google Cloud）</li>
                  <li>• 欧州連合（GDPR準拠）</li>
                  <li>• お客様のデバイス（ゲーム進行と設定）</li>
                </ul>
              </div>
              <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">プラットフォーム分析</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• App Store分析：Apple Inc.サーバー（米国）</li>
                  <li>• Google Play分析：Google LLCサーバー（米国）</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">4.2 データ保持期間</h3>
            <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium text-gray-900 dark:text-white">アプリデータ</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• ゲームデータ：デバイスにローカル保存</li>
                    <li>• 分析データ：26ヶ月間保持</li>
                    <li>• 広告データ：18ヶ月間保持</li>
                    <li>• クラッシュレポート：12ヶ月間保持</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-gray-900 dark:text-white">プラットフォームデータ</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• App Storeデータ：Appleのプライバシーポリシーに従う</li>
                    <li>• Google Playデータ：Googleのプライバシーポリシーに従う</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">4.3 セキュリティ対策</h3>
            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium text-gray-900 dark:text-white">技術的対策</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• 暗号化：すべてのデータはSSL/TLS暗号化で送信</li>
                    <li>• アクセス制御：個人データへのアクセスは制限</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-gray-900 dark:text-white">運用対策</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• 定期監査：セキュリティ評価と更新を定期的に実施</li>
                    <li>• データ最小化：必要な情報のみを収集</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sharing and Disclosure */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            5. データの共有と開示
          </h2>
          
          {/* Third-Party Services */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">5.1 第三者サービス</h3>
            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <p className="mb-3 text-gray-700 dark:text-gray-300">当社は以下の第三者とデータを共有します：</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Google (AdMob):</strong> 広告サービスのため</li>
                <li>• <strong>Expo:</strong> アプリ更新と分析のため</li>
                <li>• <strong>クラウドプロバイダー:</strong> データ保存と処理のため</li>
                <li>• <strong>Apple Inc.:</strong> App Store配布と分析のため</li>
                <li>• <strong>Google LLC:</strong> Google Play配布と分析のため</li>
              </ul>
            </div>
          </div>

          {/* Legal Requirements */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">5.2 法的要件</h3>
            <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                当社は、法律で要求される場合、または以下の目的でお客様の情報を開示する場合があります：
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 法的義務の遵守</li>
                <li>• 当社の権利と安全の保護</li>
                <li>• 政府からの要請への対応</li>
                <li>• 不正行為やセキュリティ脅威の防止</li>
              </ul>
            </div>
          </div>

          {/* Business Transfers */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">5.3 事業譲渡</h3>
            <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
              <p className="text-gray-700 dark:text-gray-300">
                合併、買収、または資産売却の場合、お客様の情報は事業取引の一部として譲渡される場合があります。
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights and Choices */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            6. お客様の権利と選択肢
          </h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">6.1 GDPR権利（欧州ユーザー）</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                お客様には以下の権利があります：アクセス、訂正、削除、データポータビリティ、異議申し立て、制限、同意撤回
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">6.2 CCPA権利（カリフォルニアユーザー）</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                お客様には以下の権利があります：情報の開示、削除、オプトアウト、差別禁止
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">6.3 APPI権利（日本ユーザー）</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                お客様には以下の権利があります：開示、訂正、利用停止、苦情申し立て
              </p>
            </div>
          </div>

          {/* How to Exercise Rights */}
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">6.4 権利行使の方法</h3>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                権利を行使するには、以下までご連絡ください：
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>メール:</strong> privacy@deltaquest.co.jp</li>
                <li>• <strong>住所:</strong> [会社住所]</li>
                <li>• <strong>回答時間:</strong> 30日以内に回答いたします</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            7. 児童のプライバシー
          </h2>
          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">7.1 年齢制限</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              当社のアプリは13歳未満の児童を対象としていません。当社は13歳未満の児童から個人情報を故意に収集することはありません。
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">COPPA準拠（米国）</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 13歳未満の児童から個人情報を収集しません</li>
                  <li>• 収集した場合は即座に削除します</li>
                  <li>• 親は児童の情報の確認、削除、収集拒否を要求できます</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">GDPR準拠（欧州連合）</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 16歳未満の児童から親の同意なしで個人データを収集しません</li>
                  <li>• 一部のEU国では年齢制限が13-16歳の場合があります</li>
                  <li>• 必要に応じて年齢確認措置を実施します</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">APPI準拠（日本）</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 13歳未満の児童から親の同意なしで個人情報を収集しません</li>
                  <li>• 児童のデータに適切な保護措置を実施します</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* International Data Transfers */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            8. 国際データ転送
          </h2>
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">8.1 越境転送</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              お客様のデータは、お客様の国以外の国に転送され、処理される場合があります。当社は、そのような転送に適切な保護措置が整っていることを確保します。
            </p>
            
            <h4 className="mb-2 font-medium text-gray-900 dark:text-white">GDPR準拠（EUユーザー）</h4>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
              当社は以下に基づいて転送を行います：
            </p>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• <strong>適切性決定:</strong> 適切な保護を有する国への転送</li>
              <li>• <strong>標準契約条項:</strong> その他の国際転送のため</li>
              <li>• <strong>同意:</strong> 適切な場合</li>
              <li>• <strong>拘束的企業準則:</strong> グループ内転送のため</li>
              <li>• <strong>認証メカニズム:</strong> 適用可能な場合</li>
            </ul>
          </div>
        </div>

        {/* Cookies and Tracking */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            9. クッキーとトラッキング技術
          </h2>
          <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">9.1 トラッキングの種類</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>必須クッキー:</strong> アプリ機能に必要</li>
                  <li>• <strong>分析クッキー:</strong> アプリ使用状況の理解のため</li>
                  <li>• <strong>広告クッキー:</strong> 関連広告の表示のため</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>App Storeトラッキング:</strong> 分析とクラッシュレポート</li>
                  <li>• <strong>Google Playトラッキング:</strong> 分析と広告</li>
                </ul>
              </div>
            </div>
            
            <h4 className="mt-4 mb-2 font-medium text-gray-900 dark:text-white">9.2 オプトアウトオプション</h4>
            <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
              非必須トラッキングは以下でオプトアウトできます：
            </p>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• アプリ設定</li>
              <li>• デバイスプライバシー設定</li>
              <li>• iOS設定：プライバシーとセキュリティ {'>'} トラッキング</li>
              <li>• Android設定：プライバシー {'>'} 広告</li>
            </ul>
          </div>
        </div>

        {/* Data Breach Procedures */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            10. データ侵害手続き
          </h2>
          <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">10.1 通知要件</h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              データ侵害が発生した場合、当社は以下を行います：
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>評価:</strong> 範囲と影響の評価</li>
              <li>• <strong>通知:</strong> 影響を受けたユーザーへの72時間以内の通知（GDPR）</li>
              <li>• <strong>報告:</strong> 必要に応じて関連当局への通知</li>
              <li>• <strong>修復:</strong> 将来の侵害を防ぐための措置</li>
            </ul>
          </div>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            11. このプライバシーポリシーの変更
          </h2>
          <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">11.1 更新</h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              当社はこのプライバシーポリシーを随時更新する場合があります。重要な変更については以下で通知します：
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>アプリ内通知:</strong> アプリ内での通知表示</li>
              <li>• <strong>メール:</strong> 登録ユーザーへのメール送信</li>
              <li>• <strong>ウェブサイト:</strong> ウェブサイトでの更新ポリシーの掲載</li>
              <li>• <strong>App Store:</strong> 新しいプライバシーポリシーでのアプリストアリスト更新</li>
              <li>• <strong>Google Play:</strong> 新しいプライバシーポリシーでのGoogle Playリスト更新</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            12. お問い合わせ
          </h2>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">12.1 データ保護責任者</h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">プライバシー関連のお問い合わせ：</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>メール:</strong> dpo@deltaquest.co.jp</li>
                  <li>• <strong>電話:</strong> [電話番号]</li>
                  <li>• <strong>住所:</strong> [会社住所]</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">12.2 一般お問い合わせ</h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">このプライバシーポリシーに関する一般的な質問：</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>メール:</strong> privacy@deltaquest.co.jp</li>
                  <li>• <strong>ウェブサイト:</strong> [ウェブサイト]</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">12.3 監督当局</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                お客様は、お住まいの地域のデータ保護当局に苦情を申し立てる権利があります：
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>EU:</strong> お住まいの国のデータ保護当局にご連絡ください</li>
                <li>• <strong>カリフォルニア:</strong> カリフォルニアプライバシー保護庁</li>
                <li>• <strong>日本:</strong> 個人情報保護委員会</li>
                <li>• <strong>App Store:</strong> Apple Inc.プライバシーチーム</li>
                <li>• <strong>Google Play:</strong> Google LLCプライバシーチーム</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            13. 用語集
          </h2>
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>個人データ:</strong> 識別可能な個人に関する情報</li>
                  <li>• <strong>処理:</strong> 個人データに対して実行される操作</li>
                  <li>• <strong>管理者:</strong> 処理の目的と手段を決定する事業者</li>
                  <li>• <strong>処理者:</strong> 管理者に代わってデータを処理する事業者</li>
                  <li>• <strong>同意:</strong> 自由に与えられた、具体的、情報に基づく、明確な合意</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• <strong>App Store:</strong> AppleのiOSアプリ用デジタル配布プラットフォーム</li>
                  <li>• <strong>Google Play:</strong> GoogleのAndroidアプリ用デジタル配布プラットフォーム</li>
                  <li>• <strong>ATT:</strong> App Tracking Transparency（Appleのプライバシーフレームワーク）</li>
                  <li>• <strong>IDFA:</strong> Identifier for Advertisers（Appleの広告識別子）</li>
                  <li>• <strong>AAID:</strong> Android Advertising ID（Googleの広告識別子）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            このプライバシーポリシーは上記の日付から有効となり、「At All Costs」モバイルアプリケーションのすべてのユーザーに適用されます。
          </p>
        </div>
      </div>
    </div>
  )
} 