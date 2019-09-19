<template>
  <div class="content-bg" :style="{backgroundImage:'url('+require('../../../static/img/bg/可做背景图面包圈和咖啡1920和1100.jpg')+')'}">
    <form class="form-register" role="form">
      <div  class="input-sty change-login-way" id="change-login-way">
        <span class="login-by-pwd" v-bind="loginByPwd">密码登录</span>
        <span class="changeLine"> | </span>
        <span class="login-by-code" v-bind="loginByCode">验证码登录</span>
      </div>
     <div class="input-sty">
        <!--输入框失去焦点blur进行检测输入是否正确,点击时将错误消息删除-->
        <input class="form-control" type="text" placeholder="请输入用户名" v-model="lname" @blur="auditingUser" @click="close_usemsg"/>
        <span class="col-red">{{ usermsg }} </span><br>
    </div>
    <div class="input-sty code-info">
      <input class="form-control" type="text" placeholder="请输入验证码" v-model="code" @blur="auditingCode" @click="close_codemsg"/>
      <div class="send-code" @click="sendCode()">发送验证码</div><br>
      <span class="col-red">{{ codemsg }} </span><br>
    </div>
    <div class="input-sty">
        <input class="form-control" type="password" placeholder="请输入密码" v-model="lpass" @blur="auditinglpass" @click="close_passmsg"/>
        <span class="col-red">{{ passmsg }} </span><br>
    </div>
    <div class="input-sty register">
      <button  type="login" @click="login()" >登录</button>
    </div>
    <div class="bottom"> <span class="to-register" @click="toRegisetr()" >没有账号去注册</span><span>&nbsp;&nbsp; | &nbsp;&nbsp;</span><span class="go-index" @click="toIndex()">返回首页</span>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      lname: '',
      lpass: '',
      usermsg: '',
      passmsg: '',
      checklpass: '',
      checkpass: '',
      code: '',
      codemsg: '',
      // 下面的三个变量用来标记每一个输入框的输入是否通过检测.默认没通过.
      uFlag: false,
      pFlag: false,
      cFlag: false
    }
  },
  methods: {
    // 定义检测用户名称输入是否正确的方法,最后设置uFlag的值
    auditingUser: function () {
      if (this.lname === '') {
        this.usermsg = '用户名不能为空'
        this.uFlag = false
        return
      }
      this.uFlag = true
    },
    //  定义检测密码名称输入是否正确的方法,最后设置pFlag的值
    auditinglpass: function () {
      if (this.lpass === '') {
        this.passmsg = '用户密码不能为空'
        this.pFlag = false
        return
      }
      let  re = /^[a-zA-Z0-9_]{8,}$/
      let result = re.test(this.lpass)
      if (result !== true) {
        this.passmsg = '用户密码必须是大于8位的英文字母和数字'
        this.pFlag = false
        return
      }
      this.pFlag = true
    },
    //  定义检测密码名称输入是否正确的方法,最后设置pFlag的值
    auditingCode: function () {
      if (this.code === '') {
        this.codemsg = '验证码不能为空'
        this.pFlag = false
        return
      }
      this.pFlag = true
    },
    // 定义检测核对密码输入是否正确的方法,最后设置cFlag的值
    auditingCheckpass: function () {
      if (this.checklpass === '') {
        this.checkpass = '确认密码不能为空'
        this.cFlag = false
        return
      }
      let re = /^[a-zA-Z0-9_]{8,}$/
      let result = re.test(this.checklpass)
      if (result !== true) {
        this.checkpass = '用户密码必须是大于8位的英文字母和数字'
        this.cFlag = false
        return
      }
      if (this.checklpass !== this.lpass) {
        this.checkpass = '确认密码必须与密码相同'
        this.cFlag = false
        return
      }
      this.cFlag = true
    },
    // 每当用于进入输入框修改时,隐藏错误消息,并假设修改正确,将Flag标记为正确.
    close_usemsg: function () {
      this.usermsg = ''
      this.uFlag = true
    },
    close_codemsg: function () {
      this.codemsg = ''
      this.pFlag = true
    },
    close_passmsg: function () {
      this.passmsg = ''
      this.pFlag = true
    },
    close_check: function () {
      this.checkpass = ''
      this.cFlag = true
    },
    toIndex: function () {
      this.$router.push({path: '/toIndex'})
    },
    toLogin: function () {
      this.$router.push({path: '/login'})
    },
    toRegisetr () {
      this.$router.push({path: '/register'})
    },
    /* 发送验证码 */
    sendCode (event) {
      let formData = new FormData()
      /* 传邮箱或者电话 */
      formData.append('lname', this.lname)
      /* 发送注册类型验证码 */
      formData.append('sendType', 1)
      /* 判断是手机还是邮箱，邮箱1，手机2 */
      formData.append('codeType', 1)
      this.$axios.post('http://127.0.0.1:8118/actc/user/sendCode', formData).then(function (res) {
        if (res.data.success) {
          return false
        } else {
          alert(res.data.msg)
        }
        return false
      }).catch(function (err) {
        console.log(err)
      })
    },
    /* 验证码登录 */
    login () {
      let that = this;
      let formData = new FormData()
      /* 传邮箱或者电话 */
      formData.append('lname', this.lname)
      formData.append('lpass', this.lpass)
      /* 发送注册类型验证码 */
      formData.append('code', this.code)
      /* todo 判断是手机还是邮箱，邮箱1，手机2 */
      formData.append('codeType', 1)
      formData.append('sendType', 2)
      formData.append('source', 1)
      console.log(formData)
      this.$axios.post('http://127.0.0.1:8118/actc/user/login', formData).then(function (res) {
        if (res.data.success) {
          that.$router.push({path: '/toIndex'})
        } else {
          alert(res.data.msg)
        }
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
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
    background: no-repeat ;
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
  /* input 统一样式 */
  .form-register input{
    width: 100%;
    height: 100%;
    border:  none;
    background: none;
    color: white;
  }
  .form-register span{color: red}
  .input-sty{
    position: relative;
    top: 15%;
    width: 60%;
    height: 50px;
    border: 1px solid white;
    border-radius: 8px;
    background: none;
    margin: 35px auto;
    color: white;
  }
  /* 提交按钮 */
  .register{
    width: 60%;
    height: 50px;
    border-radius: 8px;
    margin: 0 auto;
    background-color: #42b983;
    line-height: 50px;
    font-size: 25px;
    color: white;
    cursor: pointer;
  }
  .register button{
    border: none;
    background: none;
    width: 100%;
    height: 100%;
  }
  /* 底部切换 */
  .bottom span{
    color: white;
    position: relative;
    top: 135px;
  }
  .to-register:hover,.go-index:hover{
    cursor: pointer;
    color: #42b983;
  }
  /* 输入验证码 */
  .code-info{
    border: none;
  }
  .code-info input, .send-code{
    position: absolute;
    top: 0;
  }
  .code-info input {
    left: 0;
    width: 60%;
    height: 50px;
    border-radius: 8px;
    border: 1px solid white;
    background: none;
  }
  /* 验证码下的span */
  .code-info span{
    position: absolute;
    left: 0;
    top: 50px;
  }
  /* 发送验证码 */
  .send-code{
    right: 0;
    border: 1px solid white;
    border-radius: 8px;
    width: 35%;
    height: 50px;
    line-height: 50px;
  }
  .send-code:hover{
    border: 1px solid #42b983;
    cursor: pointer;
  }
  /* 切换登录方式 */
  #change-login-way{
    border: none;
  }
  #change-login-way span{
    color: white;
  }
  .login-by-pwd,.login-by-code,.changeLine{
    color: white;
    font-size: 20px;
  }
  .login-by-pwd:hover,.login-by-code:hover{
    cursor: pointer;
    color: #42b983;
  }
</style>
