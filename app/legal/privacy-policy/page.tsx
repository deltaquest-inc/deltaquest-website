import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'DeltaQuest, Inc. Privacy Policy',
  description:
    'DeltaQuest, Inc. Privacy Policy. Learn how we collect, use, and protect your personal information.',
})

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        {/* Language Toggle */}
        <div className="mb-6 flex justify-center space-x-4">
          <a
            href="#japanese"
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            日本語
          </a>
          <a
            href="#english"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            English
          </a>
        </div>

        {/* Japanese Version */}
        <div id="japanese" className="mt-12">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              DeltaQuest, Inc. プライバシーポリシー
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              <strong>施行日:</strong> 2025年8月27日
            </p>
          </div>

          {/* Key-Point Summary */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              重要ポイント要約（平易な言葉）
            </h2>
            <ul className="mb-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                私たち（<strong>DeltaQuest, Inc.</strong>
                ）は広告を表示し、ゲームを改善するためにゲームプレイを測定します。
              </li>
              <li>
                広告・分析パートナー（下記に記載）は広告ID、デバイス詳細、ゲームプレイイベントおよびクラッシュログを受信します。
              </li>
              <li>
                デバイス設定または
                <a href="#ja-6" className="text-blue-600 hover:underline dark:text-blue-400">
                  第6節
                </a>
                のパートナーリンクでパーソナライズ広告を制限できます。
              </li>
              <li>
                私たちは本名、メールアドレス、正確なGPSを要求せず、リモートプッシュ通知も送信しません。
              </li>
              <li>
                お困りの際は、DPOにお問い合わせください（
                <a href="#ja-17" className="text-blue-600 hover:underline dark:text-blue-400">
                  第17節参照
                </a>
                ）。
              </li>
            </ul>
            <p className="text-sm text-gray-600 italic dark:text-gray-400">
              この要約は概要のみです - 下記の完全なポリシーをお読みください。
            </p>
          </div>

          {/* 1. Scope */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-1">
              1. 適用範囲
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              このポリシーは、DeltaQuest, Inc.（「<strong>私たち</strong>」、「<strong>当社</strong>
              」、「<strong>弊社</strong>」）がAndroidまたはiOSで<strong>At All Costs</strong>（「
              <strong>ゲーム</strong>
              」）をプレイする際にデータを収集、使用、共有する方法を説明します。Google
              Playのデータ安全性セクションとApple App
              Storeのアプリプライバシー詳細に表示される開示事項と一致します。
            </p>
          </div>

          {/* 2. Data We Collect */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-2">
              2. 収集・受信するデータ
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              当社は分析、クラッシュ診断、広告の提供のために第三者サービスを利用します。これらのSDKがアプリ内で実行されると、
              お客様のデバイスは当社のサービス提供者に直接通信し、彼らは集計されたダッシュボードやレポートを当社と共有します。
              当社はお客様の個人情報を販売しません。詳細は
              <a href="#ja-3" className="text-blue-600 hover:underline dark:text-blue-400">
                第3節
              </a>
              をご覧ください。
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              設定・デバイス・地域に応じて処理される可能性のあるデータのカテゴリ：
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>デバイス・アプリ情報</strong> -
                デバイスモデル、OS/バージョン、画面サイズ、言語、アプリバージョン。
              </li>
              <li>
                <strong>広告識別子</strong> - Android は GAID/AdID、iOS は IDFA（iOS
                で追跡を許可した場合のみ）。
              </li>
              <li>
                <strong>ネットワーク由来の地域</strong> -
                国/地域を概ね推定するためにのみ使用する粗いIP。
              </li>
              <li>
                <strong>利用状況・イベント</strong> - 分析とプロダクト改善のためのアプリ内操作。
              </li>
              <li>
                <strong>診断</strong> - クラッシュトレース、パフォーマンスメトリクス。
              </li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              当社はこれらの情報を、アプリの運営・改善、機能の理解、キャンペーンの効果測定、問題の修正に利用します。
            </p>
          </div>

          {/* 3. Third Party Services */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-3">
              3. 第三者SDKとサービスプロバイダー
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              これらのプロバイダーは、そのSDKが有効なときにお客様のデバイスから直接データを受信します。彼らは当社へのサービス提供のためにそれを処理し、限定された目的において処理者および/または独立した管理者として行動する場合があります。詳細は各プライバシー通知をご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                      パートナー
                    </th>
                    <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                      目的
                    </th>
                    <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                      共有される典型的なデータ
                    </th>
                    <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                      オプトアウト / 情報
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      Google AdMob / Ad Manager
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      広告配信と測定
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      広告ID、地域（IP由来）、デバイス/アプリ情報、基本的な利用状況
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      <a
                        href="https://policies.google.com/technologies/ads"
                        target="_blank"
                        rel="noopener"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        「Google がデータを使用する仕組み」および広告設定
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      Firebase Analytics（Google）
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      プロダクト分析（アプリ向け GA4）
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      アプリイベント、デバイス/アプリ情報（Google シグナルが有効な場合は該当データ）
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      <a
                        href="https://support.google.com/analytics/answer/6004245"
                        target="_blank"
                        rel="noopener"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        プライバシーとデータ保持のコントロール
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      Firebase Crashlytics（Google）
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      クラッシュ診断
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      クラッシュトレース、デバイス/アプリのコンテキスト、セッション/インストール ID
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      <a
                        href="https://firebase.google.com/support/privacy#crashlytics"
                        target="_blank"
                        rel="noopener"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        プライバシーとクラッシュデータの90日保持
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">Expo</td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      アプリ更新と診断
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      デバイス/アプリ情報、利用状況とクラッシュ診断
                    </td>
                    <td className="border border-gray-300 p-2 dark:border-gray-600">
                      <a
                        href="https://expo.dev/privacy"
                        target="_blank"
                        rel="noopener"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        Expo プライバシーポリシー
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              社内レポート: Google Analytics/GA4 および Looker Studio
              のダッシュボードを用いて分析を閲覧する場合があります。これによりお客様のデバイスに新たなSDKが追加されることはありません。
            </p>
          </div>

          {/* 4. How and Why We Use Information */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-4">
              4. 情報の使用方法と理由
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>ゲームの運営と改善</strong>（正当な利益または契約の履行）。
              </li>
              <li>
                <strong>広告の配信とパフォーマンス測定</strong>（必要な場合の同意）。
              </li>
            </ul>
          </div>

          {/* 5. Future Features */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-5">
              5. 将来の機能
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              将来のアップデートで以下の機能を追加する可能性があります：
            </p>
            <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>アプリ内プライバシーコントロール</strong> -
                広告パーソナライゼーションを制御するゲーム内のトグル。
              </li>
              <li>
                <strong>不正防止システム</strong> - フェアプレイを確保し、不正を防ぐための追加措置。
              </li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              これらの機能が実装された際は、このポリシーを更新し、アプリ内アナウンスまたはウェブサイトでユーザーに通知します。
            </p>
          </div>

          {/* 6. Ad Personalisation Choices */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-6">
              6. 広告パーソナライゼーションの選択
            </h2>
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>デバイスコントロール</strong>
                <br />
                Android 14: 設定 → プライバシー → 広告 → 「広告IDを削除」
                <br />
                Android 13-: 設定 → プライバシー → 広告 →
                「広告パーソナライゼーションをオプトアウト」
                <br />
                iOS: 設定 → プライバシーとセキュリティ → 追跡 →
                「アプリに追跡を要求することを許可」を無効化
              </li>
              <li>
                <strong>グローバルプライバシーコントロールまたは広告追跡制限</strong> -
                ゲームはこれらの信号を尊重し、パートナーに転送します。
              </li>
              <li>
                <strong>パートナーポータル</strong> -{' '}
                <a href="#ja-3" className="text-blue-600 hover:underline dark:text-blue-400">
                  第3節
                </a>
                のオプトアウトリンクを参照してください。
              </li>
            </ol>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              アプリ内トグルはロードマップに含まれています。それまでは上記の方法をご利用ください。
            </p>
          </div>

          {/* 7. Legal Bases */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-7">
              7. 法的根拠（EEAとUK）
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>同意</strong> - パーソナライズ広告。
              </li>
              <li>
                <strong>正当な利益</strong> - ゲーム運営と改善。
              </li>
              <li>
                <strong>契約の履行</strong> - お客様が要求するゲームプレイとアプリ内購入の提供。
              </li>
            </ul>
          </div>

          {/* 8. Data Retention */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-8">
              8. データ保持
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              生の分析ログは、パートナーによって24ヶ月を超えて保持されません（より短いデフォルトを提供する場合は短くなります）。
              <br />
              集約された、識別不可能な統計は、トレンド分析のために無期限に保存される場合があります。
            </p>
          </div>

          {/* 9. Region-Specific Disclosures */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-9">
              9. 地域固有の開示
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>ブラジル（LGPD）:</strong>{' '}
              お客様にはデータへのアクセス、修正、削除の権利があります。行使するにはお問い合わせください。
              <br />
              <strong>カナダ（PIPEDA）:</strong> 当社の慣行は10の公正情報原則に準拠しています。
              <br />
              <strong>オーストラリア（Privacy Act 1988）:</strong>{' '}
              適切な保護が適用されない限り、オーストラリア国外に個人データを転送しません。
              <br />
              <strong>その他の地域:</strong> お客様の居住地に適用される権利を尊重します。
            </p>
          </div>

          {/* 10. International Data Transfers */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-10">
              10. 国際データ転送
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              当社は日本に本社を置いています。パートナーがEEAまたはUK国外にデータを転送する場合、彼らは標準契約条項または同等の保護措置に依存します。
            </p>
          </div>

          {/* 11. California Privacy Rights */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-11">
              11. カリフォルニア州プライバシー権（CCPAとCPRA）
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                お客様には個人情報を<strong>知る</strong>、<strong>削除</strong>、
                <strong>修正</strong>する権利があります。
              </li>
              <li>
                当社はクロスコンテキスト行動広告のために識別子を「共有」します。デバイスコントロールまたはパートナーリンクを使用してオプトアウトしてください。
              </li>
              <li>お客様のデータに対する金銭的インセンティブは提供されません。</li>
            </ul>
          </div>

          {/* 12. Children's Privacy */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-12">
              12. 児童のプライバシー
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              ゲームは12歳以上のユーザー向けです。12歳未満の児童から個人データを故意に収集することはありません。
              <br />
              そのような収集に気づいた場合、できるだけ早く情報を削除するか、親の同意を求めます。
            </p>
          </div>

          {/* 13. Security Measures */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-13">
              13. セキュリティ対策
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              当社は、転送中のデータにはTLS
              1.2以上、保存時のデータにはパートナーレベルの暗号化を含む業界標準の慣行に従って情報を保護します。
              <br />
              転送や保存の方法は100%安全ではありませんが、定期的な監査とアクセス制御を通じてリスクを軽減することを目指しています。
            </p>
          </div>

          {/* 14. Your Rights */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-14">
              14. お客様の権利と行使方法
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              お客様の所在地に応じて、データへのアクセス、修正、削除、制限、または移植性を要求できます。
              <br />
              <a
                href="mailto:support@deltaquest.co.jp"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                support@deltaquest.co.jp
              </a>
              にリクエストを送信してください。当社（またはパートナー）は30日以内に回答します。
            </p>
          </div>

          {/* 15. Changes to Policy */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-15">
              15. このポリシーの変更
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              当社はこのポリシーを随時更新する場合があります。重要な変更は、発効の少なくとも7日前にアプリ内またはウェブサイトで発表されます。
            </p>
          </div>

          {/* 16. Contact Us */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-16">
              16. お問い合わせ
            </h2>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300">
                デルタクエスト株式会社
                <br />
                日本〒064-0805 北海道札幌市
                <br />
                <a
                  href="mailto:support@deltaquest.co.jp"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  support@deltaquest.co.jp
                </a>
                <br />
                データ保護責任者（ブルメ・ケヴィン）:{' '}
                <a
                  href="mailto:dpo@deltaquest.co.jp"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  kevin.bulme@deltaquest.co.jp
                </a>
              </p>
            </div>
          </div>

          {/* 17. Glossary */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="ja-17">
              17. 用語集
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>広告ID</strong> -
                システム設定からリセットされるデバイスレベルのID（GAIDまたはIDFA）。
              </li>
              <li>
                <strong>個人情報</strong> - 個人を識別または合理的に識別できるデータ。
              </li>
              <li>
                <strong>標準契約条項（SCCs）</strong> - 国境を越えた転送のためのEUモデル条項。
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="text-center">
            <a href="#top" className="text-blue-600 hover:underline dark:text-blue-400">
              ↑ トップに戻る
            </a>
          </div>

          {/* Language Toggle */}
          <div className="mt-16 mb-6 flex justify-center space-x-4">
            <a
              href="#japanese"
              className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              日本語
            </a>
            <a
              href="#english"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              English
            </a>
          </div>

          {/* English Version */}
          <div id="english">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                DeltaQuest, Inc. Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                <strong>Effective Date:</strong> 27 August 2025
              </p>
            </div>

            {/* Key-Point Summary */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Key-Point Summary (Plain Language)
              </h2>
              <ul className="mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  We (<strong>DeltaQuest, Inc.</strong>) show ads and measure gameplay to improve
                  the Game.
                </li>
                <li>
                  Advertising and analytics partners (listed below) receive an advertising ID,
                  device details, gameplay events and crash logs.
                </li>
                <li>
                  You can limit personalised ads via your device settings or partner links in{' '}
                  <a href="#en-6" className="text-blue-600 hover:underline dark:text-blue-400">
                    Section 6
                  </a>
                  .
                </li>
                <li>
                  We never ask for your real name, email or precise GPS and we do not send remote
                  push notifications.
                </li>
                <li>
                  Need help? Contact our DPO{' '}
                  <a href="#en-17" className="text-blue-600 hover:underline dark:text-blue-400">
                    (see Section 17)
                  </a>
                  .
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic dark:text-gray-400">
                This summary is just a quick overview - please read the full policy below.
              </p>
            </div>

            {/* 1. Scope */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-1">
                1. Scope
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This policy explains how DeltaQuest, Inc. ("<strong>we</strong>", "
                <strong>us</strong>
                ", "<strong>our</strong>") collects, uses and shares data when you play{' '}
                <strong>At All Costs</strong> (the "<strong>Game</strong>") on Android or iOS. It
                aligns with the disclosures shown in Google Play's Data Safety section and Apple App
                Store's App Privacy details.
              </p>
            </div>

            {/* 2. Data We Collect */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-2">
                2. Data We Collect and Receive
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We use third-party services to provide analytics, crash diagnostics and ads. When
                those SDKs run in the app, your device communicates directly with our service
                providers, who share aggregated dashboards and reports with us. We do not sell your
                personal information. See{' '}
                <a href="#en-3" className="text-blue-600 hover:underline dark:text-blue-400">
                  Section 3
                </a>{' '}
                for details.
              </p>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Categories of data processed (depending on your settings, device and region):
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Device & app info</strong>: device model, OS/version, screen size,
                  language, app version.
                </li>
                <li>
                  <strong>Advertising identifier</strong>: GAID/AdID on Android, IDFA on iOS
                  (available only if you allow tracking on iOS).
                </li>
                <li>
                  <strong>Network-derived region</strong>: coarse IP used only to approximate
                  country/region.
                </li>
                <li>
                  <strong>Usage/events</strong>: app interactions for analytics and product
                  improvement.
                </li>
                <li>
                  <strong>Diagnostics</strong>: crash traces, performance metrics.
                </li>
              </ul>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                We use this information to operate and improve the app, understand features, measure
                campaigns, and fix issues.
              </p>
            </div>

            {/* 3. Third Party Services */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-3">
                3. Third-Party SDKs and Service Providers
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                These providers receive data directly from your device when their SDKs are active.
                They process it to provide services to us, and may act as our processors and/or
                independent controllers for certain limited purposes. See their notices for details.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                        Partner
                      </th>
                      <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                        Purpose
                      </th>
                      <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                        Typical data shared
                      </th>
                      <th className="border border-gray-300 p-2 text-left dark:border-gray-600">
                        Opt-out / info
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Google AdMob / Ad Manager
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Ad delivery & measurement
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Ad ID, region (via IP), device/app info, basic usage
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        <a
                          href="https://support.google.com/ads/answer/2662922"
                          target="_blank"
                          rel="noopener"
                          className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                          "How Google uses data" + Ads controls
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Firebase Analytics (Google)
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Product analytics (GA4 for apps)
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        App events, device/app info; Google-signals data if enabled
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        <a
                          href="https://support.google.com/analytics/answer/6004245"
                          target="_blank"
                          rel="noopener"
                          className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Privacy & data retention controls
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Firebase Crashlytics (Google)
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Crash diagnostics
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Crash traces, device/app context; session/installation IDs
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        <a
                          href="https://firebase.google.com/support/privacy#crashlytics"
                          target="_blank"
                          rel="noopener"
                          className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Privacy & 90-day retention for crash data
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">Expo</td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        App updates & diagnostics
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        Device/app info; usage & crash diagnostics
                      </td>
                      <td className="border border-gray-300 p-2 dark:border-gray-600">
                        <a
                          href="https://expo.dev/privacy"
                          target="_blank"
                          rel="noopener"
                          className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Expo Privacy Policy
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Internal reporting: We may view analytics using Google Analytics/GA4 and Looker
                Studio dashboards. This does not add any SDK to your device.
              </p>
            </div>

            {/* 4. How and Why We Use Information */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-4">
                4. How and Why We Use Information
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Operate and improve the Game</strong> (legitimate interest or performance
                  of contract).
                </li>
                <li>
                  <strong>Serve ads and measure their performance</strong> (consent where required).
                </li>
              </ul>
            </div>

            {/* 5. Future Features */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-5">
                5. Future Features
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may add the following features in future updates:
              </p>
              <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>In-app privacy controls</strong> - A toggle within the game to control ad
                  personalisation.
                </li>
                <li>
                  <strong>Fraud prevention systems</strong> - Additional measures to ensure fair
                  play and prevent cheating.
                </li>
              </ul>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                When these features are implemented, we will update this policy and notify users
                through in-app announcements or on our website.
              </p>
            </div>

            {/* 6. Ad Personalisation Choices */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-6">
                6. Ad Personalisation Choices
              </h2>
              <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Device controls</strong>
                  <br />
                  Android 14: Settings → Privacy → Ads → "Delete advertising ID"
                  <br />
                  Android 13-: Settings → Privacy → Ads → "Opt out of Ads Personalisation"
                  <br />
                  iOS: Settings → Privacy and Security → Tracking → disable "Allow Apps to Request
                  to Track".
                </li>
                <li>
                  <strong>Global Privacy Control or Limit Ad Tracking</strong> - the Game honours
                  these signals and forwards them to partners.
                </li>
                <li>
                  <strong>Partner portals</strong> - see the opt-out links in{' '}
                  <a href="#en-3" className="text-blue-600 hover:underline dark:text-blue-400">
                    Section 3
                  </a>
                  .
                </li>
              </ol>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                An in-app toggle is on our roadmap; in the meantime please use the methods above.
              </p>
            </div>

            {/* 7. Legal Bases */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-7">
                7. Legal Bases (EEA and UK)
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Consent</strong> - personalised advertising.
                </li>
                <li>
                  <strong>Legitimate interests</strong> - game operation and improvement.
                </li>
                <li>
                  <strong>Performance of contract</strong> - delivering gameplay and in-app
                  purchases you request.
                </li>
              </ul>
            </div>

            {/* 8. Data Retention */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-8">
                8. Data Retention
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Raw analytics logs are kept by our partners for no longer than 24 months (shorter if
                they offer a shorter default).
                <br />
                Aggregated, de-identified statistics may be stored indefinitely for trend analysis.
              </p>
            </div>

            {/* 9. Region-Specific Disclosures */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-9">
                9. Region-Specific Disclosures
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Brazil (LGPD):</strong> You have rights to access, correct or delete your
                data. Contact us to exercise them.
                <br />
                <strong>Canada (PIPEDA):</strong> Our practices comply with the ten Fair Information
                Principles.
                <br />
                <strong>Australia (Privacy Act 1988):</strong> We do not transfer personal data
                outside Australia unless adequate protections apply.
                <br />
                <strong>Other regions:</strong> We honour applicable rights where you reside.
              </p>
            </div>

            {/* 10. International Data Transfers */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-10">
                10. International Data Transfers
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We are headquartered in Japan. Where partners transfer data outside the EEA or UK,
                they rely on Standard Contractual Clauses or equivalent safeguards.
              </p>
            </div>

            {/* 11. California Privacy Rights */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-11">
                11. California Privacy Rights (CCPA and CPRA)
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  You have rights to <strong>know</strong>, <strong>delete</strong> and{' '}
                  <strong>correct</strong> personal information.
                </li>
                <li>
                  We "share" identifiers for cross-context behavioural advertising. Use device
                  controls or partner links to opt out.
                </li>
                <li>No financial incentives are offered for your data.</li>
              </ul>
            </div>

            {/* 12. Children's Privacy */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-12">
                12. Children's Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Game is directed to users aged 12 plus. We do not knowingly collect personal
                data from children under 12.
                <br />
                If we become aware of such collection, we will delete the information as quickly as
                practicable or seek parental consent.
              </p>
            </div>

            {/* 13. Security Measures */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-13">
                13. Security Measures
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We follow industry-standard practices, including TLS 1.2 plus for data in transit
                and partner-level encryption at rest, to protect information.
                <br />
                No method of transmission or storage is 100 percent secure, but we aim to mitigate
                risks through regular audits and access controls.
              </p>
            </div>

            {/* 14. Your Rights */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-14">
                14. Your Rights and How to Exercise Them
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Depending on your location you may request access, correction, deletion, restriction
                or portability of your data.
                <br />
                Send a request to{' '}
                <a
                  href="mailto:support@deltaquest.co.jp"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  support@deltaquest.co.jp
                </a>{' '}
                and we (or our partners) will respond within 30 days.
              </p>
            </div>

            {/* 15. Changes to Policy */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-15">
                15. Changes to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this policy from time to time. Material changes will be announced
                in-app or on our website at least 7 days before they take effect.
              </p>
            </div>

            {/* 16. Contact Us */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-16">
                16. Contact Us
              </h2>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300">
                  DeltaQuest, Inc.
                  <br />
                  064-0805 Hokkaido Sapporo City, Japan
                  <br />
                  <a
                    href="mailto:support@deltaquest.co.jp"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    support@deltaquest.co.jp
                  </a>
                  <br />
                  Data-Protection Officer (Kevin Bulme):{' '}
                  <a
                    href="mailto:dpo@deltaquest.co.jp"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    kevin.bulme@deltaquest.co.jp
                  </a>
                </p>
              </div>
            </div>

            {/* 17. Glossary */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white" id="en-17">
                17. Glossary
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Advertising ID</strong> - a device-level ID (GAID or IDFA) that resets
                  from system settings.
                </li>
                <li>
                  <strong>Personal information</strong> - data that identifies or can reasonably
                  identify an individual.
                </li>
                <li>
                  <strong>Standard Contractual Clauses (SCCs)</strong> - EU model clauses for
                  cross-border transfers.
                </li>
              </ul>
            </div>

            {/* Back to top */}
            <div className="text-center">
              <a href="#top" className="text-blue-600 hover:underline dark:text-blue-400">
                ↑ Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
