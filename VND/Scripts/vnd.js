$(document).ready(function () {
    var myTimer = setInterval(random, 1000);
    function random() {
        var lengthArr = document.getElementById('sizeList').textContent;

        for (var i = 0; i < lengthArr; i++) {
            var randomSell = Math.floor(Math.random() * (30 - (-30) + 1) + (-30));
            var randomBuy = Math.floor(Math.random() * (30 - (-30) + 1) + (-30));
            var sell = document.getElementById("sell" + i.toString()).textContent;
            var buy = document.getElementById("buy" + i.toString()).textContent;
            var high = parseFloat(document.getElementById("high" + i.toString()).textContent);
            var low = parseFloat(document.getElementById("low" + i.toString()).textContent);

            var rateSell = parseFloat(sell) * (randomSell / 1000);
            var rateBuy = parseFloat(buy) * (randomBuy / 1000);
            var sum = parseFloat(sell) + rateSell;
            var sum1 = parseFloat(buy) + rateBuy;
            if (randomSell < 0 && randomBuy < 0 || randomSell > 0 && randomBuy > 0)
            {
                if (sum1 < sum) {
                    document.getElementById("sell" + i.toString()).innerHTML = sum.toFixed(4);
                    document.getElementById("buy" + i.toString()).innerHTML = sum1.toFixed(4);
                    document.getElementById("change" + i.toString()).innerHTML = randomSell / 1000;
                    if (randomSell > 0) {
                        document.getElementById("sell" + i.toString()).style.color = "blue";
                        document.getElementById("buy" + i.toString()).style.color = "blue";
                        document.getElementById("caret" + i.toString()).style.color = "blue";
                        $("#caret" + i.toString()).attr("class", "fa fa-caret-up");
                    }
                    else if (randomSell < 0) {
                        document.getElementById("sell" + i.toString()).style.color = "red";
                        document.getElementById("buy" + i.toString()).style.color = "red";
                        document.getElementById("caret" + i.toString()).style.color = "red";
                        $("#caret" + i.toString()).attr("class", "fa fa-caret-down");
                    
                    }
                    else {
                        document.getElementById("sell" + i.toString()).style.color = "black";
                        document.getElementById("buy" + i.toString()).style.color = "black";
                        document.getElementById("caret" + i.toString()).style.color = "blue";
                        $("#caret" + i.toString()).attr("class", "");
                    }
                    if (sum.toFixed(4) * 10000 < low.toFixed(4) * 10000) {
                        document.getElementById("low" + i.toString()).innerHTML = sum.toFixed(4);
                    }
                    if (sum.toFixed(4) * 10000 > high.toFixed(4) * 10000) {
                        document.getElementById("high" + i.toString()).innerHTML = sum.toFixed(4);
                    }
                }
            }

            
        }
    }
});