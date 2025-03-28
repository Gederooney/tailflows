const { withContentlayer } = require('next-contentlayer')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app https://cdn.tailwindcss.com www.googletagmanager.com https://www.gstatic.com/recaptcha/releases/ https://www.google.com/recaptcha/api.js https://www.gstatic.com/recaptcha/releases/vm_YDiq1BiI3a8zfbIPZjtF2/recaptcha__fr.js https://va.vercel-scripts.com/v1/script.debug.js https://cdn.tailwindcss.com/ https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__fr.js https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src *  https://www.google.com/;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    images: {
      remotePatterns: [],
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },

    async redirects() {
      return [
        {
          source: '/couleurs',
          destination: '/generateur-nuances-couleurs-tailwind-css',
          permanent: true,
        },
        {
          source: '/couleurs/search',
          destination: '/generateur-nuances-couleurs-tailwind-css',
          permanent: true,
        },
        {
          source: '/couleurs/search',
          has: [
            {
              type: 'query',
              key: 'color',
              value: '(?<color>.*)',
            },
            {
              type: 'query',
              key: 'name',
              value: '(?<name>.*)',
            },
          ],
          destination: '/generateur-nuances-couleurs-tailwind-css',
          permanent: true,
        },
        {
          source: '/themes',
          destination: '/templates',
          permanent: true,
        },
        {
          source: '/themes/search',
          destination: '/templates',
          permanent: true,
        },
      ]
    },
  })
}
