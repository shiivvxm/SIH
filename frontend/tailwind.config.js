/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'on-surface-variant': '#434753',
        'surface-container-highest': '#e2e2e9',
        'surface-dim': '#dcd9db',
        'on-surface': '#1b1b1d',
        'surface-container-lowest': '#ffffff',
        'secondary-fixed': '#d5e3fc',
        'inverse-primary': '#c0c6db',
        'on-tertiary-container': '#9a7f67',
        'secondary-fixed-dim': '#b9c7df',
        'tertiary-container': '#281807',
        'on-secondary-fixed-variant': '#3a485b',
        'surface-tint': '#575e70',
        'surface': '#fcf8fa',
        'tertiary-fixed': '#fdddc1',
        'primary-container': '#151b2b',
        'background': '#fcf8fa',
        'outline-variant': '#c6c6cd',
        'inverse-on-surface': '#f3f0f1',
        'tertiary-fixed-dim': '#e0c1a6',
        'tertiary': '#000000',
        'surface-container-low': '#f6f3f4',
        'primary': '#000000',
        'on-primary': '#ffffff',
        'secondary': '#475569',
        'on-secondary': '#ffffff',
        'error': '#dc2626',
        'on-error': '#ffffff',
        'surface-variant': '#f1f5f9',
        'surface-container': '#f8fafc',
        'surface-bright': '#fcf8fa',
        'on-tertiary': '#ffffff',
        'on-primary-container': '#7d8497',
        'primary-fixed': '#dce2f8',
        'on-tertiary-fixed-variant': '#58432e',
        'on-secondary-fixed': '#0d1c2e',
        'outline': '#76777d'
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem'
      },
      spacing: {
        'stack-lg': '24px',
        'gutter': '24px',
        'margin-desktop': '32px',
        'stack-sm': '8px',
        'stack-xl': '48px',
        'margin-mobile': '16px',
        'container-max': '1440px',
        'stack-md': '16px',
        'stack-xs': '4px',
        'unit': '4px'
      },
      fontFamily: {
        'headline-md': ['Hanken Grotesk', 'sans-serif'],
        'headline-lg': ['Hanken Grotesk', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'label-caps': ['JetBrains Mono', 'monospace'],
        'display-lg': ['Hanken Grotesk', 'sans-serif'],
        'data-table': ['Inter', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'headline-lg-mobile': ['Hanken Grotesk', 'sans-serif'],
        'body-sm': ['Inter', 'sans-serif']
      },
      fontSize: {
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'data-table': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }]
      }
    }
  },
  plugins: [],
}
