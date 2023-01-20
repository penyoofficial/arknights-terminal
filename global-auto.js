var onlyDisplayOne = false;

addMaterial();
// 添加材料
function addMaterial() {
    document.writeln("<div>");
    let ms = getJSONObj("data.json").material;
    Array.from(ms).forEach(m => {
        document.writeln("<div class=\"material\">");
        document.writeln("    <div class=\"material-icon\" style=\"background-image: url(" + m.icon + ");\"></div>");
        document.writeln("    <div class=\"material-name\">" + m.name + "</div>");
        if (onlyDisplayOne)
            addLevel(m.level[0]);
        else
            Array.from(m.level).forEach(l => {
                addLevel(l);
            });
        function addLevel(l) {
            document.writeln("    <div class=\"material-level\">");
            document.writeln("        <div class=\"level-cost\">");
            document.writeln("            <div class=\"cost-title\">COST</div>");
            document.writeln("            <div class=\"cost\">" + l.cost + "</div>");
            document.writeln("        </div>");
            document.writeln("        <div class=\"level-code" + (l.rarity == "" ? "" : (" " + l.rarity)) + "\">" + l.code + "</div>");
            document.writeln("        <div class=\"level-exceptation\">" + l.exceptation + " C/件</div>");
            document.writeln("    </div>");
        }
        document.writeln("</div>");
    });
    document.writeln("<div style=\"clear: both;\"></div></div>");
}

// 获取Json对象
function getJSONObj(url) {
    return $.parseJSON($.ajax({
        url: url,
        dataType: "json",
        async: false
    }).responseText);
}