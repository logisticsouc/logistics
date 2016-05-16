/* eslint-disable */
Date.prototype.Format = function(formatStr)   
{
    var str = formatStr;
    str=str.replace(/yyyy|YYYY/,this.getFullYear());   
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));   
  
    str=str.replace(/MM/,this.getMonth()>9?(this.getMonth()).toString():'0' + (this.getMonth()+1));   
    str=str.replace(/M/g,this.getMonth());

    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());   
    str=str.replace(/d|D/g,this.getDate());   
    return str;   
}