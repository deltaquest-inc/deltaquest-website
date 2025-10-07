// Generated data from MDX files
export interface Blog {
  _id: string
  _raw: {
    sourceFilePath: string
    sourceFileName: string
    sourceFileDir: string
    contentType: 'mdx'
    flattenedPath: string
  }
  type: 'Blog'
  title: string
  date: string
  tags?: string[]
  lastmod?: string
  draft?: boolean
  summary?: string
  images?: string[]
  authors?: string[]
  layout?: string
  bibliography?: string
  canonicalUrl?: string
  locale: string
  slug: string
  path: string
  filePath: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  toc: any[]
  structuredData: any
  body: {
    raw: string
    code: string
  }
}

export interface Authors {
  _id: string
  _raw: {
    sourceFilePath: string
    sourceFileName: string
    sourceFileDir: string
    contentType: 'mdx'
    flattenedPath: string
  }
  type: 'Authors'
  name: string
  avatar?: string
  occupation?: string
  company?: string
  email?: string
  twitter?: string
  bluesky?: string
  linkedin?: string
  github?: string
  layout?: string
  slug: string
  path: string
  filePath: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  toc: any[]
  body: {
    raw: string
    code: string
  }
}

export const allBlogs: Blog[] = [
  {
    _id: 'blog/fr/media-1p-ads.mdx',
    _raw: {
      sourceFilePath: 'blog/fr/media-1p-ads.mdx',
      sourceFileName: 'media-1p-ads.mdx',
      sourceFileDir: 'blog/fr',
      contentType: 'mdx',
      flattenedPath: 'blog/fr/media-1p-ads',
    },
    type: 'Blog',
    title: 'Développement de 1st Party Ads pour les médias',
    date: '2025-01-20T00:00:00.000Z',
    tags: ['ad-tech', 'frontend', 'react', 'typescript', 'business-impact', 'ddd'],
    lastmod: '2023-08-05T00:00:00.000Z',
    draft: false,
    summary: 'Un projet d\'extension du système 1st Party Ads pour une plateforme média américaine. Approche technique et impact business expliqués.',
    images: ['/static/images/billboard.png'],
    authors: ['default'],
    layout: 'PostLayout',
    bibliography: '',
    canonicalUrl: '',
    locale: 'fr',
    slug: 'fr/media-1p-ads',
    path: 'blog/fr/media-1p-ads',
    filePath: 'blog/fr/media-1p-ads.mdx',
    readingTime: { text: '8 min read', minutes: 8, time: 480000, words: 1600 },
    toc: [],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Développement de 1st Party Ads pour les médias',
      datePublished: '2025-01-20T00:00:00.000Z',
      dateModified: '2023-08-05T00:00:00.000Z',
      description: 'Un projet d\'extension du système 1st Party Ads pour une plateforme média américaine. Approche technique et impact business expliqués.',
      image: '/static/images/billboard.png',
      url: 'https://it.deltaquest.co.jp/blog/fr/media-1p-ads',
    },
    body: {
      raw: `
        <h2>Introduction</h2>
        <p>Ce projet avait pour objectif de <strong>déployer le système 1st Party Ads existant du marché japonais au marché américain</strong>.</p>
        <p>Pendant le développement, nous avons dû gérer des défis tels que <strong>la prise en charge de plusieurs devises et fuseaux horaires, la gestion des feature flags</strong>, et plus encore. Cet article détaille ces défis, les solutions apportées et l'impact business.</p>
        
        <h2>SITUATION : Défis et Contexte</h2>
        <p>Notre société disposait déjà d'un système 1st Party Ads pour le marché japonais, mais la stratégie a nécessité son extension au marché américain.</p>
        <ul>
          <li><strong>Renforcer la publicité aux États-Unis sans dépendre des 3rd Party Ads</strong></li>
          <li><strong>Adapter le système existant à un nouveau marché tout en maintenant la compatibilité</strong></li>
          <li><strong>Défis techniques : devises multiples, fuseaux horaires, gestion des feature flags</strong></li>
        </ul>
        
        <h2>TASK : Objectifs et Rôle</h2>
        <p>Objectifs du projet :</p>
        <ul>
          <li><strong>Déploiement des 1st Party Ads aux États-Unis</strong></li>
          <li><strong>Optimisation de la gestion des feature flags sur différents marchés</strong></li>
          <li><strong>Développement de nouvelles fonctionnalités pour le Japon tout en minimisant l'impact sur le marché US</strong></li>
          <li><strong>KPIs : adoption initiale 120 %, revenus publicitaires 200 %</strong></li>
        </ul>
        <p>En tant que <strong>Frontend Lead</strong>, j'ai supervisé la conception technique et la mise en œuvre, coordonnant le développement des fonctionnalités avec jusqu'à 10 ingénieurs.</p>
        
        <h2>ACTION : Approche et Mise en œuvre</h2>
        <h3>1️⃣ Extension du système japonais pour le marché américain</h3>
        <p>Le système a été conçu pour <strong>adapter la plateforme japonaise existante au marché américain</strong>, en tenant compte des <strong>différentes devises, fuseaux horaires et exigences spécifiques aux publicités US</strong>.</p>
        <ul>
          <li><strong>Conception d'un système permettant de basculer facilement les fonctionnalités entre marchés JP/US</strong></li>
          <li><strong>Gestion du développement parallèle des nouvelles fonctionnalités sur les deux marchés</strong></li>
        </ul>
        
        <h3>2️⃣ Optimisation de la gestion des feature flags</h3>
        <p>La <strong>gestion des feature flags</strong> était cruciale pour un déploiement progressif aux États-Unis.</p>
        <ul>
          <li><strong>Gérer indépendamment le développement JP et le déploiement US</strong></li>
          <li><strong>Contrôler l'impact des releases pour garantir une mise en production sécurisée</strong></li>
        </ul>
        
        <h3>3️⃣ A/B Testing et Analyse de données</h3>
        <p>Nous avons utilisé <strong>des dashboards internes, Google Analytics et des interviews utilisateurs</strong> pour mesurer l'efficacité et améliorer en continu le système.</p>
        
        <h2>RESULT : Impact business</h2>
        <p>Résultats obtenus :</p>
        <p>✅ <strong>Adoption initiale 120 %</strong> (au-delà de l'objectif)<br>
        ✅ <strong>Revenus publicitaires 200 %</strong> (bien au-dessus des prévisions)<br>
        ✅ <strong>Déploiement réussi sur le marché US tout en poursuivant le développement pour le marché JP</strong></p>
        
        <h2>Conclusion</h2>
        <p>Le projet a permis :</p>
        <ul>
          <li><strong>Expansion du marché via l'extension du système</strong></li>
          <li><strong>Prise en charge flexible des devises et fuseaux horaires</strong></li>
          <li><strong>Réduction des risques de release grâce à la gestion des feature flags</strong></li>
          <li><strong>Optimisation continue via A/B testing</strong></li>
        </ul>
        <p>Il a <strong>contribué significativement à la croissance de l'entreprise</strong>.</p>
      `,
      code: ''
    }
  },
  {
    _id: 'blog/fr/logistics-redesign.mdx',
    _raw: {
      sourceFilePath: 'blog/fr/logistics-redesign.mdx',
      sourceFileName: 'logistics-redesign.mdx',
      sourceFileDir: 'blog/fr',
      contentType: 'mdx',
      flattenedPath: 'blog/fr/logistics-redesign',
    },
    type: 'Blog',
    title: 'Refonte du système logistique',
    date: '2024-01-10T00:00:00.000Z',
    tags: ['logistics-tech', 'scalability', 'frontend', 'business-impact'],
    lastmod: '2024-01-10T00:00:00.000Z',
    draft: false,
    summary: 'Refonte complète du système logistique pour améliorer la performance et la scalabilité.',
    images: ['/static/images/container-ship.png'],
    authors: ['default'],
    layout: 'PostLayout',
    bibliography: '',
    canonicalUrl: '',
    locale: 'fr',
    slug: 'fr/logistics-redesign',
    path: 'blog/fr/logistics-redesign',
    filePath: 'blog/fr/logistics-redesign.mdx',
    readingTime: { text: '7 min read', minutes: 7, time: 420000, words: 1400 },
    toc: [],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Refonte du système logistique',
      datePublished: '2024-01-10T00:00:00.000Z',
      dateModified: '2024-01-10T00:00:00.000Z',
      description: 'Refonte complète du système logistique pour améliorer la performance et la scalabilité.',
      image: '/static/images/container-ship.png',
      url: 'https://it.deltaquest.co.jp/blog/fr/logistics-redesign',
    },
    body: {
      raw: `
        <h2>Introduction</h2>
        <p>Ce projet de refonte du système logistique avait pour objectif d'améliorer significativement les performances et la scalabilité de notre infrastructure logistique.</p>
        
        <h2>Défis identifiés</h2>
        <ul>
          <li>Performance insuffisante du système existant</li>
          <li>Difficultés de scalabilité</li>
          <li>Coûts d'infrastructure élevés</li>
        </ul>
        
        <h2>Solutions implémentées</h2>
        <p>Nous avons mis en place une architecture microservices avec :</p>
        <ul>
          <li>Containerisation avec Docker</li>
          <li>Orchestration avec Kubernetes</li>
          <li>Base de données distribuée</li>
        </ul>
        
        <h2>Résultats</h2>
        <p>Amélioration de 300% des performances et réduction de 50% des coûts d'infrastructure.</p>
      `,
      code: ''
    }
  }
]

export const allAuthors: Authors[] = [
  {
    _id: 'authors/default.mdx',
    _raw: {
      sourceFilePath: 'authors/default.mdx',
      sourceFileName: 'default.mdx',
      sourceFileDir: 'authors',
      contentType: 'mdx',
      flattenedPath: 'authors/default',
    },
    type: 'Authors',
    name: 'DeltaQuest Team',
    avatar: '',
    occupation: 'IT Solutions',
    company: 'DeltaQuest',
    email: 'contact@deltaquest.co.jp',
    twitter: '',
    bluesky: '',
    linkedin: '',
    github: '',
    layout: '',
    slug: 'default',
    path: 'authors/default',
    filePath: 'authors/default.mdx',
    readingTime: { text: '1 min read', minutes: 1, time: 60000, words: 200 },
    toc: [],
    body: { raw: '', code: '' }
  }
]

export const allContent = [...allBlogs, ...allAuthors]