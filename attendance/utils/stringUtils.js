/***********************************************************************
 *                           字符串操作工具类                          *
 * ********************************************************************/
var strUtil = {
    /*
     * 判断字符串是否为空
     * @param str 传入的字符串
     * @returns {}
     */
    isEmpty: function (str) {
        if (str != null && str.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    /*
     * 判断两个字符串子否相同
     * @param str1
     * @param str2
     * @returns {Boolean}
     */
    isEquals: function (str1, str2) {
        if (str1 == str2) {
            return true;
        } else {
            return false;
        }
    },
    /*
     * 忽略大小写判断字符串是否相同
     * @param str1
     * @param str2
     * @returns {Boolean}
     */
    isEqualsIgnorecase: function (str1, str2) {
        if (str1.toUpperCase() == str2.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 判断是否是数字
     * @param value
     * @returns {Boolean}
     */
    isNum: function (value) {
        if (value != null && value.length > 0 && isNaN(value) == false) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 判断是否是中文
     * @param str
     * @returns {Boolean}
     */
    isChine: function (str) {
        var reg = /^([u4E00-u9FA5]|[uFE30-uFFA0])*$/;
        if (reg.test(str)) {
            return false;
        }
        return true;
    }
};


//获取字符数组
String.prototype.toCharArray = function() {
    return this.split("");
}
//获取N个相同的字符串
String.prototype.repeat = function(num) {
    var tmpArr = [];
    for ( var i = 0; i < num; i++)
        tmpArr.push(this);
    return tmpArr.join("");
}
//逆序
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}
//测试是否是数字
String.prototype.isNumeric = function() {
    var tmpFloat = parseFloat(this);
    if (isNaN(tmpFloat))
        return false;
    var tmpLen = this.length - tmpFloat.toString().length;
    return tmpFloat + "0".Repeat(tmpLen) == this;
}
//测试是否是整数
String.prototype.isInt = function() {
    if (this == "NaN")
        return false;
    return this == parseInt(this).toString();
}
// 合并多个空白为一个空白
String.prototype.resetBlank = function() {
    return this.replace(/s+/g, " ");
}
// 除去左边空白
String.prototype.LTrim = function() {
    return this.replace(/^s+/g, "");
}
// 除去右边空白
String.prototype.RTrim = function() {
    return this.replace(/s+$/g, "");
}
// 除去两边空白
String.prototype.trim = function() {
    return this.replace(/(^s+)|(s+$)/g, "");
}
// 保留数字
String.prototype.getNum = function() {
    return this.replace(/[^d]/g, "");
}
// 保留字母
String.prototype.getEn = function() {
    return this.replace(/[^A-Za-z]/g, "");
}
// 保留中文
String.prototype.getCn = function() {
    return this.replace(/[^u4e00-u9fa5uf900-ufa2d]/g, "");
}
// 得到字节长度
String.prototype.getRealLength = function() {
    return this.replace(/[^x00-xff]/g, "--").length;
}
// 从左截取指定长度的字串
String.prototype.left = function(n) {
    return this.slice(0, n);
}
// 从右截取指定长度的字串
String.prototype.right = function(n) {
    return this.slice(this.length - n);
}
// HTML编码
String.prototype.HTMLEncode = function() {
    var re = this;
    var q1 = [ /x26/g, /x3C/g, /x3E/g, /x20/g ];
    var q2 = [ "&", "<", ">", " " ];
    for ( var i = 0; i < q1.length; i++)
        re = re.replace(q1[i], q2[i]);
    return re;
}
// Unicode转化
String.prototype.ascW = function() {
    var strText = "";
    for ( var i = 0; i < this.length; i++)
        strText += "&#" + this.charCodeAt(i) + ";";
    return strText;
}


module.exports = strUtil;
