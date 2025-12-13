

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
                    width: 2.5rem;
                    height: 2.5rem;
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
const template = document.createElement("template")
template.innerHTML = /* html */`
    <div part="swatch-picker">
        <slot name="label"></slot>
        <slot name="button"></slot>
        <slot name="input"></slot>
    </div>
    <dialog>
        <main>
            <div scale="">
                <h2>Neutral Scale</h2>
                <div swatch="">
                    <button aria-label="Copy Neutral 1" style="background:var(--neutral-1)">
                        &nbsp;
                    </button>
                    <span>Neutral 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 2" style="background:var(--neutral-2)">
                    &nbsp;
                </button>
                <span>Neutral 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 3" style="background:var(--neutral-3)">
                    &nbsp;
                </button>
                <span>Neutral 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 4" style="background:var(--neutral-4)">
                    &nbsp;
                </button>
                <span>Neutral 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 5" style="background:var(--neutral-5)">
                    &nbsp;
                </button>
                <span>Neutral 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 6" style="background:var(--neutral-6)">
                    &nbsp;
                </button>
                <span>Neutral 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 7" style="background:var(--neutral-7)">
                    &nbsp;
                </button>
                <span>Neutral 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 8" style="background:var(--neutral-8)">
                    &nbsp;
                </button>
                <span>Neutral 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 9" style="background:var(--neutral-9)">
                    &nbsp;
                </button>
                <span>Neutral 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 10" style="background:var(--neutral-10)">
                    &nbsp;
                </button>
                <span>Neutral 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 11" style="background:var(--neutral-11)">
                    &nbsp;
                </button>
                <span>Neutral 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 12" style="background:var(--neutral-12)">
                    &nbsp;
                </button>
                <span>Neutral 12</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Neutral 13" style="background:var(--neutral-13)">
                    &nbsp;
                </button>
                <span>Neutral 13</span>
                </div>
            
            </div>
        
            <div scale="">
                <h2>Stone Scale</h2>
            
                <div swatch="">
                <button aria-label="Copy Stone 1" style="background:var(--stone-1)">
                    &nbsp;
                </button>
                <span>Stone 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 2" style="background:var(--stone-2)">
                    &nbsp;
                </button>
                <span>Stone 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 3" style="background:var(--stone-3)">
                    &nbsp;
                </button>
                <span>Stone 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 4" style="background:var(--stone-4)">
                    &nbsp;
                </button>
                <span>Stone 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 5" style="background:var(--stone-5)">
                    &nbsp;
                </button>
                <span>Stone 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 6" style="background:var(--stone-6)">
                    &nbsp;
                </button>
                <span>Stone 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 7" style="background:var(--stone-7)">
                    &nbsp;
                </button>
                <span>Stone 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 8" style="background:var(--stone-8)">
                    &nbsp;
                </button>
                <span>Stone 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 9" style="background:var(--stone-9)">
                    &nbsp;
                </button>
                <span>Stone 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 10" style="background:var(--stone-10)">
                    &nbsp;
                </button>
                <span>Stone 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 11" style="background:var(--stone-11)">
                    &nbsp;
                </button>
                <span>Stone 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Stone 12" style="background:var(--stone-12)">
                    &nbsp;
                </button>
                <span>Stone 12</span>
                </div>
            
            </div>
        
            <div scale="">
                <h2>Slate Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Slate 1" style="background:var(--slate-1)">
                    &nbsp;
                </button>
                <span>Slate 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 2" style="background:var(--slate-2)">
                    &nbsp;
                </button>
                <span>Slate 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 3" style="background:var(--slate-3)">
                    &nbsp;
                </button>
                <span>Slate 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 4" style="background:var(--slate-4)">
                    &nbsp;
                </button>
                <span>Slate 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 5" style="background:var(--slate-5)">
                    &nbsp;
                </button>
                <span>Slate 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 6" style="background:var(--slate-6)">
                    &nbsp;
                </button>
                <span>Slate 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 7" style="background:var(--slate-7)">
                    &nbsp;
                </button>
                <span>Slate 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 8" style="background:var(--slate-8)">
                    &nbsp;
                </button>
                <span>Slate 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 9" style="background:var(--slate-9)">
                    &nbsp;
                </button>
                <span>Slate 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 10" style="background:var(--slate-10)">
                    &nbsp;
                </button>
                <span>Slate 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 11" style="background:var(--slate-11)">
                    &nbsp;
                </button>
                <span>Slate 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Slate 12" style="background:var(--slate-12)">
                    &nbsp;
                </button>
                <span>Slate 12</span>
                </div>
            
            </div>
        
            <div scale="">
                <h2>Red Scale</h2>
                <div swatch="">
                <button aria-label="Copy Red 1" style="background:var(--red-1)">
                    &nbsp;
                </button>
                <span>Red 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 2" style="background:var(--red-2)">
                    &nbsp;
                </button>
                <span>Red 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 3" style="background:var(--red-3)">
                    &nbsp;
                </button>
                <span>Red 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 4" style="background:var(--red-4)">
                    &nbsp;
                </button>
                <span>Red 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 5" style="background:var(--red-5)">
                    &nbsp;
                </button>
                <span>Red 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 6" style="background:var(--red-6)">
                    &nbsp;
                </button>
                <span>Red 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 7" style="background:var(--red-7)">
                    &nbsp;
                </button>
                <span>Red 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 8" style="background:var(--red-8)">
                    &nbsp;
                </button>
                <span>Red 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 9" style="background:var(--red-9)">
                    &nbsp;
                </button>
                <span>Red 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 10" style="background:var(--red-10)">
                    &nbsp;
                </button>
                <span>Red 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 11" style="background:var(--red-11)">
                    &nbsp;
                </button>
                <span>Red 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Red 12" style="background:var(--red-12)">
                    &nbsp;
                </button>
                <span>Red 12</span>
                </div>
            
            </div>
        
            <div scale="">
                <h2>Orange Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Orange 1" style="background:var(--orange-1)">
                    &nbsp;
                </button>
                <span>Orange 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 2" style="background:var(--orange-2)">
                    &nbsp;
                </button>
                <span>Orange 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 3" style="background:var(--orange-3)">
                    &nbsp;
                </button>
                <span>Orange 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 4" style="background:var(--orange-4)">
                    &nbsp;
                </button>
                <span>Orange 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 5" style="background:var(--orange-5)">
                    &nbsp;
                </button>
                <span>Orange 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 6" style="background:var(--orange-6)">
                    &nbsp;
                </button>
                <span>Orange 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 7" style="background:var(--orange-7)">
                    &nbsp;
                </button>
                <span>Orange 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 8" style="background:var(--orange-8)">
                    &nbsp;
                </button>
                <span>Orange 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 9" style="background:var(--orange-9)">
                    &nbsp;
                </button>
                <span>Orange 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 10" style="background:var(--orange-10)">
                    &nbsp;
                </button>
                <span>Orange 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 11" style="background:var(--orange-11)">
                    &nbsp;
                </button>
                <span>Orange 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Orange 12" style="background:var(--orange-12)">
                    &nbsp;
                </button>
                <span>Orange 12</span>
                </div>
            
            </div>
        
            <div scale="">
                <h2>Amber Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Amber 1" style="background:var(--amber-1)">
                    &nbsp;
                </button>
                <span>Amber 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 2" style="background:var(--amber-2)">
                    &nbsp;
                </button>
                <span>Amber 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 3" style="background:var(--amber-3)">
                    &nbsp;
                </button>
                <span>Amber 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 4" style="background:var(--amber-4)">
                    &nbsp;
                </button>
                <span>Amber 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 5" style="background:var(--amber-5)">
                    &nbsp;
                </button>
                <span>Amber 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 6" style="background:var(--amber-6)">
                    &nbsp;
                </button>
                <span>Amber 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 7" style="background:var(--amber-7)">
                    &nbsp;
                </button>
                <span>Amber 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 8" style="background:var(--amber-8)">
                    &nbsp;
                </button>
                <span>Amber 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 9" style="background:var(--amber-9)">
                    &nbsp;
                </button>
                <span>Amber 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 10" style="background:var(--amber-10)">
                    &nbsp;
                </button>
                <span>Amber 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 11" style="background:var(--amber-11)">
                    &nbsp;
                </button>
                <span>Amber 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Amber 12" style="background:var(--amber-12)">
                    &nbsp;
                </button>
                <span>Amber 12</span>
                </div>
            
            </div>
        
            <div scale="">
                <h2>Gold Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Gold 1" style="background:var(--gold-1)">
                    &nbsp;
                </button>
                <span>Gold 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 2" style="background:var(--gold-2)">
                    &nbsp;
                </button>
                <span>Gold 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 3" style="background:var(--gold-3)">
                    &nbsp;
                </button>
                <span>Gold 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 4" style="background:var(--gold-4)">
                    &nbsp;
                </button>
                <span>Gold 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 5" style="background:var(--gold-5)">
                    &nbsp;
                </button>
                <span>Gold 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 6" style="background:var(--gold-6)">
                    &nbsp;
                </button>
                <span>Gold 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 7" style="background:var(--gold-7)">
                    &nbsp;
                </button>
                <span>Gold 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 8" style="background:var(--gold-8)">
                    &nbsp;
                </button>
                <span>Gold 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 9" style="background:var(--gold-9)">
                    &nbsp;
                </button>
                <span>Gold 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 10" style="background:var(--gold-10)">
                    &nbsp;
                </button>
                <span>Gold 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 11" style="background:var(--gold-11)">
                    &nbsp;
                </button>
                <span>Gold 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Gold 12" style="background:var(--gold-12)">
                    &nbsp;
                </button>
                <span>Gold 12</span>
                </div>
            
            </div>
        
            <div scale="">
                <h2>Yellow Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Yellow 1" style="background:var(--yellow-1)">
                    &nbsp;
                </button>
                <span>Yellow 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 2" style="background:var(--yellow-2)">
                    &nbsp;
                </button>
                <span>Yellow 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 3" style="background:var(--yellow-3)">
                    &nbsp;
                </button>
                <span>Yellow 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 4" style="background:var(--yellow-4)">
                    &nbsp;
                </button>
                <span>Yellow 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 5" style="background:var(--yellow-5)">
                    &nbsp;
                </button>
                <span>Yellow 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 6" style="background:var(--yellow-6)">
                    &nbsp;
                </button>
                <span>Yellow 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 7" style="background:var(--yellow-7)">
                    &nbsp;
                </button>
                <span>Yellow 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 8" style="background:var(--yellow-8)">
                    &nbsp;
                </button>
                <span>Yellow 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 9" style="background:var(--yellow-9)">
                    &nbsp;
                </button>
                <span>Yellow 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 10" style="background:var(--yellow-10)">
                    &nbsp;
                </button>
                <span>Yellow 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 11" style="background:var(--yellow-11)">
                    &nbsp;
                </button>
                <span>Yellow 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Yellow 12" style="background:var(--yellow-12)">
                    &nbsp;
                </button>
                <span>Yellow 12</span>
                </div>
            
            </div>
        
            <div scale="">
            <h2>Lime Scale</h2>
            
                <div swatch="">
                <button aria-label="Copy Lime 1" style="background:var(--lime-1)">
                    &nbsp;
                </button>
                <span>Lime 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 2" style="background:var(--lime-2)">
                    &nbsp;
                </button>
                <span>Lime 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 3" style="background:var(--lime-3)">
                    &nbsp;
                </button>
                <span>Lime 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 4" style="background:var(--lime-4)">
                    &nbsp;
                </button>
                <span>Lime 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 5" style="background:var(--lime-5)">
                    &nbsp;
                </button>
                <span>Lime 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 6" style="background:var(--lime-6)">
                    &nbsp;
                </button>
                <span>Lime 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 7" style="background:var(--lime-7)">
                    &nbsp;
                </button>
                <span>Lime 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 8" style="background:var(--lime-8)">
                    &nbsp;
                </button>
                <span>Lime 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 9" style="background:var(--lime-9)">
                    &nbsp;
                </button>
                <span>Lime 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 10" style="background:var(--lime-10)">
                    &nbsp;
                </button>
                <span>Lime 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 11" style="background:var(--lime-11)">
                    &nbsp;
                </button>
                <span>Lime 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Lime 12" style="background:var(--lime-12)">
                    &nbsp;
                </button>
                <span>Lime 12</span>
                </div>
                
            </div>
        
            <div scale="">
                <h2>Green Scale</h2>
                <div swatch="">
                <button aria-label="Copy Green 1" style="background:var(--green-1)">
                    &nbsp;
                </button>
                <span>Green 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 2" style="background:var(--green-2)">
                    &nbsp;
                </button>
                <span>Green 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 3" style="background:var(--green-3)">
                    &nbsp;
                </button>
                <span>Green 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 4" style="background:var(--green-4)">
                    &nbsp;
                </button>
                <span>Green 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 5" style="background:var(--green-5)">
                    &nbsp;
                </button>
                <span>Green 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 6" style="background:var(--green-6)">
                    &nbsp;
                </button>
                <span>Green 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 7" style="background:var(--green-7)">
                    &nbsp;
                </button>
                <span>Green 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 8" style="background:var(--green-8)">
                    &nbsp;
                </button>
                <span>Green 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 9" style="background:var(--green-9)">
                    &nbsp;
                </button>
                <span>Green 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 10" style="background:var(--green-10)">
                    &nbsp;
                </button>
                <span>Green 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 11" style="background:var(--green-11)">
                    &nbsp;
                </button>
                <span>Green 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Green 12" style="background:var(--green-12)">
                    &nbsp;
                </button>
                <span>Green 12</span>
                </div>
            
            </div>
        
            <div scale="">
                <h2>Emerald Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Emerald 1" style="background:var(--emerald-1)">
                    &nbsp;
                </button>
                <span>Emerald 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 2" style="background:var(--emerald-2)">
                    &nbsp;
                </button>
                <span>Emerald 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 3" style="background:var(--emerald-3)">
                    &nbsp;
                </button>
                <span>Emerald 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 4" style="background:var(--emerald-4)">
                    &nbsp;
                </button>
                <span>Emerald 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 5" style="background:var(--emerald-5)">
                    &nbsp;
                </button>
                <span>Emerald 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 6" style="background:var(--emerald-6)">
                    &nbsp;
                </button>
                <span>Emerald 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 7" style="background:var(--emerald-7)">
                    &nbsp;
                </button>
                <span>Emerald 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 8" style="background:var(--emerald-8)">
                    &nbsp;
                </button>
                <span>Emerald 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 9" style="background:var(--emerald-9)">
                    &nbsp;
                </button>
                <span>Emerald 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 10" style="background:var(--emerald-10)">
                    &nbsp;
                </button>
                <span>Emerald 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 11" style="background:var(--emerald-11)">
                    &nbsp;
                </button>
                <span>Emerald 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Emerald 12" style="background:var(--emerald-12)">
                    &nbsp;
                </button>
                <span>Emerald 12</span>
                </div>
                
            </div>
        
            <div scale="">
                <h2>Teal Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Teal 1" style="background:var(--teal-1)">
                    &nbsp;
                </button>
                <span>Teal 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 2" style="background:var(--teal-2)">
                    &nbsp;
                </button>
                <span>Teal 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 3" style="background:var(--teal-3)">
                    &nbsp;
                </button>
                <span>Teal 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 4" style="background:var(--teal-4)">
                    &nbsp;
                </button>
                <span>Teal 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 5" style="background:var(--teal-5)">
                    &nbsp;
                </button>
                <span>Teal 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 6" style="background:var(--teal-6)">
                    &nbsp;
                </button>
                <span>Teal 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 7" style="background:var(--teal-7)">
                    &nbsp;
                </button>
                <span>Teal 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 8" style="background:var(--teal-8)">
                    &nbsp;
                </button>
                <span>Teal 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 9" style="background:var(--teal-9)">
                    &nbsp;
                </button>
                <span>Teal 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 10" style="background:var(--teal-10)">
                    &nbsp;
                </button>
                <span>Teal 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 11" style="background:var(--teal-11)">
                    &nbsp;
                </button>
                <span>Teal 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Teal 12" style="background:var(--teal-12)">
                    &nbsp;
                </button>
                <span>Teal 12</span>
                </div>
                
            </div>
        
            <div scale="">
                <h2>Cyan Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Cyan 1" style="background:var(--cyan-1)">
                    &nbsp;
                </button>
                <span>Cyan 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 2" style="background:var(--cyan-2)">
                    &nbsp;
                </button>
                <span>Cyan 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 3" style="background:var(--cyan-3)">
                    &nbsp;
                </button>
                <span>Cyan 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 4" style="background:var(--cyan-4)">
                    &nbsp;
                </button>
                <span>Cyan 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 5" style="background:var(--cyan-5)">
                    &nbsp;
                </button>
                <span>Cyan 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 6" style="background:var(--cyan-6)">
                    &nbsp;
                </button>
                <span>Cyan 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 7" style="background:var(--cyan-7)">
                    &nbsp;
                </button>
                <span>Cyan 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 8" style="background:var(--cyan-8)">
                    &nbsp;
                </button>
                <span>Cyan 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 9" style="background:var(--cyan-9)">
                    &nbsp;
                </button>
                <span>Cyan 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 10" style="background:var(--cyan-10)">
                    &nbsp;
                </button>
                <span>Cyan 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 11" style="background:var(--cyan-11)">
                    &nbsp;
                </button>
                <span>Cyan 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Cyan 12" style="background:var(--cyan-12)">
                    &nbsp;
                </button>
                <span>Cyan 12</span>
                </div>
                
            </div>
        
            <div scale="">
                <h2>Sky Scale</h2>
                
                <div swatch="">
                <button aria-label="Copy Sky 1" style="background:var(--sky-1)">
                    &nbsp;
                </button>
                <span>Sky 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 2" style="background:var(--sky-2)">
                    &nbsp;
                </button>
                <span>Sky 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 3" style="background:var(--sky-3)">
                    &nbsp;
                </button>
                <span>Sky 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 4" style="background:var(--sky-4)">
                    &nbsp;
                </button>
                <span>Sky 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 5" style="background:var(--sky-5)">
                    &nbsp;
                </button>
                <span>Sky 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 6" style="background:var(--sky-6)">
                    &nbsp;
                </button>
                <span>Sky 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 7" style="background:var(--sky-7)">
                    &nbsp;
                </button>
                <span>Sky 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 8" style="background:var(--sky-8)">
                    &nbsp;
                </button>
                <span>Sky 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 9" style="background:var(--sky-9)">
                    &nbsp;
                </button>
                <span>Sky 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 10" style="background:var(--sky-10)">
                    &nbsp;
                </button>
                <span>Sky 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 11" style="background:var(--sky-11)">
                    &nbsp;
                </button>
                <span>Sky 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Sky 12" style="background:var(--sky-12)">
                    &nbsp;
                </button>
                <span>Sky 12</span>
                </div>
                
            </div>
            
            <div scale="">
                <h2>Blue Scale</h2>
                
                

                
                <div swatch="">
                <button aria-label="Copy Blue 1" style="background:var(--blue-1)">
                    &nbsp;
                </button>
                <span>Blue 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 2" style="background:var(--blue-2)">
                    &nbsp;
                </button>
                <span>Blue 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 3" style="background:var(--blue-3)">
                    &nbsp;
                </button>
                <span>Blue 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 4" style="background:var(--blue-4)">
                    &nbsp;
                </button>
                <span>Blue 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 5" style="background:var(--blue-5)">
                    &nbsp;
                </button>
                <span>Blue 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 6" style="background:var(--blue-6)">
                    &nbsp;
                </button>
                <span>Blue 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 7" style="background:var(--blue-7)">
                    &nbsp;
                </button>
                <span>Blue 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 8" style="background:var(--blue-8)">
                    &nbsp;
                </button>
                <span>Blue 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 9" style="background:var(--blue-9)">
                    &nbsp;
                </button>
                <span>Blue 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 10" style="background:var(--blue-10)">
                    &nbsp;
                </button>
                <span>Blue 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 11" style="background:var(--blue-11)">
                    &nbsp;
                </button>
                <span>Blue 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Blue 12" style="background:var(--blue-12)">
                    &nbsp;
                </button>
                <span>Blue 12</span>
                </div>
                
            </div>
            
            <div scale="">
                <h2>Violet Scale</h2>
                
                

                
                <div swatch="">
                <button aria-label="Copy Violet 1" style="background:var(--violet-1)">
                    &nbsp;
                </button>
                <span>Violet 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 2" style="background:var(--violet-2)">
                    &nbsp;
                </button>
                <span>Violet 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 3" style="background:var(--violet-3)">
                    &nbsp;
                </button>
                <span>Violet 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 4" style="background:var(--violet-4)">
                    &nbsp;
                </button>
                <span>Violet 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 5" style="background:var(--violet-5)">
                    &nbsp;
                </button>
                <span>Violet 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 6" style="background:var(--violet-6)">
                    &nbsp;
                </button>
                <span>Violet 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 7" style="background:var(--violet-7)">
                    &nbsp;
                </button>
                <span>Violet 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 8" style="background:var(--violet-8)">
                    &nbsp;
                </button>
                <span>Violet 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 9" style="background:var(--violet-9)">
                    &nbsp;
                </button>
                <span>Violet 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 10" style="background:var(--violet-10)">
                    &nbsp;
                </button>
                <span>Violet 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 11" style="background:var(--violet-11)">
                    &nbsp;
                </button>
                <span>Violet 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Violet 12" style="background:var(--violet-12)">
                    &nbsp;
                </button>
                <span>Violet 12</span>
                </div>
                
            </div>
            
            <div scale="">
                <h2>Purple Scale</h2>
                
                

                
                <div swatch="">
                <button aria-label="Copy Purple 1" style="background:var(--purple-1)">
                    &nbsp;
                </button>
                <span>Purple 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 2" style="background:var(--purple-2)">
                    &nbsp;
                </button>
                <span>Purple 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 3" style="background:var(--purple-3)">
                    &nbsp;
                </button>
                <span>Purple 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 4" style="background:var(--purple-4)">
                    &nbsp;
                </button>
                <span>Purple 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 5" style="background:var(--purple-5)">
                    &nbsp;
                </button>
                <span>Purple 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 6" style="background:var(--purple-6)">
                    &nbsp;
                </button>
                <span>Purple 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 7" style="background:var(--purple-7)">
                    &nbsp;
                </button>
                <span>Purple 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 8" style="background:var(--purple-8)">
                    &nbsp;
                </button>
                <span>Purple 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 9" style="background:var(--purple-9)">
                    &nbsp;
                </button>
                <span>Purple 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 10" style="background:var(--purple-10)">
                    &nbsp;
                </button>
                <span>Purple 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 11" style="background:var(--purple-11)">
                    &nbsp;
                </button>
                <span>Purple 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Purple 12" style="background:var(--purple-12)">
                    &nbsp;
                </button>
                <span>Purple 12</span>
                </div>
                
            </div>
            
            <div scale="">
                <h2>Fuchsia Scale</h2>
                
                

                
                <div swatch="">
                <button aria-label="Copy Fuchsia 1" style="background:var(--fuchsia-1)">
                    &nbsp;
                </button>
                <span>Fuchsia 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 2" style="background:var(--fuchsia-2)">
                    &nbsp;
                </button>
                <span>Fuchsia 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 3" style="background:var(--fuchsia-3)">
                    &nbsp;
                </button>
                <span>Fuchsia 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 4" style="background:var(--fuchsia-4)">
                    &nbsp;
                </button>
                <span>Fuchsia 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 5" style="background:var(--fuchsia-5)">
                    &nbsp;
                </button>
                <span>Fuchsia 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 6" style="background:var(--fuchsia-6)">
                    &nbsp;
                </button>
                <span>Fuchsia 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 7" style="background:var(--fuchsia-7)">
                    &nbsp;
                </button>
                <span>Fuchsia 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 8" style="background:var(--fuchsia-8)">
                    &nbsp;
                </button>
                <span>Fuchsia 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 9" style="background:var(--fuchsia-9)">
                    &nbsp;
                </button>
                <span>Fuchsia 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 10" style="background:var(--fuchsia-10)">
                    &nbsp;
                </button>
                <span>Fuchsia 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 11" style="background:var(--fuchsia-11)">
                    &nbsp;
                </button>
                <span>Fuchsia 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Fuchsia 12" style="background:var(--fuchsia-12)">
                    &nbsp;
                </button>
                <span>Fuchsia 12</span>
                </div>
                
            </div>
            
            <div scale="">
                <h2>Magenta Scale</h2>
                
                

                
                <div swatch="">
                <button aria-label="Copy Magenta 1" style="background:var(--magenta-1)">
                    &nbsp;
                </button>
                <span>Magenta 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 2" style="background:var(--magenta-2)">
                    &nbsp;
                </button>
                <span>Magenta 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 3" style="background:var(--magenta-3)">
                    &nbsp;
                </button>
                <span>Magenta 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 4" style="background:var(--magenta-4)">
                    &nbsp;
                </button>
                <span>Magenta 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 5" style="background:var(--magenta-5)">
                    &nbsp;
                </button>
                <span>Magenta 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 6" style="background:var(--magenta-6)">
                    &nbsp;
                </button>
                <span>Magenta 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 7" style="background:var(--magenta-7)">
                    &nbsp;
                </button>
                <span>Magenta 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 8" style="background:var(--magenta-8)">
                    &nbsp;
                </button>
                <span>Magenta 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 9" style="background:var(--magenta-9)">
                    &nbsp;
                </button>
                <span>Magenta 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 10" style="background:var(--magenta-10)">
                    &nbsp;
                </button>
                <span>Magenta 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 11" style="background:var(--magenta-11)">
                    &nbsp;
                </button>
                <span>Magenta 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Magenta 12" style="background:var(--magenta-12)">
                    &nbsp;
                </button>
                <span>Magenta 12</span>
                </div>
                
            </div>
            
            <div scale="">
                <h2>Pink Scale</h2>
                
                

                
                <div swatch="">
                <button aria-label="Copy Pink 1" style="background:var(--pink-1)">
                    &nbsp;
                </button>
                <span>Pink 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 2" style="background:var(--pink-2)">
                    &nbsp;
                </button>
                <span>Pink 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 3" style="background:var(--pink-3)">
                    &nbsp;
                </button>
                <span>Pink 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 4" style="background:var(--pink-4)">
                    &nbsp;
                </button>
                <span>Pink 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 5" style="background:var(--pink-5)">
                    &nbsp;
                </button>
                <span>Pink 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 6" style="background:var(--pink-6)">
                    &nbsp;
                </button>
                <span>Pink 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 7" style="background:var(--pink-7)">
                    &nbsp;
                </button>
                <span>Pink 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 8" style="background:var(--pink-8)">
                    &nbsp;
                </button>
                <span>Pink 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 9" style="background:var(--pink-9)">
                    &nbsp;
                </button>
                <span>Pink 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 10" style="background:var(--pink-10)">
                    &nbsp;
                </button>
                <span>Pink 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 11" style="background:var(--pink-11)">
                    &nbsp;
                </button>
                <span>Pink 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Pink 12" style="background:var(--pink-12)">
                    &nbsp;
                </button>
                <span>Pink 12</span>
                </div>
                
            </div>
            
            <div scale="">
                <h2>Rose Scale</h2>
                
                

                
                <div swatch="">
                <button aria-label="Copy Rose 1" style="background:var(--rose-1)">
                    &nbsp;
                </button>
                <span>Rose 1</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 2" style="background:var(--rose-2)">
                    &nbsp;
                </button>
                <span>Rose 2</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 3" style="background:var(--rose-3)">
                    &nbsp;
                </button>
                <span>Rose 3</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 4" style="background:var(--rose-4)">
                    &nbsp;
                </button>
                <span>Rose 4</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 5" style="background:var(--rose-5)">
                    &nbsp;
                </button>
                <span>Rose 5</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 6" style="background:var(--rose-6)">
                    &nbsp;
                </button>
                <span>Rose 6</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 7" style="background:var(--rose-7)">
                    &nbsp;
                </button>
                <span>Rose 7</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 8" style="background:var(--rose-8)">
                    &nbsp;
                </button>
                <span>Rose 8</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 9" style="background:var(--rose-9)">
                    &nbsp;
                </button>
                <span>Rose 9</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 10" style="background:var(--rose-10)">
                    &nbsp;
                </button>
                <span>Rose 10</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 11" style="background:var(--rose-11)">
                    &nbsp;
                </button>
                <span>Rose 11</span>
                </div>
                
                <div swatch="">
                <button aria-label="Copy Rose 12" style="background:var(--rose-12)">
                    &nbsp;
                </button>
                <span>Rose 12</span>
                </div>
                
            </div>

        </main>
    </dialog>
`
export class OpenSwatchPicker extends HTMLElement {
    static define(tagName = "open-swatch-picker") {
        customElements.define(tagName, this)
    }
    shadowRoot = this.attachShadow({ mode: "open" });

    constructor(){
        super();
        this._internals = this.attachInternals();
    }

    #value = '';
    dialog = null;
    hexValue = '';
    hexValue = '';
    rgbValue = '';

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
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
            buttonElement.addEventListener("click", () => {
                this.dialog.showModal();
            });
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