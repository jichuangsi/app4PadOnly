<template>
  <div class="myShow">
    <public-header :header="header"/>
    <div class="content">
      <div class="avatar clearfix">
        <div class="title">头像</div>
        <div class="img_warp" @click="oepenPicture">
          <img :src="userimg">
        </div>
      </div>
      <div class="set_box" v-if="setPictrue" @click="setPictrue = false">
        <div class="setbox" @click.stop="setPictrue = true">
          <div class="title">提示</div>
          <div class="text">修改头像</div>
          <div class="pictrue">
            <div class="pictrueBox" @click="cameraTakePicture">
              <!-- <img src="../../../assets/照相机.png"> -->
            </div>
            <div class="pictrueBox1" @click="Picturelibrary">
              <!-- <img src="../../../assets/图库.png"> -->
            </div>
          </div>
          <div class="btn">
            <div class="cancel" @click.stop="setPictrue= false">取消</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="title">名字</div>
        <div class="text">{{this.user.name}}</div>
      </div>
      <div class="row">
        <div class="title">学校</div>
        <div class="text">{{this.user.school}}</div>
      </div>
      <div class="row">
        <div class="title">年级</div>
        <div class="text">{{this.user.grade}}</div>
      </div>
      <div class="row">
        <div class="title">班级</div>
        <div class="text">{{this.user.primaryClass}}</div>
      </div>
      <!--<div class="row" @click="setclick">
        <div class="title">蓝牙设备</div>
        <div class="text">{{this.id}}</div>
      </div>-->
      <div class="row" @click="setPwd">
        <div class="title">修改密码</div>
        <div class="text"></div>
      </div>
      <div class="Tips">
        客服电话：400-0068-093
      </div>
      <div class="set_box" v-if="setshowPwd" @click="setshowPwd = false">
        <div class="setbox" @click.stop="setshowPwd = true">
          <div class="title">提示</div>
          <div class="text">修改密码</div>
          <div class="intPwd">
            <input type="password" placeholder="请输新密码" v-model.trim="oldPwd">
          </div>
          <div class="intPwd">
            <input type="password" placeholder="确认密码" v-model.trim="newPwd">
          </div>
          <div class="btn">
            <div class="cancel" @click.stop="setshowPwd = false">取消</div>
            <div class="confirm" @click.stop="update">确认</div>
          </div>
        </div>
      </div>
      <div class="set_box" v-if="setshow" @click="setshow = false">
        <div class="setbox" @click.stop="setshow = true">
          <div class="title">提示</div>
          <div class="text">请输入蓝牙设备</div>
          <div class="int">
            <input type="text" v-model="a1" v-focus @keyup="a1click">:
            <input type="text" v-model="a2" ref="inputa2" @keyup="a2click">:
            <input type="text" v-model="a3" ref="inputa3" @keyup="a3click">:
            <input type="text" v-model="a4" ref="inputa4" @keyup="a4click">:
            <input type="text" v-model="a5" ref="inputa5" @keyup="a5click">:
            <input type="text" v-model="a6" ref="inputa6" @keyup="a6click">
          </div>
          <div class="btn">
            <div class="cancel" @click.stop="setshow = false">取消</div>
            <div class="confirm" @click.stop="confirm">确认</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicHeader from "../../../components/public/PublicHeader";
import { updatePwd, updateImg, getImg } from "@/api/student/classroom";
import { Toast } from "mint-ui";
export default {
  name: "myShow",
  components: {
    PublicHeader
  },
  data() {
    return {
      header: {
        //头部信息
        title: "个人信息",
        url: "/studentIndex"
      },
      userimg: "",
      username: "韩梅梅",
      user: { name: "", school: "", grade: "", primaryClass: "" },
      id: "", //蓝牙设备
      setshow: false,
      setshowPwd: false,
      oldPwd: "",
      newPwd: "",
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      a5: "",
      a6: "",
      setPictrue: false,
      ready: false
      // cameraOptions: {
      //   quality: 100, //相片质量0-100
      //   destinationType: Camera.DestinationType.DATA_URL, //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI
      //   // sourceType: Camera.PictureSourceType.CAMERA, //从哪里选择图片：PHOTOLIBRARY=0（从设备相册选择图片）,相机拍照=1,SAVEDPHOTOALBUM=2,0和1其实都是本地图库
      //   allowEdit: true, //在选择之前允许修改截图
      //   encodingType: Camera.EncodingType.PNG, //保存的图片格式： JPEG = 0, PNG = 1
      //   targetWidth: 586, //照片宽度
      //   targetHeight: 700, //照片高度
      //   mediaType: 0, //可选媒体类型：圖片=0,默认值,只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI(网址)。ALLMEDIA= 2，允许所有媒体类型的选择。
      //   cameraDirection: 0, //选择摄像头类型(前置摄像头或者后面的摄像头)：Back= 0(后置),Front-facing = 1(前置)
      //   //popoverOptions: CameraPopoverOptions,                   //CameraPopoverOptions,iOS特供,从iPad的系统相册选择图片,指定popover的定位元素的位置箭头方向和参数
      //   saveToPhotoAlbum: true //保存进手机相册
      // }
    };
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  mounted() {
    this.initialize();
    this.getstudent();
    this.id = localStorage.getItem("bluetooth")
      ? localStorage.getItem("bluetooth")
      : "";
  },
  methods: {
    initialize() {
      let _this = this;
      document.addEventListener(
        "deviceready",
        _this.onDeviceReady.bind(this),
        false
      );
    },
    // deviceready Event Handler
    onDeviceReady() {
      this.ready = true;
    },
    getstudent() {
      this.setPictrue = false;
      let userInStorage = JSON.parse(localStorage.getItem("user"));
      if (userInStorage) {
        this.user.name = userInStorage.userName;
        if (userInStorage.roles && userInStorage.roles.length > 0) {
          this.user.school = userInStorage.roles[0].school.schoolName;
          this.user.grade = userInStorage.roles[0].primaryGrade.gradeName;
          this.user.primaryClass =
            userInStorage.roles[0].primaryClass.className;
        }
        var img = localStorage.getItem("HeadPortrait")
          ? localStorage.getItem("HeadPortrait")
          : "";
        if (img) {
          this.userimg = "data:image/jpeg;base64," + img;
        } else {
          if (userInStorage.userSex == "FEMALE") {
            this.userimg = require("../../../assets/女学生.png");
          } else {
            this.userimg = require("../../../assets/男学生.png");
          }
        }
      }
    },
    //打开照相机
    oepenPicture() {
      this.setPictrue = true;
    },
    //测试照相机
    cameraTakePicture() {
      if (this.ready) {
        let _this = this;
        navigator.camera.getPicture(onSuccess, onFail, {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          allowEdit: true,
          targetWidth: 214,
          targetHeight: 214,
          mediaType: 0,
          saveToPhotoAlbum: true,
          cameraDirection: 0,
          encodingType: Camera.EncodingType.PNG
        });
        function onSuccess(imageData) {
          var image = document.getElementById("myImage");
          updateImg(imageData).then(res => {
            if (res.data.code === "0010") {
              Toast("修改成功");
              localStorage.setItem("HeadPortrait", imageData);
            } else {
              Toast("修改失败");
            }
          });
          _this.userimg = "data:image/jpeg;base64," + imageData;
        }
        function onFail(message) {
          //alert("Failed because: " + message);
        }
      } else {
        Toast("设备没响应，请稍后重试");
      }
    },
    //图库
    Picturelibrary() {
      if (this.ready) {
        let _this = this;
        navigator.camera.getPicture(onSuccess, onFail, {
          quality: 50,
          allowEdit: true,
          targetWidth: 214,
          targetHeight: 214,
          mediaType: 0,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
        });
        function onSuccess(imageData) {
          var image = document.getElementById("myImage");
          updateImg(imageData).then(res => {
            if (res.data.code === "0010") {
              Toast("修改成功");
              localStorage.setItem("HeadPortrait", imageData);
            } else {
              Toast("修改失败");
            }
          });
          _this.userimg = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
          //alert("Failed because: " + message);
        }
      } else {
        Toast("设备没响应，请稍后重试");
      }
    },
    setclick() {
      this.setshow = true;
      if (this.id) {
        let arr = this.id.split(":");
        this.a1 = arr[0];
        this.a2 = arr[1];
        this.a3 = arr[2];
        this.a4 = arr[3];
        this.a5 = arr[4];
        this.a6 = arr[5];
      } else {
        this.a1 = "";
        this.a2 = "";
        this.a3 = "";
        this.a4 = "";
        this.a5 = "";
        this.a6 = "";
      }
    },
    setPwd() {
      this.setshowPwd = true;
    },
    update() {
      //修改密码
      this.setshowPwd = false;
      let userInStorage = JSON.parse(localStorage.getItem("user"));
      console.log(userInStorage);
      if (this.oldPwd != "" && this.newPwd != "") {
        if (this.oldPwd == this.newPwd) {
          if (this.newPwd.length >= 6 && this.newPwd.length < 18) {
            let userId = userInStorage.userId;
            updatePwd(userId, this.oldPwd, this.newPwd).then(res => {
              console.log(res);
              if (res.data.code == "0010") {
                Toast("修改成功");
              } else {
                Toast("修改失败，密码长度为6~18位,数字字母混合");
              }
            });
          } else {
            Toast("密码长度为6~18位,数字字母混合");
          }
        } else {
          Toast("两次密码不一致");
        }
      } else {
        Toast("密码不能为空");
      }
    },
    a1click() {
      this.a1.length >= 2 ? (this.a2show = true) : (this.a2show = false);
      if (this.a2show) {
        this.a1 = this.a1.substring(0, 2);
        this.$refs.inputa2.focus();
      }
    },
    a2click() {
      this.a2.length >= 2 ? (this.a3show = true) : (this.a3show = false);
      if (this.a3show) {
        this.a2 = this.a2.substring(0, 2);
        this.$refs.inputa3.focus();
      }
    },
    a3click() {
      this.a3.length >= 2 ? (this.a4show = true) : (this.a4show = false);
      if (this.a4show) {
        this.a3 = this.a3.substring(0, 2);
        this.$refs.inputa4.focus();
      }
    },
    a4click() {
      this.a4.length >= 2 ? (this.a5show = true) : (this.a5show = false);
      if (this.a5show) {
        this.a4 = this.a4.substring(0, 2);
        this.$refs.inputa5.focus();
      }
    },
    a5click() {
      this.a5.length >= 2 ? (this.a6show = true) : (this.a6show = false);
      if (this.a6show) {
        this.a5 = this.a5.substring(0, 2);
        this.$refs.inputa6.focus();
      }
    },
    a6click() {
      if (this.a6.length >= 2) {
        this.a6 = this.a6.substring(0, 2);
        this.$refs.inputa6.blur();
      }
    },
    confirm() {
      this.id =
        this.a1.toUpperCase() +
        ":" +
        this.a2.toUpperCase() +
        ":" +
        this.a3.toUpperCase() +
        ":" +
        this.a4.toUpperCase() +
        ":" +
        this.a5.toUpperCase() +
        ":" +
        this.a6.toUpperCase();
      this.setshow = false;
      console.log(this.id);
      localStorage.setItem("bluetooth", this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.myShow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .content {
    width: 100%;
    padding-top: 3.14rem;
    padding-left: 2.14rem;
    background-color: white;
    box-sizing: border-box;
    .avatar {
      width: 100%;
      height: 13.21rem;
      padding-right: 6.64rem;
      box-sizing: border-box;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom: 1px solid rgba(222, 222, 222, 1);
        -webkit-transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
      }
      .title {
        line-height: 13.21rem;
        float: left;
        font-size: 28px;
        color: rgba(97, 97, 97, 1);
      }
      .img_warp {
        width: 8.93rem;
        height: 8.93rem;
        margin-top: 2.14rem;
        float: right;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      &:after {
        content: " ";
        display: inline-block;
        height: 12.7px;
        width: 12.7px;
        border-width: 4px 4px 0 0;
        border-color: rgba(137, 137, 137, 1);
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) translateY(-50%);
        position: absolute;
        top: 50%;
        right: 2.19rem;
        margin-top: -4px;
      }
    }
    .row {
      height: 6.21rem;
      line-height: 6.21rem;
      padding-right: 6.64rem;
      box-sizing: border-box;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom: 1px solid rgba(222, 222, 222, 1);
        -webkit-transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
      }
      .title {
        float: left;
        font-size: 28px;
      }
      .text {
        float: right;
        font-size: 24px;
        color: #a5a5a5;
      }
    }
    .Tips {
      padding: 1rem;
      text-align: right;
    }
  }
}
.set_box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  .setbox {
    width: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    background-color: #fff;
    transform: translate(-50%, -50%);
    .title {
      font-size: 24px;
      color: #333;
      font-weight: 700;
      padding-top: 10px;
    }
    .text {
      font-size: 22px;
      color: #a5a5a5;
      padding-top: 20px;
    }
    .int {
      width: 100%;
      padding: 40px 140px;
      line-height: 40px;
      font-size: 22px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      input {
        display: inline-block;
        width: 10%;
        height: 40px;
        font-size: 22px;
        text-align: center;
        border: 1px solid #666;
      }
    }
    .intPwd {
      width: 100%;
      padding-top: 20px;
      padding-left: 140px;
      padding-right: 140px;
      padding-bottom: 15px;
      // padding: 20px 140px;
      line-height: 40px;
      font-size: 22px;
      text-align: center;
      display: flex;
      justify-content: space-between;

      input {
        text-indent: 25px;
        display: inline-block;
        width: 10%;
        height: 40px;
        font-size: 20px;
        border: 1px solid #666;
      }
      input {
        width: 100%;
      }
    }
    .pictrue {
      width: 100%;
      padding: 15px 28% 15px 28%;
      text-align: center;
      display: flex;
      justify-content: space-between;
      .pictrueBox {
        line-height: 100px;
        width: 100px;
        height: 100px;
        background: url("../../../assets/按钮.png") no-repeat;
        background-size: 600px 1750px;
        background-position: -289px -1593.5px;
      }
      .pictrueBox1 {
        line-height: 100px;
        width: 100px;
        height: 100px;
        background: url("../../../assets/按钮.png") no-repeat;
         background-size: 600px 1750px;
        background-position: -61px -1589px;
      }
    }
    .btn {
      width: 100%;
      font-size: 22px;
      display: flex;
      div {
        flex: 1;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-bottom: none;
      }
      .cancel {
        border-left: none;
      }
      .confirm {
        color: #26a2ff;
        border-right: none;
      }
    }
  }
}
</style>
