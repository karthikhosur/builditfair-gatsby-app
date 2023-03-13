module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-minimal-v2',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'BuilditFair',
    name: 'BuilditFair',
    description: 'We advocate for building social intelligent systems that are not discriminatory or unbiased towards any individual.Let us build Responsible Intelligent Systems.',
    address: 'Chicago, IL',
    email: 'karthik@builditfair.com',
    phone: '+1 (312) 358-4237',

    //Site Social Media Links
    social: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/builditfair'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/builditfair'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },

      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [

          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
