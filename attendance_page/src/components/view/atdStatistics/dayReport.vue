<template>
  <div class="dayReport">
    <div class="tabPosition">
      <el-form>
        <el-form-item label="展示项：">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="汇总每日考勤记录" name="type"></el-checkbox>

          </el-checkbox-group>
        </el-form-item>
      </el-form>

      <el-form :inline="true" class="demo-form-inline">
        <!--<el-form-item label="时间：">-->
        <!--<el-date-picker-->
        <!--v-model="form.timer"-->
        <!--type="daterange"-->
        <!--placeholder="选择日期范围">-->
        <!--</el-date-picker>-->
        <!--</el-form-item>-->
        <el-form-item label="考勤组／警员">
          <el-select v-model="form.search_name">
            <el-option v-for="item in orgs" :label="item.org_name" :value="item.org_name"
                       :key="item.org_name"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-table
        :data="atdTableData"
        v-loading="loading"
        style="width: 100%">

        <el-table-column
          prop="policeid"
          label="警员姓名"
        >
        </el-table-column>


        <el-table-column
          prop="of_time"
          label="上班时间">
        </el-table-column>
        <el-table-column
          prop="to_time"
          label="下班时间">
        </el-table-column>
        <el-table-column
          prop="hours"
          label="工作时长">
        </el-table-column>

      </el-table>

      <paging @emitsizechange="handleSizeChange"
              @emitcurrentchange="handleCurrentChange"
              :currentPage="tabPage.currentPage"
              :pageSizes="tabPage.pageSizes"
              :pageSize="tabPage.pageSize"
              :total="tabPage.totalNum"
      >
      </paging>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import paging from '../../common/Paging.vue'
  import date from 'assets/js/date.js'
  import moment from 'moment'
  export default {
    components: {paging},
    data(){
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          timer: '',
          search_name: ''
        },
        atdTableData: [],
        atdData: [],
        orgs: [],
        hours: [],
        loading: true,
        tabPage: {
          currentPage: 1,
          pageSize: 10,
          pageSizes: [10, 20, 30, 50]
        }, //分页信息

      }
    },
    created(){
      this._getAtdRecord()

    },
    mounted() {
      this.openloading()
    },
    computed: {},
    methods: {
      onSubmit(){
        console.log(this.form.type);
      },
      openloading() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 200)
      },
      _getAtdRecord(){
        var _self = this
        _self.loading = true
        var params = {
          page: _self.tabPage.currentPage,
          pageSize: _self.tabPage.pageSize,
          policeid: _self.form.name
        }
        var params1 = {
          page: _self.tabPage.currentPage,
          pageSize: _self.tabPage.pageSize,
          police_name: ''
        }
        var data = params

        _self.$http.get('/system/attendance/punchcardrecord', {params: data}).then(function (res) {
          if (res.data && res.data.flag) {
            var d = res.data.data.rows
            _self.idChangeName(params1, d)
          }
        }).catch(function (err) {
          console.log(err)
        })

      },
      idChangeName(data, arr){
        var _self = this
        _self.$http.get('/business/policemanage/policelistdata', {params: data}).then(function (res) {
          if (res.data && res.data.flag) {
            var arr1 = res.data.data.rows
            for (var i = 0; i < arr.length; i++) {
              for (var j = 0; j < arr1.length; j++) {
                if (arr[i].policeid == arr1[j].id) {
                  console.log(2)
                  arr[i].policeid = arr1[j].police_name
                }
              }
            }
            _self.atdTableData = arr

            _self.idChangeOrg(arr)

          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      idChangeOrg(data){
        var _self = this
        var orgs = []
        _self.$http.get('/business/policemanage/getplorg').then(function (res) {

          if (res.data && res.data.flag) {
            orgs = res.data.data
            for (var m = 0; m < data.length; m++) {
              for (var n = 0; n < orgs.length; n++) {

                if (data[m].pl_org_id == orgs[n].id) {
                  data[m].pl_org_id = orgs[n].org_name
                }

              }
            }
            for (var i = 0; i < data.length; i++) {
              data[i].to_time = moment(data[i].to_time).format('YYYY-MM-DD HH:mm:ss')
              data[i].of_time = moment(data[i].of_time).format('YYYY-MM-DD HH:mm:ss')
              var timer = parseInt(new Date(data[i].to_time) - new Date(data[i].of_time))
              var leave1 = timer % (24 * 3600 * 1000);
              var hours = Math.floor(leave1 / (3600 * 1000));
              var leateave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数
              var minutes = Math.floor(leateave2 / (60 * 1000))
              var h = hours + '小时' + minutes + '分钟'

              data[i].hours = h
            }
            _self.atdTableData = data
            console.log(_self.atdTableData)

          }

        }).catch(function (err) {
          console.log(err)
        })

      },
      /**
       * 切换每页条数
       * @params {Number} val 每页条数
       */
      handleSizeChange(val) {
        this.tabPage.pageSize = val;
        this._getAtdRecord();
      },
      /**
       * 切换页码
       * @params {Number} val 页码
       */
      handleCurrentChange(val) {
        this.tabPage.currentPage = val;
        this._getAtdRecord();
      },
    }
  }
</script>

<style scoped>
  .tabPosition {
    float: left;
    width: 100%;
  }
</style>
