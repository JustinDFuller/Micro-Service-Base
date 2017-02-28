module.exports = {
   parser: 'babel-eslint',
   extends:[
     'airbnb',
   ],
   plugins: [
     'flowtype',
   ],
   env: {
     node: true,
     es6: true,
   },
   rules: {
     'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
   },
};
