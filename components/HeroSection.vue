<template>
    <div class="hero-section">
        <h1 class="main-heading">Welcome to Team 1nf1n1ty</h1>
        <span class="sub-heading">The cybersecurity club of SASTRA University</span>
    </div>
    <div class="intro">
        <div class="img-group">
            <a href="https://ctftime.org/team/151859" target="_blank">
                <img loading="lazy" class="pointer undraggable" alt="1nf1n1ty pointer" :src="pointer" />
                <img loading="lazy" sizes="md:250px lg:500px" class="team-logo undraggable" alt="1nf1n1ty logo" :src="logo_" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeroSection",
    data() {
        let logo_ = "/images/1nf1n1ty.webp";
        let pointer = "/images/pointer.webp";
        return {
            logo_,
            pointer,
        }
    }
}
</script>

<style>
.hero-section {
    height: calc(100vh - 6.4rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* line-height: 5; */
    gap: 3.6rem;
    padding: 0 4.8rem;
}

.main-heading {
    line-height: 1.5;
    font-size: 6.4rem;
    text-align: center;
}

.sub-heading {
    font-size: 2.4rem;
    text-align: center;
}

.intro {
    height: calc(100vh - 6.4rem);
    display: flex;
    justify-content: center;
    align-items: center;
}

.undraggable {
    /* user-drag: none; */
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.img-group {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
}

.pointer {
    position: absolute;
    left: -30%;
    bottom: -5%;

}

@media (max-width: 1024px) {
    .img-group {
        width: 500px;
    }

}

@media (max-width: 768px) {
    .img-group {
        width: 350px;
    }

    .pointer {
        left: -45%;
        bottom: -60%;
    }
}

@media (max-width: 640px) {
    .img-group {
        width: 280px;
    }

    .pointer {
        width: 200px;
        left: -50%;
        bottom: -40%;
    }
}

@media (max-width: 520px) {
    .img-group {
        width: 250px;
    }

    .pointer {
        left: -55%;
        bottom: -40%;
    }
}

@media (max-width: 460px) {
    .img-group {
        width: 200px;
    }

    .pointer {
        width: 150px;
    }
    .main-heading {
    font-size: 4.8rem;
    text-align: center;
}

.sub-heading {
    font-size: 2rem;
    text-align: center;
}
}

@media (max-width: 385px) {
    .img-group {
        width: 180px;
    }
    .team-logo{
        width: 180px;
    }
}

@media (max-width: 335px) {
    .img-group {
        width: 120px;
    }
    .pointer {
        width: 100px;
    }

}

</style>