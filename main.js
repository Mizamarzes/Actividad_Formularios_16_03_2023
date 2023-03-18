addEventListener("submit", async(e)=>{
    e.preventDefault();
    console.log(e.target)
   let data = Object.fromEntries(new FormData(e.target));
   document.querySelectorAll('[type="checkbox]').forEach((val, id)=> (val.checked) ?((typeof(data[`${val.name}`])=="string") ? data[`${val.name}`] = [val.value] : data[`${val.name}`].push(val.value)):null);
    let peticion = await fetch(e.target.action,{method: e.target.method, body: JSON.stringify(data)});
    let datos = await peticion.text();
   document.querySelector("pre").innerHTML = datos;

})