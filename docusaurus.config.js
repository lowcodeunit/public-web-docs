const path = require('path');

module.exports = {
  title: 'Fathym LowCodeUnit Beta',
  tagline: 'Experience IoT in minutes | No credit card required',
  url: 'https://www.lowcodeunit.com',
  baseUrl: '/lcu-docs/',
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
      // defaultMode: 'dark',
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
      title: 'LowCodeUnit Beta',
      logo: {
        alt: 'LowCodeUnit',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
          href: 'https://www.lowcodeunit.com/',
          label: 'Home',
          position: 'left',
          target: '_top',
        },
        // {
        //   href: 'https://www.lowcodeunit.com/pricing',
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
          href: 'https://www.lowcodeunit.com/blog',
          label: 'Blog',
          position: 'right',
          target: '_top',
        },
        {
          href: 'https://www.lowcodeunit.com/dashboard',
          label: 'Sign In',
          position: 'right',
          target: '_top',
        },
        {
          href: 'https://www.lowcodeunit.com/dashboard',
          label: 'Sign Up',
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
              to: 'https://www.lowcodeunit.com/dashboard',
            },
            // {
            //   label: 'Pricing',
            //   to: 'https://www.lowcodeunit.com/pricing',
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
              href: 'https://stackoverflow.com/questions/tagged/lowcodeunit',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/lowcodeunit',
            //},
            {
              label: 'Twitter',
              href: 'https://twitter.com/lowcodeunit',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              href: 'https://www.fathym.com',
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
