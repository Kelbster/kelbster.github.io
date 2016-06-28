#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the site with the theme
hugo -t Kelbster

# Add changes to git.
git add -A

# Commit changes.
msg="Updating site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin dev
#git subtree push --prefix=public https://github.com/Kelbster/kelbster.github.io.git master
git subtree pull --prefix=public https://github.com/Kelbster/kelbster.github.io.git master
