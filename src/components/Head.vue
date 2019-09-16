<template>
  <div class="top">
    <div class="mask"></div>
    <div class="content">
      <div class="logo"><img src="" alt="logo">
      </div>
      <div class="nav">
        <ul>
          <li v-for="(item,index) in nav" @click="checkNav(index,topnav)" :key="item.name">
            <router-link to="/">
              <span v-bind:class="index==topnav ? 'isTopNav' : '' ">{{item.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="login"><a @click="forLogin()">登录</a> | <a @click="forRegister()">注册</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      nav: [
        {name: '首页'},
        {name: '趣味家庭'},
        {name: '实用推荐'},
        {name: '个人中心'},
        {name: '关于本站'}
      ],
      index: false,
      topnav: 0
    }
  },
  mounted () {
    let thisPath = this.$route.path
    if (thisPath === '/toIndex') {
      this.topnav = 0
    } else if (thisPath === '/funFamily') {
      this.topnav = 1
    } else if (thisPath === '/practicalRecommend') {
      this.topnav = 2
    } else if (thisPath === '/person') {
      this.topnav = 3
    } else if (thisPath === '/about') {
      this.topnav = 4
    }
  },
  methods: {
    checkNav (index) {
      this.topnav = index
      if (index === 0) {
        this.$router.push({path: '/toIndex'})
      } else if (index === 1) {
        this.$router.push({path: '/funFamily'})
      } else if (index === 2) {
        this.$router.push({path: '/practicalRecommend'})
      } else if (index === 3) {
        this.$router.push({path: '/person'})
      } else if (index === 4) {
        this.$router.push({path: '/about'})
      }
    },
    forLogin () {
      this.$router.push({path: '/login'})
    },
    forRegister () {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style scoped>
  .top{
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
  }
  .top,.mask,.content{
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
  }
  .mask{
    width: 100%;
    background: #9d9d9d;
    opacity: .2;
  }
  .logo,.nav{
    position: relative;
    top: 0;
  }
  .logo{
    float: left;
    margin-left: 20%;
    width: 100px;
    height: 100px;
    background: #42b983;
    border-radius: 50%;
  }
  .nav{
    margin:30px 30% 0  0;
    width: 40%;
    float: right;
  }
  .nav ul{
    font-size: large;
    right: 25%;
    display: flex;
  }
  .nav li{
    list-style: none;
  }
  .nav li a{
    text-decoration: none;
  }
  .nav li span{
    margin: 0 18px;
    position: relative;
    color: #262626;
    font-size: 20px;
    display: block;
    text-align: center;
    text-transform: uppercase;
    padding: 5px 10px;
  }
  .nav li span:hover{
    color: #42b983;
  }
  /* 当前页面 */
  .isTopNav{
    color:#42b983 !important;
    border-bottom: 1px solid #42b983 !important;
  }
  /* 登录注册 */
  .login{
    font-size: 16px;
    float: right;
    margin: -25px 13% 0 0;
    width: 20%;
    text-decoration: none;
  }
  .login a{
    text-decoration: none;
    cursor: pointer;
  }

</style>
