module.exports = {
  docs: {
    Introduction: ['introduction/overview', 'introduction/support'],
    'Getting Started': [
      'getting-started/setup',
      'getting-started/create-first-project',
      'getting-started/deploying-project-code',
      'getting-started/javascript-framework',
      'getting-started/global-edge-network',
    ],
    Guides: [
      'guides/overview',
      {
        // 'Micro-Frontends': ['guides/micro-frontends/overview'],
        // 'Atomic Design': ['guides/atomic-design/overview'],
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
        // 'SaaS Licensing': ['guides/saas-licensing/overview'],
      },
    ],
  },
};
