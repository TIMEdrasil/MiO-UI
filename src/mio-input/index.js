import Input from "./src/Index.vue";

Input.install = (app) => {
    app.component("mio-input", Input);
};

export default Input;