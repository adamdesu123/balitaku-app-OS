<template>
    <div id="app2">
  <div :style="{ 'margin-left': sidebarWidth }">
    <Sidebar></Sidebar>
    <main class="page-content">
      <router-view/>
    </main>
    <BotFooter></BotFooter>
  </div>
  <TopNavbar></TopNavbar>
</div>
</template>
<script>
import Sidebar from '@/components/sidebar/Sidebar'
import TopNavbar from '@/components/TopNavbar'
import BotFooter from '@/components/BotFooter'
import { sidebarWidth } from '@/components/sidebar/state'

export default {
    name: "dashboard",
    components:{
        TopNavbar,
        Sidebar,
        BotFooter
    },
    setup() {
    return { sidebarWidth }
  }
};
</script>
<style>
.page-content{
    padding: 90px 2% 50px 2%;
    background: #eee;
    min-height: 100vh;
}
</style>
<style src="../../assets/css/DashStyle.css">
</style>
