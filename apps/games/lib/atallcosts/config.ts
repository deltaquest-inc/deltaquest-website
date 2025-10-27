export const ATC_CONFIG = {
  titleJP: 'プレイヤーと一緒にゲームを育てる',
  titleEN: 'Let\'s build this game together',
  
  // External links (fill from env if present; else placeholders)
  discordUrl: process.env.NEXT_PUBLIC_ATC_DISCORD_URL ?? 'https://discord.com',
  xHashtag: process.env.NEXT_PUBLIC_ATC_X_HASHTAG ?? 'AtAllCosts',
  xIntentBase: 'https://twitter.com/intent/tweet',
  googleFormUrl: process.env.NEXT_PUBLIC_ATC_GOOGLE_FORM_URL ?? 'https://forms.gle/your-form',
  
  // Toggles
  showGameIntro: true,
  
  // OG
  ogTitle: '札幌発・政治系RPGの開発に参加しよう｜At All Costs',
  ogDesc: '開発中のテスト版をプレイして、あなたの声でゲームを育ててください。バグ報告・アイデア・感想、なんでも歓迎。',
  ogImage: '/images/atallcosts/hero_og.png', // add placeholder
}
