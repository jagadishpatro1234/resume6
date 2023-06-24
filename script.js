let inp = document.getElementById("text")
let search = document.getElementById("search")
let immgg = document.getElementById("immgg")
let more = document.getElementById("btn")
let next = document.getElementById("more")


let keyword = ""
let page = 1

async function searchimg(){
  keyword = inp.value
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=i-gSELstH7reKkGdctJnf6OylB_RV2h_ZCnbwnVbFnw&per_page=12`

  let p = await fetch(url)
  let b = await p.json()

  let results = b.results

  results.map((result)=>{
    let image = document.createElement("img")
    image.src = result.urls.small
    let an = document.createElement("a")
    an.href = result.links.html
    an.target = "_blank"

    an.appendChild(image)
    immgg.appendChild(an)
  })
}
search.addEventListener("click", (e)=>{
  e.preventDefault()
  page = 1
  immgg.innerHTML = ""
  searchimg()
  more.classList.add("aaaa")
})

next.onclick = function(){
  page++
  searchimg()
}
