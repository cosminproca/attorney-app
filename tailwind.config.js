module.exports = {
  mode: 'jit',
  content: ['./resources/**/*.{js,ts,vue,blade.php}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
