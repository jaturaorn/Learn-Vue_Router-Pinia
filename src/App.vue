<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <div>
  <div>
    Page:
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/profile" style="margin-left: 50px;">Profile</RouterLink>
  </div>
   <RouterView />
 </div>

</template>
