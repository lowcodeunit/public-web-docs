const path = require('path');

module.exports = {
  title: 'Fathym Beta',
  tagline: 'Build, deploy, and scale modern web projects',
  url: 'https://www.fathym.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'lowcodeunit', // Usually your GitHub org/user name.
  projectName: 'public-web-docs', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-NEWEXH7W8C',
    },
    oribi: {
      trackingID: 'XzcwMzAwMzkyNA',
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(24,25,26)',
          dark: 'rgb(24,25,26)',
        }
      }
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Fathym',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
          to: 'https://www.fathym.com/',
          label: 'Home',
          position: 'left',
          target: '_top',
        },
        // {
        //   href: 'https://www.fathym.com/pricing',
        //   label: 'Pricing',
        //   position: 'right',
        //   target: '_top',
        // },
        {
          to: '/',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'https://www.fathym.com/blog/',
          label: 'Blog',
          position: 'right',
          target: '_top',
        },
        {
          to: 'https://www.fathym.com/pricing',
          label: 'Pricing',
          position: 'right',
          target: '_top',
        },
        {
          to: 'https://www.fathym.com/dashboard',
          label: 'Login',
          position: 'right',
          target: '_top',
        },
        {
          to: 'https://www.fathym.com/dashboard/create-project',
          label: 'Get Started',
          position: 'right',
          target: '_top',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Next Steps',
          items: [
            {
              label: 'Getting Started',
              to: 'https://www.fathym.com/dashboard/create-project',
            },
            // {
            //   label: 'Pricing',
            //   to: 'https://www.fathym.com/pricing',
            // },
            {
              label: 'Support',
              to: '/introduction/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              to: 'https://stackoverflow.com/questions/tagged/fathym',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/fathym',
            //},
            {
              label: 'Twitter',
              to: 'https://twitter.com/fathymit',
            },
            {
              label: 'Instagram',
              to: 'https://instagram.com/fathymit',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              to: 'https://www.fathym.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fathym, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // The lowcodeunit website repo
          // editUrl: 'https://github.com/lowcodeunit/public-web-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    //path.resolve(__dirname, 'plugins/oribi')
  ],
  
};
