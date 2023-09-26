# Personal Blog UI

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frabbyalone%2Fmyblog)

[See my personal site](https://blog.rabbyhasan.com.bd/)

This React template was originally created by timrix. In the original version, blogs were generated using MDX parsing. I have transformed this template to work seamlessly with the [.NET API](https://github.com/rabbyalone/PersonalBlogAPI).

## Key Features

- **Markdown Editor**: Add a markdown editor to facilitate post creation.
- **Authorization**: Implement authorization to secure data storage in the API.
- **Markdown JSON**: Retrieve Markdown content for posts from the API.
- **New Markdown Renderer**: Enhance the Markdown rendering functionality.
- **Loader**: Integrate a loader for improved user experience.
- **API Services**: Develop services for interaction with the API.

## Getting Started

### Step 1: Deploy the API

To begin, you need to deploy the [.NET API](https://github.com/rabbyalone/PersonalBlogAPI).

### Step 2: Setting Up the UI

#### Quick Start Guide

1. Modify default values in `data/siteMetadata.js` to customize your site.
2. Update the `apiUrl` in `utils/ApiService.ts` to connect to your deployed API.
3. Personalize the authors and default author information in `authors/default.md`.
4. Customize navigation links by modifying `headerNavLinks.js`.
5. Create and publish blog posts using 'localhost:3000/editor'.
6. Deploy your UI to make it accessible to your audience.

With these steps, you can personalize and deploy your Personal Blog UI, offering a user-friendly environment for creating and sharing your blog content.

## Markdown Editor

![Markdown Editor](https://raw.githubusercontent.com/rabbyalone/myblog/main/public/readme/post-editor.png)
