<template>
    <div class="topic_warp">
      <div class="Collection" @click="Collection">
        <img :src="Collectionsrc" alt="">
      </div>
        <div class="title">客观题-{{index+1}} <span v-if="objective.questionTypeInCN">({{objective.questionTypeInCN}})</span><span v-if="objective.questionPoint">({{objective.questionPoint}}分)</span></div>
        <div class="topic" v-html="objective.questionContent">
            {{objective.questionContent}}
        </div>
        <div class="select clearfix" v-for="(item,index) in objective.options" :key="index" @click="selectIndex(index,objective.questionId)" v-if="objective.answer.length==1">
            <div class="round">
                <span class="point" v-if="pointIndex === index"></span>
            </div>
            <div class="option">{{conversion(index)}}.</div>
            <div class="text" v-html="item">{{item}}</div>
        </div>
        <div class="select clearfix" v-for="(item,index) in objective.options" :key="index" @click="selectsIndex(index,objective.questionId)" v-if="objective.answer.length>1">
            <div class="round complex">
                <span class="point" v-if="answers.indexOf(index)>-1"></span>
            </div>
            <div class="option">{{conversion(index)}}.</div>
            <div class="text" v-html="item">{{item}}</div>
        </div>
        <PopupPic :questionPic="objective.questionPic"/>
        <div class="clearfix">
            <div class="right submit" @click.stop.passive="submit(objective.questionId)" v-if="!homeworkCompleted"></div>
        </div>
        <div class="anwers" v-if="completed">
          此题答案为:<span v-html="objective.answer.split('|').join(',')"></span>
        </div>
        <div class="remind" v-html="objective.parse" v-if="completed">
        </div>
        <!--<div class="bigimg" v-if="dsadsa">
            <div class="btn" @click.stop="picimgshow">x</div>
            <img :src="bigimg" alt="">
        </div>-->
    </div>
</template>

<script>
import { addFavorQuestion, removeFavorQuestion } from "@/api/student/classroom";
import PopupPic from "./PopupPic";
import { Toast } from "mint-ui";
import {mapGetters} from 'vuex'
export default {
  name: "homeworkObjective",
    components: {PopupPic},
    props: {
        objective: {
            type: Object,
            default: function() {
                return {};
            }
        },
        completed: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            default: 0
        }
  },
  data() {
    return {
      pointIndex: -1,
      answers: "",
      Collectionsrc:require('../../assets/未收藏.png'),
      Collectiontype:false
    };
  },
    computed: {
        //vuex 调用
        ...mapGetters([
            'homeworkCompleted'
        ])
    },
    watch:{
        'objective.answerModelForStudent': {  // 这监听对象值的改变 和上面的不一样。
            handler(curVal,oldVal){
                //console.log(this.objective);
                if(this.objective.answerModelForStudent&&this.objective.answerModelForStudent.answerForObjective){
                    if(this.objective.answer.length==1){
                        this.pointIndex = this.reversion(this.objective.answerModelForStudent.answerForObjective);
                        //console.log(this.pointIndex);
                    }else{
                        let a = this.objective.answerModelForStudent.answerForObjective.split("|");
                        let b = [];
                        a.forEach((item) => {
                            b.push(this.reversion(item));
                        });
                        this.answers = b.join('');
                        //console.log(this.answers);
                    }
                }
            },
            deep: true,
            immediate: true
        },
        'objective.favor':{
            handler(curVal,oldVal){
                //console.log("here");
                //console.log(this.objective);
                if(this.objective.favor){
                    this.Collectiontype = true
                    this.Collectionsrc = require('../../assets/已收藏.png')
                }else{
                    this.Collectiontype = false
                    this.Collectionsrc = require('../../assets/未收藏.png')
                }
            },
            deep: true,
            immediate: true
        }
    },
  mounted() {
      console.log(this.homeworkCompleted)
      /*if(this.objective.answerModelForStudent&&this.objective.answerModelForStudent.answerForObjective){
          if(this.objective.answer.length==1){
              this.pointIndex = this.reversion(this.objective.answerModelForStudent.answerForObjective);
              console.log(this.pointIndex);
          }else{
              let a = this.objective.answerModelForStudent.answerForObjective.split("|");
              let b = [];
              a.forEach((item) => {
                  b.push(this.reversion(item));
              });
              this.answers = b.join('');
              console.log(this.answers);
          }
      }
      if(this.objective.favor){
          this.Collectiontype = true
          this.Collectionsrc = require('../../assets/已收藏.png')
      }*/
  },
  methods: {
    //点击收藏
    Collection(){
      if(this.Collectiontype){
          removeFavorQuestion(this.objective.questionId).then(res => {
              if (res.data.code === '0010') {
                  this.Collectiontype = false
                  this.Collectionsrc = require('../../assets/未收藏.png')
              }else{
                  Toast({
                      message: res.data.msg,
                      position: "middle",
                      duration: 1000
                  });
              }
          });
      } else{
          addFavorQuestion(this.objective.questionId).then(res => {
              if (res.data.code === '0010') {
                  this.Collectiontype = true
                  this.Collectionsrc = require('../../assets/已收藏.png')
              }else{
                  Toast({
                      message: res.data.msg,
                      position: "middle",
                      duration: 1000
                  });
              }
          });
      }
    },
    selectsIndex(index,id) {
      let b =""
      if(this.answers.indexOf(index)>-1){
       let a = this.answers.split(index)
       this.answers = a[0]+a[1]
      }else{
      this.answers = this.answers+index
      }
      //console.log(this.answers);
      for(let i=0;i<this.answers.length;i++){
      let d = parseInt(this.answers[i])+65
      let e = String.fromCharCode(d)
      b = b+e
      }
      b = b.split("").sort().join('')
      if(b.length==1){
        b = b+"|"
      }else{
      b = b.split("").join("|")
      }
      //console.log(b)
      this.$emit("Multipleanswers",id,b)
    },
    /*picimgshow() {
      let self = this;
      self.dsadsa = false;
    },
    picimg(src) {
      let self = this;
      self.dsadsa = true;
      getQuestionPic(src).then(res => {
        // console.log(res.data.data.content)
        self.bigimg = //res.data.data.content;
            "data:image/png;base64," +
            res.data.data.content.replace(",", "");
      });
    },*/
    selectIndex(index, id) {
      this.pointIndex = index;
      let num = 65 + index;
      let option = String.fromCharCode(num)
      this.$emit("selectAnswer", id, option);
    },
    conversion(index) {
      let num = 65 + index;
      return String.fromCharCode(num);
    },
    reversion(str) {
        let num = str.charCodeAt();
        return num - 65;
    },
      submit(id){
          this.$emit("objectiveSubmit",id);
      }
  }
};
</script>

<style lang="scss" scoped>
.topic_warp {
    /*.bigimg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 101;
      padding: 4rem 2rem;
    .btn {
      font-size: 4rem;
      font-weight: 700;
      color: yellowgreen;
      position: absolute;
      right: 2rem;
      top: 1rem;
    }
    img {
        height: 100%;
        width: 100%;
    }
  }*/
  .Collection {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    right: 2rem;
    z-index: 100;
    img{
      width: 100%;
      height: 100%;
    }
  }
    .right {
        width: 8.57rem;
        height: 3rem;
        // background-color: rgba(128, 213, 156, 1);
        border-radius: 100px;
        text-align: center;
        line-height: 3rem;
        color: rgba(255, 255, 255, 1);
        //margin-top: 10px;
    }
    .submit {
        width: 118px;
        height: 46px;
        float: right;
        background: url('../../assets/按钮.png') no-repeat;
        background-position: -135px -1228px;
        // background-color: #69B482;
    }
    .submit:active {
        background: url('../../assets/按钮.png') no-repeat;
        background-position: -592px -1228px;
        // background-color: #4a9460;
        // box-shadow: 0 2px 6px 3px #4a9460;
    }
  .anwers{
   font-size: 22px;
    padding: 15px;
    line-height: 24px;
    span {
      color: red;
    }
  }
  .remind {
    font-size: 22px;
    line-height: 24px;
    padding: 15px;
  }
  .title {
    padding-bottom: 0.57rem;
    font-size: 24px;
    line-height: 1.79rem;
    color: rgba(105, 180, 130, 1);
  }

  .item {
    padding: 0 3.71rem;
    line-height: 2.43rem;
    font-size: 22px;
  }

  .topic {
    line-height: 2.43rem;
    font-size: 22px;
    padding: 0 3.71rem;
  }

  .select {
    position: relative;
    // height: 1.79rem;
    padding: 1.14rem 3.71rem 1.36rem;
    font-size: 0;
    cursor: pointer;

    .round {
      position: relative;
      display: inline-block;
      width: 1.43rem;
      height: 1.43rem;
      border-radius: 50%;
      border: 2px solid rgba(105, 180, 130, 1);
      // float: left;

      .point {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 0.57rem;
        height: 0.57rem;
        border-radius: 50%;
        background-color: rgba(154, 132, 255, 1);
      }
    }
    
    .complex {
      border-radius: 0%;
      .point {
        border-radius: 0%;
      }
    }
    .option {
      display: inline-block;
      height: 1.79rem;
      line-height: 1.79rem;
      padding-left: 0.57rem;
      padding-right: 0.79rem;
      font-size: 22px;
      color: rgba(105, 180, 130, 1);
      // float: left;
    }

    .text {
      display: inline-block;
      height: 3rem;
      line-height: 1.79rem;
      font-size: 22px;
      color: rgba(53, 53, 53, 1);
      // float: left;
    }
  }
}

.MathJye table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  text-align: center;
  vertical-align: middle;
  line-height: normal;
  font-size: inherit;
  _font-size: 100%;
  font-style: normal;
  font-weight: normal;
  border: 0;
  float: none;
  display: inline-block;
  zoom: 0;
}
.mathjye-underpoint2 {
  border-bottom: 2px dotted #000;
  padding-bottom: 3px;
}
#q_answer {
  display: none;
}
table.edittable {
  border-collapse: collapse;
  text-align: center;
  margin: 2px;
}
table.edittable td,
table.edittable th {
  line-height: 30px;
  padding: 5px;
  white-space: normal;
  word-break: break-all;
  border: 1px solid #000;
  vertical-align: middle;
}
table.composition {
  border-collapse: collapse;
  text-align: left;
  margin: 2px;
  width: 98%;
}
table.composition td,
table.composition th {
  line-height: 30px;
  white-space: normal;
  word-break: break-all;
  border-width: 0;
  vertical-align: middle;
}
table.composition2 {
  border-collapse: collapse;
  width: auto;
}
table.composition2 td,
table.composition2 th {
  text-align: left;
  line-height: 30px;
  white-space: normal;
  word-break: break-all;
  border: none;
  border-width: 0;
  vertical-align: middle;
}
sup {
  vertical-align: super;
}
</style>
