export default class Ticket {
    creatorId: String
    title: String
    content: String
    allowedUsers: String[]
    constructor(creatorId: String, title: String, content: String, allowedUsers: String[]) {
        this.creatorId = creatorId
        this.title = title
        this.content = content  
        this.allowedUsers = allowedUsers
    }
}
