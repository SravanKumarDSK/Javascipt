const tables = [
    { id: "table1", name: "Table-1", total: 0, items: {} },
    { id: "table2", name: "Table-2", total: 0, items: {} },
    { id: "table3", name: "Table-3", total: 0, items: {} },
  ]; // table data
  
  const menuItems = [
    { id: "item1", name: "Biryani", price: 10.0, type: "main course" },
    { id: "item2", name: "Pizza", price: 5.0, type: "main course" },
    { id: "item3", name: "Panner tikka", price: 1.0, type: "Stater" },
  ]; // menu data
  
  // when the dom render this particular event triggers.
  document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuItems); //menu
    renderTable(tables); // table
  });
  
  function renderMenu(menuItems) {
    const menuContainer = document.getElementById("menu-container");
  
    menuContainer.innerHTML = ""; // this is used to replace existing content
  
    menuItems.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item"; //<div class="menu-item" id="item1"></div>
      menuItem.id = item.id;
      menuItem.draggable = true; // enable drag feature.
      menuItem.dataset.name = item.name; // we store the data in tag.
      menuItem.dataset.type = item.type;
      menuItem.dataset.price = item.price;
  
      menuItem.innerHTML = `
          <h4>${item.name}</h4>
          <p>${item.price.toFixed(2)} - ${item.type}</p>
          `;
      menuContainer.append(menuItem);
  
      menuItem.addEventListener("dragstart", dragStart);
      // this event triggers when the element is drag.
    });
  }
  
  function renderTable(tables) {
    const tableContainer = document.getElementById("tables-container");
    tableContainer.innerHTML = "";
  
    tables.forEach((table) => {
      const tableCard = document.createElement("div");
  
      tableCard.className = "table-card"; //<div class="table-card" id="table1"></div>
      tableCard.id = table.id;
  
      console.log(tables.items);
      tableCard.innerHTML = `
      <h3>${table.name}</h3>
      <p>Total: ${table.total.toFixed(2)} </p>
      <p>Items: ${Object.values(table.items).reduce(
        (a, b) => a + b.quantity,
        0
      )}</p>
      `;
  
      tableCard.addEventListener("click", () => showOrderDetails(table.id));
  
      tableContainer.append(tableCard);
  
      //this events are mentioned on the target drop elements.
  
      tableCard.addEventListener("dragover", dragOver);
      // this is event is used to enable drop event.
      // in this you need to use event.preventDefault();
  
      //we handle moving the draggable element from the original container to the drop zone.
      tableCard.addEventListener("drop", dropItem);
    });
  }
  
  function showOrderDetails(tableId) {
    const table = tables.find((table) => table.id === tableId);
    // it will return use the element.
  
    const modalBody = document.getElementById("modal-body");
  
    modalBody.innerHTML = "";
  
    // { id: "table1", name: "Table-1", total: 0, items: {biryani: {quantity:1, price: 10}, pizza:{quantity:1, price: 5}} },
    // console.log(Object.keys(table.items)); //["biryani",pizza];
  
    Object.keys(table.items).forEach((itemName) => {
      const item = table.items[itemName]; //{quantity:1, price: 10}
  
      const itemPrice = item.price;
  
      modalBody.innerHTML =
        modalBody.innerHTML +
        `
      
      <div class= "order-item">
      <p>${itemName} :
  
      <input type="number" value="${
        item.quantity
      }" min=0 onChange="updateItemQuantity('${tableId}', '${itemName}',
          this.value
        )"/>
  
      x $${itemPrice.toFixed(2)}
      
      </p>
      <button onclick="deleteItem('${tableId}', '${itemName}')">Remove</button>
      </div>
      
      `;
    });
  
    modalBody.innerHTML += `<h3>Total : $${table.total.toFixed(2)}</h3>`;
    document.querySelector("#order-modal").style.display = "flex";
  }
  
  // this event stored the reference of the data which you want to drag
  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    //dataTransfer stores the element value.
    //setData allow us to store the data in DOM.
    //1 arugment-> type of element/data, key for the value stored.
  }
  
  function dragOver(e) {
    e.preventDefault(); //allow drop event.
  }
  
  function dropItem(e) {
    e.preventDefault(); // prevent default action (open as link for some elements)
  
    const itemId = e.dataTransfer.getData("text");
    // here we are access the data from DOM
  
    const itemElement = document.getElementById(itemId);
  
    // <div class="menu-item" id="item1" draggable="true" data-name="Biryani" data-type="main course" data-price="10">
    const itemName = itemElement.dataset.name; // here we are getting the data from element
    const itemPrice = parseFloat(itemElement.dataset.price); // it allows use to use number inside a string.
    const tableId = e.target.id;
  
    if (itemName && itemPrice && tables.find((table) => table.id === tableId)) {
      addItemToTable(tableId, itemName, itemPrice);
      // this is used to store the content of menu on table.
    }
  }
  
  // this function is used to add items into table - 4
  function addItemToTable(tableId, itemName, itemPrice) {
    const table = tables.find((table) => table.id === tableId);
  
    // { id: "table1", name: "Table-1", total: 0, items: {} },
    if (!table.items[itemName]) {
      table.items[itemName] = { quantity: 0, price: itemPrice };
      // table.items["biryani"]= {quantity:0, price: 10}
      // { id: "table1", name: "Table-1", total: 0, items: {"briyani": {quantity:0, price: 10}} },
    }
  
    table.items[itemName].quantity++; //{quantity:1, price: 10}
    table.total = table.total + itemPrice; // total= 0 + 10;
  
    //update table card UI
    const tableCard = document.getElementById(tableId);
  
    tableCard.querySelector("p").textContent = `Total: ${table.total.toFixed(2)}`;
    console.log(table.items);
    console.log(Object.values(table.items));
    // { id: "table1", name: "Table-1", total: 0, items: {"briyani": {quantity:0, price: 10}} },
    // [{quantity:0, price:10}]
    tableCard.querySelector(
      "p:nth-of-type(2)"
    ).innerText = `Items: ${Object.values(table.items).reduce(
      (storage, element) => storage + element.quantity,
      0
    )}`;
  }
  
  //close modal
  
  document.querySelector(".close-button").addEventListener("click", () => {
    document.getElementById("order-modal").style.display = "none";
  });
  
  function updateItemQuantity(tableId, itemName, newQuantity) {
    const table = tables.find((table) => table.id === tableId);
    const item = table.items[itemName]; //{quantity:0, price: 10}
    const oldQuantity = item.quantity;
  
    const quantityDifference = newQuantity - oldQuantity;
  
    item.quantity = parseInt(newQuantity);
  
    table.total = table.total + quantityDifference * item.price;
    // table.total += quantityDifference * item.price;
  
    if (item.quantity <= 0) {
      deleteItem(tableId, itemName);
    } else {
      //update UI
  
      const tableCard = document.getElementById(tableId);
      tableCard.querySelector("p").textContent = `Total: $${table.total.toFixed(
        2
      )}`;
  
      tableCard.querySelector(
        "p:nth-of-type(2)"
      ).textContent = `Items: ${Object.values(table.items).reduce(
        (storage, element) => storage + element.quantity,
        0
      )}`;
  
      //update modal
      showOrderDetails(tableId);
    }
  }
  
  function deleteItem(tableId, itemName) {
    console.log("delete");
    const table = tables.find((table) => table.id === tableId);
  
    if (table.items[itemName]) {
      const item = table.items[itemName]; // biryani
  
      table.total -= item.quantity * item.price;
  
      delete table.items[itemName];
    }
  
    //update UI
  
    const tableCard = document.getElementById(tableId);
  
    tableCard.querySelector("p").textContent = `Total: $${table.total.toFixed(
      2
    )}`;
  
    tableCard.querySelector(
      "p:nth-of-type(2)"
    ).textContent = `Items: ${Object.values(table.items).reduce(
      (storage, element) => storage + element.quantity,
      0
    )}`;
  
    //update modal
    showOrderDetails(tableId);
  }
  
  function filterTable() {
    console.log("table");
    const searchText = document
      .getElementById("table-search")
      .value.toLowerCase();
  
    const filterTables = tables.filter((table) =>
      table.name.toLowerCase().includes(searchText)
    );
  
    renderTable(filterTables);
  }
  
  function filterMenu() {
    const searchText = document.getElementById("menu-search").value.toLowerCase();
  
    const filterMenu = menuItems.filter((table) =>
      table.name.toLowerCase().includes(searchText)
    );
  
    renderMenu(filterMenu);
  }
  