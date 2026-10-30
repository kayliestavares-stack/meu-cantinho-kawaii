const key="kawaiiSite",defaults={name:"meu cantinho ♡",bio:"um pedacinho da internet só meu ✧",accent:"#e99abb",links:[["Twitch","https://twitch.tv/"],["Instagram","https://instagram.com/"],["Discord","https://discord.com/"]],avatar:"",background:"",photos:[],music:""};
let data=JSON.parse(localStorage.getItem(key)||"null")||structuredClone(defaults);
const $=id=>document.getElementById(id);
$("name").value=data.name;$("bio").value=data.bio;$("accent").value=data.accent;
$("links").value=(data.links||[]).map(x=>x.join(" | ")).join("\n");
function read(file){return new Promise((resolve,reject)=>{if(!file)return resolve("");const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)})}
$("save").onclick=async()=>{try{
 data.name=$("name").value.trim()||defaults.name;data.bio=$("bio").value;data.accent=$("accent").value;
 data.links=$("links").value.split("\n").map(s=>s.split("|").map(x=>x.trim())).filter(x=>x.length>=2&&x[0]&&/^https?:\/\//i.test(x[1]));
 const av=$("avatar").files[0],bg=$("background").files[0],music=$("music").files[0];
 if(av)data.avatar=await read(av);if(bg)data.background=await read(bg);if(music)data.music=await read(music);
 const pics=Array.from($("photos").files);if(pics.length)data.photos=await Promise.all(pics.map(read));
 localStorage.setItem(key,JSON.stringify(data));document.documentElement.style.setProperty("--pink",data.accent);
 $("message").textContent="Salvo neste navegador! ♡ Abra a página inicial para conferir.";
 }catch(e){$("message").textContent="Não foi possível salvar. Tente imagens menores.";}}
$("reset").onclick=()=>{if(confirm("Restaurar o exemplo?")){localStorage.removeItem(key);location.reload()}};
