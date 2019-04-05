<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: seagreen">
        <router-link class="navbar-brand" to="/" >
            <img alt="Vue logo" src="https://image.flaticon.com/icons/png/128/1599/1599270.png" height="30">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                    <router-link class="nav-link" to="/" active-class="active" exact>Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/About" active-class="active">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/MyFriends" active-class="active">My Friends</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style>
</style>