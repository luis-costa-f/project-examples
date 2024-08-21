import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off", // Desativa a regra se não for necessário importar o React
            "indent": ["error", 4, { "SwitchCase": 1 }], // Configura a indentação para 4 espaços
            "semi": ["error", "always"], // Garante que o ponto e vírgula seja obrigatório
        },
    },
];