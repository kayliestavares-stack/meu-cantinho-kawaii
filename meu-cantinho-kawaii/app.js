const defaults={name:"meu cantinho ♡",bio:"um pedacinho da internet só meu ✧",accent:"#e99abb",links:[["Twitch","https://twitch.tv/"],["Instagram","https://instagram.com/"],["Discord","https://discord.com/"]],avatar:"",background:"",photos:[],music:""};
const data=JSON.parse(localStorage.getItem("kawaiiSite")||"null")||defaults;
document.documentElement.style.setProperty("--pink",data.accent||defaults.accent);
document.getElementById("name").textContent=data.name||defaults.name;document.getElementById("bio").textContent=data.bio||defaults.bio;
if(data.avatar)document.getElementById("avatar").src=data.avatar;
if(data.background)document.body.style.backgroundImage=`linear-gradient(#fce5efaa,#fce5efaa),url("${data.background}")`;
const links=document.getElementById("links");links.className="links-list";
(data.links||defaults.links).forEach(([label,url])=>{const a=document.createElement("a");a.className="link-btn";a.textContent="♡ "+label;a.href=url;a.target="_blank";a.rel="noopener noreferrer";links.append(a)});
(data.photos||[]).forEach(src=>{const img=document.createElement("img");img.src=src;img.alt="Foto da galeria";document.getElementById("gallery").append(img)});
if(data.music){document.getElementById("audio").src=data.music;document.getElementById("musicHint").textContent="Aperte play para ouvir ♫"}
