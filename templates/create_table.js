let low = [ ['Fruit juice or regular soda pop','1/2 - 3/4 cup (4-6 ounces)'],
			['Fat-free milk','1 cup (8 ounces)'],
			['Honey','1 tablespoon (3 teaspoons)'],
			['Jellybeans','10-15'], 
			['Raisins','2 tablespoons'],
			['Candy','5-7 pieces'],
			['Hard candy (like Jolly Rancher)','3 pieces']];


makeTable(low);

function makeTable(array) {
	var body = document.body;
    var table = document.createElement('table');
	table.style.width  = '100%';
    table.style.border = '1px  black';
	table.setAttribute("id", "table_low");
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
		
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = array[i][j];
			cell.style.border = '1px solid black';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    body.appendChild(table);
}