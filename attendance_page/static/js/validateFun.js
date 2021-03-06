/**
 * 验证数字组合
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 * 在validateRule.js里面使用
 */
export const checkNumber = (rule, value, callback) => {
    var reg = /^[0-9]*$/;//验证数字
    if (!value) {
        callback(new Error('请输入数字'));
    }
    setTimeout(() => {
        if (!reg.test(value)) {
            callback(new Error('请输入数字组合'));
        }
         else {
            if (value.length >13) {
                callback(new Error('编号不能超过13位'));
            }
            else {
                callback();
            }
        }
    }, 300);
};
/**
 * 验证年龄
 * @param rule
 * @param value
 * @param callback
 */
export const checkAge = (rule, value, callback) => {

    var reg =  /^[1-9]\d{1,2}$/;//最多三位
    if(!value){
        callback(new Error('请输入年龄'));
    }
    setTimeout(() => {

        if (!reg.test(value)) {
            callback(new Error('年龄为两位或三位整数'));
        }else if(value<18){
            callback(new Error('年龄必须大于18'));
        }
        else {
            callback();
        }

    }, 100);
};
/**
 * 验证手机号码
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
export const isMobilePhone = (rule, value, callback) => {
    var reg =  /^1[34578]\d{9}$/;//手机号码
    setTimeout(() => {
        if (!reg.test(value)) {
            callback(new Error('请输入正确格式，如：18723346175'));
        } else {
            callback();
        }
    }, 300);
};

/**
 * 坐标浮点型
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
export const checkFloat= (rule, value, callback) => {
    // var reg = /^(-?\d+)(\.\d{0,5})?$/;//浮点数，最多五位小数
    var reg = /^(-?[1-9]\d*(\.\d*[1-9])?)$|^(-?0\.\d*[1-9])$|^0$/;

    if (!value&&value!=0) {
        callback(new Error('请输入坐标值'));
    }
    setTimeout(() => {
        if (!reg.test(value)) {
            callback(new Error('请输入正确格式数值，如-2.33'));
        } else {
            callback();

        }
    }, 300);
};

/**
 * 验证特殊字符或汉字
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
export const checkCode = (rule, value, callback) => {
    // var reg = /^[\^\\%&\*~'\?\/\<\>\|\"`]+$/;//中文和特殊字符
    var reg = /^[a-zA-Z0-9_]{0,}$/;
    if (!value) {
        callback(new Error('请输入工人卡号'));
    }
    setTimeout(() => {
        if (!reg.test(value)) {
            callback(new Error('不能输入汉字或者特殊字符'));
        } else {
            callback();

        }
    }, 300);
};

export const checkRequired = (rule, value, callback) => {
    if (value.length<1) {
        callback(new Error('此项必填'));
    }else{
        callback();
    }
};

export const Number = (rule, value, callback) => {
    var reg = /^[0-9]*$/;//验证数字
    if (!value) {
        callback(new Error('请输入数字'));
    }else{
        if (!reg.test(value)) {
            callback(new Error('请输入数字'));
        }else{
            callback();
        }
    }

};

