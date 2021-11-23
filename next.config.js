module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
      {
        source: '/home',
        destination: '/home',
      },
      {
        source: '/productos/:path*',
        destination: '/products/:path*',
      },
      {
        source: '/promociomes/:path*',
        destination: '/promotions/:path*',
      },
      {
        source: '/listas',
        destination: '/lists',
      },
      {
        source: '/perfil',
        destination: '/profile',
      },
      {
        source: '/servicio-al-cliente',
        destination: '/customer-service',
      },
      {
        source: '/checkout',
        destination: '/payment-process',
      },
      {
        source: '/auth/login',
        destination: '/auth/login',
      },
      {
        source: '/auth/register',
        destination: '/auth/register',
      },
    ];
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN_IMAGES],
  },
};
