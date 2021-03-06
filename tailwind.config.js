// tailwind.config.js
const mode = process.env.NODE_ENV;
const dev = mode === 'development';
// console.log(!dev, 'enabled' );

module.exports = {
    theme: {
        container: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            }
        },
        // fontFamily: {
        //     sans: ['Montserrat', 'Verdana', 'sans-serif'],
        // },
        extend: {
            colors: {
                'green-light': '#C8E2C7',
                'green-brand': '#0C9648',
                'green-dark': '#246413',
                'pink-light': '#FD94BD',
                'pink-dark': '#D02264',
                'orange-light': '#FDC27E',
                'orange-dark': '#E15B13',
                'yellow-light': '#F8E492',
                'yellow-dark': '#EDB020',
            },
            // gridTemplateColumns: {
            //     'custom-2': 'repeat(2, 272px)',
            //     'custom-3': 'repeat(3, 272px)',
            //     'custom-4': 'repeat(4, 272px)',
            // },
        },
    },
    // only needed in Tailwind 1.0 for tailwind 2.0 compat
    // future: { 
    //     purgeLayersByDefault: true, 
    //     removeDeprecatedGapUtilities: true,
    //   },
    plugins: [
        // for tailwind UI users only
        // require('@tailwindcss/ui'),
        // other plugins here
        require('@tailwindcss/typography'),
        //require('@tailwindcss/forms'),
    ],
    purge: {
        enabled: !dev, // disable purge in dev
        content: [
            "./src/**/*.svelte",
            // may also want to include HTML files
            // "./src/**/*.html"
        ],
        // this is for extracting Svelte `class:` syntax but is not perfect yet, see below
        defaultExtractor: content => {
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
            const broadMatchesWithoutTrailingSlash = broadMatches.map(match => _.trimEnd(match, '\\'))
            const matches = broadMatches
                .concat(broadMatchesWithoutTrailingSlash)
            return matches
        }
    },
}; 