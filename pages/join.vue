<template>
    <div class="main-join">
        <div class="container-all">
            <div class="logo-center">
                <img sizes="md:250px lg:500px" class="team-logo undraggable" alt="1nf1n1ty logo" :src="logo_" />
            </div>
            <div class="data-container">
                <h1 class="heading text-white">
                    Join the team!
                </h1>
                <p class="mt-4 text-white text-l">
                    Team 1nf1n1ty, a leading Capture The Flag (CTF) team in India, is inviting passionate cybersecurity enthusiasts from SASTRA University to join its ranks. As a member, you'll tackle challenging problems, hone your skills, and engage in competitions. We're seeking dedicated individuals with a solid understanding of cybersecurity and hacking concepts. If you're a SASTRA University student excited about pushing your skills to new heights, apply now to become part of Team 1nf1n1ty!
                </p>
                <div class="mt-4">
                    <div class="mt-4 flex items-center space-x-4">
                        <span class="text-2xl text-[#FF0054]">
                            <!-- The team is currently not recruiting you can provide your details here and we will notify you about recruitment when they start.  -->
                        </span>
                    </div>
                </div>
                <a href="mailto:ctf@1nf1n1ty.team?subject=Interested in Joining the CTF Team">
                    <div class="btn-white">Join 1nf1n1ty</div>
                </a>
                <!-- <form class="mt-6 form-container">
                    <div class="flex w-full max-w-md flex-col space-y-4">
                        <input
                            class="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-5 py-10 text-l placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-large"
                            type="text" placeholder="Name" v-model="form.name" name="name" />
                        <input v-model="form.email"
                            class="flex h-10 w-full rounded-md border border-white/30 bg-transparent px-5 py-10 text-l placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 input-large"
                            type="email" placeholder="Email" name="email" />
                        <button @click.prevent="validateForm" :class="{ disabled: form.sending }" id="button-newsletter"
                            type="submit" class="btn-notify">Notify Me</button>

                            <transition name="status">
                                <div v-if="form.errors.length" :class="form.success ? 'alert-success alert' : 'alert alert-error '"
                                class="alert error-box" role="alert">
                                <ul>
                                    <li v-for="(error, index) in form.errors" v-bind:key="index">
                                        {{ error }}
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </form> -->
            </div>
        </div>
    </div>
</template>
<style>
.main-join {
    font-size: 16px;
    display: flex;
    min-height: calc(100vh - 12.8rem);
    justify-content: center;
    align-items: center;
    padding: 1rem 6.4rem;
    flex-direction: column;
    gap: 1rem;

}
.error-box{
    margin-top: 1rem;
    width: 100%;
    padding: 20px 10px;
}
.btn-notify {
    color: black;
    background-color: #fff;
    border-radius: 10px;
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

.btn-notify:hover {
    color: #fff;
    /* color: var(--hover-text); */
    background-color: transparent;
    /* background-color: var(--hover-color); */
}

.heading {
    font-size: 3.6rem;
    font-weight: bold;
    letter-spacing: 1.5px;
}

.data-container {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.logo-center {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-all {
    display: flex;
    align-items:center;
}

@media (max-width: 1024px) {
    .container-all {
        flex-direction: column;
    }

    .data-container,
    .logo-center {
        width: 100%;
    }
    .allowed{
        text-align: center;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
<script>
import axios from 'axios'
export default {
    name: "HeroSection",
    data() {
        let logo_ = "/images/1nf1n1ty.webp";
        return {
            logo_,
            form: {
                email: "",
                mail: "",
                errors: [],
                validated: false,
                sending: false,
                success: false,
            },
        }
    },
    methods: {
        validateForm() {
            this.form.success = false;
            this.form.errors = [];

            if (!this.form.email) {
                this.form.errors.push('Email required.');
            } else if (!this.validEmail(this.form.email)) {
                this.form.errors.push('Valid email required.');
            }

            if (!this.form.errors.length) {
                this.notify();
                return true;
            } else {
                this.closeFormStatus();
            }
        },

        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        closeFormStatus() {
            setTimeout(() => {
                this.form.errors = [];
            }, 3000);
        },

        resetFormEmail() {
            setTimeout(() => {
                this.form.email = '';
                this.form.name = '';
            }, 3000);
        },

        async notify() {
            this.form.sending = true;
            this.form.errors.push('Sending...');
            try {
                const response = await axios.post('/api/v2/notify', { email: this.form.email, name: this.form.name });
                this.form.success = true;
                this.resetFormEmail();
                console.log(response)
                if (response.data.error) {
                    this.form.errors.pop();
                    this.form.errors.push(`Error (${response.data.error})`);
                    this.form.success = false;
                }
                else {
                    this.form.errors.push(`Thank you: ${this.form.name} ${response.data.data}!`);
                    this.form.success = true;
                }
            } finally {
                this.closeFormStatus();
                this.form.sending = false;
            }
        }
    }
}
</script>