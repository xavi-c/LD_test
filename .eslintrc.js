module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "jquery": true,
        "jasmine": true,
        "es6": true,
    },
    "extends": [
        "eslint:recommended",
        //"airbnb",
        "prettier",
        "plugin:vue/essential",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "rules": {
        /*"indent": [
            "error",
            "tab"
        ],*/
        "linebreak-style": [
            "error",
            "unix"
        ],
        /*"quotes": [
            "error",
            "single"
        ],*/
        "semi": [
            "error",
            "always"
        ],
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "no-console":[
            "error",
            {allow: ["log", "table"]}
        ],
        "no-unused-vars": 0,
        //"linebreak-style": 0,
        /*"node/no-missing-import": 2,
        "node/no-missing-require": 2,
        "node/no-unpublished-import": 2,
        "node/no-unpublished-require": 0,
        "node/no-unsupported-features": [2, {"version": 4}],
        "node/shebang": 2*/
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 120,
                "useTabs": true
            }
        ],
    },
    "settings": {
        "import/resolver": "webpack",
    },
    "plugins": [
        "requirejs",
        "prettier",
        "vue"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module",
    },
};
