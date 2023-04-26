
import "./style/index.css"

import An from "./assets/an.jpg"

document.body.insertAdjacentHTML("beforeend", "<h1>今天天气真不错，风才12级！</h1>")

document.body.insertAdjacentHTML("beforeend", `<img src="${An}" />`)