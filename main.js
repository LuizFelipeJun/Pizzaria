menuListArray = ["Pizza Vegetariana",
                  "Pizza de Peperoni",
                  "Pizza Portuguesa",
                  "Pizza de Peperoni"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0,i, menuListArray.lenth ; i++) {
   htmldata=htmldata + menuListArray[i] + '<br>'

}

document.getElementById("displaymenu").innerHTML=htmldata;

}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
   htmldata="";
   for(var i=0,i, menuListArray.lenth ;i++ ) {
      htmldata=htmldata + menuListArray[i] + '<br>'

}

document.getElementById("displayAddedMenu").innerHTML=htmldata;

function addTop() {
   var item=document.getElementById("addItem").value;
   menuListArray.push(item);
   addItem();  
}
