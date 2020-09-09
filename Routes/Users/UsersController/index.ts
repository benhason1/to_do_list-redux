import ReduxStore from '../../../Redux';
import User from '../../../Dal/User';

export default {
    createUser: (req, res) => {

        let { username, password } = req.body
        if (!username || !password) {
            res.status(400)
            res.send("not all the must be fields are in the request")
        }

        let user = new User(username, password)
        ReduxStore.dispatch({
            type: "newUser",
            user: user
        })
        
        res.send(user)
    }
}