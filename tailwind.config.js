module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mulish-extralight': ['Mulish-ExtraLight'],
        mulish: ['Mulish-Regular'],
        'mulish-semibold': ['Mulish-SemiBold'],
        'mulish-bold': ['Mulish-Bold'],
        'mulish-extrabold': ['Mulish-ExtraBold'],
        'mulish-black': ['Mulish-Black'],
      },
      colors: {
        primary: '#018A55',
        secondary: '#2DBF62',
        grey: '#F3F6F3',
      },
      borderWidth: {
        DEFAULT: '1px',
        3: '3px',
        6: '6px',
      },
      borderRadius: {
        '4xl': '5rem',
      },
      spacing: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        148: '37rem',
        152: '38rem',
        156: '39rem',
        160: '40rem',
        164: '41rem',
        168: '42rem',
        172: '43rem',
        176: '44rem',
        180: '45rem',
        184: '46rem',
        188: '47rem',
        192: '48rem',
        196: '49rem',
        200: '50rem',
        204: '51rem',
        208: '52rem',
        212: '53rem',
        216: '54rem',
        220: '55rem',
        224: '56rem',
        228: '57rem',
        232: '58rem',
        236: '59rem',
        240: '60rem',
        244: '61rem',
        248: '62rem',
        252: '63rem',
        256: '64rem',
        260: '65rem',
        264: '66rem',
        268: '67rem',
        272: '68rem',
        276: '69rem',
        280: '70rem',
        284: '71rem',
        288: '72rem',
        292: '73rem',
        296: '74rem',
        300: '75rem',
        304: '76rem',
        308: '77rem',
        312: '78rem',
        316: '79rem',
        320: '80rem',
        324: '81rem',
        328: '82rem',
        332: '83rem',
        336: '84rem',
        340: '85rem',
        344: '86rem',
        348: '87rem',
        352: '88rem',
        356: '89rem',
        360: '90rem',
        364: '91rem',
        368: '92rem',
        372: '93rem',
        376: '94rem',
        380: '95rem',
        384: '96rem',
        388: '97rem',
        392: '98rem',
        396: '99rem',
        400: '100rem',
        424: '106rem',
        432: '108rem',
        460: '115rem',
        500: '125rem',
        600: '150rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};