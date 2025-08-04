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
          <p className="text-lg text-gray-600 dark:text-gray-300">最終更新日: 2025年8月</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">デルタクエスト株式会社</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">アプリ: "At All Costs"</p>
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
            
            <div className="mt-4">
              <h4 className="mb-2 font-medium text-gray-900 dark:text-white">配布プラットフォーム</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>App Store:</strong> AppleのApp Storeを通じてiOSデバイスで利用可能</li>
                <li>• <strong>Google Play:</strong> Google Playストアを通じてAndroidデバイスで利用可能</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Accounts and Registration */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            3. ユーザーアカウントと登録
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                3.1 アカウント作成
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• アカウントを作成せずにアプリを使用できます</li>
                <li>• ゲーム進行はデバイスにローカル保存されます</li>
                <li>• デバイスのセキュリティ維持はお客様の責任です</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                3.2 アカウント責任
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• デバイスでのすべての活動に責任があります</li>
                <li>• デバイスを未承認ユーザーと共有してはいけません</li>
                <li>• アプリへの未承認アクセスを試みてはいけません</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Acceptable Use Policy */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            4. 利用ポリシー
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                4.1 許可される利用
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 個人的な娯楽とゲームプレイ</li>
                <li>• 正当なゲーム進行</li>
                <li>• アプリ機能内でのコンテンツ共有</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                4.2 禁止される利用
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>チートやエクスプロイト:</strong> 未承認ソフトウェア、ボット、エクスプロイトの使用</li>
                <li>• <strong>嫌がらせ:</strong> 他のユーザーへの嫌がらせ、いじめ、脅迫</li>
                <li>• <strong>違法コンテンツ:</strong> 違法、有害、不適切なコンテンツの共有</li>
                <li>• <strong>リバースエンジニアリング:</strong> アプリのリバースエンジニアリングや改変</li>
                <li>• <strong>商業利用:</strong> 許可なしの商業目的での使用</li>
                <li>• <strong>データマイニング:</strong> 同意なしのユーザーデータ収集</li>
                <li>• <strong>スパム:</strong> 未承諾メッセージやコンテンツの送信</li>
                <li>• <strong>プラットフォーム違反:</strong> App StoreやGoogle Playポリシーの違反</li>
                <li>• <strong>不正行為:</strong> 不正活動や購入</li>
                <li>• <strong>マルウェア:</strong> マルウェアや有害コードの配布</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property Rights */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            5. 知的財産権
          </h2>
          <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  5.1 当社の権利
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• アプリとすべてのコンテンツはデルタクエスト株式会社が所有</li>
                  <li>• すべての商標、著作権、知的財産は当社に帰属</li>
                  <li>• お客様はアプリに対する所有権を有しません</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  5.2 お客様の権利
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 個人的、非商業的目的でアプリを使用可能</li>
                  <li>• アプリ内で作成したコンテンツの権利を保持</li>
                  <li>• アプリ機能のためにコンテンツの使用を許可</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                5.3 ユーザー生成コンテンツ
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• お客様は作成したコンテンツに責任があります</li>
                <li>• 当社は規約に違反するコンテンツを削除する場合があります</li>
                <li>• お客様はアプリ機能のためにコンテンツの使用を全世界、ロイヤリティフリーで許可します</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Virtual Items and In-App Purchases */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            6. 仮想アイテムとアプリ内購入
          </h2>
          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
              6.1 仮想通貨とアイテム
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
            
            <div className="mt-6">
              <h4 className="mb-2 font-medium text-gray-900 dark:text-white">6.3 アイテムの利用可能性</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 仮想アイテムは数量が制限される場合があります</li>
                <li>• アイテムは予告なく廃止される場合があります</li>
                <li>• 当社はアイテムの変更または削除を保留します</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advertising and Third-Party Services */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            7. 広告と第三者サービス
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                7.1 広告について
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• アプリは開発をサポートするために広告を表示します</li>
                <li>• 広告コンテンツは第三者ネットワークによって提供されます</li>
                <li>• 当社は広告コンテンツや正確性について責任を負いません</li>
                <li>• <strong>App Store:</strong> Appleの広告ガイドラインに準拠</li>
                <li>• <strong>Google Play:</strong> Google Playの広告ポリシーに準拠</li>
                <li>• デバイス設定でパーソナライズ広告をオプトアウトできます</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                7.2 第三者サービス
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• アプリは第三者サービスと統合されています</li>
                    <li>• 第三者サービスには独自の利用規約とプライバシーポリシーがあります</li>
                    <li>• 当社は第三者サービスの問題について責任を負いません</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-gray-900 dark:text-white">利用サービス</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• <strong>App Store:</strong> Apple Inc.が配布と分析サービスを提供</li>
                    <li>• <strong>Google Play:</strong> Google LLCが配布と分析サービスを提供</li>
                    <li>• <strong>AdMob:</strong> Googleが広告サービスを提供</li>
                    <li>• <strong>Expo:</strong> Expoが開発とデプロイメントサービスを提供</li>
                  </ul>
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
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                8.1 アプリ更新
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 機能改善のためにアプリを更新する場合があります</li>
                <li>• 継続利用には更新が必須の場合があります</li>
                <li>• アプリを最新版に保つことはお客様の責任です</li>
                <li>• <strong>App Store:</strong> AppleのApp Storeを通じて配布</li>
                <li>• <strong>Google Play:</strong> Google Playストアを通じて配布</li>
                <li>• デバイス設定で自動更新が有効にできます</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                8.2 メンテナンス
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• サービスに一時的な影響を与えるメンテナンスを実施する場合があります</li>
                <li>• 可能な限りスケジュールされたメンテナンスの通知を提供します</li>
                <li>• 一時的なサービス中断について当社は責任を負いません</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimers and Limitations */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            9. 免責事項と制限
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">9.1 サービス提供</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                アプリは「現状のまま」提供され、保証なしで提供されます。当社は継続的なサービスを保証しません。
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">9.2 責任制限</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                当社は間接的、偶発的、または結果的損害について責任を負いません。
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-900 dark:text-white">9.3 補償</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                お客様は、アプリ使用から生じる請求について当社を補償することに同意します。
              </p>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            10. 終了
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                10.1 お客様による終了
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• いつでもアプリの使用を停止できます</li>
                <li>• アプリのアンインストールでアクセスが終了します</li>
                <li>• アンインストール時にローカルデータが削除される場合があります</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-6 dark:bg-red-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                10.2 当社による終了
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 規約違反の場合</li>
                <li>• 不正または違法な活動の場合</li>
                <li>• 長期間の非アクティブの場合</li>
                <li>• 技術的または事業上の理由</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
              10.3 終了の効果
            </h3>
            <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• アプリ使用権は即座に終了します</li>
                <li>• 当社はお客様のデータとコンテンツを削除する場合があります</li>
                <li>• 仮想アイテムと通貨は失効します</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy and Data Protection */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            11. プライバシーとデータ保護
          </h2>
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  11.1 プライバシーポリシー
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• お客様のプライバシーは当社のプライバシーポリシーによって管理されます</li>
                  <li>• プライバシーポリシーはこれらの規約に組み込まれています</li>
                  <li>• プライバシーポリシーに記載されている通りにデータを収集・処理します</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  11.2 データセキュリティ
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 当社は合理的なセキュリティ対策を実施します</li>
                  <li>• 絶対的なセキュリティを保証することはできません</li>
                  <li>• デバイスのセキュリティはお客様の責任です</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Law and Disputes */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            12. 準拠法と紛争解決
          </h2>
          <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
              12.1 準拠法
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              これらの規約は[管轄区域]の法律に準拠し、法の抵触原則を考慮しません。
            </p>
            
            <h4 className="mb-2 font-medium text-gray-900 dark:text-white">プラットフォーム固有の規約</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>App Store:</strong> これらの規約はAppleのApp Store利用規約に追加されます</li>
              <li>• <strong>Google Play:</strong> これらの規約はGoogle Play利用規約に追加されます</li>
              <li>• プラットフォーム規約は配布、更新、プラットフォーム固有機能に適用されます</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="mb-2 font-medium text-gray-900 dark:text-white">12.2 紛争解決</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 紛争は拘束力のある仲裁によって解決されます</li>
                <li>• 仲裁は[管轄区域]で実施されます</li>
                <li>• 小額訴訟裁判所の訴訟は仲裁から除外されます</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="mb-2 font-medium text-gray-900 dark:text-white">12.3 集団訴訟放棄</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• お客様は集団訴訟に参加する権利を放棄します</li>
                <li>• 請求は個別に提起する必要があります</li>
                <li>• この放棄はすべての管轄区域で執行可能ではない場合があります</li>
              </ul>
            </div>
          </div>
        </div>

        {/* International Users */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            13. 国際ユーザー
          </h2>
          <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  13.1 輸出管理
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• アプリは輸出管理法の対象となる場合があります</li>
                  <li>• 適用される輸出規制を遵守する必要があります</li>
                  <li>• 場所に基づいてアクセスを制限する場合があります</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  13.2 現地法
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 現地の法律と規制を遵守する必要があります</li>
                  <li>• 一部の機能はすべての地域で利用できない場合があります</li>
                  <li>• 現地要件に準拠するためにアプリを変更する場合があります</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Severability and Waiver */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            14. 分離可能性と放棄
          </h2>
          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  14.1 分離可能性
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 条項が執行不可能と判明した場合、残りは有効です</li>
                  <li>• 執行不可能な条項は可能な限り修正されます</li>
                  <li>• これらの規約の意図は保持されます</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  14.2 放棄
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 条項の執行失敗は権利の放棄を意味しません</li>
                  <li>• 放棄は書面で行う必要があります</li>
                  <li>• 部分的な放棄は他の条項に影響しません</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Entire Agreement */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            15. 完全な合意
          </h2>
          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  15.1 完全な合意
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• これらの規約は完全な合意を構成します</li>
                  <li>• これらはすべての事前の合意と理解に優先します</li>
                  <li>• 口頭の修正は拘束力がありません</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  15.2 修正
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 当社はこれらの規約を随時修正する場合があります</li>
                  <li>• 変更は掲載時に有効になります</li>
                  <li>• 継続使用は変更の承諾を構成します</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            16. お問い合わせ
          </h2>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  16.1 一般お問い合わせ
                </h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">これらの規約に関する質問：</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>メール:</strong> legal@deltaquest.co.jp</li>
                  <li>• <strong>住所:</strong> [会社住所]</li>
                  <li>• <strong>ウェブサイト:</strong> [ウェブサイト]</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  16.2 法的通知
                </h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">法的通知は以下に送信してください：</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>メール:</strong> legal@deltaquest.co.jp</li>
                  <li>• <strong>住所:</strong> [会社住所]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Age Restrictions */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            17. 年齢制限
          </h2>
          <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
              17.1 最低年齢
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              アプリを使用するには13歳以上である必要があります。18歳未満のユーザーは親の同意が必要です。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">App Store</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• ユーザーは13歳以上である必要があります</li>
                  <li>• 18歳未満は購入に親の同意が必要です</li>
                  <li>• Appleの年齢評価ガイドラインに準拠します</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Google Play</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• ユーザーは13歳以上である必要があります</li>
                  <li>• 18歳未満は購入に親の同意が必要です</li>
                  <li>• Google Playのコンテンツ評価ガイドラインに準拠します</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="mb-2 font-medium text-gray-900 dark:text-white">17.2 親の管理</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 親は児童の使用を監督する必要があります</li>
                <li>• 親の管理を有効にすることをお勧めします</li>
                <li>• 児童の使用に関する懸念がある場合はご連絡ください</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            18. アクセシビリティ
          </h2>
          <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  18.1 アクセシビリティ機能
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• アプリをアクセシブルにするよう努めています</li>
                  <li>• 適用されるアクセシビリティ法に準拠します</li>
                  <li>• アクセシビリティの配慮についてはご連絡ください</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                  18.2 フィードバック
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• アクセシビリティに関するフィードバックを歓迎します</li>
                  <li>• 合理的な配慮要求を検討します</li>
                  <li>• すべての提案を実装できない場合があります</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Force Majeure */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            19. 不可抗力
          </h2>
          <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
              19.1 定義
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 当社は制御できない事象について責任を負いません</li>
              <li>• これには自然災害、政府の行動、技術的障害が含まれます</li>
              <li>• 可能な限り早くサービスを再開します</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="mb-2 font-medium text-gray-900 dark:text-white">19.2 通知</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 重要なサービス中断についてユーザーに通知します</li>
                <li>• 解決努力に関する更新を提供します</li>
                <li>• 不可抗力事象中は一時的にサービスを停止する場合があります</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Survival */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            20. 存続
          </h2>
          <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
              20.1 存続条項
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              以下の条項は終了後も存続します：
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 知的財産権</li>
              <li>• 責任制限</li>
              <li>• 補償</li>
              <li>• 紛争解決</li>
              <li>• プライバシーとデータ保護</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            「At All Costs」モバイルアプリケーションを使用することにより、お客様はこれらの利用規約を読み、理解し、
            これらに拘束されることに同意したことを確認したものとみなされます。
          </p>
        </div>
      </div>
    </div>
  )
} 