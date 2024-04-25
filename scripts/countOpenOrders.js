waitForKeyElements("div[ref='centerContainer'] div[role='row']", countOpenOrders)

function countOpenOrders (jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "stock" && url[3] == "openorders") {
        // Create totals table if not exists
        if ($("#totals-table").length == 0) {
            $(".bm-card-title > div:contains('Open Orders')").parent().next().prepend(
                $('<table id="totals-table"><th>Dispatch Date</th><th style="padding-left:20px;">Quantity</th></table><p id="counted-orders" style="display:none;"></p>')
            );
        }
        let totalsTable = $("#totals-table");
        // Get row data
        
        // If columns aren't on screen when the page loads, sometimes Brewman doesn't
        // actually load the column in until it is scrolled to. Don't have the brain
        // to think of a way to make an exception for those cases right now so I guess
        // it's a TODO

        let orderNumber = jNode.children("div[col-id='orders_order_number']").find("p").text().trim();
        let date = jNode.children("div[col-id='orders_despatch_date']").find("p").text().trim().replaceAll("/", "-");
        let qty = parseInt(jNode.children("div[col-id='qty']").find("p").text());
        console.log(qty);
        console.log(jNode.children("div[col-id='qty']"));

        // Create row for date if not exists
        if ($("#date-" + date).length == 0) {
            totalsTable.append('<tr id="date-' + date + '"><td>' + date + '</td><td style="padding-left:20px;">0</td></tr>');
        }
        // Add to row if order not counted
        let countedOrders = $("#counted-orders").text().split(",")
        if (!countedOrders.includes(orderNumber)) {
            let date_total = parseInt($("#date-" + date).children().eq(1).text());
            date_total += qty;
            $("#date-" + date).children().eq(1).text(date_total.toString());
            countedOrders.push(orderNumber);
            $("#counted-orders").text(countedOrders.join(","));
        }
    }
}