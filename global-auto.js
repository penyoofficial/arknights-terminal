var onlyDisplayOne = false;

addMaterial();
// 添加材料
function addMaterial() {
    let mainContain = document.getElementById("main-contain");
    let ms = getJSONObj("data.json").material;
    Array.from(ms).forEach(m => {
        let material = createElement("div", "material");
        let materialIcon = stylify(createElement("div", "material-icon"), "background-image: url(" + m.icon + ");");
        let materialName = createElement("div", "material-name", m.name);
        material.appendChild(materialIcon);
        material.appendChild(materialName);
        if (onlyDisplayOne)
            addLevel(m.level[0]);
        else
            Array.from(m.level).forEach(l => {
                addLevel(l);
            });
        function addLevel(l) {
            let materialLevel = createElement("div", "material-level");
            let levelCost = createElement("div", "level-cost");
            let costTitle = createElement("div", "cost-title", "COST");
            let cost = createElement("div", "cost", l.cost);
            levelCost.appendChild(costTitle);
            levelCost.appendChild(cost);
            let levelCode = createElement("div", "level-code" + (l.attribute == "" ? "" : (" " + l.attribute)), l.code);
            let levelExceptation = createElement("div", "level-exceptation", l.exceptation + " C/件");
            materialLevel.appendChild(levelCost);
            materialLevel.appendChild(levelCode);
            materialLevel.appendChild(levelExceptation);
            material.appendChild(materialLevel);
        }
        mainContain.appendChild(material);
    });
    mainContain.appendChild(stylify(createElement("div"), "clear: both;"));
}

// 获取Json对象
function getJSONObj(url) {
    return $.parseJSON($.ajax({
        url: url,
        dataType: "json",
        async: false
    }).responseText);
}

// 创建新的HTML元素
function createElement(tag, className, innerText) {
    let e = document.createElement(tag);
    if (className != undefined)
        e.setAttribute("class", className);
    if (innerText != undefined)
        e.innerText = innerText;
    return e;
}

// 风格化
function stylify(e, cssText) {
    e.style.cssText += cssText;
    return e;
}