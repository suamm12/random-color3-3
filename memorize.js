document.getElementById("button").addEventListener("click", function () {
    var colors = ["red", "blue", "green", "lightBlue", "skinColor", "yellowGreen", "yellow", "violet", "orange"];
    var colorIndices = []; // すでに選択された色のインデックス

    // ボックスごとに色をランダムに選択
    var boxes = document.querySelectorAll(".box");
    boxes.forEach(function (box) {
        var randomColorIndex;
        do {
            randomColorIndex = Math.floor(Math.random() * colors.length);
        } while (colorIndices.includes(randomColorIndex)); // すでに選択された色であれば再度選択

        // 色を設定し、選択された色のインデックスを記録
        box.className = "box " + colors[randomColorIndex];
        colorIndices.push(randomColorIndex);
    });
});