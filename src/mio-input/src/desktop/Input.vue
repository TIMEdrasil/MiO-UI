<script>
export default {
    name: "mio-input"
}
</script>

<script setup>
import { ref, inject, watch, onMounted, onUnmounted } from "vue";

// Local Variables
let nodeInput = null;
let nodeLabel = null;
let nodeActions = null;
let nodePlaceholder = null;
let eventInputClick = null;
let eventInputMouseenter = null;
let eventInputMouseleave = null;
let eventInputFocusout = null;
let eventActionsMouseleave = null;
let eventActionsFocus = null;
let eventActionsFocusout = null;

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
    // console.log("Enter: ", event)
}

function initializeInputEvent() {
    eventInputMouseenter = () => {
        // console.log("Actions | Mouseenter")
        visibleConfigs.value.label = true;
        visibleConfigs.value.actions = true;
        visibleConfigs.value.placeholder = false;
    }
    eventInputMouseleave = () => {
        // console.log("Actions | Mouseleave")
        initializeVisible();
    }
    eventInputClick = (event) => {
        // console.log("Input | Click")
        const nodeInput = event.target
        if (nodeInput) {
            const nodeId = nodeInput.id;

            if (!nodeId.includes(uuid)) {
                initializeVisible();
            }
        }
    }

    nodeInput.addEventListener("mouseenter", eventInputMouseenter);
    nodeInput.addEventListener("mouseleave", eventInputMouseleave);
    // window.addEventListener("click", eventInputClick)
}

function initializeActionsEvent() {
    eventActionsFocusout = () => {
        // console.log("Actions | Focusout")
        initializeVisible();
    }

    nodeActions.addEventListener("focusout", eventActionsFocusout);
}

function initializeVisible() {
    switch (inputValue.value.value.trim()) {
        case null:
        case undefined:
        case "":
            visibleConfigs.value.label = false;
            visibleConfigs.value.actions = false;

            if (inputPlaceholder.value) {
                visibleConfigs.value.placeholder = true;
            } else {
                visibleConfigs.value.placeholder = false;
            }
            break
        default:
            visibleConfigs.value.label = true;
            visibleConfigs.value.actions = true;
            visibleConfigs.value.placeholder = false;
    }
}

onMounted(() => {
    initializeVisible();

    nodeInput = document.getElementById("MiO-Input-" + uuid);
    nodeLabel = document.getElementById("MiO-Input-Label-" + uuid);
    nodeActions = document.getElementById("MiO-Input-Actions-" + uuid);
    nodePlaceholder = document.getElementById("MiO-Input-Placeholder-" + uuid);

    initializeInputEvent();
    initializeActionsEvent();
})

onUnmounted(() => {
    nodeInput.removeEventListener("mouseenter", eventInputMouseenter);
    nodeInput.removeEventListener("mouseleave", eventInputMouseleave);
    window.removeEventListener("click", eventInputClick)

    nodeActions.removeEventListener("focusout", eventActionsFocusout);
})
</script>

<template>
    <div class="mio-input">
        <div :id="'MiO-Input-Label-' + uuid" :class="visibleConfigs.label ? 'active' : inputPlaceholder ? 'placeholder' : ''" class="mio-input-label">{{ inputLabel }}</div>
        <div :id="'MiO-Input-Actions-' + uuid" :class="visibleConfigs.actions ? 'active' : ''" class="mio-input-actions" contenteditable="true" @input="handleInput" @keydown.enter.prevent="handleEnter">{{ inputValue.value }}</div>
        <div :id="'MiO-Input-Placeholder-' + uuid" :class="visibleConfigs.placeholder ? 'active' : ''" class="mio-input-placeholder">{{ inputPlaceholder }}</div>
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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        pointer-events: none;
        padding: 0 10PX;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: rgba(46, 46, 46, 0.8);
        font-size: 14PX;
        font-weight: 600;
        transition-property: all;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;

        &.active {
            position: absolute;
            top: -25%;
            left: 0;
            color: rgba(46, 46, 46, 0.8);
            font-size: 14PX;
            font-weight: 600;
        }

        &.placeholder {
            height: 80%;
        }
    }

    .mio-input-actions {
        all: unset;
        flex: 0;
        height: 0;
        width: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: rgba(46, 46, 46, 0.9);
        font-size: 14PX;
        font-weight: 400;
        word-wrap: break-word;
        white-space: normal;
        opacity: 0;
        transition-property: opacity;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;

        &.active {
            flex: 0 0 50%;
            width: 100%;
            padding: 0 10PX;
            opacity: 1;
        }
    }

    .mio-input-placeholder {
        flex: 0;
        height: 0;
        width: 0;
        background-color: transparent;
        pointer-events: none;
        padding: 0 10PX;
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
        opacity: 0;
        transition-property: opacity;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;

        &.active {
            flex: 0 0 50%;
            width: 100%;
            opacity: 1;
        }
    }
}
</style>