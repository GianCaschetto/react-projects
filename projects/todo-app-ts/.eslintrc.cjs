module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        //Missing return type on function off
        "@typescript-eslint/explicit-function-return-type": "off",
        //Extra semicolon off
        "@typescript-eslint/semi": "off",
        //String must have use singlequote off
        "@typescript-eslint/quotes": "off",
        //Unexpected trailing comma off
        "@typescript-eslint/comma-dangle": "off",
        //eslint-disable react/react-in-jsx-scope off
        "react/react-in-jsx-scope": "off",
        //@typescript-eslint/member-delimiter-style off
        "@typescript-eslint/member-delimiter-style": "off",

    }
}
