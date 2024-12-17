const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            lang: "en-US",
            label: {
                "en-US": "Switch to English",
                "zh-CN": "切换到中文"
            },
            value: ""
        }
    },
    template: `
        <div style="width:100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-start;">
            <div style="flex: 0 0 66px; width:100%; display: flex; justify-content: center; align-items: center;">
                <mio-button radius="medium" style="margin-bottom: 20PX;" @click="handleClick">{{ label[lang === "en-US" ? "zh-CN" : "en-US"] }}</mio-button>
            </div>
            <div>{{ value }}</div>
            <mio-divider />
            <div>
                <mio-input v-model="value" :label="'Name'" />
            </div>
            <mio-divider />
            <div>
                <mio-input v-model="value" :label="'Name'" :placeholder="'enter your name'" />
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
