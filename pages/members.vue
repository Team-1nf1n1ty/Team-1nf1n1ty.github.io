<template>
    <Html>

    <Head>
        <Title>Team 1nf1n1ty Members</Title>
        <Meta name="description" :content="`Team 1nf1n1ty is a CTF team`" />
    </Head>

    </Html>

    <div class="members">
        <div class="mentors-nav">
            <span class="navigator unselectable" :class="{ 'active-nav-change': showMentors }"
                @click="showMentors = true">Core Members</span>
            <span>|</span>
            <span class="navigator unselectable" :class="{ 'active-nav-change': !showMentors }"
                @click="showMentors = false">Team Mentors</span>
        </div>
        <div>
            <Transition name="smooth-nav">
                <div v-if="showMentors">
                    <div class="smooth-nav">Faculty Advisors</div>
                    <div class="holder-faculty">
                        <div v-for="data in facultyData" key="data.name">
                            <Card :name=data.name :role=data.role :image_link=data.image_name></Card>
                        </div>
                    </div>
                    <div class="smooth-nav">Core Team Members</div>
                    <div class="holder">
                        <div v-for="data in coreTeamData" key="data.name">
                            <Card :name=data.name :role=data.role :image_link=data.image_url :nickname=data.nickname></Card>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition name="smooth-nav-core">
                <div v-if="!showMentors" class="holder">
                    <div v-for="data in mentorsData" key="data.name">
                        <Card :name=data.name :nickname=data.nickname :role=data.role :image_link=data.image_name></Card>
                    </div>

                </div>
            </Transition>
        </div>
    </div>
</template>

<script>

import mentors from "../content/team/mentors.json";
import coreTeam from "../content/team/coreteam.json";
import faculty from "../content/team/faculty.json";
import cacheControl from "../helper/cacheControl";
export default {
    name: "Home",
    data() {
        let showMentors = true;
        return {
            showMentors,
            mentorsData: mentors,
            coreTeamData: coreTeam,
            facultyData: faculty
        }
    },
    middleware: cacheControl({
        'max-age': 3600,
        'stale-when-revalidate': 5
    }),

}
</script>

<style>
.holder-faculty {
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    flex-wrap: wrap;
    justify-content: center;
    gap: 16rem;
    margin-bottom: 8rem;
}

.smooth-nav {
    font-weight: bold;
    font-size: 3.6rem;
    text-align: center;
    margin-bottom: 4.8rem;
}

.members {
    min-height: calc(100vh - 19.2rem);
    padding: 0 6.4rem;
}

.holder {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4.8rem;
    margin-bottom: 8rem;
}

.mentors-nav {
    display: flex;
    text-align: center;
    align-items: center;
    gap: 1rem;

    font-size: 5rem;
    justify-content: center;
    margin: 6.4rem 0;
    font-weight: lighter;
}

.navigator {
    cursor: pointer;
}

.active-nav-change {
    font-weight: bold;
}

/* animation */
.smooth-nav-core-leave-active,
.smooth-nav-leave-active {
    transition: 0.5s ease all;
    position: absolute;
    opacity: 0;
}

.smooth-nav-enter-active,
.smooth-nav-core-enter-active {
    transition: 0.5s ease all;
}

.smooth-nav-core-enter-from {
    opacity: 0;
    transform: translateX(1000px);
}

.smooth-nav-core-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.smooth-nav-core-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.smooth-nav-core-leave-to {
    opacity: 0;
    transform: translateX(1000px);
}

.smooth-nav-enter-from {
    opacity: 0;
    transform: translateX(-1000px);
}

.smooth-nav-enter-to {
    opacity: 1;
    transform: translateX(0px);

}

.smooth-nav-leave-from {
    transform: translateX(0);
    opacity: 1;

}

.smooth-nav-leave-to {
    transform: translateX(-1000px);
    opacity: 0;
}

@media (max-width: 930px) {
    .mentors-nav {
        font-size: 3.6rem;
    }

    .holder {
        grid-template-columns: 1fr 1fr;
    }

    .holder-faculty {
        gap: 4rem;

    }
}

@media (max-width: 550px) {
    .mentors-nav {
        font-size: 3.2rem;
    }

    .holder {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 434px) {
    .mentors-nav {
        font-size: 2.8rem;
    }
}</style>

