// Currying

function multiply(a) {
    return function (b) {
      return function (c) {
        return a * b * c;
      };
    };
  }
  
  const double = multiply(2);
  const triple = multiply(3);
  const result = triple(double(4)(5))(1);
  
  console.log(result); // Output: 120

  //Inventory List
  // Function to create an inventory list
function inventoryList() {
    let items = []; // Array to store the inventory items
  
    // Function to add an item to the inventory
    function add(name) {
      let names = items.filter(e => e.name === name); // Check if an item with the same name already exists
      if (names.length === 0) {
        // If no item with the same name exists, add the item to the inventory
        items.push({ name: name });
      }
    }
  
    // Function to remove an item from the inventory
    function remove(name) {
      // Filter the items array to exclude the item with the specified name
      items = items.filter(e => e.name !== name);
    }
  
    // Function to retrieve the list of item names in the inventory
    function getList() {
      // Map the items array to extract only the name property of each item
      return items.map(e => e.name);
    }
  
    // Return an object that exposes the add, remove, and getList methods
    return { add, remove, getList };
  }


  //student inventory list

  // Function to manipulate a student record based on the provided operation
function manipulateStudentRecord(obj, operation, prop, newValue) {
    if (operation === 'delete') {
        // If the operation is 'delete'
        if (obj && obj.hasOwnProperty(prop)) {
            // Check if the object exists and has the specified property
            delete obj[prop]; // Delete the property from the object
        }
    } else if (operation === 'edit') {
        // If the operation is 'edit'
        if (obj && obj.hasOwnProperty(prop)) {
            // Check if the object exists and has the specified property
            obj[prop] = newValue; // Update the value of the property with the new value
        }
    }
    return obj; // Return the modified or unmodified object
}
