export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dde9610be513eba993206bf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kyrtnd2o',
                  apiId: '1195f2c8-6c37-40b4-b709-a16d78ad1bc9'
                },
                {
                  buildHookId: '5dde96100e713ed1a2f958dd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ihc7hcs6',
                  apiId: '4408b0c6-0c90-43ba-9238-ca0046a5a5dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ihc7hcs6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
