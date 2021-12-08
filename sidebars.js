module.exports = {
  docs: [
    'introduction/overview',
    {
      'Getting Started': [
        'getting-started/setup',
        'getting-started/create-first-project',
        'getting-started/deploying-project-code',
        'getting-started/global-edge-network',
      ],
      Guides: [
        {
          Applications: [
            'guides/applications/routes',
            'guides/applications/processors',
            'guides/applications/updating',
            'guides/applications/testing-use-cases',
            // {
            //   Modifiers: [
            //     {
            //       System: ['guides/hosting/plasmic-sites/overview'],
            //       Javascript: [
            //         {
            //           Google: [
            //             {
            //               'Tag Manager': [
            //                 'guides/hosting/plasmic-sites/overview',
            //               ],
            //               Analytics: ['guides/hosting/power-bi-reports/overview'],
            //               Optimize: ['guides/hosting/power-bi-reports/overview'],
            //             },
            //           ],
            //           Oribi: ['guides/hosting/power-bi-reports/overview'],
            //           GetGist: ['guides/hosting/power-bi-reports/overview'],
            //           Custom: ['guides/hosting/power-bi-reports/overview'],
            //         },
            //       ],
            //     },
            //   ],
            // },
          ],
          Hosting: [
            {
              'Site Builders': ['guides/hosting/plasmic-sites/overview'],
              Reporting: ['guides/hosting/power-bi-reports/overview'],
              //'End-to-End IoT': ['guides/hosting/end-to-end-iot/overview'],
              'e-Commerce': [
                'guides/hosting/e-commerce/overview',
                {
                  'Forestry, 11ty, JamCart': [
                    'guides/hosting/e-commerce/forestry-11ty-jamcart/overview',
                    'guides/hosting/e-commerce/forestry-11ty-jamcart/setup-11ty',
                    'guides/hosting/e-commerce/forestry-11ty-jamcart/connecting-forestry',
                    'guides/hosting/e-commerce/forestry-11ty-jamcart/configure-11ty',
                    'guides/hosting/e-commerce/forestry-11ty-jamcart/develop-site',
                    'guides/hosting/e-commerce/forestry-11ty-jamcart/hosting-with-lowcodeunit',
                  ],
                },
              ],
            },
          ],
          'Micro Frontends': [
            'guides/micro-frontends/overview',
            //{
            //  Explained: ['guides/micro-frontends/explained/overview'],
            //},
          ],
          //'Static vs Framework': [
          //  'guides/static-vs-framework/overview',
          //  {
          //    'Static Sites': [
          //      'guides/static-vs-framework/static-sites/overview',
          //    ],
          //    'JS Frameworks': [
          //      'guides/static-vs-framework/js-frameworks/overview',
          //    ],
          //  },
          //],
          // 'Atomic Design': ['guides/atomic-design/overview'],
          // 'SaaS Licensing': ['guides/saas-licensing/overview'],
        },
      ],
    },
    'introduction/support'
  ],
};
