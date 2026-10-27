/* ---------- Skills (edit name, level, badge colour) ---------- */
const skills=[
 ["HTML","Bakery, PKMS","#e44d26","H5"],["CSS","Bakery, PKMS","#2965f1","C3"],["JavaScript","Bakery, PKMS","#c9a800","JS"],
 ["PHP","PKMS website and API","#6c71a8","PHP"],["MySQL","PKMS database","#1d6e8a","SQL"],["Kotlin","PKMS Android app","#7f52ff","Kt"],
 ["Java","","#c0522b","Jv"],["Git","GitHub","#f1502f","Git"],["Figma","Learning","#a259ff","Fg"],
 ["Wireframing","Bakery, PKMS","#2d8f6f","Wf"],["BI tools","Beginner","#0e7490","BI"]
];
document.getElementById("skills-grid").innerHTML=skills.map(([n,p,c,b])=>
 `<div class="sk"><div class="row"><span><i style="background:${c}">${b}</i>${n}</span><span>${p}</span></div></div>`).join("");

/* ---------- Pixel art: developer at a desk (1 character = 1 pixel) ---------- */
const pal={H:"#2a2140",S:"#f0b98f",G:"#d9d4ff",E:"#15122a",b:"#4a3326",P:"#4c3fb8",p:"#382f8a",
J:"#2c3566",K:"#ece9ff",C:"#2b2a4a",D:"#8a6444",d:"#5e432c",l:"#8d93b3",L:"#b9bedb",W:"#0d0f24",
c:"#8b7bff",g:"#5fe0a0",o:"#ff9f6b",w:"#6b7096",y:"#c8c2ff",z:"#16183a"};
const W=40,H=27,grid=Array.from({length:H},()=>Array(W).fill("."));
const put=(r,c,s)=>[...s].forEach((ch,i)=>{if(ch!==".")grid[r][c+i]=ch});
const rep=(r1,r2,c,s)=>{for(let r=r1;r<=r2;r++)put(r,c,s)};
// floor shadow
put(26,0,"z".repeat(W));
// chair
rep(9,18,2,"CC");put(19,3,"C".repeat(10));rep(20,24,7,"CC");put(25,3,"C".repeat(11));
// desk
put(15,13,"D".repeat(27));put(16,13,"d".repeat(27));rep(17,25,36,"dd");rep(17,19,14,"..");
// legs
rep(17,18,5,"J".repeat(12));rep(19,24,14,"JJ");put(25,14,"KKKKK");
// body
put(9,6,"pp");put(10,5,"pPPPPPP");put(11,5,"PPPPPPPPP");put(12,5,"PPPPPPPPPPP");
put(13,5,"PPPPPPPPPPPP");put(14,5,"PPPPPPPPPP");put(15,5,"PPPPPPPPP");put(16,5,"pppppppp");
put(13,17,"SS");put(14,16,"SSSS");
// head
put(3,7,"HHHHH");put(4,6,"HHHHHHH");put(5,6,"HHHSSSS");put(6,6,"HHSGEGS");
put(7,6,"HHbbSSS");put(8,7,"bbbbS");put(9,8,"SS");
// laptop
put(3,22,"l".repeat(16));put(13,22,"l".repeat(16));rep(4,12,22,"l"+"W".repeat(14)+"l");
put(14,20,"L".repeat(19));
put(5,24,"ccc.wwwww");put(6,26,"gggg.ccc");put(7,26,"oooooo");put(8,26,"ww.gggggg");
put(9,24,"ccccc.ww");put(10,26,"gggg.o");put(11,24,"cc.wwww");
// sparkles
[[1,9],[0,30],[6,1],[2,19],[20,24],[1,36]].forEach(([r,c])=>put(r,c,"y"));
let svg="";grid.forEach((row,r)=>row.forEach((ch,c)=>{if(ch!==".")svg+=`<rect x="${c}" y="${r}" width="1.02" height="1.02" fill="${pal[ch]}"/>`}));
document.getElementById("pixel").innerHTML=svg;
