export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '602a2ae7d15e4505585c51b7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7qe3qpyk',
                  apiId: 'c4f1b1c7-f724-41c3-96dc-fc0b3663b1d4'
                },
                {
                  buildHookId: '602a2ae7f64991d7183a14b1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-76jm3xw6',
                  apiId: '47f0e127-2c34-4f5b-a52c-92b27bdc71f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/halvardskogensjotveit/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-76jm3xw6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
