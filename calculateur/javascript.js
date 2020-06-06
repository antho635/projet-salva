function Add(name, quantity, volume, id) {
    var currentVolume = $("#total").html(),
        currentTotal = $("#totalQuantity").html();
    currentVolume = parseFloat(currentVolume) + (quantity * volume);
    currentTotal = parseFloat(currentTotal) + quantity;

    //Ajoute dans la quantité si existe
    var currentQuantity = parseFloat($("#categoryQuantity_" + id).html());
    currentQuantity = currentQuantity + 1;
    $("#categoryQuantity_" + id).html(currentQuantity);


    //Ajoute dans la liste de droite
    if ($("#listFurnitureItem_" + id).length) {
        $("#listFurnitureItem_" + id).find("#hiddenVolumeTotal_" + id).val(currentQuantity * volume);
        $("#listFurnitureItem_" + id).find("span").html(currentQuantity + " <span class='nameObjectList'>" + name + "</span>");
        $("#listFurnitureItem_" + id + " input:first-child").attr('data-quantity', currentQuantity);
    } else {

        var currentItemVolume = currentQuantity * volume;
        $("#listFurniture").append("<li id='listFurnitureItem_" + id + "'><input type='hidden' id='hiddenVolumeTotal_" + id + "' data-quantity='" + currentQuantity + "' value='" + currentItemVolume + "'/><span>" + currentQuantity + " <span class='nameObjectList'>" + name + "</span></span><input type='button' value='x' onclick='RemoveAll(" + id + ")'/></li>");
    }

    $("#total").html(currentVolume.toFixed(2));
    $("#totalQuantity").html(currentTotal);


    GetCar();
}

var otherId = 99;

function AddOther(name, quantity, volume) {
    var find = false;
    var i = 0;
    while (!find, i < $('.nameObjectList').length) {
        if ($($('.nameObjectList')[i]).html() == name) {
            find = true;
        }
        i++;
    }

    if (find) {
        $('#faqcategory-99 .error').fadeIn();
    } else {
        $('#faqcategory-99 .error').fadeOut();
        otherId = otherId + 1;

        var currentVolume = $("#total").html(),
            currentTotal = $("#totalQuantity").html();
        currentVolume = parseFloat(currentVolume) + (quantity * volume);
        currentTotal = parseFloat(currentTotal) + parseFloat(quantity);

        //Ajoute dans la quantité si existe
        var currentQuantity = parseInt(quantity);

        //Ajoute dans la liste de droite
        var currentItemVolume = currentQuantity * volume;
        $("#listFurniture").append("<li id='listFurnitureItem_" + otherId + "'><input type='hidden' id='hiddenVolumeTotal_" + otherId + "' data-quantity='" + currentQuantity + "' value='" + currentItemVolume + "'/><span>" + currentQuantity + " <span class='nameObjectList'>" + name + "</span></span><input type='button' value='x' onclick='RemoveAll(" + otherId + ")'/></li>");

        $("#total").html(currentVolume.toFixed(2));
        $("#totalQuantity").html(currentTotal);
        GetCar();
    }
}

function Remove(name, quantity, volume, id) {

    var currentQuantity = parseFloat($("#categoryQuantity_" + id).html());
    if (currentQuantity > 0) {
        //Supprime dans la quantité
        currentQuantity = currentQuantity - 1;
        if (currentQuantity < 0) {
            currentQuantity = 0;
        }
        $("#categoryQuantity_" + id).html(currentQuantity);

        //Supprime dans le total
        var currentVolume = $("#total").html(),
            currentTotal = $("#totalQuantity").html();

        currentVolume = parseFloat(currentVolume) - (quantity * volume);
        currentTotal = parseFloat(currentTotal) - quantity;

        if (currentVolume < 0) {
            currentVolume = 0;
        }

        if (currentTotal < 0) {
            currentTotal = 0;
        }

        //Supprime dans la liste de droite
        if ($("#listFurnitureItem_" + id).length) {
            if (currentQuantity == 0) {
                $("#listFurnitureItem_" + id).remove();
            } else {
                $("#listFurnitureItem_" + id).find("#hiddenVolumeTotal_" + id).val(currentQuantity * volume);
                $("#listFurnitureItem_" + id).find("span").html(currentQuantity + " " + name);
                $("#listFurnitureItem_" + id + " input:first-child").attr('data-quantity', currentQuantity);
            }

        }

        $("#total").html(currentVolume.toFixed(2));
        $("#totalQuantity").html(currentTotal);
    }
}

function RemoveAll(id) {
    //Supprime de la liste
    var currentItemVolume = $("#listFurnitureItem_" + id).find("#hiddenVolumeTotal_" + id).val(),
        currentItemQuantity = parseFloat($("#listFurnitureItem_" + id + " input:first-child").attr('data-quantity'));

    $("#listFurnitureItem_" + id).remove();

    //Si existe met la quantité à 0
    if ($("#categoryQuantity_" + id).length) {
        $("#categoryQuantity_" + id).html(0);
    }

    //Supprime dans le calcul du volume
    var currentVolume = $("#total").html(),
        currentTotal = $("#totalQuantity").html();
    currentVolume = parseFloat(currentVolume) - currentItemVolume;
    currentTotal = parseFloat(currentTotal) - currentItemQuantity;

    $("#total").html(currentVolume.toFixed(2));
    $("#totalQuantity").html(currentTotal);
}

var i = 3;
var at = 0;
$(".element").each(function() {
    $(this).wrapInner('<span class="texte-objet"></span>');
    at = $(this).attr('data-volume');
    $(this).append("<div class='elem'><input class='less' type='button' name='removeQuantity' value='-' onclick=\"Remove('" + $(this).text() + "',1," + at + "," + i + ");\"/><span id='categoryQuantity_" + i + "'>" + '0' + "</span><input class='more' type='button' name='addQuantity' value='+' onclick=\"Add('" + $(this).text() + "',1," + at + "," + i + ");\"/></div>");
    i++;
});
$('.tabs').tabs();