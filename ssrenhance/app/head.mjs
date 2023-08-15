import { getStyles }  from '@enhance/arc-plugin-styles'
import enhance from '@enhance/ssr'
const { linkTag } = getStyles

function HelloWorld({ html, state }) {
  const { attrs } = state
  const { greeting='Hello World' } = attrs
  return html`
    <style scope="global">
      h1 {
        color: red;
      }
    </style>

    <h1>${greeting}</h1>
  `
}

const html = enhance({
elements: {
  'hello-world': HelloWorld
}
})
console.log(html`<hello-world greeting="Well hi!"></hello-world>`)

export default function Head () {
  return `
  <hello-world greeting="Well hi!"></hello-world>
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="utf-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1">
    //   <title>Enhance Starter Project</title>
    //   ${linkTag()}
    //   <link rel="icon" href="/_public/favicon.svg">
    //   <meta name="description" content="The HTML first full stack web framework.">
    // </head>
    {}
`
}
// import HelloWorld from './path/to/elements/hello-world.mjs'
// import enhance from '@enhance/ssr'
// const html = enhance({
//   elements: {
//     'hello-world': 'hello'
//   }
// })
