var columnize=function(a,b){a+="";for(var c=a.split("").reverse(),d=[],e=0;e<c.length;e++)d.push(c[e]),(e+1)%b===0&&d.push(" ");return d.reverse().join("").trim()},format_dec=function(a){a+="",a=a.replace(/\s/g,""),a=a.replace(/^0+([1-9])/,"$1");var b=3-a.length%3;return 3==b&&(b=0),a=" ".repeat(b)+a,a=a.replace(/(.{3})/g,"$1 ").trim()},format_bin=function(a,b){a+="",a=a.replace(/\s/g,""),a=a.replace(/^0+([^0])/,"$1");var c=0;return b?c=b-a.length:(c=4-a.length%4,4==c&&(c=0)),a="0".repeat(c)+a,a.replace(/(\d{4})/g,"$1 ").trim()},bin2dec=function(a){var b=0;a=a.replace(/\s/g,""),a=a.split("").reverse().join("");for(var c=a.length-1;c>=0;--c)"1"==a[c]&&(b+=Math.pow(2,c));return b},dec2bin=function(a){var b=[];if(a*=1,0===a)return 0;for(var c=Math.floor(Math.log(a)/Math.log(2));c>=0;)a-Math.pow(2,c)>=0?(a-=Math.pow(2,c),b[c]="1"):b[c]="0",--c;return b.reverse().join("")},dec2hex=function(a){var b="0123456789ABCDEF",c=[];if(a*=1,0===a)return 0;for(var d=Math.floor(Math.log(a)/Math.log(16));d>=0;)c[d]=Math.floor(a/Math.pow(16,d)),c[d]=b.charAt(c[d]),a%=Math.pow(16,d),--d;return c.reverse().join("")},hex2dec=function(a){var b="0123456789ABCDEF",c=0;a=a.toUpperCase(),a=a.split("").reverse();for(var d=a.length-1;d>=0;--d){var e=b.indexOf(a[d]);c+=Math.pow(16,d)*e}return c},hex_input=document.querySelector("[name=hex]"),dec_input=document.querySelector("[name=dec]"),bin_input=document.querySelector("[name=bin]"),update=function(a){dec_input.value=format_dec(a),hex_input.value=dec2hex(a),bin_input.value=format_bin(dec2bin(a))};update("0"),hex_input.oninput=function(){update(hex2dec(this.value))},dec_input.oninput=function(){update(this.value.replace(/\D/g,""))},bin_input.oninput=function(){update(bin2dec(this.value))};
//# sourceMappingURL=hexconv.js.map