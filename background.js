var nighttabids=new Array();
chrome.browserAction.onClicked.addListener(function(tab) {
	//console.dir(tab);
	//chrome.tabs.create({url:"",selected:true})
	var tab_id=tab.id;
	var idinnight=false;
	var index=0;
	for(var i=0;i<nighttabids.length;i++){
		if(nighttabids[i]===tab.id){
			idinnight=true;
			index=i;
			
		}
	}
	if(idinnight){
		//console.log("remove:"+index);
		nighttabids.splice(index,1);
		chrome.browserAction.setIcon({tabId: tab_id, path:"icons/sun.png"});
		//chrome.browserAction.setTitle({tabId: tab_id, title:"sun"})
		chrome.tabs.executeScript(tab.id, {file: "sun.js"});
		
		
	}else{
		chrome.browserAction.setIcon({tabId: tab_id, path:"icons/moon.png"});
		//chrome.browserAction.setTitle({tabId: tab_id, title:"夜间模式"});
		nighttabids.push(tab.id);
		chrome.tabs.executeScript(tab.id, {file: "night.js"});
		
	}
	
});
chrome.tabs.onUpdated.addListener(function(tab_id){

	chrome.tabs.get(tab_id,function(tab){
		var url=tab.url;
	});

});
