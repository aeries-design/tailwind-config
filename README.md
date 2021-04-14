# `@aeries-adl/tailwind-config`

## Installation

### Default Process

Tailwind provides good installation instructions on how to get setup with their tools, which you can find [here][tailwind-installation].

With imports from Tailwind CSS in place, you can leverage the ADL configuration like this:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('@aeries-adl/tailwind-config')],
};
```

### Pre-Built File

In situations where you do not want to setup the build pipeline  uses a command-line tool to build the css from source, a pre-built version of the ADL Tailwind css file is included in this package. **NOTE** This method will use the Tailwind CSS file in it's entirety and will not do any tree-shaking to purge unused classes.

### From your dependencies

For tools that allow you to include a pre-existing CSS file into your application, this package includes a pre-built version of the CSS file that you can import. For example, if you're using `gridsome create $project-name`, you could add the following to your `src/index.js`

```javascript
import '@aeries-adl/tailwind-config/dist/adl-tailwind.css';
// or the minified version
import '@aeries-adl/tailwind-config/dist/adl-tailwind.min.css';
```
and the tailwind classes will be made available to you.

#### From a CDN

If you want to go even _simpler_, you can link against the pre-built CSS file on [`unpkg`][unpkg]. Include the following in the `head` of your document.

```html
<link 
  rel="stylesheet" 
  href="https://unpkg.com/@aeries-adl/tailwind-config/dist/adl-tailwind.min.css"
>
```
Note that with this approach you will _always_ get the latest version of Tailwind CSS -- even if there was a major version bump. See the `unpkg` documentation if you want to link against a specific version of the package.

### Fonts

Regardless of which implementation method you choose to use, you _also_ must link to the font definitions we use as part of the ADL.


#### Google Fonts CDN

include the following `link` in the `head` of your document, _before_ any other CSS files.

```html
<link 
  rel="preconnect" 
  href="https://fonts.gstatic.com"
>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700;1,800&display=swap" 
>
```

[tailwind]: https://tailwindcss.com
[tailwind-installation]: https://tailwindcss.com/docs/installation
[unpkg]: https://unpkg.com
