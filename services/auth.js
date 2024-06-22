// Creating A Hashmap To Map Session ID And Users
const sessionIdToUserMap = new Map();

// This Function Adds Key-Value Pair To The Map We Created
function setUser(id, user)
{
    sessionIdToUserMap.set(id, user);
}

// This Function Gets The Value From The Key Recieved As An Argument
async function getUser(id)
{
    const user = await sessionIdToUserMap.get(id);
    return user;
}

// Exporting Functions
module.exports = {setUser, getUser}