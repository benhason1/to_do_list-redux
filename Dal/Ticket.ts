export default class Ticket {
    creator: User
    title: String
    content: String
    allowedUsers: String[]
    constructor(creator: User, title: String, content: String, allowedUsers: String[]) {
        this.creator = creator
        this.title = title
        this.content = content
        this.allowedUsers = allowedUsers
    }
}
