<template>
    <nav class="nav">
        <ul>
            <router-link to="/" tag="li" exact active-class="active">
                <a href="#">Tasks</a>
            </router-link>
            <router-link to="/one" tag="li" active-class="active">
                <a href="#">One</a>
            </router-link>
            <router-link to="/two" tag="li" active-class="active">
                <a href="#">Two</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav {
        width: 100%;
        height: 100px;
        background-color: blue;
    }

    ul {
        padding: 10px;
        display: grid;
        grid-template-columns:
            min-content
            min-content
            min-content
        ;
    }

    li {
        border: 1px solid white;
        list-style-type: none;
        transition: 0.3s;
    }

    li:hover {
        background-color: black;
    }

    .active {
        background-color: blueviolet;
    }

    a {
        display: block;
        padding: 10px;
        color: white;
        text-decoration: none;
    }
</style>
