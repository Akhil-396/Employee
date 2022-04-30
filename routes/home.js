const express=require('express');
const employer = require('../models/employer');
const router=express.Router();
const Employer=require('../models/employer')

router.get('/',(req, res, next)=>{
    Employer.find((err,docs)=>{
        res.render('home',{employer:docs});
    }).catch(err=>{
        console.log("something wrong with mongodb");
    })
    
})
router.post('/add',(req,res,next)=>{
    const id=req.body.id;
   
    const name=req.body.name;
   
    const designation=req.body.designation;
    const doj=req.body.doj;
    const dor=req.body.dor;
   

    console.log(id,name,designation,doj,dor);

    const uclemployer = new employer({
       
        id,
        name,
        designation,
        doj,
        dor
        
    });
    uclemployer.save((err)=>{
if(err){
    console.log("Something went wrong to save data to database");
}else{
console.log("Data is stored");
res.redirect('/')
}

})
    })
    //Router to show updated elment
    router.get('/edit/:id',(req,res,next)=>{
        console.log(req.params.id);
        Employer.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>{
            if(err){
                console.log("Cant retrieve data because of db problem");
            next(err);
            }else{
                res.render('edit',{employer: docs});
            }

        })
        
    })


    //Route to update element
    router.post('/edit/:id',(req,res,next)=>{
        Employer.findByIdAndUpdate({_id: req.params.id},req.body,(err,docs)=>{
            if(err){
                console.log("something went wrong to update");
                next(err)
            }else{
            res.redirect('/')  
            }
        })
    })

    //Route to delete

    router.get('/delete/:id',(req,res,next)=>{
        Employer.findByIdAndDelete({_id: req.params.id},req.body,(err,docs)=>{
            if(err){
                console.log("something went wrong to delete");
                next(err)
            }else{
            console.log('Deleted Successfully')
            res.redirect('/');  
            }
        })
    })


module.exports= router;