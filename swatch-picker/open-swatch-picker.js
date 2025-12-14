import { oklchToHex, oklchToRgb } from "./color-converters.js";


const styles = new CSSStyleSheet()
styles.replaceSync(/* css */`
    dialog {
        border-radius: 1rem;

        &::backdrop {
            background: rgba(0, 0, 0, 0.5);
            opacity: 0.75;
        }

        & div[scale] {
            display: flex;

            & h2 {
                display: none;
            }
            & h2[active] {
                grid-column: span 13;
                display: block;
            }
            & div[swatch] {
                margin: 2px;

                & button {
                    width: 2rem;
                    height: 2rem;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    outline: 2px solid transparent;

                    &:hover, &:focus {
                        outline: 2px solid;
                    }
                }
                & span {
                    display: none;
                }
            }
        }
    }
    [part="swatch-picker"] {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`);
const scales = ['neutral', 'stone', 'slate', 'red', 'orange', 'amber', 'gold', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'violet', 'purple', 'fuchsia', 'magenta', 'pink', 'rose'];
    
const makeScale = (name) => {
    let length = name === 'neutral' ? 13 : 12;
    return /* html */`
    <div scale>
        <h2>${name}</h2>
        ${Array.from({ length: length }, (_, i) => makeColorSwatch(name, i + 1)).join('')}
    </div>`
}

const makeColorSwatch = (name, i) => /* html */`
    <div swatch>
        <button aria-label="Copy ${name} 1" style="background:var(--${name}-${i})">
            &nbsp;
        </button>
        <span>${name} ${i}</span>
    </div>`

const template = document.createElement("template")
template.innerHTML = /* html */`
    <button part="swatch-picker" commandfor="select-color-dialog" command="show-modal">
        <span part="label"></span>
        <slot name="output"></slot>
    </button>
    <dialog closedby="any" id="select-color-dialog">
        <main>
            ${scales.map(scale=>makeScale(scale)).join('')}
        </main>
    </dialog>
`
export class OpenSwatchPicker extends HTMLElement {
    static define(tagName = "open-swatch-picker") {
        customElements.define(tagName, this)
    }
    shadowRoot = this.attachShadow({ mode: "open" });

    #value = '';
    dialog = null;
    hexValue = '';
    hexValue = '';
    rgbValue = '';

    get value() {
        return this.#value;
    }

    set value(newValue) {
        if (this.#value !== newValue) {
            this.#value = newValue;
            this.onValueChange(newValue); // Call the watcher function
        }
    }

    get outputType() {
        return this.getAttribute('output-type');
    }

    get showOutputLabel() {
        return this.getAttribute('show-output-label');
    }

    setAllValues(oklch, variableName) {
        this.hexValue = oklchToHex(oklch);
        this.rgbValue = oklchToRgb(oklch);

        if( this.outputType === 'hex' ) {
            this.value = this.hexValue;
        } else if( this.outputType === 'rgb' ) {
            this.value = this.rgbValue;
        } else {
            this.value = variableName;
        }
    }


    onValueChange(newValue) {
        if (!newValue) return;
        const labelText = this.shadowRoot.querySelector('[part=label]');
        labelText.style.display = 'none';
        this.updateLabel();
        this.dialog.close();
    }

    updateLabel() {
        const slot = this.shadowRoot.querySelector('slot[name=output]');
        const assignedNodes = slot.assignedNodes();
        
        if (assignedNodes.length > 0 && !assignedNodes[0].hasAttribute('result-container')) {
            const inputElement = assignedNodes[0];
            inputElement.textContent = this.value;
            
        } else {
            assignedNodes.forEach(node => node.remove());

            const container = document.createElement('div');
            container.setAttribute('result-container', '');

            const output = document.createElement('span');
            output.style.display = 'flex';
            output.style.alignItems = 'center';
            output.style.gap = '0.5rem';

            const showOutputLabel = this.showOutputLabel === 'true';

            output.innerHTML = `
                <span style="width: ${showOutputLabel ? '20px' : '60px'}; height: 20px; border-radius: 3px; display: inline-block; background: ${this.value}"></span>
            `;

            if(showOutputLabel) output.innerHTML += `<span>${this.value}</span>`

            container.appendChild(output);
            this.appendChild(container);
            container.setAttribute('slot', 'output');
        }
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets = [styles]
        this.shadowRoot.replaceChildren(template.content.cloneNode(true))
        
        this.dialog = this.shadowRoot.querySelector("dialog");

        const buttonElement = this.shadowRoot.querySelector('[part="swatch-picker"]');
        buttonElement.addEventListener('click', () => {
            this.dialog.showModal();
        });
        
        if( this.hasAttribute('label') ) {
            const labelText = this.getAttribute('label');
            const labelSpan = this.shadowRoot.querySelector('span[part="label"]');
            labelSpan.textContent = labelText;
        } else {
            const labelSpan = this.shadowRoot.querySelector('span[part="label"]');
            labelSpan.textContent = 'Choose Color';
        }

        this.shadowRoot.querySelectorAll('[swatch] button').forEach((button) => {
            button.addEventListener('click', () => {
                const swatchStyle = getComputedStyle(button);
                const swatchColor = swatchStyle.backgroundColor;
                this.setAllValues(swatchColor, button.style.background);
            });
        })

    }

    
}

OpenSwatchPicker.define()