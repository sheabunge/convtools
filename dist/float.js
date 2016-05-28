var bin2dec=function(a){var b=0;if(a=a.replace(/\s/g,""),-1!==a.indexOf(".")){var c=a.split("."),d=c[1];a=c[0];for(var e=0;e<d.length;++e)"1"==d[e]&&(b+=1/Math.pow(2,e+1))}a=a.split("").reverse().join("");for(var f=a.length-1;f>=0;--f)"1"==a[f]&&(b+=Math.pow(2,f));return b},dec2bin=function(a){var b=[];if(a*=1,0===a)return"0";if(Math.floor(a)!==a){for(var c=".",d=a%1,e=0;0!==d;++e)d*=2,c+=Math.floor(d),d%=1;return dec2bin(Math.floor(a))+c}for(var f=Math.floor(Math.log(a)/Math.log(2));f>=0;)a-Math.pow(2,f)>=0?(a-=Math.pow(2,f),b[f]="1"):b[f]="0",--f;return b.reverse().join("")},dec2hex=function(a){var b="0123456789ABCDEF",c=[];if(a=Math.floor(a),0===a)return"0";for(var d=Math.floor(Math.log(a)/Math.log(16));d>=0;)c[d]=Math.floor(a/Math.pow(16,d)),c[d]=b.charAt(c[d]),a%=Math.pow(16,d),--d;return c.reverse().join("")},hex2dec=function(a){var b="0123456789ABCDEF",c=0;a=a.toUpperCase(),a=a.split("").reverse().join("");for(var d=a.length-1;d>=0;--d){var e=b.indexOf(a[d]);c+=Math.pow(16,d)*e}return c},twoscomp=function(a){for(var b=a.split("").reverse(),c=[],d=b.length,e=0;d>e&&"1"!=b[e];)c[e]=b[e],++e;if(e>=d)return c.reverse().join("");for(c[e]="1",++e;d>e;)"1"==b[e]?c[e]="0":"0"==b[e]?c[e]="1":c[e]=b[e],++e;return c.reverse().join("")},App=function(a){this.el=a,this.el.bits={},this.bits={};for(var b=["sign","exp","mantissa"],c=0;3>c;c++){var d=b[c];this[d]="0",this.el.bits[d]=this.el[d].querySelector(".bits"),this.bits[d]=this.el.bits[d].childElementCount}};App.prototype.get_word_len=function(){return this.bits.sign+this.bits.exp+this.bits.mantissa},App.prototype.set_word_len=function(a){var b=this.get_word_len();this.bits.mantissa+=a-b},App.prototype.enable_sign=function(){this.bits.sign=1,this.el.sign.style.display="block"},App.prototype.disable_sign=function(){this.bits.sign=0,this.el.sign.style.display="none"},App.prototype.pad=function(a,b,c){for(a+="",c=c||"0";a.length<b;)a=c+a;return a},App.prototype.output_binary=function(){console.log(this.sign+" "+this.exp+" "+this.mantissa),this.el.bits.sign.innerHTML='<span class="bit">'+this.sign+"</span>";for(var a,b="",c=0;c<this.bits.exp;++c)a=c<this.exp.length?this.exp[c]:"0",b+='<span class="bit">'+a+"</span>";this.el.bits.exp.innerHTML=b,this.el.exp.style.display=""===b?"none":"block";var d="";for(c=0;c<this.bits.mantissa;++c)a=c<this.mantissa.length?this.mantissa[c]:"0",d+='<span class="bit">'+a+"</span>";this.el.bits.mantissa.innerHTML=d,this.el.mantissa.style.display=""===d?"none":"block"},App.prototype.update=function(){this.output_binary(),this.el.config.sign_bit.checked=this.bits.sign,this.el.config.exp_len.value=this.bits.exp,this.el.config.mantissa_len.value=this.bits.mantissa,this.el.config.word_len.value=this.get_word_len()},App.prototype.set_decimal=function(a){this.sign=0>a?"1":"0",a=Math.abs(a);var b=0,c=dec2bin(a);if(1>c){c=c.replace(/^0./,"");for(var d=0;"0"==c[d];++d,--b);c=c.substr(d)}else{var e=Math.floor(1*c)+"";b="0"==e?0:e.length,c=c.replace(/^0+|0+$|\./g,"")}c.length>this.mantissa.bits&&(c=c.substr(0,this.bits.mantissa)),this.mantissa=c,0>b?(b=dec2bin(-b),this.exp=twoscomp(this.pad(b,this.bits.exp))):this.exp=this.pad(dec2bin(b),this.bits.exp)},App.prototype.set_binary=function(a,b,c){this.sign=a,this.exp=b,this.mantissa=c};var elements={dec:document.getElementById("decimal"),sign:document.querySelector(".sign"),exp:document.querySelector(".exp"),mantissa:document.querySelector(".mantissa"),config:{sign_bit:document.getElementById("sign_bit"),exp_len:document.getElementById("exp_length"),exp_format:document.getElementById("exp_format"),mantissa_len:document.getElementById("mantissa_length"),word_len:document.getElementById("word_length")}},app=new App(elements);app.update(),app.el.dec.oninput=function(){var a=this.value.trim();return a.match(/-?\d+/)?(app.set_decimal(a),void app.output_binary()):(console.log(a+" is not a valid number"),app.set_binary("0","0","0"),void app.output_binary())},app.el.config.sign_bit.onchange=function(){this.checked?(app.enable_sign(),app.bits.mantissa+=1):(app.disable_sign(),app.bits.mantissa-=1),app.update()},app.el.config.exp_len.oninput=function(){app.bits.exp=parseInt(this.value),app.update()},app.el.config.mantissa_len.oninput=function(){app.bits.mantissa=parseInt(this.value),app.update()},app.el.config.word_len.oninput=function(){app.set_word_len(parseInt(this.value)),app.update()};
//# sourceMappingURL=float.js.map