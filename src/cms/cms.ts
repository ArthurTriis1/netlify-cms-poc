import CMS from 'netlify-cms-app'
import HomePagePreview from './previews/HomePagePreview'
import PostPagePreview from './previews/PostPagePreview'



CMS.registerPreviewTemplate('index', HomePagePreview)
CMS.registerPreviewTemplate('posts', PostPagePreview)