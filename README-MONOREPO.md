# DeltaQuest Monorepo

Monorepo architecture with specialized subdomains for DeltaQuest.

## 🏗️ Structure

```
DeltaQuest/
├── apps/
│   ├── it/                    # it.deltaquest.co.jp (Main application)
│   ├── lasertag/              # lasertag.deltaquest.co.jp
│   └── games/                 # games.deltaquest.co.jp
├── packages/
│   ├── shared-ui/             # Shared components
│   ├── shared-i18n/           # Shared i18n system
│   ├── shared-config/         # Shared configurations
│   └── shared-utils/          # Shared utilities
└── scripts/
    └── dev.js                 # Development script
```

## 🚀 Quick Start

### Installation
```bash
yarn install
yarn install:all
```

### Development
```bash
# All apps
yarn dev

# Specific app
yarn dev:it
yarn dev:lasertag
yarn dev:games
```

### Build
```bash
yarn build
```

## 🌐 Subdomains

- **it.deltaquest.co.jp** - Main application (IT services, blog, etc.)
- **lasertag.deltaquest.co.jp** - LaserTag gaming experience
- **games.deltaquest.co.jp** - Gaming support & community

## 📦 Shared Packages

### @deltaquest/shared-ui
Reusable React components (Header, Footer, Cards, etc.)

### @deltaquest/shared-i18n
Internationalization system (fr, en, ja)

### @deltaquest/shared-config
Next.js, Tailwind, TypeScript configurations

### @deltaquest/shared-utils
Shared utilities (routing, pagination, etc.)

## 🔧 Configuration

Each app has its own configuration:
- `next.config.js` - Next.js specific configuration
- `middleware.ts` - i18n middleware
- `tsconfig.json` - TypeScript configuration with paths
- `package.json` - Specific dependencies

## 🚀 Deployment

### Vercel
Each app is deployed separately on Vercel with its own domain.

### DNS Configuration
- it.deltaquest.co.jp → IT App
- lasertag.deltaquest.co.jp → LaserTag App  
- games.deltaquest.co.jp → Games App

## 🛠️ Development

### Adding a new shared component
1. Create the component in `packages/shared-ui/components/`
2. Export it in `packages/shared-ui/index.ts`
3. Import in the app: `import { ComponentName } from '@deltaquest/shared-ui'`

### Adding a new translation
1. Modify files in `packages/shared-i18n/i18n/messages/`
2. Changes are automatically available in all apps

### Adding a new app
1. Create folder in `apps/`
2. Configure `package.json`, `next.config.js`, `middleware.ts`
3. Add routes in `vercel.json`
4. Update scripts in root `package.json`

## 📝 Available Scripts

- `yarn dev` - Start all apps
- `yarn dev:it` - IT app only
- `yarn dev:lasertag` - LaserTag app only  
- `yarn dev:games` - Games app only
- `yarn build` - Build all apps
- `yarn lint` - Lint all apps
- `yarn type-check` - TypeScript verification
- `yarn clean` - Clean builds

## 🎯 Benefits of this architecture

1. **Separation of concerns** - Each subdomain has its own app
2. **Shared code** - Reusable packages between apps
3. **Independent deployment** - Each app can be deployed separately
4. **Performance** - Each app only includes what it needs
5. **Maintenance** - Easier to maintain and evolve
6. **Teams** - Different teams can work on different apps


