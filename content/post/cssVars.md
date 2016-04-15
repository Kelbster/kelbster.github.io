+++
date = "2016-03-20T12:33:27-04:00"
title = "CSS Variables!"
+++

Or "CSS custom properties", are awesome. But CSS preprocessors already have variables! That's true. CSS preprocessors have many features that will keep me using them for a long time, but preprocessor variables are static and require recompiling after any changes.
CSS custom properities, however, allow you to update CSS variables at runtime. One of many potential use cases is the ability to dynamically theme an application or site. 

I decided to experiment with them for myself. There is a snippet below featuring the root variables and a simple function I used to set their properties at the click of a button.

<a href="http://codepen.io/Kelbster/pen/pgqYGr/" target="_blank">View/Edit on <span class="codepen">C<i class="fa fa-codepen" aria-hidden="true"></i>DEPEN</span></a>

```
:root {
  --primary: #cccccc;
  --accent: #4f4f4f;
  --tertiary: gray;
  --background-color: #f1f1f1;
  --font-family: 'Roboto Condensed', arial, sans-serif;
  --font-size: 16px;
  --fontColorPrimary: #1f1f1f;
  --fontColorAccent: #f3f3f3;
  --panelPadding: 1em;
}
```
```
function octocat() {
  var octocat = document.documentElement.style;
  octocat.setProperty('--primary', '#f5f5f5');
  octocat.setProperty('--accent', '#7d60a7');
  octocat.setProperty('--tertiary', '#64a55d');
  octocat.setProperty('--background-color', '#ffffff');
  octocat.setProperty('--fontColorPrimary', '#0e8ab7');
  octocat.setProperty('--fontColorAccent', '#ffffff');
} 
```