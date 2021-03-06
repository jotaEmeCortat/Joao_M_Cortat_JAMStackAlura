const redirects = require('./config/redirects');

module.exports = {
  trailingSlash: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: [
      'www.gsselectcar.com.br',
      'assets.pokemon.com',
      'github.com',
      'unavatar.now.sh',
      'source.unsplash.com',
      'avatars.githubusercontent.com',
      'news.cgtn.com',
      '1.bp.blogspot.com',
      'i.ytimg.com',
      'i.pinimg.com',
      'www.placecage.com',
      'cdn.pixabay.com',
      'images.all-free-download.com',
      'ichef.bbci.co.uk',
      'cdn.leroymerlin.com.br',
      'pluralsight.imgix.net',
      'images.unsplash.com',
    ],
  },
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
