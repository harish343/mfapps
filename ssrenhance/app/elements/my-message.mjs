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
import enhance from '@enhance/ssr'
const html = enhance({
  elements: {
    'hello-world': HelloWorld
  }
})
console.log(html`<hello-world greeting="Well hi!"></hello-world>`)
export default function MyHeader({ html }) {
    return html`
    
        <h1>Header</h1>
       ${html} <hello-world greeting="Well hi!"></hello-world>
   
    `
  }
