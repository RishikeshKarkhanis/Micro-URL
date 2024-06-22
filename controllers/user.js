// Importing Modules
const models = require('../models/models')
const uuid = require('uuid')
const auth = require('../services/auth')

// This Function Only Allows The Logged-In Users To Access The Main Content Of This Site
async function restrictToLoggedUsersOnly(req, res)
{
    const userUid = req.cookies.uid;
    const user = await auth.getUser(userUid)

    if(user)
    {
        const urls = await models.Url.find({createdBy : user.username});
        res.render('index', data={usr:user, url:urls});
    }

    if(!user){res.redirect('/login')}
}

// This Function Adds The Values Recieved From The Front-end To The Database And Sends Login Page As Response
async function HandleAddUser(req, res)
{
    const {username, email, password} = req.body;
    models.User.create({username:username, email:email, password:password});
    res.render('login', data={msg:""});
}

// This Function Checks The User In Database From The Values Recieved From The Front-End. If Found Then Creates Cookie
async function HandleCheckUser(req, res)
{
    const {email, password} = req.body;
    const user = await models.User.findOne({email:email, password:password});

    if(user) 
    {
        const sessionId = uuid.v4();
        res.cookie('uid', sessionId);
        auth.setUser(sessionId, user);
        res.redirect('/');
    }

    if(!user) return res.render('login', data={msg:'Incorrect Username or Password!'});
}

//This Function Deletes The Cookie And Redirects The User To Login Page
async function HandleLogOut(req, res)
{
    res.clearCookie('uid');
    res.redirect('/login')
}

//Exporting The Functions
module.exports = {HandleAddUser, HandleCheckUser, HandleLogOut, restrictToLoggedUsersOnly};