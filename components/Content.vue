<template>
    <div class="details">
        <div id="about">
            <article>
                <p class="balck-text">We strive for improvements in research and innovation in the field of cybersecurity.
                </p>
                We also actively work on teaching, scientific dissemination, and knowledge transfer to society.
            </article>
        </div>
        <div class="stats-section">
            <article>
                Team 1nf1n1ty, <span class="balck-text">currently ranked 6th in India,</span> is a group of cybersecurity
                enthusiasts <span class="balck-text">proficient in various domains in CTFs.</span><br>A rapidly growing
                team that also posts
                write-ups that help the CTF community as well as beginners who are passionate about cybersecurity.
            </article>
        </div>
    </div>
</template>

<style>
.details {
    font-weight: bold;
    line-height: 1.5;
}

#about {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 6.4rem);
    padding: 0 6.4rem;
    background-color: #fff;
    font-size: 4.8rem;
    color: var(--text-leftover);
}

.balck-text {
    color: var(--text-dark);
    font-weight: bold;
}

.stats-section {
    height: calc(100vh - 6.4rem);
    background-color: #fff;
    color: var(--text-leftover);
    align-content: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 3.6rem;
    padding: 0 6.4rem;
}

@media (max-width: 500px) {
    #about {
        font-size: 4rem;
        padding: 0 4.8rem;
    }

    .stats-section {
        font-size: 3.2rem;
        padding: 0 4.8rem;
    }

}
</style>

<script>
export default {
    name: "Content"
}
</script>