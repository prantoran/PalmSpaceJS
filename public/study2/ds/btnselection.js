class Button {
    constructor() {
        this.row_i = -1;
        this.col_j = -1;
        this.btn_id = -1;
    }
}


class ButtonSelection {
    constructor() {        
        this.currentBtn = new Button();
        this.previousBtn = new Button();
        this.markedBtn = new Button();
        this.locked = false;
        this.messages = {
            marked: "",
            selected: ""
        };
        this.lastLockTime = performance.now();
        
        this.pastSelections = {
            head: null,
            tail: null,
            cnt: 0
        }
    }

    resetSelectedButton() {
        this.currentBtn.row_i = -1;
        this.currentBtn.col_j = -1;
        this.currentBtn.btn_id = -1;
        
        this.previousBtn.row_i = -1;
        this.previousBtn.col_j = -1;
        this.previousBtn.btn_id = -1;

        this.messages.selected = "";

        this.pastSelections.head = null;
        this.pastSelections.tail = null;
        this.pastSelections.cnt = 0;
    }

    resetMarkedButton() {
        this.markedBtn.row_i = -1;
        this.markedBtn.col_j = -1;
        this.markedBtn.btn_id = -1;
        this.messages.marked = "";
    }

    reset() {
        this.resetSelectedButton();

        this.locked = false;
        this.lastLockTime = performance.now();
    }

    adjustSelection() {
        if (this.pastSelections.head != null) {
            this.currentBtn.row_i = this.pastSelections.head.row_i;
            this.currentBtn.col_j = this.pastSelections.head.col_j;
        }
    }
    
    adjustSelectionBtnID() {
        if (this.pastSelections.head != null) {
            this.currentBtn.btn_id = this.pastSelections.head.btn_id;
        }
    }

    addToPastSelections(btn) {
        if (this.pastSelections.tail == null) {
            this.pastSelections.tail = new Button();
            this.pastSelections.tail.row_i = btn.row_i;
            this.pastSelections.tail.col_j = btn.col_j;
            this.pastSelections.head = this.pastSelections.tail;
        } else {
            this.pastSelections.tail.next = new Button();
            this.pastSelections.tail = this.pastSelections.tail.next;
            this.pastSelections.tail.row_i = btn.row_i;
            this.pastSelections.tail.col_j = btn.col_j;

            this.pastSelections.cnt ++;
            if (this.pastSelections.cnt > 3) {
                this.pastSelections.head = this.pastSelections.head.next;
                this.pastSelections.cnt = 3;
            }
        }
    }

    addToPastSelectionsBtnID(btnID) {
        if (this.pastSelections.tail == null) {
            this.pastSelections.tail = new Button();
            this.pastSelections.tail.btn_id = btnID;
            this.pastSelections.head = this.pastSelections.tail;
        } else {
            this.pastSelections.tail.next = new Button();
            this.pastSelections.tail = this.pastSelections.tail.next;
            this.pastSelections.tail.btn_id = btnID;

            this.pastSelections.cnt ++;
            if (this.pastSelections.cnt > 3) {
                this.pastSelections.head = this.pastSelections.head.next;
                this.pastSelections.cnt = 3;
            }
        }
    }
}


export {Button, ButtonSelection};