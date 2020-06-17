function Add(t, a, e, i) {
    var l = $("#total").html(),
        n = $("#totalQuantity").html();
    l = parseFloat(l) + a * e, n = parseFloat(n) + a;
    var r = parseFloat($("#categoryQuantity_" + i).html());
    if (r += 1, $("#categoryQuantity_" + i).html(r), $("#listFurnitureItem_" + i).length) $("#listFurnitureItem_" + i).find("#hiddenVolumeTotal_" + i).val(r * e), $("#listFurnitureItem_" + i).find("span").html(r + " <span class='nameObjectList'>" + t + "</span>"), $("#listFurnitureItem_" + i + " input:first-child").attr("data-quantity", r);
    else {
        var u = r * e;
        $("#listFurniture").append("<li id='listFurnitureItem_" + i + "'><input type='hidden' id='hiddenVolumeTotal_" + i + "' data-quantity='" + r + "' value='" + u + "'/><span>" + r + " <span class='nameObjectList'>" + t + "</span></span><input type='button' value='x' onclick='RemoveAll(" + i + ")'/></li>")
    }
    $("#total").html(l.toFixed(2)), $("#totalQuantity").html(n), GetCar()
}
var otherId = 99;

function AddOther(t, a, e) {
    for (var i = !1, l = 0; l < $(".nameObjectList").length;) $($(".nameObjectList")[l]).html() == t && (i = !0), l++;
    if (i) $("#faqcategory-99 .error").fadeIn();
    else {
        $("#faqcategory-99 .error").fadeOut(), otherId += 1;
        var n = $("#total").html(),
            r = $("#totalQuantity").html();
        n = parseFloat(n) + a * e, r = parseFloat(r) + parseFloat(a);
        var u = parseInt(a),
            o = u * e;
        $("#listFurniture").append("<li id='listFurnitureItem_" + otherId + "'><input type='hidden' id='hiddenVolumeTotal_" + otherId + "' data-quantity='" + u + "' value='" + o + "'/><span>" + u + " <span class='nameObjectList'>" + t + "</span></span><input type='button' value='x' onclick='RemoveAll(" + otherId + ")'/></li>"), $("#total").html(n.toFixed(2)), $("#totalQuantity").html(r), GetCar()
    }
}

function Remove(t, a, e, i) {
    var l = parseFloat($("#categoryQuantity_" + i).html());
    if (l > 0) {
        (l -= 1) < 0 && (l = 0), $("#categoryQuantity_" + i).html(l);
        var n = $("#total").html(),
            r = $("#totalQuantity").html();
        (n = parseFloat(n) - a * e) < 0 && (n = 0), (r = parseFloat(r) - a) < 0 && (r = 0), $("#listFurnitureItem_" + i).length && (0 == l ? $("#listFurnitureItem_" + i).remove() : ($("#listFurnitureItem_" + i).find("#hiddenVolumeTotal_" + i).val(l * e), $("#listFurnitureItem_" + i).find("span").html(l + " " + t), $("#listFurnitureItem_" + i + " input:first-child").attr("data-quantity", l))), $("#total").html(n.toFixed(2)), $("#totalQuantity").html(r)
    }
}

function RemoveAll(t) {
    var a = $("#listFurnitureItem_" + t).find("#hiddenVolumeTotal_" + t).val(),
        e = parseFloat($("#listFurnitureItem_" + t + " input:first-child").attr("data-quantity"));
    $("#listFurnitureItem_" + t).remove(), $("#categoryQuantity_" + t).length && $("#categoryQuantity_" + t).html(0);
    var i = $("#total").html(),
        l = $("#totalQuantity").html();
    i = parseFloat(i) - a, l = parseFloat(l) - e, $("#total").html(i.toFixed(2)), $("#totalQuantity").html(l)
}
var i = 3,
    at = 0;
$(".element").each((function() { $(this).wrapInner('<span class="texte-objet"></span>'), at = $(this).attr("data-volume"), $(this).append("<div class='elem'><input class='less' type='button' name='removeQuantity' value='-' onclick=\"Remove('" + $(this).text() + "',1," + at + "," + i + ");\"/><span id='categoryQuantity_" + i + "'>0</span><input class='more' type='button' name='addQuantity' value='+' onclick=\"Add('" + $(this).text() + "',1," + at + "," + i + ');"/></div>'), i++ })), $(".tabs").tabs();