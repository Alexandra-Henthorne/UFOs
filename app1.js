// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

function filterTable(){
  let filteredTable = tableData;


  Object.entries(filters).forEach(function([key, value]){
    filteredData= filteredData.filter((row)=>row[key]=== value);

})

buildTable(filteredData);

}   
// 3. Use this function to update the filters. 
function updateFilters() {

  var changeElement = d3.select(this).select("input");
  var elementValue = changeElement.property("value");
  var filterId = changeElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  if(elementvalue){
    filters[filterId] = elementValue;
  }
  else{
    delete filters[filterId];
  }

  filterTable()
} 
    
  // 2. Attach an event to listen for changes to each filter
d3.selectAll(".filter-btn").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
