const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  trailingSlash: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_ASSET_PREFIX : undefined,
  basePath: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  async rewrites() {
    return [
      {
        source: '/authjs/',
        destination: '/authjs/',
        has: [
          {
            type: 'query',
            key: 'code',
          },
          {
            type: 'query',
            key: 'state',
          },
        ],
        permanent: false,
      },
    ];
  },
}
