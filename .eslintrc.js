module.exports = {
   extends: 'airbnb',
   env: {
     node: true,
     es6: true,
   },
   rules: {
     'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
   },
};
