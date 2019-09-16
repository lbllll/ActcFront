<template>
    <div class="content-bg">
      <form class="form-register">
        <div class="lname">
          <div class="icon"></div>
          <div class="lname-info">: <input type="text" class="lname-content" v-model="lname" placeholder="手机/邮箱" @focus="getBorderColor()" @blur="checkLName()"></div>
        </div>
        <div class="code" id="valiCode">
          <div class="valiCode" >
            <input type="text" class="lname-content" name="code" placeholder="手机/邮箱的验证码" @focus="getVailCodeColor()" @blur="checkValiCode()">
          </div>
          <button class="vali-btn" @click="sendCode($event)">发送验证码</button>
        </div>
        <div class="pwd">
          <div class="icon"></div>
          <div class="lname-info">: <input type="password" class="lname-content" v-model="lpass" name="lpass" placeholder="密码" @focus="getPwdBorderColor()" @blur="checkPwd()"></div>
        </div>
        <div class="pwd-check">
          <div class="icon"></div>
          <div class="lname-info">: <input type="password" class="lname-content" v-model="CheckLpass" name="lpass" placeholder="确认密码" @focus="getPwdCheckBorderColor()" @blur="checkPwdAgain()"></div>
        </div>
        <div class="register" @click="register($el)">注册
        </div>
        <div class="bottom"> <span class="" @click="toLogin()" >已有账号去登录</span><span>&nbsp;&nbsp; | &nbsp;&nbsp;</span><span @click="toIndex()">返回首页</span>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {
      lname: '',
      lpass: '',
      code: '',
      CheckLpass: ''
    }
  },
  methods: {
    /* 账号获取光标 */
    getBorderColor () { this.$('.lname').addClass('getFocusBorderColor') },
    /* 账号失去光标检测名字格式 */
    checkLName () {
      // todo 判断格式是否正确，选择不同的颜色
      if ( 1 === 1) {
        this.$('.lname').removeClass('getFocusBorderColor').addClass('borderNormal')
      } else {
        this.$('.lname').removeClass('getFocusBorderColor').addClass('borderWarm')
      }
    },
    /* 密码 */
    getPwdBorderColor () { this.$('.pwd').addClass('getFocusBorderColor') },
    checkPwd () {
      if ( 1 === 1) {
        this.$('.pwd').removeClass('getFocusBorderColor').addClass('borderNormal')
      } else {
        this.$('.pwd').removeClass('getFocusBorderColor').addClass('borderWarm')
      }
    },
    /* 密码 */
    getPwdCheckBorderColor () { this.$('.pwd-check').addClass('getFocusBorderColor') },
    checkPwdAgain () {
      if ( 1 === 1) {
        this.$('.pwd-check').removeClass('getFocusBorderColor').addClass('borderNormal')
      } else {
        this.$('.pwd-check').removeClass('getFocusBorderColor').addClass('borderWarm')
      }
    },
    /* 验证码 */
    getVailCodeColor () {
      this.$('.valiCode').addClass('getFocusBorderColor')
    },
    checkValiCode () {
      if ( 1 === 1) {
        this.$('.valiCode').removeClass('getFocusBorderColor').addClass('borderNormal')
      } else {
        this.$('.valiCode').removeClass('getFocusBorderColor').addClass('borderWarm')
      }
    },
    /* 发送验证码 */
    sendCode (event) {
      let formData = new FormData()
      console.log(this.lname)
      console.log(this.lpass)
      console.log(this.code)
      /* 传邮箱或者电话 */
      formData.append('lname', this.lname)
      /* 发送注册类型验证码 */
      formData.append('sendType', 1)
      /* 判断是手机还是邮箱，邮箱1，手机2 */
      formData.append('codeType', 1)
      console.log(formData)
      this.$axios.post('/actc/user/sendCode', {params: formData}, {}).then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
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
  /* 总分布，背景图 */
  .content-bg{
    position: absolute;
    width: 100%;
    height: 1100px;
    background: url("../../assets/img/bg/可做背景图面包圈和咖啡1920和1100.jpg") no-repeat ;
    background-size: cover;
    opacity: .8;
  }
  /* 表单 */
  .form-register{
    width: 40%;
    height: 53%;
    position: relative;
    border-radius: 10px;
    margin: 10% auto ;
    background: #2f2f2f;
    opacity: .9;
  }
  /* 输入框 */
  .lname, .pwd, .code, .pwd-check,.register{
    position: relative;
    top: 15%;
    margin: 5% auto;
    width: 60%;
    height: 50px;
    border: 1px solid white;
    border-radius: 8px;
    overflow: hidden;
  }
   .icon{
    position: relative;
    margin: 17px 0 0 15px;
    left: 0;
    height: 25px;
    width: 25px;
    overflow: hidden;
    background-size: cover;
  }
  .lname .icon{
    background: url("../../assets/img/icon/man.png") no-repeat ;
  }
  .pwd .icon, .pwd-check .icon{
    background: url("../../assets/img/icon/password.png") no-repeat ;
  }
  .lname-info{
    position: relative;
    top: -40px;
    left: 45px;
    width: 90%;
    height: 50px;
    color: white;
    line-height: 46px;
    text-align: left;
    font-weight: bolder;
  }
  .lname-info input{
    width: 95%;
    background-color: #2f2f2f;
    border:none;/*隐藏边框*/
    outline:none;/*获取光标，不显示边框*/
    border-radius: 8px;
  }
  /* 验证码 */
  .valiCode{
    width: 55%;
    height: 50px;
    border-radius: 8px;
    border: 1px solid white;
  }
  #valiCode{
    border: none;
  }
  .valiCode input{
    color: white;
    padding-left: 20px;
    width: 100%;
    height: 100%;
    background-color: #2f2f2f;
    outline: none;
    border: none;
    border-radius: 8px;
  }
  .vali-btn{
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 35%;
    border-radius: 8px;
    border: 1px solid white;
    background-color: #2f2f2f;
    outline: none;
  }
  .vali-btn:hover{
    border: 1px solid #42b983;
  }
  /* 提交按钮 */
  .register{
    background-color: #42b983;
    border: none;
    line-height: 50px;
    font-size: 25px;
    color: white;
    cursor: pointer;
  }

  /*  获得光标边框颜色*/
  .getFocusBorderColor{
    border: 1px solid #42b983 !important;
  }
  /*  正常颜色*/
  .borderNormal{
    border: 1px solid white;
  }
  /* 填写信息有误警告边框色 */
  .borderWarm{
    border: 1px solid red;
  }
  .bottom{
    color: white;
    position: relative;
    bottom: 0;
    top:80px;
  }
</style>
