

#Kelbster

My blog-style dev portfolio and personal site, [kelbster.github.io](http://kelbster.github.io)

##Installation

*All development and site modifications are done on `dev` branch. `master` only serves pages for kelbster.github.io*

`git clone` and checkout `dev`

Install [Hugo](https://gohugo.io/) v0.15 or later 

and modules for gulpy styles compilation and minification

`brew install hugo`

`npm install`

##Build and dev

Build the Hugo pages with theme

`hugo -t Kelbster`

Run localhost:1313 and watch for changes

`hugo serve`

Start `gulp` to build and watch styles

##Deploy

Run `bash deploy.sh` 

This will rebuild hugo with Kelbster theme and commit all changes and push to dec, then deploy `public` to master