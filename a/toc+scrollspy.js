(function(){var addEvent=function(event){event.stopPropagation();if(document.body.classList.contains("close")){document.body.classList.remove("close")}else{document.body.classList.add("close")}};if(document.getElementById("markdown-toc")){var ttdiv=document.getElementById("title-div").innerHTML;var mdtoc=document.getElementById("markdown-toc").innerHTML;var bttdiv=document.getElementById("backtotop-div").innerHTML;document.getElementById("markdown-toc").innerHTML=ttdiv+mdtoc+bttdiv;document.getElementById("sidebar-toc-btn").addEventListener("click",addEvent);document.getElementById("sidebar-toc-btn").style.display="inline";var windowWidth=document.body.clientWidth;if(windowWidth>1080){document.body.classList.remove("close")}else{document.getElementById("markdown-toc").addEventListener("click",addEvent)}}window.onresize=function(){if(document.getElementById("markdown-toc")){var markdownTOCul=document.getElementById("markdown-toc");if(document.body.clientWidth<1080){if(!document.body.classList.contains("close")){document.body.classList.add("close")}markdownTOCul.removeEventListener("click",addEvent);markdownTOCul.addEventListener("click",addEvent)}else{if(document.body.classList.contains("close")){document.body.classList.remove("close")}markdownTOCul.removeEventListener("click",addEvent)}}}})();
(function(root,factory){if(typeof define==="function"&&define.amd){define([],factory)}else{if(typeof module==="object"&&module.exports){module.exports=factory()}else{var bsn=factory();root.ScrollSpy=bsn.ScrollSpy}}}(this,function(){var globalObject=typeof global!=="undefined"?global:this||window,DOC=document,HTML=DOC.documentElement,body="body",BSN=globalObject.BSN={},supports=BSN.supports=[],dataSpy="data-spy",stringScrollSpy="ScrollSpy",dataTarget="data-target",target="target",offsetTop="offsetTop",offsetBottom="offsetBottom",offsetLeft="offsetLeft",scrollTop="scrollTop",scrollLeft="scrollLeft",clientWidth="clientWidth",clientHeight="clientHeight",offsetWidth="offsetWidth",offsetHeight="offsetHeight",innerWidth="innerWidth",innerHeight="innerHeight",scrollHeight="scrollHeight",height="height",clickEvent="click",hoverEvent="hover",keydownEvent="keydown",keyupEvent="keyup",resizeEvent="resize",scrollEvent="scroll",showEvent="show",shownEvent="shown",hideEvent="hide",hiddenEvent="hidden",closeEvent="close",closedEvent="closed",slidEvent="slid",slideEvent="slide",changeEvent="change",getAttribute="getAttribute",setAttribute="setAttribute",hasAttribute="hasAttribute",createElement="createElement",appendChild="appendChild",innerHTML="innerHTML",getElementsByTagName="getElementsByTagName",preventDefault="preventDefault",getBoundingClientRect="getBoundingClientRect",querySelectorAll="querySelectorAll",getElementsByCLASSNAME="getElementsByClassName",indexOf="indexOf",parentNode="parentNode",length="length",toLowerCase="toLowerCase",Transition="Transition",Webkit="Webkit",style="style",push="push",tabindex="tabindex",contains="contains",active="active",showClass="show",collapsing="collapsing",disabled="disabled",loading="loading",left="left",right="right",top="top",bottom="bottom",mouseHover=("onmouseleave" in DOC)?["mouseenter","mouseleave"]:["mouseover","mouseout"],tipPositions=/\b(top|bottom|left|right)+/,modalOverlay=0,fixedTop="fixed-top",fixedBottom="fixed-bottom",supportTransitions=Webkit+Transition in HTML[style]||Transition[toLowerCase]() in HTML[style],transitionEndEvent=Webkit+Transition in HTML[style]?Webkit[toLowerCase]()+Transition+"End":Transition[toLowerCase]()+"end",setFocus=function(element){element.focus?element.focus():element.setActive()},addClass=function(element,classNAME){element.classList.add(classNAME)},removeClass=function(element,classNAME){element.classList.remove(classNAME)},hasClass=function(element,classNAME){return element.classList[contains](classNAME)},getElementsByClassName=function(element,classNAME){return[].slice.call(element[getElementsByCLASSNAME](classNAME))},queryElement=function(selector,parent){var lookUp=parent?parent:DOC;return typeof selector==="object"?selector:lookUp.querySelector(selector)},getClosest=function(element,selector){var firstChar=selector.charAt(0),selectorSubstring=selector.substr(1);if(firstChar==="."){for(;element&&element!==DOC;element=element[parentNode]){if(queryElement(selector,element[parentNode])!==null&&hasClass(element,selectorSubstring)){return element}}}else{if(firstChar==="#"){for(;element&&element!==DOC;element=element[parentNode]){if(element.id===selectorSubstring){return element}}}}return false},on=function(element,event,handler){element.addEventListener(event,handler,false)},off=function(element,event,handler){element.removeEventListener(event,handler,false)},one=function(element,event,handler){on(element,event,function handlerWrapper(e){handler(e);off(element,event,handlerWrapper)})},emulateTransitionEnd=function(element,handler){if(supportTransitions){one(element,transitionEndEvent,function(e){handler(e)})}else{handler()}},bootstrapCustomEvent=function(eventName,componentName,related){var OriginalCustomEvent=new CustomEvent(eventName+".bs."+componentName);OriginalCustomEvent.relatedTarget=related;this.dispatchEvent(OriginalCustomEvent)},getScroll=function(){return{y:globalObject.pageYOffset||HTML[scrollTop],x:globalObject.pageXOffset||HTML[scrollLeft]}},styleTip=function(link,element,position,parent){var elementDimensions={w:element[offsetWidth],h:element[offsetHeight]},windowWidth=(HTML[clientWidth]||DOC[body][clientWidth]),windowHeight=(HTML[clientHeight]||DOC[body][clientHeight]),rect=link[getBoundingClientRect](),scroll=parent===DOC[body]?getScroll():{x:parent[offsetLeft]+parent[scrollLeft],y:parent[offsetTop]+parent[scrollTop]},linkDimensions={w:rect[right]-rect[left],h:rect[bottom]-rect[top]},arrow=queryElement(".arrow",element),arrowWidth=arrow[offsetWidth],isPopover=hasClass(element,"popover"),topPosition,leftPosition,arrowTop,arrowLeft,halfTopExceed=rect[top]+linkDimensions.h/2-elementDimensions.h/2<0,halfLeftExceed=rect[left]+linkDimensions.w/2-elementDimensions.w/2<0,halfRightExceed=rect[left]+elementDimensions.w/2+linkDimensions.w/2>=windowWidth,halfBottomExceed=rect[top]+elementDimensions.h/2+linkDimensions.h/2>=windowHeight,topExceed=rect[top]-elementDimensions.h<0,leftExceed=rect[left]-elementDimensions.w<0,bottomExceed=rect[top]+elementDimensions.h+linkDimensions.h>=windowHeight,rightExceed=rect[left]+elementDimensions.w+linkDimensions.w>=windowWidth;
position=(position===left||position===right)&&leftExceed&&rightExceed?top:position;position=position===top&&topExceed?bottom:position;position=position===bottom&&bottomExceed?top:position;position=position===left&&leftExceed?right:position;position=position===right&&rightExceed?left:position;if(position===left||position===right){if(position===left){leftPosition=rect[left]+scroll.x-elementDimensions.w}else{leftPosition=rect[left]+scroll.x+linkDimensions.w}if(halfTopExceed){topPosition=rect[top]+scroll.y;arrowTop=linkDimensions.h/2}else{if(halfBottomExceed){topPosition=rect[top]+scroll.y-elementDimensions.h+linkDimensions.h;arrowTop=elementDimensions.h-linkDimensions.h/2}else{topPosition=rect[top]+scroll.y-elementDimensions.h/2+linkDimensions.h/2;arrowTop=elementDimensions.h/2}}}else{if(position===top||position===bottom){if(position===top){topPosition=rect[top]+scroll.y-elementDimensions.h}else{topPosition=rect[top]+scroll.y+linkDimensions.h}if(halfLeftExceed){leftPosition=0;arrowLeft=rect[left]+linkDimensions.w/2}else{if(halfRightExceed){leftPosition=windowWidth-elementDimensions.w*1.01;arrowLeft=elementDimensions.w-(windowWidth-rect[left])+linkDimensions.w/2}else{leftPosition=rect[left]+scroll.x-elementDimensions.w/2+linkDimensions.w/2;arrowLeft=elementDimensions.w/2}}}}topPosition=position===top&&isPopover?topPosition-arrowWidth:topPosition;leftPosition=position===left&&isPopover?leftPosition-arrowWidth:leftPosition;element[style][top]=topPosition+"px";element[style][left]=leftPosition+"px";arrowTop&&(arrow[style][top]=arrowTop+"px");arrowLeft&&(arrow[style][left]=arrowLeft+"px");element.className[indexOf](position)===-1&&(element.className=element.className.replace(tipPositions,position))};BSN.version="2.0.22";var ScrollSpy=function(element,options){element=queryElement(element);var targetData=queryElement(element[getAttribute](dataTarget)),offsetData=element[getAttribute]("data-offset");options=options||{};if(!options[target]&&!targetData){return}var self=this,spyTarget=options[target]&&queryElement(options[target])||targetData,links=spyTarget&&spyTarget[getElementsByTagName]("A"),offset=parseInt(offsetData||options["offset"])||10,items=[],targetItems=[],scrollOffset,scrollTarget=element[offsetHeight]<element[scrollHeight]?element:globalObject,isWindow=scrollTarget===globalObject;for(var i=0,il=links[length];i<il;i++){var href=links[i][getAttribute]("href"),targetItem=href&&href.charAt(0)==="#"&&href.slice(-1)!=="#"&&queryElement(href);if(!!targetItem){items[push](links[i]);targetItems[push](targetItem)}}var updateItem=function(index){var item=items[index],targetItem=targetItems[index],dropdown=item[parentNode][parentNode],dropdownLink=hasClass(dropdown,"dropdown")&&dropdown[getElementsByTagName]("A")[0],targetRect=isWindow&&targetItem[getBoundingClientRect](),isActive=hasClass(item,active)||false,topEdge=(isWindow?targetRect[top]+scrollOffset:targetItem[offsetTop])-offset,bottomEdge=isWindow?targetRect[bottom]+scrollOffset-offset:targetItems[index+1]?targetItems[index+1][offsetTop]-offset:element[scrollHeight],inside=scrollOffset>=topEdge&&bottomEdge>scrollOffset;if(!isActive&&inside){if(!hasClass(item,active)){addClass(item,active);if(dropdownLink&&!hasClass(dropdownLink,active)){addClass(dropdownLink,active)}bootstrapCustomEvent.call(element,"activate","scrollspy",items[index])}}else{if(!inside){if(hasClass(item,active)){removeClass(item,active);if(dropdownLink&&hasClass(dropdownLink,active)&&!getElementsByClassName(item[parentNode],active).length){removeClass(dropdownLink,active)}}}else{if(!inside&&!isActive||isActive&&inside){return}}}},updateItems=function(){scrollOffset=isWindow?getScroll().y:element[scrollTop];for(var index=0,itl=items[length];index<itl;index++){updateItem(index)}};this.refresh=function(){updateItems()};if(!(stringScrollSpy in element)){on(scrollTarget,scrollEvent,self.refresh);on(globalObject,resizeEvent,self.refresh)}self.refresh();element[stringScrollSpy]=self};supports[push]([stringScrollSpy,ScrollSpy,"["+dataSpy+'="scroll"]']);var initializeDataAPI=function(constructor,collection){for(var i=0,l=collection[length];i<l;i++){new constructor(collection[i])}},initCallback=BSN.initCallback=function(lookUp){lookUp=lookUp||DOC;for(var i=0,l=supports[length];i<l;i++){initializeDataAPI(supports[i][1],lookUp[querySelectorAll](supports[i][2]))}};DOC[body]?initCallback():on(DOC,"DOMContentLoaded",function(){initCallback()});return{ScrollSpy:ScrollSpy,}}));
if(document.getElementById("scroll")){var scrollDiv=document.getElementById("scroll");scrollDiv.focus();scrollDiv.onblur=function(){setTimeout("scrollDiv.focus();",200)};scrollDiv.onscroll=function(){if(scrollDiv.scrollTop+scrollDiv.offsetHeight==scrollDiv.scrollHeight){if(document.getElementsByClassName("active")[0]){document.getElementsByClassName("active")[0].classList.remove("active")}}}};