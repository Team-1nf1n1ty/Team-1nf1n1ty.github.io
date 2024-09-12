<template>
    <button class="btn-use">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "Button"
        }, textColor: {
            type: String,
            default: "black"
        }, backgroundColor: {
            type: String,
            default: "white"
        }, hoverColor: {
            type: String,
            default: "black"
        }, hoverText: {
            type: String,
            default: "white"
        }
    }
}
</script>

<style>
.btn-use {
    color: var(--text-color);
    background-color: var(--background-color);
    border-radius: 25px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: bold;
    opacity: 1;
    padding: .6rem 1.8rem;
    user-select: none;
    touch-action: manipulation;
    border: 0;
    transition: all 0.3s;
}

.btn-use:hover {
    color: var(--hover-text);
    background-color: var(--hover-color);
}
</style>