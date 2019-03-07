module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "function-paren-newline": 0
    }
};