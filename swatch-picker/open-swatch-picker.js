

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

                    &:hover {
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
    let length = 12;
    if( name === 'neutral' ) length = 13;
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
    <div part="swatch-picker">
        <slot name="label"></slot>
        <slot name="button"></slot>
        <slot name="input"></slot>
    </div>
    <dialog>
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

    oklchToOklab(oklch) {
        const [ lightness, chroma, hue, alpha = 1 ] = oklch;
        const hueRad = (hue * Math.PI) / 180; // Convert degrees to radians
        const a = chroma * Math.cos(hueRad);
        const b = chroma * Math.sin(hueRad);
        return { lightness, a, b, alpha };
    }

    oklabToXyzD65(oklab) {
        const { lightness, a, b, alpha } = oklab;
    
        // Calculate LMS values
        let l = lightness * 1.0 + a * 0.3963377773761749 + b * 0.2158037573099136;
        let m = lightness * 1.0 + a * -0.1055613458156586 + b * -0.0638541728258133;
        let s = lightness * 1.0 + a * -0.0894841775298119 + b * -1.2914855480194092;
    
        // Apply the power of 3 to LMS values
        l = Math.pow(l, 3);
        m = Math.pow(m, 3);
        s = Math.pow(s, 3);
    
        // Convert LMS to XYZ
        const x = l * 1.2268798758459243 + m * -0.5578149944602171 + s * 0.2813910456659647;
        const y = l * -0.0405757452148008 + m * 1.112286803280317 + s * -0.0717110580655164;
        const z = l * -0.0763729366746601 + m * -0.4214933324022432 + s * 1.5869240198367816;
    
        // Return the XYZD65 object
        return {
            x: x * 100.0,
            y: y * 100.0,
            z: z * 100.0,
            alpha: alpha
        };
    }

    xyzD65ToLinearRgb(xyzD65) {
        const { x, y, z, alpha } = xyzD65;
    
        // Normalize x, y, z by dividing by 100
        const xNorm = x / 100.0;
        const yNorm = y / 100.0;
        const zNorm = z / 100.0;
    
        // Calculate red, green, and blue components
        const red = xNorm * (12831.0 / 3959.0) + yNorm * (-329.0 / 214.0) + zNorm * (-1974.0 / 3959.0);
        const green = xNorm * (-851781.0 / 878810.0) + yNorm * (1648619.0 / 878810.0) + zNorm * (36519.0 / 878810.0);
        const blue = xNorm * (705.0 / 12673.0) + yNorm * (-2585.0 / 12673.0) + zNorm * (705.0 / 667.0);
    
        // Return the LinearRgb object
        return {
            red,
            green,
            blue,
            alpha
        };
    }

    linearRgbToSrgb(linearRgb) {
        const { red, green, blue, alpha } = linearRgb;
    
        // Helper function to clamp values between 0 and 1
        const clamp01 = (value) => Math.max(0, Math.min(1, value));
    
        // Helper function for gamma correction
        const gamma = (value) => {
            return value <= 0.0031308
                ? 12.92 * value
                : 1.055 * Math.pow(value, 1 / 2.4) - 0.055;
        };
    
        // Convert LinearRgb to Srgb
        return {
            red: Math.round(gamma(clamp01(red)) * 255),
            green: Math.round(gamma(clamp01(green)) * 255),
            blue: Math.round(gamma(clamp01(blue)) * 255),
            alpha
        };
    }

    oklchToHex(oklch) {
        console.log('oklch',oklch);
        const oklchOb = oklch.match(/oklch\(([^)]+)\)/)[1].replaceAll(' ', ',').split(',').map(Number);
        console.log('oklchOb',oklchOb);

        const oklab = this.oklchToOklab(oklchOb);
        console.log('oklab',oklab);

        const xyzD65 = this.oklabToXyzD65(oklab);
        console.log('xyzD65',xyzD65);

        const linearRgb = this.xyzD65ToLinearRgb(xyzD65);
        console.log('linearRgb',linearRgb);

        const srgb = this.linearRgbToSrgb(linearRgb);
        console.log('srgb',srgb);

        const r = Math.round(srgb.red);
        const g = Math.round(srgb.green);
        const b = Math.round(srgb.blue);
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    oklchToRgb(oklch) {
        const oklchOb = oklch.match(/oklch\(([^)]+)\)/)[1].replaceAll(' ', ',').split(',').map(Number);
        const oklab = this.oklchToOklab(oklchOb);
        const xyzD65 = this.oklabToXyzD65(oklab);
        const linearRgb = this.xyzD65ToLinearRgb(xyzD65);
        const srgb = this.linearRgbToSrgb(linearRgb);

        const r = Math.round(srgb.red);
        const g = Math.round(srgb.green);
        const b = Math.round(srgb.blue);
        return `rgb(${r}, ${g}, ${b})`;
    }

    setAllValues(oklch, variableName) {
        this.hexValue = this.oklchToHex(oklch);
        this.rgbValue = this.oklchToRgb(oklch);

        if( this.outputType === 'hex' ) {
            this.value = this.hexValue;
        } else if( this.outputType === 'rgb' ) {
            this.value = this.rgbValue;
        } else {
            this.value = variableName;
        }
    }


    onValueChange() {
        this.updateLabel();
        this.dialog.close();
    }

    updateLabel() {
        const slot = this.shadowRoot.querySelector('slot[name=input]');
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

            output.innerHTML = `
                <span style="width: 20px; height: 20px; border-radius: 3px; display: inline-block; background: ${this.value}"></span>
            `;

            if(this.showOutputLabel === 'true') output.innerHTML += `<span>${this.value}</span>`

            container.appendChild(output);
            this.appendChild(container);
            container.setAttribute('slot', 'input');
        }
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets = [styles]
        this.shadowRoot.replaceChildren(template.content.cloneNode(true))
        
        this.dialog = this.shadowRoot.querySelector("dialog");

        const slot = this.shadowRoot.querySelector('slot[name=button]');
        const assignedNodes = slot.assignedNodes();
        let buttonElement;
        if( assignedNodes.length > 0 ) {
            buttonElement = assignedNodes[0];
            
        } else {
            buttonElement = document.createElement('button');
            buttonElement.textContent = 'Choose Color';
            buttonElement.setAttribute('slot', 'button');
            this.appendChild(buttonElement);
        }
        buttonElement.addEventListener("click", () => {
            this.dialog.showModal();
        });


        this.shadowRoot.querySelectorAll('[swatch] button').forEach((button) => {
            button.addEventListener('click', () => {
                const swatchStyle = getComputedStyle(button);
                const swatchColor = swatchStyle.backgroundColor;
                this.setAllValues(swatchColor, button.style.background);
            });
        })

        this.dialog.addEventListener('click', function(event) {
            if(!this.dialog) return;
            const rect = this.dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                this.dialog.close();
            }
        });

    }

    
}

OpenSwatchPicker.define()