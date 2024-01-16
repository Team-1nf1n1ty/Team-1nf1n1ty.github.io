<template>
    <div class="loader">
        <svg viewBox="-2000 -1000 4000 2000">
            <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
            <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use>
        </svg>
    </div>
</template>

<style>
.loader{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
svg {
    max-width: 50rem;
    border-radius: 3px;
    fill: none;
    stroke: #FF0054;
    stroke-linecap: round;
    stroke-width: 8%
}

use {
    stroke: #fff;
    animation: a 0.8s linear infinite
}

@keyframes a {
    to {
        stroke-dashoffset: 0px
    }
}
</style>