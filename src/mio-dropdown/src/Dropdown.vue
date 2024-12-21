<script>
export default {
    name: "mio-dropdown"
}
</script>

<script setup>
import { provide, onMounted } from "vue";
import Utils from "../../utils";

const props = defineProps({
    width: {
        type: String,
        default: "100PX"
    }
})

const UUID = Utils.General.GenerateUUID();

let nodeDropdown = null;
let nodeDropdownTrigger = null;
let nodeDropdownMenu = null;
let eventMenuFocusout = null;
let eventTriggerClick = null;
let eventDocumentClick = null;

function initializeNode() {
    nodeDropdown = document.getElementById('MiO-Dropdown-' + UUID);
    nodeDropdownTrigger = document.getElementById("MiO-Dropdown-Trigger-" + UUID);
    nodeDropdownMenu = document.getElementById("MiO-Dropdown-Menu-" + UUID);
}

function initializeEventTrigger() {
    eventTriggerClick = () => {
        if (nodeDropdownTrigger && nodeDropdownMenu) {
            nodeDropdownMenu.classList.toggle("active");
            nodeDropdownTrigger.classList.toggle("active");

            handlePopupDirection();
            initializeEventDocument();
        }
    }

    nodeDropdownTrigger.addEventListener("click", eventTriggerClick);
}

function initializeEventMenu() {
    eventMenuFocusout = () => {
        if (nodeDropdownTrigger && nodeDropdownMenu) {
            nodeDropdownTrigger.classList.remove("active");
            nodeDropdownMenu.classList.remove("active");
        }
    }

    nodeDropdownMenu.addEventListener("focusout", eventMenuFocusout);
}

function initializeEventDocument() {
    eventDocumentClick = (event) => {
        const _target = event.target;

        if (!_target.id.includes(UUID)) {
            if (nodeDropdownTrigger && nodeDropdownMenu) {
                nodeDropdownTrigger.classList.remove("active");
                nodeDropdownMenu.classList.remove("active");
                document.removeEventListener("click", eventDocumentClick);
            }
        }
    }

    document.addEventListener("click", eventDocumentClick);
}

function handlePopupDirection() {
    if (!nodeDropdown || !nodeDropdownMenu || !nodeDropdownTrigger) {
        return false;
    } else {
        const _dropdownPosition = Utils.General.GetNodePosition(nodeDropdown);
        const dropdownHeight = nodeDropdown.offsetHeight;

        if ((_dropdownPosition.bottom * 0.96) < dropdownHeight) {
            nodeDropdownTrigger.classList.remove("bottom");
            nodeDropdownMenu.classList.remove("bottom");
            nodeDropdownTrigger.classList.add("top");
            nodeDropdownMenu.classList.add("top");
        } else {
            nodeDropdownTrigger.classList.remove("top");
            nodeDropdownMenu.classList.remove("top");
            nodeDropdownTrigger.classList.add("bottom");
            nodeDropdownMenu.classList.add("bottom");
        }
    }
}

provide("UUID", UUID);

onMounted(() => {
    initializeNode();
    initializeEventTrigger();
    initializeEventMenu();

    handlePopupDirection();
})
</script>

<template>
    <div :id="'MiO-Dropdown-' + UUID" class="mio-dropdown" :style="'width: ' + width">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-dropdown {
    position: relative;
    box-sizing: border-box;
    height: 36PX;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1PX solid rgba(226, 226, 226, 1);
    box-shadow: 0 0 12PX rgba(226, 226, 226, 0.3);
}
</style>
