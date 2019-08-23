<template>
    
    <div class="container">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <ul class="navbar-nav mr-auto">
                <router-link to="/" class="nav-link">Home</router-link>
                <li class="navbar-brand">Profile</li>
                <router-link to="list" class="nav-link">To Do's</router-link>
                <router-link to="item" class="nav-link">Items</router-link>
                
            </ul>

        </nav>
<router-view></router-view>
    </div>


</template>

<script>
export default {
   
    }
    

</script> 