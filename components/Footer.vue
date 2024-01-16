<template>
    <footer>
        <span class="logo-heading">1nf1n1ty</span>
        <span class="copyrights">&copy; 1nf1n1ty {{ currentYear }} </span>
        <ul class="quick-links">
            <li>
                <a href="https://blog.1nf1n1ty.team/writeups/" target="_blank" class="unselectable">Blogs</a>
            </li>
            <li><NuxtLink to="/join">Join Us</NuxtLink></li>
            <li><NuxtLink to="/members">Members</NuxtLink></li>
        </ul>
    </footer>
</template>

<style>
footer {
    display: flex;
    height: 6.4rem;
    background-color: #000;
    justify-content: space-between;
    align-items: center;
    padding: 0 3.6rem;
    position: relative;
}

.quick-links {
    display: flex;
    gap: 2.4rem;
    list-style: none;
    font-size: 1.2rem;
}

.copyrights {
    display: flex;
    position: absolute;
    right: 49%;
}
@media (max-width: 800px) {
    .copyrights {
    /* position:relative; */
    right: 49%;
} 
}
</style>

<script>
export default {
    name: "Footer",
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    },

}
</script>

