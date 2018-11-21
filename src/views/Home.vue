<template>
  <div class="home">
    <index-menu></index-menu>
    <router-view/>
  </div>
</template>

<script>
import AV from "../key";
import IndexMenu from "../components/IndexMenu"
export default {
  name: "home",
  components: {
    IndexMenu
  },
  created(){
    // this.$nextTick(function (){
    //   var currentUser = AV.User.current();
    //   console.log(currentUser)
    //   var currentUserId = currentUser['id'];
    //   var query = new AV.Query('_User');
    //   query.equalTo('currentUserId', currentUserId);
    //   query.find().then(function (lists) {
    //                 console.log(lists)
    //             })

      
    // })
    
  }
};
</script>
<style lang="scss" scoped>
  
</style>

