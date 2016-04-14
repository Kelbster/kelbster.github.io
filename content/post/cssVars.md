+++
date = "2016-03-20T12:33:27-04:00"
title = "CSS Variables!"
+++

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
  --panelPadding: 16px;
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