<template>
 <div class="monthReport">
   <div class="tabPosition">
     <el-form>
       <el-form-item label="展示项：">
         <el-checkbox-group v-model="form.type">
           <el-checkbox label="职位" name="type"></el-checkbox>
           <el-checkbox label="出勤天数" name="type"></el-checkbox>
           <el-checkbox label="休息天数" name="type"></el-checkbox>
           <el-checkbox label="工作时长" name="type"></el-checkbox>
           <el-checkbox label="迟到次数" name="type"></el-checkbox>
           <el-checkbox label="矿工天数" name="type"></el-checkbox>
           <el-checkbox label="早退次数" name="type"></el-checkbox>
           <el-checkbox label="上班缺卡次数" name="type"></el-checkbox>
           <el-checkbox label="下班缺卡次数" name="type"></el-checkbox>
         </el-checkbox-group>
       </el-form-item>
     </el-form>

     <el-form :inline="true" class="demo-form-inline">
       <el-form-item label="时间：">
         <el-date-picker
           v-model="form.timer"
           type="daterange"
           placeholder="选择日期范围">
         </el-date-picker>
       </el-form-item>
       <el-form-item label="考勤组／警员">
         <el-select v-model="form.search_name">
           <el-option v-for="item in orgs" :label="item.org_name" :value="item.org_name" :key="item.org_name"></el-option>
         </el-select>
       </el-form-item>
     </el-form>

     <el-table
       :data="atdTableData"
       v-loading="loading"
       style="width: 100%">

       <el-table-column
         prop="police_name"
         label="警员姓名"
       >
       </el-table-column>

       <el-table-column
         prop="atdGroup"
         label="所属组">
       </el-table-column>
       <el-table-column
         prop="code"
         label="编号">
       </el-table-column>
       <el-table-column
         prop="startTime"
         label="出勤天数">
       </el-table-column>
       <el-table-column
         prop="endTime"
         label="休息天数">
       </el-table-column>
       <el-table-column
         prop="workTime"
         label="工作时长">
       </el-table-column>

     </el-table>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data() {
          return {
              form:{
                  type:[]
              },
            orgs:[],
            atdTableData:[],
            loading: true
          }
      },
    mounted() {
          this.openloading()
    },
    methods: {
          openloading(){
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
            }, 200)
          }
    }
  }
</script>

<style scoped>
  .tabPosition {
    float: left;
    width: 100%;
  }
</style>
