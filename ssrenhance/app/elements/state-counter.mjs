// app/elements/state-counter.mjs
export default function StateCounter({ html, state }) {
  const { attrs, store } = state
  let value = (store.value ? store.value : attrs.value) || 0
  return html`
  <style>
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 6rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
<div>
    <form method="POST" class="flex">
        <button class="decrement" formaction="/counter?action=dec">-</button>
        <p>${value}</p>
        <input type="hidden" name="value" value="${value}"/>
        <button class="increment" formaction="/counter?action=inc">+</button>
    </form>
</div>
<script type="module">
    class StateCounter extends HTMLElement {
        constructor() {
            super()
            this.p = this.querySelector('p')
            this.input = this.querySelector('input')
            this.value = parseInt(this.getAttribute('value')) || 0

            this.decrementButton = this.querySelector('.decrement')
            this.incrementButton = this.querySelector('.increment')

            this.decrementButton.addEventListener('click', (evt) => this.decrement(evt))
            this.incrementButton.addEventListener('click', (evt) => this.increment(evt))
        }
        static get observedAttributes() {
            return ['value']
        }
        decrement(evt) {
            evt.preventDefault()
            this.value -=  1
            this.setAttribute('value', this.value)
        }
        increment(evt) {
            evt.preventDefault()
            this.value += 1
            this.setAttribute('value', this.value)
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue !== newValue) {
                if (name === 'value') {
                    this.p.textContent = newValue
                    this.value = parseInt(newValue)
                    this.input.value = parseInt(newValue)
                }
            }
        }
    }
    customElements.define('state-counter', StateCounter)
</script>
`
}

