// window.onload = function() {
// let vhod=document.querySelector(".autorizeb");
// vhod.addEventListener("click", function(){
//   // $('.block').after('<div class="block"></div>');
//
//
//
//   //div.innerHTML=obj[0]['name'];
//
//
// })





//}
let obj=[
  {
    name:"Iphone 13",
    type: "smart",
    sale:79990,
    img:'phone.jpg',
    processor: "A15",
    diago: 6.1
  },
  {
    name:"Macbook pro 14",
    type: "notebook",
    sale: 189990,
    img:'mac.jpg',
    processor: "M1 pro",
    diago: 14
  },
  {
    name: "Ipad",
    type: "tablet",
    sale: 30990,
    img:'ipad.jpg',
    processor: "A13",
    diago: 10.2
  },
  {
    name: "Iphone 12",
    type: "smart",
    sale: 54990,
    img:"phone1.jpg",
    processor: "A14",
    diago: 5.4
  },
  {
    name: "Macbook Air",
    type: "notebook",
    sale: 99990,
    img:"mac1.jpg",
    processor: "M1",
    diago: 13.3
  }
]
function createblock(obj, i){
  let block=document.querySelector(".list");
  let div=document.createElement("div");
  div.className="block";
  let div1=document.createElement("div");
  let div2=document.createElement("div");
  let div3=document.createElement("div");
  let div4=document.createElement("div");
  let div5=document.createElement("div");
  let div6=document.createElement("div");
  let div7=document.createElement("button");
  let div8=document.createElement("img");
  let div9=document.createElement("div");
  let div10=document.createElement("div");
  div10.className="infosrc";
  div1.className="img";
  div.appendChild(div1);
  div2.className="infot";
  div3.className="infottop";
  div4.className="infottopname";
  div5.className="infottopbuy";
  div6.className="buttonbuy";
  div7.className="buy";
  div7.innerHTML="Купить";
  div8.src=obj[i]['img'];
  div4.innerHTML=obj[i]['name'];
  div5.innerHTML=obj[i]['sale'];
  div10.innerHTML="Диагональ: "+obj[i]['diago']+" дюймов  Процессор: "+obj[i]['processor'];


  div1.appendChild(div8);
  div6.appendChild(div7);
  div4.appendChild(div10);
  div3.appendChild(div4);
  div9.appendChild(div5);
  div9.appendChild(div6);
  div3.appendChild(div9);
  div2.appendChild(div3);
  div.appendChild(div2);
  block.appendChild(div);
}
for(let i=0; i<obj.length; i++){
  createblock(obj, i);
}
let remove = document.querySelector('.block');
remove.remove();
let clickfind=document.querySelector(".findfilter");
clickfind.addEventListener("click", function(){
while(document.querySelector(".block")){
  document.querySelector(".block").remove();
}
let smart=false;
let note=false;
let tablet=false;
let ios=false;
let macos=false;
let tabletos=false;
let m1pro=false;
let a13=false;
let a14=false;
let a15=false;
let m1=false;
let m1max=false;
if(document.getElementById("smart").checked){
smart=true;
}

if(document.getElementById("note").checked){
note=true;
}

if(document.getElementById("tablet").checked){
tablet=true;
}

if(document.getElementById("IOS").checked){
ios = true;
}

if(document.getElementById("MacOS").checked){
macos = true;
}

if(document.getElementById("IpadOS").checked){
tabletos = true;
}

if(document.getElementById("M1Pro").checked){
m1pro = true;
}

if(document.getElementById("A13Bio").checked){
a13 = true;
}

if(document.getElementById("A15Bio").checked){
a15 = true;
}
if(document.getElementById("A14Bio").checked){
a14 = true;
}
if(document.getElementById("M1").checked){
m1 = true;
}
if(document.getElementById("M1Max").checked){
m1max = true;
}
let diagmin=document.getElementById("diags").value;
let diagmax=document.getElementById("diagf").value;

let valuemin=document.getElementById("values").value;
let valuemax=document.getElementById("valuef").value;

if(valuemin=="")
valuemin=0;
if(valuemax=="")
valuemax=100000000000000;
if(diagmin=="")
diagmin=0;
if(diagmax=="")
diagmax=1000;
console.log(obj[0]["sale"]>=valuemin,obj[0]["diago"]>=diagmin, obj[0]["sale"]<=valuemax, obj[0]["diago"]<=diagmax);
if (a15||smart||ios){
if((obj[0]["sale"]>=valuemin)&&(obj[0]["sale"]<=valuemax)){
  if((obj[0]["diago"]>=diagmin)&&(obj[0]["diago"]<=diagmax)){
createblock(obj,0);
}}}
if (a14||smart||ios){
if((obj[3]["sale"]>=valuemin)&&(obj[3]["sale"]<=valuemax)){
  if((obj[3]["diago"]>=diagmin)&&(obj[3]["diago"]<=diagmax)){
createblock(obj,3);
}
}}
if (m1||note||macos){
if((obj[4]["sale"]>=valuemin)&&(obj[4]["sale"]<=valuemax)){
  if((obj[4]["diago"]>=diagmin)&&(obj[4]["diago"]<=diagmax)){
  createblock(obj,4);
}}}
if(m1pro||macos||note){
if((obj[1]["sale"]>=valuemin)&&(obj[1]["sale"]<=valuemax)){
  if((obj[1]["diago"]>=diagmin)&&(obj[1]["diago"]<=diagmax)){
createblock(obj,1);}
}}
if (a13||tablet||tabletos){
if((obj[2]["sale"]>=valuemin)&&(obj[2]["sale"]<=valuemax)){
  if((obj[2]["diago"]>=diagmin)&&(obj[2]["diago"]<=diagmax)){
createblock(obj,2);}}}
if(!a13&&!a15&&!m1pro&&!note&&!tablet&&!smart&&!ios&&!macos&&!tabletos&&!a14&&!m1){
for(let i=0; i<obj.length;i++){
  if((obj[i]["sale"]>valuemin&&obj[i]["sale"]<valuemax)||(obj[i]["diago"]>diagmin&&obj[i]["diago"]<diagmax)){
    createblock(obj,i);}
}
}
if(m1max){
  while(document.querySelector(".block")){
    document.querySelector(".block").remove();
  }
}
countbuy();
})

let findname=document.querySelector(".inputfiltr");
findname.addEventListener("click",function(){
    let name=document.querySelector('.findtext').value;
    if(name==""){
      while(document.querySelector(".block")){
        document.querySelector(".block").remove();
      }
      for(let i=0; i<obj.length; i++){
        createblock(obj, i);
      }
    }
    else{
      while(document.querySelector(".block")){
        document.querySelector(".block").remove();
      }
      for(let i=0; i<obj.length;i++){
        let per=obj[i]["name"];
        if(per.search(name)!=-1){
          createblock(obj,i);
        }
      }
    }


countbuy();
})
function countbuy(){
let inputbuy=document.querySelectorAll(".buy");
for(let i=0; i<inputbuy.length;i++){
inputbuy[i].addEventListener("click", function(){
    let per=document.querySelector(".CountShop");
    if(per.value==undefined){
      per.value=0;
      per.innerHTML=per.value+1;
      per.value +=1;
}
else{

  per.innerHTML=per.value+1;
  per.value +=1;
}




})}}
countbuy();
function testget(){
  $.ajax({
    url: 'https://www.cbr-xml-daily.ru/daily_json.js',
    method: 'get',
    dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */

    success: function(data){
      let table = document.createElement("table");
      table.style.width="100%";
      table.style.marginBottom="20px";
      table.style.border="1px solid #dddddd";
      table.style.borderCollapse="collapse";
      let cap=document.createElement("caption");
      cap.appendChild(document.createTextNode("Курсы Валют"));
      table.appendChild(cap);
      let tr=document.createElement("tr");
      let tr1=document.createElement("tr");
      let td=document.createElement("td");
      let td1=document.createElement("td");
      let td2=document.createElement("td");
      let td3=document.createElement("td");
      td.style.border=" 1px solid #dddddd";
      td.style.textAlign="center";
      td1.style.border=" 1px solid #dddddd";
      td1.style.textAlign="center";
      td2.style.border=" 1px solid #dddddd";
      td2.style.textAlign="center";
      td3.style.border=" 1px solid #dddddd";
      td3.style.textAlign="center";
      td1.appendChild(document.createTextNode("Доллар"));
      td.appendChild(document.createTextNode(data["Valute"]["USD"]["Value"]))
      td3.appendChild(document.createTextNode("Евро"));
      td2.appendChild(document.createTextNode(data["Valute"]["EUR"]["Value"]))
      tr.appendChild(td1);
      tr.appendChild(td);
      tr1.appendChild(td3);
      tr1.appendChild(td2);
      table.appendChild(tr);
      table.appendChild(tr1);
      let div=document.querySelector(".botarcher");
      div.appendChild(table);
      }})
}
testget();
