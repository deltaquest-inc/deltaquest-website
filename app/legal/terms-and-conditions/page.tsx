import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: '利用規約',
  description: 'デルタクエスト株式会社の利用規約。アプリの利用条件について詳しく説明しています。',
})

export default function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">利用規約</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">最終更新日: 2024年12月</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">デルタクエスト株式会社</p>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            1. 利用規約の承諾
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              「At All
              Costs」モバイルアプリケーション（以下、「アプリ」）をダウンロード、インストール、または使用することにより、
              お客様はこれらの利用規約（以下、「規約」）に拘束されることに同意したものとみなされます。
              これらの規約に同意されない場合は、アプリを使用しないでください。
            </p>
          </div>
        </div>

        {/* Service Description */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            2. サービスの説明
          </h2>
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
              「At All Costs」は以下の機能を提供するモバイルゲームアプリケーションです：
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    インタラクティブなゲームプレイ体験
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    アプリ内購入と仮想アイテム
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">広告サポートコンテンツ</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    ソーシャル機能とリーダーボード
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    定期的な更新と新コンテンツ
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    App Store・Google Play対応
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Accounts */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            3. ユーザーアカウントと登録
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                アカウント作成
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• アカウントを作成せずにアプリを使用できます</li>
                <li>• ゲーム進行はデバイスにローカル保存されます</li>
                <li>• デバイスのセキュリティ維持はお客様の責任です</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                アカウント責任
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• デバイスでのすべての活動に責任があります</li>
                <li>• デバイスを未承認ユーザーと共有してはいけません</li>
                <li>• アプリへの未承認アクセスを試みてはいけません</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Acceptable Use */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            4. 利用ポリシー
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                許可される利用
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 個人的な娯楽とゲームプレイ</li>
                <li>• 正当なゲーム進行</li>
                <li>• アプリ機能内でのコンテンツ共有</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                禁止される利用
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• チートやエクスプロイトの使用</li>
                <li>• 他のユーザーへの嫌がらせや脅迫</li>
                <li>• 違法、有害、不適切なコンテンツの共有</li>
                <li>• アプリのリバースエンジニアリング</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            5. 知的財産権
          </h2>
          <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  当社の権利
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• アプリとすべてのコンテンツはデルタクエスト株式会社が所有</li>
                  <li>• すべての商標、著作権、知的財産は当社に帰属</li>
                  <li>• お客様はアプリに対する所有権を有しません</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  お客様の権利
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 個人的、非商業的目的でアプリを使用可能</li>
                  <li>• アプリ内で作成したコンテンツの権利を保持</li>
                  <li>• アプリ機能のためにコンテンツの使用を許可</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Items */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            6. 仮想アイテムとアプリ内購入
          </h2>
          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
              仮想通貨とアイテム
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">重要な注意事項</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 仮想アイテムは現実世界での価値を持ちません</li>
                  <li>• 仮想通貨は現金に交換できません</li>
                  <li>• すべての購入は最終的で返金不可です</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">購入条件</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 価格は予告なく変更される場合があります</li>
                  <li>• 購入はデバイスのアプリストアで処理されます</li>
                  <li>• 返金はアプリストアのポリシーに従います</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advertising */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            7. 広告と第三者サービス
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                広告について
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• アプリは開発をサポートするために広告を表示します</li>
                <li>• 広告コンテンツは第三者ネットワークによって提供されます</li>
                <li>• 当社は広告コンテンツや正確性について責任を負いません</li>
                <li>• デバイス設定でパーソナライズ広告をオプトアウトできます</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                第三者サービス
              </h3>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">App Store</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Apple Inc.が配布と分析サービスを提供
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Google Play</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Google LLCが配布と分析サービスを提供
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">AdMob</h4>
                  <p className="text-gray-600 dark:text-gray-400">Googleが広告サービスを提供</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Expo</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expoが開発とデプロイメントサービスを提供
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Updates and Maintenance */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            8. 更新とメンテナンス
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">アプリ更新</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 機能改善のためにアプリを更新する場合があります</li>
                <li>• 継続利用には更新が必須の場合があります</li>
                <li>• アプリを最新版に保つことはお客様の責任です</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                メンテナンス
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• サービスに一時的な影響を与えるメンテナンスを実施する場合があります</li>
                <li>• 可能な限りスケジュールされたメンテナンスの通知を提供します</li>
                <li>• 一時的なサービス中断について当社は責任を負いません</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            9. 免責事項と制限
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">サービス提供</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                アプリは「現状のまま」提供され、保証なしで提供されます。当社は継続的なサービスを保証しません。
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">責任制限</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                当社は間接的、偶発的、または結果的損害について責任を負いません。
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">補償</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                お客様は、アプリ使用から生じる請求について当社を補償することに同意します。
              </p>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">10. 終了</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                お客様による終了
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• いつでもアプリの使用を停止できます</li>
                <li>• アプリのアンインストールでアクセスが終了します</li>
                <li>• アンインストール時にローカルデータが削除される場合があります</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                当社による終了
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 規約違反の場合</li>
                <li>• 不正または違法な活動の場合</li>
                <li>• 長期間の非アクティブの場合</li>
                <li>• 技術的または事業上の理由</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Age Restrictions */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            11. 年齢制限
          </h2>
          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">最低年齢</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              アプリを使用するには13歳以上である必要があります。18歳未満のユーザーは親の同意が必要です。
            </p>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">App Store</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  13歳以上、18歳未満は購入に親の同意が必要
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Google Play</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  13歳以上、18歳未満は購入に親の同意が必要
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            12. お問い合わせ
          </h2>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              これらの利用規約に関するご質問については、以下までご連絡ください：
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <span className="text-blue-600 dark:text-blue-400">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">一般お問い合わせ</p>
                  <a
                    href="mailto:legal@deltaquest.co.jp"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    legal@deltaquest.co.jp
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                  <span className="text-red-600 dark:text-red-400">⚖️</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">法的通知</p>
                  <a
                    href="mailto:legal@deltaquest.co.jp"
                    className="text-red-600 hover:underline dark:text-red-400"
                  >
                    legal@deltaquest.co.jp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 text-center dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            「At All
            Costs」モバイルアプリケーションを使用することにより、お客様はこれらの利用規約を読み、理解し、
            これらに拘束されることに同意したことを確認したものとみなされます。
          </p>
        </div>
      </div>
    </div>
  )
}
