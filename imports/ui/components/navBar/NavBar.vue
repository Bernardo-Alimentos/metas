<template>
    <div>
        <nav>
            <ul>
                <li v-for="route in routes" v-bind:key="route._id">
                    <router-link class="link" :to="route.path ? route.path : '/'">{{route.name}}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        routes: {
            required: true,
            type: Array
        }
    }
    
}
</script>

<style scoped>

ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
li{
    font-size: 1em;
    display: inline;
    font-family: Arial, Helvetica, sans-serif;
    border-style: solid;
    border-width: 0 1px 0 0;
    float: left;
}
.link{
    text-decoration: none;
    padding: 8px;
    color: black;
    font-size: 25px;
}
li:first-child{
    border-style: solid;
    border-width: 0 1px;
}
</style>