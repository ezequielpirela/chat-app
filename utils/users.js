let users = [];

const addUser = ({ username, room, id }) => {
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    if(!username || !room) {
        return {
            error: 'username and room are required!'
        }
    }

    const existingUser = users.find(user => {
        return user.room === room && user.username === username
    })
    if(existingUser) {
        return {
            error: 'a username with this name its already registered'
        }
    }
    const user = { id, username, room};
    users.push(user);
    return { user }
}
const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if(index !== -1 ){
        return users.splice(index, 1)[0];
    }
}
const getUser = (id) => {
    return users.find(user =>( 
        user.id === id
    ))
}
const getUsersInRoom = (room) => {
     return users.filter(user => {
          return user.room === room
    })
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };