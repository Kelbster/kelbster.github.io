+++
date = "2016-03-13T11:15:37-04:00"
title = "Vertical Flex"
+++

A client needed a navigation that would adapt to the screen height of multiple devices and orientations for their React Native application. At first, I considered using a grid and element heights of, say, 33%. This works perfectly fine if you know the number of elements and their contents are static.

<a href="http://codepen.io/Kelbster/pen/YqaYyW" target="_blank">Fixed Vertical "Flex" on <span class="codepen">C<i class="fa fa-codepen" aria-hidden="true"></i>DEPEN</span></a>

However, we need it to be flexible with a dynamic number of elements and maybe even their contents. In this case `display: flex` makes our job easier. Utilizing flex properties, the number of elements and the size of their contents can be dynamic while still fitting the height of the screen. Though it will fit more, or fewer, 4-8 elements would be ideal. The example linked below provides much better options than the grid/fixed height version.

<a href="http://codepen.io/Kelbster/pen/xVYXbX/" target="_blank">Vertical Flex on <span class="codepen">C<i class="fa fa-codepen" aria-hidden="true"></i>DEPEN</span></a>

This isn't my first rodeo with Flexbox; I use it quite a bit. It's a very useful tool and solves a great many layout problems. It's tempting to _flex all the things!_ Just remember to **think** about the problem first, **iterate**, and **experiment**.