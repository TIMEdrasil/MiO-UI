const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: "en-US",
            label: {
                "en-US": "Switch to English",
                "zh-CN": "切换到中文"
            },
            value1: "",
            value2: "",
            value3: "value"
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
            <div style="flex: 0 0 66px; width:100%; display: flex; justify-content: center; align-items: center;">
                <mio-button radius="medium" style="margin-bottom: 20PX;" @click="handleClick">{{ label[lang === "en-US" ? "zh-CN" : "en-US"] }}</mio-button>
            </div>
            <mio-divider />
            <div>{{ value1 }}</div>
            <div>
                <mio-input v-model="value1" :label="'Name'" />
            </div>
            <mio-divider />
            <div>{{ value2 }}</div>
            <div>
                <mio-input v-model="value2" :label="'Name'" :placeholder="'enter your name'" />
            </div>
            <mio-divider />
            <div>{{ value3 }}</div>
            <div>
                <mio-input v-model="value3" :label="'Name'" :placeholder="'enter your name'" />
            </div>
        </div>
    `,
    methods: {
        handleClick() {
            this.lang = this.lang === "en-US" ? "zh-CN" : "en-US";
        }
    },
    mounted() {}
});

MiOUI.MiOButton.install(app);
MiOUI.MiODivider.install(app);
MiOUI.MiOInput.install(app);

app.mount('#MiO-UI');
