const ctrlHome={};

ctrlHome.getUser = ((req,res)=>{
    console.log(req.body);
    res.send({
        message : "Peticion Get"
    })
})

ctrlHome.postUser = ((req,res)=>{
    console.log(req.body);
    res.send({
        message : "Peticion Post"
    })
})

ctrlHome.putUser = ((req,res)=>{
    console.log(req.body);
    res.send({
        message : "Peticion Put"
    })
})

ctrlHome.deleteUser = ((req,res)=>{
    console.log(req.body);
    res.send({
        message : "Peticion Delete"
    })
});

module.exports = ctrlHome;