const typography = require('@tailwindcss/typography');

module.exports = {
    content: ['./hugo_stats.json'], plugins: [typography], theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: '100%',
                        blockquote: {
                            borderRadius: '0.2rem',
                            fontWeight: 'normal', fontStyle: 'normal',
                            color: 'D1D5DB',
                        },
                        // pre: {
                        //     backgroundColor: '#3c3836'
                        // },
                        'a': {
                            textDecoration: 'none', '&:hover': {
                                color: '#7dd3fc', textDecoration: 'underline',
                            },
                            color: "#0ea5e9"
                        },
                        // th: {
                        //     backgroundColor: '#3c3836', border: '1px solid #3c3836', padding: '0.5rem',
                        // },
                        // td: {
                        //     border: '1px solid #3c3836', padding: '0.5rem',
                        // },
                        // code: {
                        //     backgroundColor: '#3c3836',
                        //     padding: '0.2rem',
                        //     borderRadius: '0.2rem',
                        // },
                        'code::before': {content: 'none'},
                        'code::after': {content: 'none'},
                        'blockquote p:first-of-type::before': {content: 'none'},
                        'blockquote p:first-of-type::after': {content: 'none'},
                        // '--tw-prose-invert-body': '#ebdbb2',
                        // '--tw-prose-invert-headings': '#fbf1c7',
                        // '--tw-prose-invert-links': '#458588',
                        // '--tw-prose-invert-bold': '#f6f1c7',
                        // '--tw-prose-invert-counters': '#ebdbb2',
                        // '--tw-prose-invert-bullets': '#ebdbb2',
                        // '--tw-prose-invert-hr': '#504945',
                        // '--tw-prose-invert-quotes': '#ebdbb2',
                        // '--tw-prose-invert-quote-borders': '#83a598',
                        // '--tw-prose-invert-captions': '#a89984',
                        // '--tw-prose-invert-code': '#ebdbb2',
                        // '--tw-prose-invert-pre-code': '#ebdbb2',
                        // '--tw-prose-invert-pre-bg': '#3c3836',
                        // '--tw-prose-invert-th-borders': '#3c3836',
                        // '--tw-prose-invert-td-borders': '#3c3836',
                    }
                }
            })
        },
    },
};
