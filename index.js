const jsonServer = require('json-server')
const empServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router("db.json")
const PORT = 3000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Employee portal Started at port: ${PORT}`);
})
