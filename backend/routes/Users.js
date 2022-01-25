var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");


const Vendor = require("../models/Vendor");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});


// router.get("/Fooditems", function(req, res) {
//     User.find(function(err, Foodie) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json(Foodie);
// 		}
// 	})
// });

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db

router.post("/ur", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password,
        contactNumber: req.body.contactNumber,
        age:req.body.age,
        batchName:req.body.batchName
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/vr", (req, res) => {
    const newUser = new Vendor({
        name: req.body.name,
        shopname: req.body.shopname,
        password : req.body.password,
        email: req.body.email,
        contactnumber: req.body.contactnumber,
        opentime:req.body.opentime,
        closetime:req.body.closetime
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});



// POST request 
// Login
router.post("/login", (req, res) => {
	const email = req.body.email;
    const password = req.body.password;
    
    var halo=0;
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {
            Vendor.findOne({ email }).then(user => {
                // Check if user email exists
                if (!user) {
           
                       return res.status(404).json({
                        error: "Email not found",
                    });
                }
                else{
                    if(password===user.password){
                        
                        res.send("Vendor Logged In");
                        
                        
                             
                    }
                    else{
                        res.send("Passwords didn't match");
        
                    }
                    
                    return user;
                }
            });

            //halo=1;
           
			// return res.status(404).json({
			// 	error: "Email not found",
			// });
        }
        else{
            if(password===user.password){
                res.send("Buyer Logged In");
                

               
                
                

            }
            else{
                res.send("Passwords didn't match");

            }
            
            return user;
        }
	});

    

   
});


router.post("/getinfo", (req, res) => {
	const email = req.body.email;
    
    
    var halo=0;
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {

            alert("user not exists");
            

            //halo=1;
           
			// return res.status(404).json({
			// 	error: "Email not found",
			// });
        }
        else{
            res.json(user);
           
        }
	});

    

   
});

router.post("/vgetinfo", (req, res) => {
	const email = req.body.email;
    
    
    var halo=0;
	// Find user by email
	Vendor.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {

            alert("user not exists");
            

            //halo=1;
           
			// return res.status(404).json({
			// 	error: "Email not found",
			// });
        }
        else{
            res.json(user);
           
        }
	});

    

   
});












module.exports = router;

