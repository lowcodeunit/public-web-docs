module.exports = {
  docs: {
    Introduction: ['introduction/overview', 'introduction/support'],
    'Getting Started': [
      'getting-started/setup',
      'getting-started/create-first-project',
      'getting-started/deploying-project-code',
      'getting-started/frontend-applications',
      'getting-started/global-edge-network',
    ],
    Guides: [
      'guides/overview',
      {
        'Micro Frontends': [
          'guides/micro-frontends/overview',
          {
            Explained: ['guides/micro-frontends/explained/overview'],
          },
        ],
        'Static vs Framework': [
          'guides/static-vs-framework/overview',
          {
            'Static Sites': [
              'guides/static-vs-framework/static-sites/overview',
            ],
            'JS Frameworks': [
              'guides/static-vs-framework/js-frameworks/overview',
            ],
          },
        ],
        'End-to-End IoT': ['guides/end-to-end-iot/overview'],
        'Easily Host Power BI Reports': [
          'guides/easily-host-power-bi-reports/overview',
        ],
        'e-Commerce': [
          'guides/e-commerce/overview',
          {
            'Forestry, 11ty, JamCart': [
              'guides/e-commerce/forestry-11ty-jamcart/overview',
              'guides/e-commerce/forestry-11ty-jamcart/setup-11ty',
              'guides/e-commerce/forestry-11ty-jamcart/connecting-forestry',
              'guides/e-commerce/forestry-11ty-jamcart/configure-11ty',
              'guides/e-commerce/forestry-11ty-jamcart/develop-site',
              'guides/e-commerce/forestry-11ty-jamcart/hosting-with-lowcodeunit',
            ],
          },
        ],
        // 'Atomic Design': ['guides/atomic-design/overview'],
        // 'SaaS Licensing': ['guides/saas-licensing/overview'],
      },
    ],
  },
};
