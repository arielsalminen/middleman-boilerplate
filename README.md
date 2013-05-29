# Middleman boilerplate #

Simple [Middleman](http://middlemanapp.com) starting point which includes some base SCSS styles and JavaScript. Great for static sites with some dynamic features & a blog.



## Structure ##
<pre>
.
|-- source
|   |-- index.html.erb
|   |-- 2013-01-20-blogpost.html.markdown
|   |-- javascripts
|   |   |-- enquire.js
|   |   |-- fastclick.js
|   |   |-- footer.js
|   |   |-- header.js
|   |   |-- init.js
|   |   |-- matchMedia-listener.js
|   |   |-- matchMedia.js
|   |   |-- responsive-nav.js
|   |   |-- scripts.js
|   |-- layout
|   |   |-- layout.erb
|   |-- stylesheets
|   |   |-- reset.css.scss
|   |   |-- styles.css.scss
|-- config.rb
|-- Gemfile
|-- Gemfile.lock
|-- README.md
|-- .gitignore
</pre>



## Installation ##
Run following command in the OS X command line:

1. Clone the repository `git clone git@github.com:viljamis/middleman-boilerplate.git`
2. Open the boilerplate folder and run `bundle`
3. Start the server by running `middleman`
4. Done! Now view the site at `http://localhost:4567`
5. To deploy the site to a server, run `middleman build`



## License ##

Licensed under the MIT license.

Copyright (c) 2011-2012 Viljami Salminen, http://viljamis.com/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Changelog ##

v0.4 (2013-05-29) - New JS structure and more Sass helpers

v0.31 (2013-03-02) - Cleaning up the code

v0.3 (2013-03-01) - Adds responsive navigation pattern and common Sass mixins (+ bug fixes).

v0.2 (2013-02-14) - Adds detectMQ.js and fix to get Windows Phone 8 to recognize CSS pixels rather than device pixels

v0.1 (2013-02-12) - Initial version
