module.exports = {
    "env": {
        "browser": false,
        "es2021": true,
        "node": true
    },
    "globals": {
        "require": true,
        "process": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
      "no-console": "warn",
    }
};
