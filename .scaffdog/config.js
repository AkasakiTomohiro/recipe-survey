export default {
  files: ['*'],
  helpers: [
    (registry) => {
      registry.set('pathConvert', (_context, value, _size, _str) => {
        if(value.charAt(value.length - 1) !== '/') value = value + '/';
        if(value.charAt(0) === '/') value = value.replace('/', '');
        return value;
      })
    }
  ]
};