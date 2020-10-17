let root = document.body

let count = 0;

const Splash = {
    view: () => m("a", {href: "#!/hello"}, "Enter!")
}

const Hello = {
    view: () => {
        return m("main", [
            m("h1", {class: "title"}, "My first app"),
            m("button", {onclick: () => count++}, count + " clicks"),
        ])
    }
}

m.route(root, "/splash", {
    "/splash": Splash,
    "/hello": Hello,
})
