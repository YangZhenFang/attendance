/**
 * Created by yangzhenfang on 2017/06/21.
 */
const policeManage = require('../../../service/police/PoliceManageService');
const uploadMulter = require('../../../utils/uploadMulter');
const upload       = uploadMulter('public/upload/image');

module.exports = {
    //获取警员列表
    get_policelistdata: function (req, res) {
        if (req.query && Object.keys(req.query).length !== 0) {
            policeManage.policelistdata(req.query, function (ret) {
                res.send(ret)
            })
        } else {
            res.send({flag: false, msg: '未接收到相关查询参数'})
        }

    },
    //新增或编辑警员信息
    post_addoreditpolice: function (req, res) {
        if (req.body && Object.keys(req.body).length !== 0) {
            policeManage.addoreditpolice(req.body, function (ret) {
                res.send(ret)
            })
        } else {
            res.send({flag: false, msg: '未接收到保存数据'})
        }
    },
    //通过组织机构id查询警员信息
    get_findpolicedata: function (req, res) {
        policeManage.findPoliceData(req.query, function (ret) {
            res.send(ret)
        })
    },
    // 表单（带单个文件上传，带： enctype="multipart/form-data"）：
    post_saveinfoimage: function (req, res) {
        policeManage.saveInfoImage(req, function (ret) {
            res.send(ret)
            //    })
        })
    },
    post_saveinforemoveimg: function (req, res) {
        if (req.body && Object.keys(req.body).length !== 0) {
            policeManage.saveInfoRemoveImg(req.body, function (ret) {
                res.send(ret)
            })
        } else {
            res.send({flag: false, msg: '错误'})
        }

    },
    //更改删除标记
    post_changedelflag: function(req,res){
        if (req.body && Object.keys(req.body).length !== 0) {

            policeManage.changeDelFlag(req.body, function (ret) {
                res.send(ret)
            })
        } else {
            res.send({flag: false, msg: '未接收到参数'})
        }
    },
    //删除警员信息
    post_deletepolice: function (req, res) {
        if (req.body && Object.keys(req.body).length !== 0) {

            policeManage.deletepolice(req.body, function (ret) {
                res.send(ret)
            })
        } else {
            res.send({flag: false, msg: '未接收到参数'})
        }

    },
    //获取归属机构
    get_getplorg: function (req, res) {
        console.log(req.query);
        policeManage.findAllPlOrg(req.query, function (ret) {
            res.send(ret)
        })
    },
    //获取所属组
    get_getatdgroup: function (req, res) {
        policeManage.findAllAtdGroup(req.query, function (ret) {
            res.send(ret)
        })
    }
};