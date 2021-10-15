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
        // 'Micro-Frontends': ['guides/micro-frontends/overview'],
        'End-to-End IoT': ['guides/end-to-end-iot/overview'],
        'Report Delviery': ['guides/secure-power-bi-report-delivery/overview'],
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
