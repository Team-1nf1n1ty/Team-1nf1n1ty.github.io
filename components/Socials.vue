<template>
    <div>
        <div class="socials">
            <section>
                <h1>Connect with us at</h1>
                <div class="social-links">
                    <a target="_blank" v-for="social in socials" :href=social.link>
                        <img loading="lazy" sizes="sm:36px md:64px lg:100px" class="img-padding" :src=social.img :alt=social.alt />
                    </a>
                </div>
                <span class="underline intraction"><a href="https://discord.gg/74h9nnGFGM">Interact with the community</a></span>
            </section>
        </div>
        <div id="contact" class="contact-us">
            <section>
                <h1>Contact us!</h1>
                <span>
                    <a href="mailto:core@1nf1n1ty.team">
                        <button class="btn-pink">Write to us</button>
                    </a>
                    <NuxtLink to="/join">
                        <button class="btn-pink">Join 1nf1n1ty</button>
                    </NuxtLink>
                </span>
            </section>
        </div>
    </div>
</template>

<style>
.underline a {
    text-decoration: underline;
}

.intraction a {
    font-size: 1.6rem;
    color: var(--text-dark) !important;
    font-weight: bold;
    cursor: pointer;
}

.socials {
    height: calc(50vh - 3.2rem);
    background-color: var(--tint);
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-padding {
    background-color: var(--white);
    padding: 2.4rem;
}

.socials section h1 {
    font-size: 5.4rem;
    color: var(--text-dark);
}

.socials section {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2.4rem;
}

.social-links {
    display: flex;
    gap: 1.8rem;
}

.contact-us {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(50vh - 3.2rem);
    background-color: var(--pink);
}

.contact-us section {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    justify-content: center;
    align-items: center;
}

.contact-us section span {
    display: flex;
    gap: 2.4rem;
}

.contact-us section h1 {
    font-size: 5.4rem;
}

.btn-pink {
    background: var(--text-dark);
    border-radius: 25px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: bold;
    opacity: 1;
    padding: 1.2rem 2.2rem;
    user-select: none;
    touch-action: manipulation;
    border: 0;
    transition: all 0.3s;

}

.btn-pink:hover {
    color: var(--text-dark);
    background-color: var(--white);
}

@media (max-width: 330px) {
    .contact-us section h1 {
        font-size: 4rem;
    }

    .socials section h1 {
        font-size: 4rem;
    }
}
</style>

<script>
import socialData from "../content/socialMedia.json"
export default {
    name: "Socials",
    data() {
        return {
            socials: socialData
        };
    },
}
</script>

