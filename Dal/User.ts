import Auth from '../Utils/Auth'

export default class User {
    username: String
    password: String
    token: String
    // need to add jwt token on creating user
    constructor(username: String, password: String) {
        this.username = username
        this.password = password
        this.token = Auth.signToken(username)
    }
}
