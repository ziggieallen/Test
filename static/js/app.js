class BoggleGame {
    /* make a new game at this DOM id */

    constructor(boardId) {
        this.words = new Set();
        this.board = $("#" + boardId);
        // Not sure how the above works

        $(".add-word", this.board).on("submit", this.handleSubmit.bind(this));
        // I think this assigns an event listener but I have no clue how it does that
        // "this" has always confused me
    }

    async handleSubmit(evt) {
        evt.preventDefault();
        const $word = $(".word", this.board);
        // is .word coming from the name of my input being word?
        // how is it working with this.board?

        let word = $word.val();
        if (!word) return;
        // What does this do

        if (this.words.has(word)) {
            this.showMessage('Already found $(word)', "err");
        }
    }

    
    
}
