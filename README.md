# Schoonaxelsson.com

Personal portfolio website and blog, built as a jamstack project using Headless wordpress for backend and Gatsby.JS as the framework for the frontend application. Will eventually be served with cpanel.yml and .htaccess for easy deployment.

## Installation instructions

1) Clone the repo locally.
2) (Optional) Adjust the `gatsby-source-wordpress.options.url` value in `gatsby-config.js` to the GraphQL endpoint of a Wordpress-installation that has the [WP GraphQL](https://www.wpgraphql.com/) and [WP Gatsby](https://wordpress.org/plugins/wp-gatsby/) plugins installed. This project is set to build ALL posts and pages it can draw from the GraphQL source.
3) Run `npm install` in the source-folder to download and install all dependencies. 
4) Run `gatsby build` to generate the `/public` directory of static files. This version will include a .htaccess with customized settings for deployments on Apache or Litespeed.

## Deployment instructions

Gatsby being a static site generator, it is imperative to rebuild and redeploy the project whenever changes occur in the CMS. While WP GraphQL supports webhooks as an option for truly interactive build options, I planned to deploy the site on a Litespeed webserver in fully static format, and with no pressing need to have instant deploy of changes, I found it more convenient to deploy using the following BASH-script set to trigger once every 3 hours:

```
#!/usr/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin

cd /home/USERNAME/GATSBY_DIRECTORY
npm run build
rsync -e "ssh -v -i ~/.ssh/IDENTITY_FILE" -rav /home/USERNAME/GATSBY_DIRECTORY/public/ REMOTE_USER@REMOTE_SERVER:/home/REMOTE_USER/DOCUMENT_ROOT
```