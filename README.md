## Installation

```bash
yarn
```

Please note, that if you are using Windows, you may need to run:

```bash
$env:PWD = $(Get-Location).Path
```

## Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## AtAllCosts Landing Page

The AtAllCosts landing page is available at `/atallcosts` (or `/[locale]/atallcosts` for internationalized versions).

### Environment Variables

Add these environment variables to your `.env.local` file:

```bash
NEXT_PUBLIC_ATC_DISCORD_URL="https://discord.gg/your-server"
NEXT_PUBLIC_ATC_X_HASHTAG="AtAllCosts"
NEXT_PUBLIC_ATC_GOOGLE_FORM_URL="https://forms.gle/your-form"
```

### Features

- **Multi-language support**: Japanese, English, French
- **Responsive design**: Mobile-first approach
- **Accessibility**: ARIA labels, keyboard navigation, high contrast
- **Performance**: CSS-only snow animations, optimized for Meta Ads
- **SEO**: Open Graph tags, social sharing optimization

### Components

- `Hero`: Main landing section with call-to-action
- `DevMessage`: Personal message from development team
- `CTA`: Call-to-action buttons
- `FeedbackMethods`: Discord, X (Twitter), Google Form integration
- `GameIntro`: Optional game and character introduction
- `FinalNote`: Closing message from team
- `SnowOverlay`: Subtle winter style animation
