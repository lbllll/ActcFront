<template>
    <div class="wellcome">
      <div class="mask">
        <div class="content">
          <div class="c-title">wellcome to our actc</div>
          <div class="c-content">everyone can take charge</div>
          <div class="c-img3"><img src="../assets/img/wellcomeimg/wheat.png" alt=""></div>
          <div class="c-img4"><img src="../assets/img/wellcomeimg/wheat-bottom.png" alt=""></div>
          <div class="c-img1"><img src="../assets/img/wellcomeimg/线.png" alt=""></div>
          <div class="c-img1"><img src="../assets/img/wellcomeimg/线.png" alt=""></div>
          <div class="c-img2">|</div>
          <div class="toIndex" @click="toIndex">===>跳过动画，立即前往！</div>
        </div>
        <transition name="tomato">
          <div class="tomato"></div>
        </transition>
        <transition name="unknownFood1">
          <div class="unknownFood1"></div>
        </transition>
        <div class="lemon"><img src="../assets/img/wellcomeimg/柠檬.png" alt=""></div>
        <div class="unknownFood2"><img src="../assets/img/wellcomeimg/不知名食材2.png" alt=""></div>
        <div class="unknownFood3"><img src="../assets/img/wellcomeimg/不知名食材3.png" alt=""></div>
        <div class="chili"><img src="../assets/img/wellcomeimg/辣椒粉.png" alt=""></div>
        <div class="ziran"><img src="../assets/img/wellcomeimg/孜然.png" alt=""></div>
        <div class="cinnamon"><img src="../assets/img/wellcomeimg/桂皮.png" alt=""></div>
        <div class="chili2"><img src="../assets/img/wellcomeimg/辣椒粉2.png" alt=""></div>
        <div class="materials"><img src="../assets/img/wellcomeimg/几种食材.png" alt=""></div>
        <div class="chili3"><img src="../assets/img/wellcomeimg/辣椒.png" alt=""></div>
        <div class="anise"><img src="../assets/img/wellcomeimg/八角.png" alt=""></div>
      </div>
      <router-view>
      </router-view>
    </div>
</template>

<script>
import Router from '../router/index'
export default {
  name: 'wellcome',
  components: {
    Router
  },
  mounted () {
    window.addEventListener('load', () => {
      // this.test()
      // this.one().then(this.two())
      this.all()
      /*  这种是 调用了queue */
/*      this.queue(function () {
        return $('.c-title').animate({top: '0', opacity: '.8'}, 1000)
      },
      function () {
        return $('.c-content').animate({top: '0', opacity: '.8'}, 1000)
      },
      function () {
        return $('.c-img3').animate({top: '0', opacity: '.8'}, 1000)
      },
      function () {
        return $('.c-img4').animate({top: '0', opacity: '.8'}, 1000)
      },
      function () {
        return $('.c-img1').animate({top: '0', opacity: '.8'}, 1000)
      },
      function () {
        return $('.c-img2').animate({top: '0', opacity: '.8'}, 1000)
      },
      function () {
        return $('.unknownFood1').animate({top: '-102%', left: '-35', opacity: '.8'}, 1500)
      },
      function () {
        return $('.tomato').animate({top: '-88%', opacity: '.8'}, 1500)
      })*/
    })
  },
  data: function () {
    return {
      animates: []
    }
  },
  methods: {
    /* queue在vue里面好像失败了。。。 */
    queue: function (start) {
      // 有趣的是，这里用索引为2的，则0和，2的动画能够执行，用1就是0和1能执行，感觉就是rest没有更新,只替换了一次,本意应该是一直执行下一个
      // eslint-disable-next-line one-var
      let rest = [].splice.call(arguments, 1),
        promise = this.$.Deferred()
      if (start) {
        // eslint-disable-next-line no-undef
        $.when(start()).then(function () {
          // eslint-disable-next-line no-undef
          // 这里有问题案例是queue.apply(window, rest),使用window会导致this.each不是一个函数，意思apply里面参数第一个是函数，第二个是参数，那么结合上面又印证了参数只替换了一次
          this.queue.apply(this, rest)
          console.log(rest)
          rest.splice(0, 1)
          console.log(rest)
        })
      } else {
        promise.resolve()
        return promise
      }
    },
    /* 这种是疯狂回调的 */
    all: function () {
      let that = this;
      this.$('.c-title').animate({top: '0', opacity: '.8'}, 1000,
        function () {
          // eslint-disable-next-line no-undef
          $('.c-content').animate({top: '0', opacity: '.8'}, 800,
            function () {
              $('.c-img3').animate({top: '0', opacity: '.8'}, 800,
                function () {
                  $('.c-img4').animate({top: '0', opacity: '.8'}, 800,
                    function () {
                      $('.c-img1').animate({top: '0', opacity: '.8'}, 800,
                        function () {
                          $('.c-img2').animate({top: '0', opacity: '.8'}, 800,
                            function () {
                              $('.unknownFood1').animate({top: '-102%', left: '-35', opacity: '.8'}, 1000,
                                function () {
                                  $('.lemon').animate({left: '-800px', opacity: '.8'}, 1000,
                                    function () {
                                      $('.tomato').animate({top: '-88%', opacity: '.8'}, 1000,
                                        function () {
                                          $('.unknownFood2').animate({top: '-108%', left: '-830', opacity: '.8'}, 1000,
                                            function () {
                                              $('.unknownFood3').animate({top: '-142%', opacity: '.8'}, 1000,
                                                function () {
                                                  $('.chili').animate({top: '-176%', left: '-700', opacity: '.8'}, 1000,
                                                    function () {
                                                      $('.ziran').animate({top: '-216%', opacity: '.8'}, 1000,
                                                        function () {
                                                          $('.chili2').animate({top: '-291%', opacity: '.8'}, 1000,
                                                            function () {
                                                              $('.cinnamon').animate({top: '-245%', opacity: '.8'}, 1000,
                                                                function () {
                                                                  $('.materials').animate({top: '-333%', opacity: '.8'}, 1000,
                                                                    function () {
                                                                      $('.chili3').animate({top: '0', right: '0', opacity: '.8'}, 1000,
                                                                        function () {
                                                                          $('.anise').animate({right: '0', opacity: '.8'}, 1000,
                                                                            function () {
                                                                              setTimeout(function () {
                                                                                // todo 动画完毕，延迟2秒，跳转首页
                                                                                console.log(this.$router)
                                                                                console.log(this)
                                                                                that.$router.push({path: '/toIndex'})
                                                                              }, 2000)
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    },
    toIndex: function () {
      this.$router.push({path: '/toIndex'})
    },
    toLogin: function () {
      this.$router.push({path: '/login'})
    },
    toRegisetr () {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style scoped>
  .mask{
    position: absolute;
    width: 100%;
    height: 1060px;
    overflow: hidden;
    background: -webkit-radial-gradient(circle,#2f2f2f 16%, black); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(circle,#2f2f2f 16%,  black); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(circle,#2f2f2f 16%, black); /* Firefox 3.6 - 15 */
    background: radial-gradient(circle,#2f2f2f 16%,  black); /* 标准的语法（必须放在最后） */
    background-size: contain;
  }
  .content{
    color: white;
    font-family: "微软雅黑 Light";
    position: relative;
    width: 600px;
    height: 480px;
    margin: 10% auto;
  }
  .c-title,.c-content,.c-img4,.c-img1,.c-img3,.c-img2{
    position: relative;
  }
  .content .c-title{
    font-size: 50px;
    margin-bottom: 20px;
  }
  .c-title{
    top: -20%;
    opacity: 0;
  }
  .c-content,.c-img4,.c-img1,.c-img3,.c-img2{
    top: 10%;
    opacity: 0;
  }
  .content .c-content{
    font-size: 30px;
    margin-bottom: 10px;
  }
  .content .c-img2{
    font-weight: bold;
  }
  .content .c-img4{
    margin-bottom: 20px;
  }
  .toIndex{
    position: absolute;
    bottom: 70px;
    right: 0;
    font-size: 20px;
    font-weight: bold;
    opacity: .8;
    cursor:pointer;
  }
  /* 全部定位为相对 */
  .unknownFood1,.tomato,.lemon,.unknownFood2,.unknownFood3,.chili,.ziran,.chili2,.cinnamon,.materials{
    position: relative;
  }
  .unknownFood1{
    top: -120%;
    left: -300px;
    width: 330px;
    height: 425px;
    background: url("../assets/img/wellcomeimg/不知道什么食材1.png") no-repeat;
    background-size: contain;
    opacity: 0;
  }
  .tomato{
    content: "";
    top: -105%;
    left: 190px;
    width: 300px;
    height: 185px;
    background: url("../assets/img/wellcomeimg/西红柿.png") no-repeat;
    background-size: contain;
    opacity: 0;
  }
  .lemon{
    top: -106%;
    left: -1000px;
    opacity: 0;
  }
  .unknownFood2{
    top: -100%;
    left: -730px;
    opacity: 0;
  }
  .unknownFood3{
    top: -123%;
    left: -350px;
    opacity: 0;
  }
  .chili{
    top: -155%;
    left: -750px;
    opacity: 0;
  }
  .ziran{
    top: -195%;
    left: -127px;
    opacity: 0;
  }
  .chili2{
    top: -270%;
    left: 190px;
    opacity: 0;
  }
  .cinnamon{
    top: -234%;
    left: 520px;
    opacity: 0;
  }
  .materials{
    top: -310%;
    left: 810px;
    opacity: 0;
  }
  .chili3{
    position: absolute;
    top: -50px;
    right: -50px;
    opacity: 0;
  }
  .anise{
    position: absolute;
    top: 260px;
    right: -50px;
    opacity: 0;
  }

</style>
