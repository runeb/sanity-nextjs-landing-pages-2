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
                  buildHookId: '5e8328f82ba083d2262d363e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio',
                  apiId: 'ace9c184-365c-4def-9836-618fe04dfb7f'
                },
                {
                  buildHookId: '5e8328f8573c05b14ee013f9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2',
                  apiId: 'f3b07d6e-0cc8-4de5-92a3-4dd0c4c31a7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2.netlify.com', category: 'apps'}
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
