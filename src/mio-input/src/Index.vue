<script>
export default {
    name: "MiO-Input-Index"
}
</script>

<script setup>
import { ref, watch, provide, computed } from "vue";
import Utils from "../../utils/index.js";

// Components
import MioDesktop from "./desktop/Input.vue";
import MioMobile from "./mobile/Input.vue";

// Global Variables
const Props = defineProps({
    modelValue: {
        type: [String, Number, null],
        default: null
    },
    deviceType: {
        type: String,
        default: "desktop"
    },
    label: {
        type: String,
        default: null
    },
    placeholder: {
        type:  [String, null],
        default: null
    },
    type: {
        type: String,
        default: null
    }
});
const Emits = defineEmits(["update:modelValue"]);

// Local Variables
const uuid = Utils.General.GenerateUUID();
const deviceType = ref("desktop")
const inputValue = ref(null);
const inputLabel = ref(null);
const inputPlaceholder = ref(null);

watch(() => Props.modelValue, (newValue) => {
    inputValue.value = newValue;
}, { immediate: true })
watch(() => Props.deviceType, (newValue) => {
    if (!newValue) {
        deviceType.value = "desktop";
    } else {
        deviceType.value = newValue;
    }
}, { immediate: true })
watch(() => Props.label, (newValue) => {
    inputLabel.value = newValue;
}, { immediate: true })
watch(() => Props.placeholder, (newValue) => {
    inputPlaceholder.value = newValue;
}, { immediate: true })

provide("MiO-Input-UUID", uuid);
provide("MiO-Input-Device_Type", deviceType);
provide("MiO-Input-Input_Value", computed({
    get: () => inputValue,
    set: (newValue) => {
        Emits("update:modelValue", newValue);
    }
}));
provide("MiO-Input-Input_Label", inputLabel);
provide("MiO-Input-Input_Placeholder", inputPlaceholder);
</script>

<template>
    <mio-desktop v-if="deviceType === 'desktop'" :id="'MiO-Input-' + uuid" />
    <mio-mobile v-else :id="'MiO-Input-' + uuid" />
</template>