<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
    <div class="navbar">
      <meu-nav-bar :routes="routes"/>
    </div>

    <transition name="slide">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script>


import { routes } from '../../client/routes'
import NavBar from '../ui/components/navBar/NavBar'

export default {
  components: {
    'meu-nav-bar': NavBar
  },
  data(){
    return{
      routes
    }
  }
}
</script>

<style>

  body {
    font-family: sans-serif;
    padding: 10px;
  }
  .navbar{
    display: block;
  }
  .slide-leave-active, .slide-enter-active{
    transition: 80ms;
  }

  .slide-enter {
    transform: translateX(100%);
  }
  .slide-leave-to{
    transform: translateX(-100%);
  }
</style>
