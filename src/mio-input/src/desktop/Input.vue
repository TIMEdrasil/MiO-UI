<script>
export default {
    name: "mio-input"
}
</script>

<script setup>
import { ref, inject, watch, onMounted } from "vue";

// Local Variables
const uuid = inject("MiO-Input-UUID");
const inputValue = inject("MiO-Input-Input_Value");
const inputLabel = inject("MiO-Input-Input_Label");
const inputPlaceholder = inject("MiO-Input-Input_Placeholder");
const visibleConfigs = ref({
    label: false,
    actions: false,
    placeholder: false
})

function handleInput(event) {
    inputValue.value = event.target.innerText;
}

function handleEnter(event) {
    console.log("Enter: ", event)
}

function setVisible() {
    if (!inputPlaceholder.value) {
        if (!inputValue.value.value) {
            visibleConfigs.value.actions = false;
            visibleConfigs.value.placeholder = false;
        } else {
            visibleConfigs.value.actions = true;
            visibleConfigs.value.placeholder = false;
        }
    } else {
        if (!inputValue.value.value) {
            visibleConfigs.value.actions = false;
            visibleConfigs.value.placeholder = true;
        } else {
            visibleConfigs.value.actions = true;
            visibleConfigs.value.placeholder = true;
        }
    }
}

onMounted(() => {
    setVisible();
})
</script>

<template>
    <div class="mio-input" contenteditable="true" @input="handleInput" @keydown.enter.prevent="handleEnter">
        <div class="mio-input-label">{{ inputLabel }}</div>
        <div :class="visibleConfigs.actions ? 'active' : ''" class="mio-input-actions">{{ inputValue.value }}</div>
        <div :class="visibleConfigs.placeholder ? 'active' : ''" class="mio-input-placeholder">{{ inputPlaceholder }}</div>
    </div>
</template>

<style lang="scss" scoped>
.mio-input {
    position: relative;
    width: 200PX;
    height: 56PX;
    background-color: rgba(250, 250, 250, 1);
    border-radius: 4PX;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    .mio-input-label {
        flex: 0;
        width: 66PX;
        background-color: transparent;
        pointer-events: none;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: rgba(46, 46, 46, 0.8);
        font-size: 14PX;
        font-weight: 600;
    }

    .mio-input-actions {
        all: unset;
        flex: 0;
        width: 100%;
        padding: 0 10PX;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: rgba(46, 46, 46, 0.9);
        font-size: 14PX;
        font-weight: 400;
        word-wrap: break-word;
        white-space: normal;

        &.active {
            flex: 1;
        }
    }

    .mio-input-placeholder {
        flex: 0;
        width: 100%;
        background-color: transparent;
        pointer-events: none;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: rgba(46, 46, 46, 0.6);
        font-size: 14PX;
        font-weight: 600;

        &.active {
            flex: 1;
        }
    }
}
</style>