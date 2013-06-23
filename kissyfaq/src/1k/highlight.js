/*  ==================================================================================================  
**  类名：J.highlightq
**	版本：1.0
**  功能：语法高亮  
**  示例：  
    ---------------------------------------------------------------------------------------------------  
	
		用法：J.highlight.init();
			  <textarea class="lang-js">js代码</textarea>
		
    ---------------------------------------------------------------------------------------------------  
**  作者：zjfeihu
**  邮件：zjfeihu@126.com 
**  创建：2011/08/03
**  更新：2011/08/27
**	组件地址：http://www.1kjs.com/lib/widget/highlight/
**  ==================================================================================================  
*/
!function(J){
	var skins={//皮肤
		'default':{
			js:{
				hlbox:'padding:4px 8px;background:#f5f8fa;color:#333;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #3C78B5;border-left:4px solid #3C78B5;line-height:1.5;',
				li:'list-style:none;',
				unit:{
					keyword:'color:#0000C6;',
					userword:'color:#e59c38;',
					comment:'color:#B0812C;',
					quote:'color:#666666;',
					number:'color:red;',
					brackets:'color:#333;',
					regexp:'color:#008074;'
				}
			},
			html:{
				hlbox:'padding:4px 8px;background:#f5f8fa;color:#333;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #3C78B5;border-left:4px solid #3C78B5;line-height:1.5;',
				li:'list-style:none;',
				unit:{
					tag:'color:#0000C6;',
					comment:'color:#B0812C;',
					attrval:'color:#666;',
					attrkey:'color:red;',
					doctype:'color:#008074;'
				}
			
			},
			css:{
				hlbox:'padding:4px 8px;background:#f5f8fa;color:#333;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #3C78B5;border-left:4px solid #3C78B5;line-height:1.5;',
				li:'list-style:none;',
				unit:{
					csssel:'color:#008074;',
					csskey:'color:red;',
					comment:'color:#B0812C;',
					cssval:'color:#666;'
				}
			
			}
		},
		'crm':{
			js:{
				hlbox:'padding:4px 8px;background:#F8F8F8;color:#333;font-size:13px;font-family: Courier, "Courier New",monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #E8E8E8;border-left:4px solid #E8E8E8;line-height:1.2;',
				li:'list-style:none;',
				unit:{
					keyword:'color:#0000C6;',
					userword:'color:#e59c38;',
					comment:'color:#B0812C;',
					quote:'color:#666666;',
					number:'color:#D96;',
					brackets:'color:#333;',
					regexp:'color:#008074;'
				}
			},
			html:{
				hlbox:'padding:4px 8px;background:#F8F8F8;color:#333;font-size:13px;font-family: Courier, "Courier New",monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #E8E8E8;border-left:4px solid #E8E8E8;line-height:1.2;',
				li:'list-style:none;',
				unit:{
					tag:'color:#0000C6;',
					comment:'color:#B0812C;',
					attrval:'color:#666;',
					attrkey:'color:#D96;',
					doctype:'color:#008074;'
				}
			
			},
			css:{
				hlbox:'padding:4px 8px;background:#F8F8F8;color:#333;font-size:13px;font-family: Courier, "Courier New",monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #E8E8E8;border-left:4px solid #E8E8E8;line-height:1.2;',
				li:'list-style:none;',
				unit:{
					csssel:'color:#008074;',
					csskey:'color:#D96;',
					comment:'color:#B0812C;',
					cssval:'color:#666;'
				}
			
			}
		},
		black:{
			js:{
				hlbox:'padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;',
				li:'background:#222;padding:0 0 0 5px;border-left:1px solid #333;',
				unit:{
					keyword:'color:#119BEE;',
					userword:'color:#FFCC00;',
					comment:'color:#666;',
					quote:'color:#89D726;',
					number:'color:#86CC99;',
					brackets:'color:#B7B700;',
					regexp:'color:#FE81F8;'
				}
			},
			html:{
				hlbox:'padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;',
				li:'background:#222;padding:0 0 0 5px;border-left:1px solid #333;',
				unit:{
					tag:'color:#119BEE;',
					comment:'color:#666;',
					attrval:'color:#89D726;',
					attrkey:'color:#86CC99;',
					doctype:'color:#B7B700;'
				}
			
			},
			css:{
				hlbox:'padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;',
				li:'background:#222;padding:0 0 0 5px;border-left:1px solid #333;',
				unit:{
					csssel:'color:#FE81F8;',
					csskey:'color:#119BEE;',
					comment:'color:#666;',
					cssval:'color:#89D726;'
				}
			}
		},
		bop:{
			js:{
				hlbox:'padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;',
				li:'background:#222;padding:0 0 0 5px;border-left:1px solid #333;',
				unit:{
					keyword:'color:#ef5d32;',
					userword:'color:#ef5d32;',
					comment:'color:#808000;',
					quote:'color:#d9d762;',
					number:'color:#6c99bb;',
					brackets:'color:#e6e1c4;',
					regexp:'color:#8856d2;'
				}
			},
			html:{
				hlbox:'padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;',
				li:'background:#222;padding:0 0 0 5px;border-left:1px solid #333;',
				unit:{
					tag:'color:#efac32;',
					comment:'color:#B0812C;',
					attrval:'color:#d9d762;',
					attrkey:'color:#6c99bb;',
					doctype:'color:#efac32;'
				}
			
			},
			css:{
				hlbox:'padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;',
				li:'background:#222;padding:0 0 0 5px;border-left:1px solid #333;',
				unit:{
					csssel:'color:#efac32;',
					csskey:'color:#c0c0c0;',
					comment:'color:#666;',
					cssval:'color:#d9d762;'
				}
			}
		}
	
	},
	restr={//需要替换的字符
		'&':{reg:/&/g,to:'&amp;'},
		'<':{reg:/</g,to:'&lt;'},
		' ':{reg:/ /g,to:'&nbsp;'},
		'\t':{reg:/\t/g,to:'&nbsp;&nbsp;&nbsp;&nbsp;'},
		'\n':{reg:/\n/g,to:'</li><li>'}
	},
	JsMode={//正则表达式
		beskip:{cls:'#',reg:/(\$[\w]*)/},//修正$开头的变量被加亮
		regexp:[
			{
				//(brackets|keyword|cop)
				contains:{
					brackets:{cls:'brackets',reg:/(\[|\()/},//括号开始
					keyword:{cls:'keyword',reg:/(typeof|void|return|in|throw|case)/},//关键字开头
					cop:{cls:'#',reg:/(^|[-~:=?,!>]|\/\s+)/},//赋值运算符开头
					cop2:{reg:/(<)/,restr:[restr['<']]}
				}
			},
			{
				//((?:comment|sstr)*)
				unneed:1,
				contains:{
					
					sstr:{
						reg:/\s/,
						restr:[
							restr[' '],
							restr['\t'],
							restr['\n']
						]
					},
					comment:{//注释
						cls:'comment',
						reg:/(?:\/\/.*\s|\/\*[\w\W]*?\*\/)/,
						restr:[
							restr['&'],
							restr['<'],
							restr[' '],
							restr['\t'],
							{reg:/\n/g,to:'</span></li><li><span class="comment">'}
						]
					
					}
				}
			},
			{
				contains:{
					regexp:{
						cls:'regexp',
						reg:/(\/(?:\\\\|\\\/|\[.+?\]|[^\/\r\n])+\/[gim]*)/,
						restr:[
							restr['&'],
							restr['<'],
							restr[' '],
							restr['\t']
						]
					
					}
				}
			}
		],
		comment:{//注释
			cls:'comment',
			reg:/(\/\*[\w\W]*?\*\/|\/\/.*)/,
			restr:[
				restr['&'],
				restr['<'],
				restr[' '],
				restr['\t'],
				{reg:/\n/g,to:'</span></li><li><span class="comment">'}
			]
		},
		quote:{//字符串
			cls:'quote',
			reg:/("(?:\\\\|\\"|[^"\r])*"|'(?:\\\\|\\'|[^'\r])*')/,
			restr:[
				restr['&'],
				restr['<'],
				restr[' '],
				restr['\t'],
				{reg:/\n/g,to:'</span></li><li><span class="quote">'}
			]
		},
		keyword:{//关键字
			cls:'keyword',
			reg:/(boolean|break|byte|case|catch|char|class|const|continue|default|double|do|else|extends|false|finally|final|float|for|function|goto|if|implements|import|instanceof|interface|int|in|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|typeof|this|throw|throws|transient|true|try|var|void|while|with)(?![\w$])/
		
		},
		userword:{//自定义关键字
			cls:'userword',
			reg:/(window|document|Math|Boolean)(?![\w$])/
		},
		id:{//变量名
			cls:'#',
			reg:/([a-zA-Z_]+[\w]*)/
		},
		number:{//数字
			cls:'number',
			reg:/(0x[0-9a-fA-F]+|(?:\d+\.\d*|\d*\.\d+|\d+)(?:[eE][+\-]?\d+)?)/
		},
		brackets:{//括号
			cls:'brackets',
			reg:/([(){}\[\]]+)/
		},
		cstr:{
			cls:'#',
			reg:/(\s+|<|&)/,
			restr:[
				restr['&'],
				restr['<'],
				restr[' '],
				restr['\t'],
				{reg:/\n/g,to:'</li><li>'}
			]
		}
	},
	JsReg,
	JsSetting,
	HtmlReg=/(<script[^>]*?>[\s\S]*?<\/script>)|(<style[^>]*?>[\s\S]*?<\/style>)|(<textarea[^>]*?>[\s\S]*?<\/textarea>)|(<[\w]+[^>]*?>|<\/[\w]+>)|(<!--[\s\S]*?-->)|(<!doctype[^>]*?>)|(\n)|(\t)|(\s)/gi,
	Menu,//菜单
	cNode,//当前操作的对象
	//demoWin,
	Jsfile=[],
	me={
		init:function(ops){
			ops=ops||{};
			me._skin=ops.skin||'default';
			me._line=ops.line==false?false:true;
			me._eidt=ops.eidt==false?false:true;
			//me._JsRequire(ops.JsRequire||'');
			me._loadSkin();
			me._formatReg();
			J.ready(function(){
				me._ccMenu();
				me._doHighlight();
				me._ccDemoWin();
			});
			
		},
		_JsRequire:function(files){
			files=files.split(',');
			J.each(files,function(){
				Jsfile.push('<script src="'+this+'"></script>');
			});
		},
		parseCss:function(code,skin){
			code=code.replace(/(\{[^\}]*\})|(\/\*[\w\W]*?\*\/)|(\n)|([^\n\{\}]+)/g,function(_,cssText,comment,newline,selector,tab,spac){
				switch(!1){
					case !cssText:
						return _.replace(/([^{\n;]+?:[^}\n;]+)|(\n)|(\/\*[\w\W]*?\*\/)|( )/g,function(_,keyval,newline,comment,space){
							switch(!1){
								case !keyval:
									var key=keyval.split(':')[0],
										val=keyval.split(':')[1];
									return '<span class="csskey">'+encode(key)+'</span>:<span class="cssval">'+val+'</span>';
								case !newline:return '</li><li>';
								case !comment:return '<span class="comment">'+encode(comment)+'</span>';
								case !space:return '&nbsp;';
							}
					
						});
					case !comment:return '<span class="comment">'+encode(comment)+'</span>';
					case !newline:return '</li><li>';
					case !selector:return selector.replace(/(\/\*[\w\W]*?\*\/)|( )|(\t)|([^{]+)/g,function(_,comment,space,tab,sel){
						if(comment){
							return '<span class="comment">'+encode(comment)+'</span>';
						}else if(space){
							return '&nbsp;';
						}else if(tab){
							return '&nbsp;&nbsp;&nbsp;&nbsp;';
						}else if(sel){
							return '<span class="csssel">'+sel+'</span>';
						}
						
					});
				}
				
			});
			return '<ol class="'+(skin||me._skin)+'-hlcss"><li>'+code+'</li></ol>';
			function encode(code){
				return code
					.replace(/&/g,'&amp;')
					.replace(/</g,'&lt;')
					.replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;')
					.replace(/\s/g,'&nbsp;')
					.replace(/</g,'&lt;');
			}
		},
		parseHtml:function(code,skin){
			var me=this;
			code=code.replace(HtmlReg,function(text){
				switch(!1){
					case !arguments[1]:
						return text.replace(/(<script[^>]*?>)([\s\S]*?)(<\/script>)/,function(_,tag1,text,tag2){
							return tagBegin(tag1)
								+me.parseJs(text,skin).replace(/<ol[^>]+><li>|<\/li><\/ol>/g,'')
								+tagEnd(tag2);
					
						});//脚本
					case !arguments[2]:
						return text.replace(/(<style[^>]*?>)([\s\S]*?)(<\/style>)/,function(_,tag1,text,tag2){
							return tagBegin(tag1)
								+me.parseCss(text,skin).replace(/<ol[^>]+><li>|<\/li><\/ol>/g,'')
								+tagEnd(tag2);
					
						});//样式
					case !arguments[3]:
						return text.replace(/(<textarea[^>]*?>)([\s\S]*?)(<\/textarea>)/,function(_,tag1,text,tag2){	
							return tagBegin(tag1)
								+encode(text)
								+tagEnd(tag2);
					
						});//样式
					case !arguments[4]:
						return tagBegin(text);//标签	
					case !arguments[5]:return '<span class="comment">'+encode(text)+'</span>';//注释
					case !arguments[6]:return '<span class="doctype">'+encode(text)+'</span>';//doctype声明
					case !arguments[7]:return '</li><li>';//换行
					case !arguments[8]:return '&nbsp;&nbsp;&nbsp;&nbsp;';//tab
					case !arguments[9]:return '&nbsp;';//空格
				}
			
			});
			skin=skin||me._skin;
			return '<ol class="'+[
						skin+'-hlhtml',
						skin+'-hljs',
						skin+'-hlcss'
					].join(' ')+'"><li>'+code+'</li></ol>';
			function tagBegin(code){
				return '<span class="tag">'+code
					.replace('<','&lt;')
					.replace('>','&gt;')
					.replace(/(\w+=)('[\s\S]*?'|"[\s\S]*?")/g,function(_,key,val){
						return '<span class="attrkey">'+key+'</span><span class="attrval">'+val+'</span>';
					})
				+'</span>';
			}
			function tagEnd(code){
				return '<span class="tag">'+code
					.replace('<','&lt;')
					.replace('>','&gt;')
				+'</span>';
			}
			function encode(code){
				return code
					.replace(/&/g,'&amp;')
					.replace(/</g,'&lt;');
			}
		},
		parseJs:function(code,skin){
			var slg=JsSetting.length;
			code=code.replace(JsReg,function(){//return arguments[0];
				var i=0,retext=[];
				while(i++<slg){//遍历arguments
					if(arguments[i]){//假如当前的值为true
					
						var text=arguments[i],
							st=JsSetting[i-1];
						if(st.length){//继续解析
						//alert(J.toJson(st))
							for(var j=0;j<st.length;j++){
								text=text.replace(st[j].reg,function(text){
									//alert(st[j].reg)
									var _st=st[j];
									if(_st.restr){//替换字符
										for(var k=0;k<_st.restr.length;k++){
											text=text.replace(_st.restr[k].reg,_st.restr[k].to);
										}
									}
									
									if(_st.cls){//添加class
										text='<span class="'+_st.cls+'">'+text+'</span>';
									}
									
									return text;	
								});
								//alert('aaa'+text)
							}
							retext.push(text);
							continue;
						
						}else{
							if(st.restr){//替换字符
								for(var j=0;j<st.restr.length;j++){
									text=text.replace(st.restr[j].reg,st.restr[j].to);
								}
							}
							if(st.cls){//添加class
								text='<span class="'+st.cls+'">'+text+'</span>';
							}
							retext.push(text);
						}
					}
				}
				return retext.join('');
			});
			return '<ol class="'+(skin||me._skin)+'-hljs"><li>'+code+'</li></ol>';
		},
		_doHighlight:function(){
			J('textarea')&&J('textarea').each(function(){
				var type=this.cls('lang-js')?'Js':this.cls('lang-html')?'Html':this.cls('lang-css')?'Css':0;
				if(type){
					var value=function(code){
						var kg=Array(50).join(' ');
						code=code.replace(/\t/g,'    ').replace(/\s+$/,'');
						if(!/^\S/m.test(code)){
							code.replace(/^\s+/gm,function(x){
								if(x.length<kg.length)kg=x;
							});
							code=code.replace(new RegExp('^'+kg,'gm'),'');
						}
						return code;
					}(this.node.value);
					var skin=this.attr('skin');
					if(!me._eidt||type=='Css'){
						this.replace(J.node('<div class="hlwrap"><div class="hlcode">'+me['parse'+type](value,skin)+'</div></div>'));
					}else{
						var hlwrap=J.node('<div class="hlwrap"><div class="hledit"><textarea>'+value+'</textarea><div class="btnbox"><button>加亮代码</button><button>执行代码</button><span>提示：你可以先修改代码再执行操作！</span></div></div><div class="hlcode">'+me['parse'+type](value,skin)+'</div></div>');
						this.replace(hlwrap);
						var hlcode=hlwrap.child(1).on('contextmenu',function(e){
							Menu.left(e.clientX+4);
							Menu.top(e.clientY+J.scrollTop()+4);
							hlwrap.type=type;
							hlwrap.skin=skin;
							cNode=hlwrap;
							e.preventDefault();
							e.stopPropagation();
						}),hltext=hlwrap.child(0).find('textarea');
						hlwrap.find('button').each(function(i){
							this.click(function(){
								if(i){//执行代码
									cNode=hlwrap;
									me._toRun();
								}else{//加亮代码
									hlcode.html(me['parse'+type](hltext.node.value,cNode.skin));
									hlwrap.cls('hlwrap','hlwrap-edit');
								}
							});
						});
					
					}
				
				
				}
			
			});
		
		
		},
		_loadSkin:function(){
			var css=[];
			J.each(skins,function(skinName){//this is skin
				J.each(this,function(type){//this is lang
					var langcls='.'+skinName+'-hl'+type;
					css.push(langcls+'{'+this['hlbox']+'margin:0;word-wrap:break-word;word-break:break-all;display:inline-block\9;font-size:14px;}');
					css.push(langcls+' li{margin:0;'+this['li']+'}');
					J.each(this.unit,function(cls){
						css.push([langcls+' .',cls,'{',this,'}'].join(''));
					
					});
				});
			
			
			});
			css.push([
				'.hlmenu{',
				'position:absolute;',
				'background:#FFFFFF;',
				'border:1px solid #999999;',
				'font-size:12px;',
				'top:0;',
				'left:-999px;',
				'padding:1px;',
				'width:100px;',
				'}',
				'.hlmenu a{display:block;padding:3px 12px;color:#333;text-decoration:none!important;}',
				'.hlmenu a:hover{background:#316AC5;color:#fff;}'
			].join(''));
			css.push([
				'.hlwrap,.hlwrap-edit{}',
				'.hledit{border:1px solid #999999;margin: 3px;overflow:hidden;padding:3px;font-size:12px;}',
				'.hledit textarea{font:14px/1.5 Monaco,"Lucida Console","Consolas","Courier New",Courier,mono,serif;\
					border:0;\
					height:190px;\
					display:block;\
					width:100%;\
					resize: none;\
					outline: none;\}',
				'.hledit .btnbox{border-top:1px solid #999;padding-top:3px;}',
				'.hledit button{padding:0 6px;}',
				'.hlwrap .hledit{display:none;}',
				'.hlwrap-edit{border:1px solid #999;background:#eee;}',
				'.hlwrap-edit .hlcode{display:none;}',
				'.hlwrap-edit .hledit{display:block;background:#fff;}',
				'.hlwrap-edit span{color:green;padding-left:1em;}'
				
			].join(''));
			css.push([
				'.hldemowin{z-index:9999;display:none;position:fixed;_position:absolute;left:0;top:0;width:100%;height:400px;background:#fff;}',
				'.hldemowin .closebar{margin:3px auto;width:400px;padding:8px;font-size:14px;font-weight:bold;cursor:pointer;text-align:center;background:#fefefe;border:1px solid #999;color:red;}',
				'.hldemowin .closebar:hover{background:#feefff;}',
				'.hldemowin iframe{border-top:1px solid #000}'
				
			].join(''));
			J.css(css.join(''));
		},
		_ccMenu:function(){
			var me=this;
			Menu=J.node('<div class="hlmenu"><a href="#" jbtn="edit">编辑代码</a><a href="#" jbtn="run">运行代码</a><a href="http://www.1kjs.com/lib/widget/highlight/" target="_blank">关于插件</a></div>');
			J('body').append(Menu);
			Menu.click(function(e){
				Menu.left(-999);
				switch(J(e.target).attr('jbtn')){
					case 'edit':
						me._toEdit();
						break;
					case 'run':
						me._toRun();
						break;
					default:
						return;
				}
				e.preventDefault();
				e.stopPropagation();
			}).on('contextmenu',function(e){
				e.preventDefault();
			});
			J(document).click(function(e){
				if(!Menu.contains(e.target)){//点击的不是菜单
					Menu.left(-999);
				}
			});
		},
		_toEdit:function(){
			cNode.cls('hlwrap-edit','hlwrap');
			J.scrollTop(cNode.offsetTop()-120,1000);
		},
		_toRun:function(){
			var type=cNode.type;
			if(type=='Js'){
				this.demoWin.js(cNode.find('textarea').node.value);
			}else if(type=='Html'){
				this.demoWin.html(cNode.find('textarea').node.value);
			}
		},
		_formatReg:function(){
			var _JsMode=ccreg(JsMode);
			JsReg=RegExp(_JsMode.reg,'g');
			JsSetting=_JsMode.setting;
			function ccreg(mode){
				var regs=[],
					settings=[],
					item;
				for(var key in mode){//中间用或链接join('|')
					item=mode[key];
					if(item.reg){//已经是顶层叶子了，不能在往下解析
						
						if(item.restr||item.cls){//说明是被捕获的节点，需要进行操作
							settings.push({
								cls:item.cls&&item.cls!='#'?item.cls:'',
								restr:item.restr
							});
						}
						//alert(J.toJson(settings));
						regs.push(item.reg.source);
					}else if(item.length){//数组，成组的匹配,中间用与连接，join(''),里面还需要继续解析
						var itemx,regx=[];
						for(var i=0;i<item.length;i++){
							itemx=item[i];
							if(itemx.unneed){//非必须的，需要合成到一个分组中，并且setting为数组
								itemx=itemx.contains;
								var rx=[],
									sx=[],
									ix;
								for(var ex in itemx){
									ix=itemx[ex];
									rx.push(ix.reg.source);
									sx.push({
										reg:RegExp(ix.reg.source,'g'),
										cls:ix.cls&&ix.cls!='#'?ix.cls:'',
										restr:ix.restr
									});
								}
								regx.push('((?:'+rx.join('|')+')*)');
								settings.push(sx);
							}else{
								var creg=ccreg(itemx.contains);
								regx.push(creg.reg);
								settings=settings.concat(creg.setting);
							}
						}
						regs.push('(?:'+regx.join('')+')');
					}
					
				}
				return{
					reg:'(?:'+regs.join('|')+')',
					setting:settings
				};
			}
		
		},
		
		_ccDemoWin:function(){
			var win=J.node('<div class="hldemowin"><div class="closebar">点击关闭</div></div>'),
				//iframe=win.child(1),
				iframe,
				scrollTop,
				show=0;
			J('body').append(win.node);
			
			this.demoWin={
				js:function(code){
					iframe&&iframe.node.parentNode.removeChild(iframe.node);
					iframe=J.node('<iframe src="#" name="demoWin" frameborder="0" width="100%"></iframe>');
					win.append(iframe.node);
					var doc=window.open('','demoWin');
					doc.document.write(Jsfile.join(''));
					doc.document.write('<script>'+code+'</script>');
					doc.document.close();
					//iframe.node.parentNode.removeChild(iframe.node);
				},
				html:function(code){
					iframe&&iframe.node.parentNode.removeChild(iframe.node);
					iframe=J.node('<iframe src="#" name="demoWin" frameborder="0" width="100%"></iframe>');
					win.append(iframe.node);
					scrollTop=document.documentElement.scrollTop+document.body.scrollTop;
					J('html').css('overflow','hidden');
					show=1;
					resize();
					win.show();
					var doc=window.open('','demoWin');
					doc.document.write(code);
					doc.document.close();
				}
			};
			function resize(){
				if(show){
					win.css({
						width:document.documentElement.clientWidth,
						height:document.documentElement.clientHeight
					});
					iframe.height(document.documentElement.clientHeight-40);
				}
			}
			function encode(code){
				return code
					.replace(/\\/g,'\\\\')
					.replace(/'/g,'\\\'')
					.replace(/%/g,'%25')
					.replace(/&/g,'&amp;')
					.replace(/</g,'&lt;')
					.replace(/>/g,'&gt;')
					.replace(/"/g,'&quot;');
			}
			J(window).on('resize',resize);
			win.child(0).click(function(){
				J('html').css('overflow','');
				document.documentElement.scrollTop=scrollTop;
				document.body.scrollTop=scrollTop;
				win.hide();
				iframe.node.parentNode.removeChild(iframe.node);
				iframe=null;
				show=0;
			});
		}
	};
	J.widget('highlight',function(){
		return me;
	});
}($1k);
