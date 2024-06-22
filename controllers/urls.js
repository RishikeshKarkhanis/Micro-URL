const models = require('../models/models')
const short_url_generator = require('../services/short_url_generator')
const auth = require('../services/auth');

async function HandleAddUrl(req, res)
{
    const {l_url} = req.body;
    const s_url = short_url_generator();
    const userUid = req.cookies.uid;
    const user = await auth.getUser(userUid);
    models.Url.create({long_url:l_url, short_url:s_url, createdBy:user.username});
    res.redirect('/')
}

async function HandleGoToUrl(req, res)
{
    const short_url = req.params.url;
    const urls = await models.Url.findOne({short_url:short_url});
    const long_url = urls.long_url;
    res.redirect('https://' + long_url);
}

async function HandleDeleteUrl(req, res)
{
    const short_url = req.params.url;
    await models.Url.deleteOne({short_url:short_url});
    res.redirect('/');
}

module.exports = {HandleAddUrl, HandleGoToUrl, HandleDeleteUrl};