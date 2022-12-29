module.exports = {
  corePlugins: {
    container: false
  },
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      nunito: 'Nunito Sans'
    },
    fontSize: {
      xs: 'var(--step--2)', // .tiny
      sm: 'var(--step--1)', // small
      base: 'var(--step-0)', // p
      md: 'var(--step-1)', // h6
      lg: 'var(--step-2)', // h5
      xl: 'var(--step-3)', // h4
      '2xl': 'var(--step-4)', // h4
      '3xl': 'var(--step-5)', // h4
      '4xl': 'var(--step-6)' // h4
    },
    backgroundColor: {
      primary: 'var(--bg-primary)',
      secondary: 'var(--bg-secondary)'
    },
    textColor: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)'
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')]
}
