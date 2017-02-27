module.exports = {
   extends: 'airbnb',
   env: {
     browser: true,
     commonjs: true,
     es6: true,
   },
   rules: {
     'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
   },
};
