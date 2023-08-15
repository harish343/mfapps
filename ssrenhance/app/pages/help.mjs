export default function MyHeader({ html, state }) {
  const { attrs, store } = state
  const { heading = 'Default' } = attrs
  const href = store.aboutPath

  return html`
    <header>
    <my-message></my-message>
    </header>
  `
}
