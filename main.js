function getParagraph1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        var arya = document.getElementById("div1_Input_box_" + i).value;

        inputs.push(arya);
    }
    var display = inputs.join(" ");
    document.getElementById("showParagraph1").innerHTML = display;
}

function getParagraph2() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("div2_Input_box_" + i).value);
    }
    var display = inputs.join(" ");
    document.getElementById("showParagraph2").innerHTML = display;
}