<template>
  <div class="HomePage">
    <div class="homeLeft">
        <div class="banner">
          <el-carousel height="300px">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
              <img class="bannerbox" :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="hr"></div>
        <ul class="comtent">
          <li class="article" v-for="(item,index) in list" :key="index+'list'">
            <h2>{{item.title}}</h2>
            <p>{{item.content}}</p>
          </li>
        </ul>
    </div>
    <div class="homeRight">
      <div class="right-top"></div>
      <div class="right-bottom"></div>
    </div>
  </div>
</template>
<script>
import AV from "../key";
export default {
  name:'HomePage',
  data(){
    return {
      banner:[
        require('../assets/banner1.png'),
        require('../assets/banner2.png'),
        require('../assets/banner3.png')
      ],
      list:[
        {
          title:'微信服务器为这个会话生成一个全局唯一的',
          content:'很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因'
        },
        {
          title:'微信服务器为这个会话生成一个全局唯一的',
          content:'很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因'
        },
        {
          title:'微信服务器为这个会话生成一个全局唯一的',
          content:'很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因很多人肯定都听过或者已经加入自媒体大军了，成为一个自媒体人，但是可能都觉得小编在胡说，自己的文章没有阅读，自己的视频没有播放，几个月才赚了几百块甚至几十块，何来月入过万？一个行业不可能都赚钱，天底下也没有那么好赚的钱，自己看看自己的作品和那些大佬的区别也许就能找到原因'
        },
      ]
    }
  },
  methods:{
   
  }
}
</script>
<style lang="scss" scoped>
  .HomePage{
    width: 1200px;
    // height: 500px;
    background: rgba(250, 250, 250,0.5 );
    margin: 30px auto;
    position: relative;

    .homeLeft{
      width: 65%;
      height: 500px;
      // background: #fff;
      // padding: 30px;
      box-sizing: border-box;
    }
    
    .banner{
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
    }
    .bannerbox{
      width: 780px;
      height: 300px;
    }
    .hr{
      width: 100%;
      height: 1px;
      background: #f0f0f0;
      margin: 20px 0;
    }
    .comtent{
      width: 100%;
      
    }
    .article:last-child{
      margin-bottom: 0;
      border: none;
    }
    .article{
      width: 100%;
      // max-height:150px;
      overflow: hidden;
      list-style: none;
      margin-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;
      h2{
        font-size: 18px;
        font-weight: 700;
        line-height: 2;
        
      }
      p{
        margin-bottom: 20px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    .homeRight{
      width: 32%;
      // height: 300px;
      // background: #999;
      position: absolute;
      right: 0;
      top: 0;
      .right-top{
        width: 100%;
        height: 300px;
        background: #999;
        margin-bottom: 40px;
      }
      .right-bottom{
        width: 100%;
        height: 400px;
        background: #999;
      }
    }
    
    
    
  }
</style>


