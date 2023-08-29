import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ee938298b4b045bb8b396b2ed45883df',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'b247cfb73d0d4b3e81b16a96456168a3',

  // basic site info (required)
  name: 'VV605 Blog',
  domain: 'vv605blog.vercel.app',
  author: 'vv605',

  // open graph metadata (optional)
  description: 'so welcome to my little corner of the world...',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'Juno65juno1',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '990025bfea6d46999b10216cec5c70eb'
    },
    // {
    //   title: 'Contact',
    //   pageId: 'eaf5f7a9c19c4d28bd3687a96df1784f'
    // },
    {
      title: 'Tags',
      pageId: '157887297674499989b96bda5e7d53e2'
    }
  ]
})
