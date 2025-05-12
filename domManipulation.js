// Part 1
let headEl = document.querySelector("head")
let css_link = document.createElement("link")
css_link.setAttribute("rel", "stylesheet")
css_link.setAttribute("href", "src/styles.css")
headEl.appendChild(css_link)
let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = "var(--main-bg)"
let h1El = document.createElement("h1")
h1El.innerHTML = "DOM Manipulation"
h1El = mainEl.appendChild(h1El)
mainEl.classList.add("flex-ctr")

// Part 2
const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

// Part 3
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];
for (let link of menuLinks) {
    let a = document.createElement("a")
    a.setAttribute("href", link.href)
    a.text = link.text
    topMenuEl.appendChild(a)
}