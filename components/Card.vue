<template>
        <div class="card">
            <img class="member-img" v-bind:src="getImage()" :alt="name" loading="lazy"/>
            <span class="name">{{name}}</span>
            <span v-if=nickname class="nickname">{{nickname}}</span>
            <div v-if="role" class="role" v-for="_role in String(role).split('&')">
                <span v-if=_role.trim()>{{_role}}</span>
            </div>
        </div>
</template>
<style>

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 1rem; */
}
.member-img{
    border-radius: 50%;
    width: 300px;
}
.name{
    margin: 0.75rem;
    font-size: 3rem;
    font-weight: bold;
}
.nickname{
    margin: 0.25rem 0 1rem 0;
    font-size: 2rem;
    font-weight:500;
}
.aka{
    margin: -0.8rem;
    font-size: 1.8rem;
    font-weight:500;
}
.role{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    font-size: 2rem;
}
@media (max-width: 500px) {
    .member-img{
    border-radius: 50%;
    width: 200px;
}
}

</style>
<script>

    export default{
        name:"card",
        props:["name", "image_link", "role", "nickname"],
        data(){
            const getImage = () =>{
                return `${this.image_link}`
            }
            return{
                getImage
            }
        }
    }
</script>