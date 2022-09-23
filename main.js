menuListArray = ["Pizza Vegetariana",
                  "Pizza de Peperoni",
                  "Pizza Portuguesa",
                  "Pizza de Peperoni"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i< menuListArray.length ; i++) {
   htmldata=htmldata + menuListArray[i] + '<br>';
   }
   document.getElementById("displayMenu").innerHTML=htmldata;
}

function addItem(){
var htmldata;
var imgNova="<img id='im1' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fpizza%2Fpizza_PNG7151.png&f=1&nofb=1&ipt=cae903f05b46c99106677f3a490893e5cb50ef60194afa831a275a2a011e3902&ipo=images'/>"
var item=document.getElementById("addItem").value;
menuListArray.sort();
   htmldata="";
   for(var i=0;i< menuListArray.length ;i++ ) {
      htmldata=htmldata + imgNova + menuListArray[i] + '<br>';
   }
   document.getElementById("displayAddedMenu").innerHTML=htmldata;
}

function addTop() {
   var item=document.getElementById("addItem").value;
   menuListArray.push(item);
   addItem();  
}
