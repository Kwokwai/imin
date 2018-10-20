<template lang="html">
  <div>
    <div class="admin-container">
      <mavon-editor class="set" v-model="value" @change="getContent"></mavon-editor>
      <div class="footer">
        <el-popover
          ref="popover5"
          placement="top"
          width="160"
          v-model="visible2">
          <p>确定提交吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
            <el-button type="primary" size="mini" @click="subArticle">确定</el-button>
          </div>
        </el-popover>
        <el-button v-popover:popover5 class="submit">发布</el-button>
        <div class="left">
          <el-button @click="modalVisible = true">填写信息</el-button>
          <el-button @click="modalVisible2 = true">添加分类</el-button>
          <el-button @click="modalVisible3 = true">添加标签</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="文章信息" :visible.sync="modalVisible">
      <el-form :model="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" :label-width="formLabelWidth">
          <el-select v-model="form.category" placeholder="请选择活动区域">
            <el-option :key="item.name" :label="item.name" :value="item.name" v-for="item in categorys"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标签" :label-width="formLabelWidth">
          <el-select v-model="form.tag" placeholder="请选择活动区域">
            <el-option :key="item.name" :label="item.name" :value="item.name" v-for="item in tags"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章描述" :label-width="formLabelWidth">
          <el-input v-model="form.describtion" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modalVisible = false">取 消</el-button>
        <el-button type="primary" @click="modalVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="标签分类" :visible.sync="modalVisible2" id="tags">
      <el-tag
        :key="category.name"
        v-for="category in categorys"
        :closable="true"
        :close-transition="false"
        @close="CategoryClose(category)"
      >
        {{category.name}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @keyup.enter.native="handleCategory"
        @blur="handleCategory"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Category</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="modalVisible2 = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="标签分类" :visible.sync="modalVisible3" id="tags">
      <el-tag
        :key="tag.name"
        v-for="tag in tags"
        :closable="true"
        :close-transition="false"
        @close="TagClose(tag)"
      >
        {{tag.name}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @keyup.enter.native="handleTag"
        @blur="handleTag"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="modalVisible3 = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
  data () {
    return {
      value: '# 请开始你的表演',
      tags: [],
      categorys: [],
      content: '',
      visible2: false,
      modalVisible: false,
      modalVisible2: false,
      modalVisible3: false,
      inputValue: '',
      inputVisible: false,
      form: {
        title: '',
        tag: '',
        describtion: ''
      },
      formLabelWidth: '120px'
    }
  },
  mounted () {
    this.getTags()
    this.getCategorys()
  },
  methods: {
    getContent (value, render) {
      this.content = render
    },
    subArticle () {
      if (!this.form.title) {
        this.$message.error('无标题')
      } else if (!this.content) {
        this.$message.error('无内容')
      } else {
        this.$api.post('/article', {
          title: this.form.title,
          tag: this.form.tag,
          summary: this.form.describtion,
          content: this.content
        }, response => {
          if (response.status === 200) {
            this.$message({
              type: 'success',
              message: '文章已发布'
            })
            this.visible2 = false
          } else {
            this.$message.error('未发布')
          }
        })
      }
    },
    getCategorys () {
        this.$api.get('/category', null, response => {
        let res = response
        console.log(res)
        if (res.status === 200) {
          this.categorys = res.data.list
          console.log(this.categorys)
        } else {
          this.categorys = []
        }
      })
    },
    getTags () {
      this.$api.get('/tag', null, response => {
        let res = response
        console.log(res)
        if (res.status === 200) {
          this.tags = res.data.list
        } else {
          this.tags = []
        }
      })
    },
    CategoryClose (category) {
      console.log(this.$api)
      this.categorys.splice(this.categorys.indexOf(category.name), 1)
      this.$api.delete('/category', {"id":category.id}, response => {
        // tagDel: category
        let res = response
        if (res.status === 200) {
          this.$message({
            type: 'success',
            message: '分类已删除'
          })
        } else {
          this.$message.error('未删除')
        }
      })
    },
    TagClose (tag) {
      console.log(this.$api)
      this.tags.splice(this.tags.indexOf(tag.name), 1)
      this.$api.delete('/tag', {"id": tag.id}, response => {
        // tagDel: tag
        let res = response
        console.log(666666666666666)
        console.log(tag.id)
        if (res.status === 200) {
          this.$message({
            type: 'success',
            message: '标签已删除'
          })
        } else {
          this.$message.error('未删除')
        }
      })
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleCategory () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.categorys.push({name: inputValue})
        this.$api.post('/category', {'name': inputValue}, response => {
          let res = response
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '分类已添加'
            })
          } else {
            this.$message.error('未添加')
          }
        })
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    handleTag () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.tags.push({name: inputValue})
        this.$api.post('/tag', {'name': inputValue}, response => {
          let res = response
          if (res.status === 200) {
            this.$message({
              type: 'success',
              message: '标签已添加'
            })
          } else {
            this.$message.error('未添加')
          }
        })
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="css">
  #tags .el-tag+.el-tag {
    margin-left: 10px;
  }
  #tags .button-new-tag,.input-new-tag{
    margin-left: 10px;
    height: 24px;
    line-height: 22px;
    padding-top: 0;
    padding-bottom: 0;
  }
  #tags .input-new-tag {
    width:78px;
    margin-left:10px;
    vertical-align:bottom
  }
  .footer{
    overflow: hidden;
    margin: 0 auto;
    padding-top: 20px;
  }
  .row-bg {
    /*background-color: #f9fafc;*/
    background-color: #99a9bf;
    width: 100%;
    height: 837px;
    border-radius: 2px;
  }
  .admin-container {
    flex:1;
    overflow-y: scroll;
    padding: 20px;
  }
  .set{
    height: 740px;
    /*overflow: scroll;*/
  }
  .submit{
    float: right;
  }
  .left {
    float: left;
  }
</style>
