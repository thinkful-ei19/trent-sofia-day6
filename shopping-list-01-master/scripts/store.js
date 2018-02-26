/* global cuid */

const store = (function () { 
    const items = [
          { id: cuid(), name: 'apples', checked: false },
          { id: cuid(), name: 'oranges', checked: false },
          { id: cuid(), name: 'milk', checked: true },
          { id: cuid(), name: 'bread', checked: false }
        ];
    let hideCheckedItems = false;
    
    let searchTerm = '';
    
    function findById(id){
      return store.items.find(item => item.id === id);
    }

    function addItem(name) {
        try {
            Item.validateName(name);
            this.items.push(Item.create(name));
        } catch (error) {
            console.log('Cannot add item: ' + error.message);
        }
    }

    function findAndToggleChecked(id) {
        return this.findById(id).checked = !this.findById(id).checked;
    }

    function findAndUpdateName(id, newName) {
        try {
            Item.validateName(name);
            this.findById(id).name = newName;
        } catch (error) {
            console.log('Cannot update name: ' + error.message);
        }
    }

    function findAndDelete(id) {
        const filteredList = this.items.filter(item => item.id !== this.findById(id).id);
        this.items = filteredList;
    }
    
    return {
        items,
        hideCheckedItems,
        searchTerm,
        findById,
        addItem,
        findAndToggleChecked,
        findAndUpdateName,
        findAndDelete
    }
}());