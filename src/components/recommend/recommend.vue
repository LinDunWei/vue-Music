<template>
    <div> 
        <mt-swipe :auto="5000">
            <mt-swipe-item v-for="(item,index) in banner" :key="index">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" class="img"/>
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>

<script>
import {getRecommend,getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'
export default {
    created(){
        this._getRecommend();
        this._getDiscList();
    },
    
    components:{
        
    },
    data(){
        return{
            banner:''
        }
    },
    methods:{
        _getRecommend() {
            var s = this;
            getRecommend().then((res) => {
            if (res.code === ERR_OK) {
                console.log(res.data);
                s.banner = res.data.slider;
                console.log(s.banner);
            }
            })
      },
      _getDiscList(){
          getDiscList().then((res)=>{
              if(res.code === ERR_OK){
                  console.log(res);
              }
          })
      }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    img {
    width: 100%;
  }
  .mint-swipe-items-wrap{
      height : 100%
  }
  .mint-swipe {
    height: 150px;
  }
  .desc {
    font-weight: 600;
    opacity: .9;
    padding: 5px;
    height: 20px;
    line-height: 20px;
    width: 100%;
    color: #fff;
    background-color: gray;
    position: absolute;
    bottom: 0;
  }
</style>