module.exports = {
  theme: {
    extend: {
      fontSize: {
        'msl': '15%',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '3.2xl': '1.9rem',
        '3.5xl': '2.15rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
       },
      width: {
        '0/0': '0%',
        '0/1': '1%',
        '0/2': '2%',
        '0/3': '3%',
        '0/4': '4%',
        '0/5': '5%',
        '0/6': '6%',
        '0/7': '7%',
        '0/8': '8%',
        '0/9': '9%',
        '1/1': '10%',
        '1/5': '15%',
        '2/2': '20%',
        '2/3': '23%',
        '2/5': '25%',
        '2/7': '27%',
        '2/8': '28%',
        '3/3': '30%',
        '3/5': '35%',
        '3/7': '37%',
        '4/4': '40%',
        '4/5': '45%',
        '4/7': '47%',
        '5/5': '50%',
        '5/2': '55%',
        '6/6': '60%',
        '6/5': '65%',
        '7/7': '70%',
        '7/1': '71%',
        '7/5': '75%',
        '8/8': '80%',
        '8/5': '85%',
        '9/9': '90%',
        '9/5': '95%',
        '9/7': '97%',
        '9/9': '99%',
        '10/10': '100%',
      },
      height: {
        '17': '16.5rem',
        '19': '19rem',
        md: '16px',
        lg: '24px',
        xl: '48px',
       },
       margin: {
        
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
       },
    },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',

        gray: {
          grayboton: '#C7CCD6',
          graybotonhover: '#EBF0F5',
          graytext: '#8DA2C0',
          grayinput: '#3E4F6C',
          graylay: '#BECDE3',

        },
      
        orange: {
          botonorange: '#F97308',
          botonorangehover: '#FF8509',

          botonorangelight: '#F3C243',
          botonorangelighthover: '#FFE14E',
        },

        purple: {
          botonpurple: '#E66CEF',
          botonpurplehover: '#FF7DFF',

          botonpurplelight: '#BBA1FF',
          botonpurplelighthover: '#D9BBFF',
        },

        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#121f3d',
          promo: '#24317A',
          darkSearch: '#03091e',
          lightsearch: '#637B9D',
          hypervinculo: '#33B0FD',
          taxtbaner: '#BECDE3',

          blueboton: '#2490FC',
          bluebotonhover: '#2AA7FF',

          botonbluelight: '#BBCFF0',
          botonbluelighthover: '#D9F0FF',
          
          selected: '#1C4E7B',

          bluelanz:'#24385B',
          bluelanzhover: '#40587C',

          blueagenda: '#0791E6',
          blueagendahover: '#33B1FF',

          banne2: '#0C1633',

          fonban2: '#0791E6',

          
        },
        green: {
          light: '#8FC93C',

          botongreenlight: '#62C8AB',
          botongreenlighthover: '#72E8C6',

          botongreen: '#AEDA00',
          botongreenhover: '#CAFD00',

          botongreendark:'#43C300',
          botongreendarkhover: '#4EE200',

          btongree: '#8FE160',
          btongreehover: '#A6FF6F',
        },
        red: {
          redboton: '#FF6363',
          redbotonhover: '#FF7475',
        },
        yellow: {
          yellowboton: '#E7C721',
          yellowbotonhover: '#FFE926',

          yellowbotonlight: '#F3C243',
          yellowbotonhoverlight: '#FFE14E',
        },
      },
      fontFamily: {
       'roboto': ['roboto'],
       'sans': ['ui-sans-serif', 'system-ui'],
       'serif': ['ui-serif', 'Georgia'],
       'mono': ['ui-monospace', 'SFMono-Regular'],
       'display': ['Oswald'],
       'body': ['Open Sans'],
      },
      screens: {
        'sm':'300px', //300-600 iphone 5s
        // => @media (min-wipxdth: 200px) { ... }

        'sms': '375px', //600-768 iphone xs
        // => @media (min-wipxdth: 600px) { ... }

        'md': '768px', //768-1024 tablets
        // => @media (min-width: 768px) { ... }

        'lg': '1024px', //1024-1440 potatiles
        // => @media (min-width: 1024px) { ... }

        'llg': '1280px', //1280-1440 potatiles
        // => @media (min-width: 1280) { ... }

        'xl': '1440px', //1280-1920 desktop
        // => @media (min-width: 1440) { ... }

        'xll': '1920px', //19200-2560 desktop
        // => @media (min-width: 1920) { ... }

        'xxl':'2200px', //2560...
        // => @media (min-width: 2560px) { ... }
      },
      stroke: {
        current: 'currentColor',
      },
    stroke: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
