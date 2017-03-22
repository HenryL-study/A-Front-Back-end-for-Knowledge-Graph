var itemSum = 0;

//addAnswerItem("倚天屠龙记","张无忌与六大门派决战光明顶");
$.get("/detail/content", { lala: "2pm" },
        function(data){
            
            var d = data;
            d.forEach(function(val){
                addAnswerItem(val.head,val.description);    
                console.log("log times");
            });
            
            //addAnswerItem(data.modal_head,data.modal_des);
//            var m_head = document.getElementById('m_head');
//            var m_content = document.getElementById('m_content');
//            var img = document.getElementById('ans_img');
//            
//            m_head.innerHTML = data.modal_head;
//            m_content.innerHTML = data.modal_des;
//            img.setAttribute("src", data.modal_img);
            //alert("Data Loaded: " + data);
        }); 

function addAnswerItem(title,text){
	var fatherItem = document.getElementById('accordion');
	var itemDiv = document.createElement('div');
	var panelHead = document.createElement('div');
	var panel = document.createElement('div');
	var panelBody = document.createElement('div');
	var panelTile = document.createElement('h4');
	var a = document.createElement('a');
	//alert("ok");
	itemDiv.setAttribute("class","panel panel-default");
	// head
	panelHead.setAttribute("class","panel-heading");
	panelHead.setAttribute("role","tab");

	panelTile.setAttribute("class","panel-title");

    itemSum++;
	if(itemSum==1){
		a.setAttribute("aria-expanded","true");
	}else{
		a.setAttribute("class","collapsed");
		a.setAttribute("aria-expanded","false");

	}
	a.setAttribute("role","button");
	a.setAttribute("data-toggle","collapse");
	a.setAttribute("data-parent","#accordion");
	a.setAttribute("href","#collapse"+itemSum);
	a.setAttribute("aria-controls","collapse"+itemSum);
	a.innerText = title;

	panel.setAttribute("id","collapse"+itemSum);
	panel.setAttribute("class","panel-collapse collapse");
	panel.setAttribute("role","tabpanel");
	panel.setAttribute("aria-labelledby","headingOne");

	panelBody.setAttribute("class","panel-body");
	panelBody.innerHTML = text;


	panelHead.appendChild(panelTile);
	itemDiv.appendChild(panelHead);

	panelTile.appendChild(a);
	panel.appendChild(panelBody);
	itemDiv.appendChild(panel);
	
	
	fatherItem.appendChild(itemDiv);

	
	

	
}