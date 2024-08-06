let $inputBoxWrap = document.querySelector("#input_box_wrap");
let $tier = document.querySelector("#tier");
let $type = document.querySelector("#type");
let $name = document.querySelector("#name");
let $point = document.querySelector("#point");

function plus() {
    $inputBoxWrap.style.display = "block";
}

function cancleItem() {
    $inputBoxWrap.style.display = "none";
    defaultItem();
}

function defaultItem() {
    $tier.value = "default";
    $type.value = "default";
    $name.value = "";
    $point.value = "";
}

function confirmItem() {
    if ($tier.value == "default") {
        $tier.focus();
    }
    if ($type.value == "default") {
        $type.focus();
    }
    if ($name.value.trim() == "") {
        $name.focus();
    }
    if ($point.value.trim() == "") {
        $point.focus();
    }
    if ($tier.value != "default" && $type.value != "default" && $name.value.trim() != "" && $point.value.trim() != "") {
        appendItem($tier.value, $type.value, $name.value, $point.value);
        cancleItem();
    }
}

function appendItem(tier, type, name, point) {
    let $table = document.querySelector("#table"); 
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    
    td1.innerHTML = tier;
    td2.innerHTML = type;
    td3.innerHTML = name;
    td4.innerHTML = point;

    $table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
}