class Item {

    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.done = false;
    }
}

export default Item;