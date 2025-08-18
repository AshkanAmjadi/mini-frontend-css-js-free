
export const noise = `
<svg id="noice">
    <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="1.36" numOctaves="4" stitchTiles="stitch"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
        <feComponentTransfer>
            <feFuncR type="linear" slope="1"></feFuncR>
            <feFuncG type="linear" slope="1"></feFuncG>
            <feFuncB type="linear" slope="1"></feFuncB>
            <feFuncA type="linear" slope="0.09"></feFuncA>
        </feComponentTransfer>
        <feComponentTransfer>
            <feFuncR type="linear" slope="1.29" intercept="-0.15"/>
            <feFuncG type="linear" slope="1.29" intercept="-0.15"/>
            <feFuncB type="linear" slope="1.29" intercept="-0.15"/>
        </feComponentTransfer>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
</svg>

`;


export const noise2 = `<svg id="noice2" style="display: none" >
        <filter id="noise-filter-2">
            <feTurbulence type="fractalNoise" baseFrequency="1.34" numOctaves="4" stitchTiles="stitch"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="0.43"></feFuncR>
                <feFuncG type="linear" slope="0.43"></feFuncG>
                <feFuncB type="linear" slope="0.43"></feFuncB>
                <feFuncA type="linear" slope="0.31"></feFuncA>
            </feComponentTransfer>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1.47" intercept="-0.23" />
                <feFuncG type="linear" slope="1.47" intercept="-0.23" />
                <feFuncB type="linear" slope="1.47" intercept="-0.23" />
            </feComponentTransfer>
        </filter>
    </svg>`