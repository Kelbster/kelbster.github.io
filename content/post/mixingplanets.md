+++
date = "2016-03-09T12:38:18-04:00"
title = "Mixing Planets"
+++

<a class="a-no-underline" href="http://codepen.io/Kelbster/pen/GoYrRJ/" target="_blank">
![Planets](/images/planets.png)
</a>

This was a fun experiment with Sass mixins and multiple parameters. Mixins are really great for building modular CSS and keeping your code DRY. 

Each planet is styled entirely by the one `planet` mixin, and passing parameters.

```
@mixin planet($planetSize, $planetColor, $ringSize, $ringColor, $moonSize) {
    // planet properties
}
```

```
.p3 {
  @include planet(140px, #6ACBA8, 20px, lighten(#6ACBA8, 15), 0);
}
```

<a href="http://codepen.io/Kelbster/pen/GoYrRJ/" target="_blank">View/Edit on <span class="codepen">C<i class="fa fa-codepen" aria-hidden="true"></i>DEPEN</span></a>