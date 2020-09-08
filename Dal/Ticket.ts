export default class Ticket {
    creator: String
    title: String
    content: String
    constructor(creator: String, title: String, content: String) {
        this.creator = creator
        this.title = title
        this.content = content
    }
}

let a = new Ticket("ad","asd","asd")