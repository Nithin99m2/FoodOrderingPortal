var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");


const Vendor = require("../models/Vendor");

const Food = require("../models/Food");

// GET request 
// Getting all the users
router.get("/", function (req, res) {
    Food.find(function (err, users) {
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
        password: req.body.password,
        contactNumber: req.body.contactNumber,
        age: req.body.age,
        batchName: req.body.batchName
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
        password: req.body.password,
        email: req.body.email,
        contactnumber: req.body.contactnumber,
        opentime: req.body.opentime,
        closetime: req.body.closetime
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


    var halo = 0;
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
                else {
                    if (password === user.password) {

                        res.send("Vendor Logged In");



                    }
                    else {
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
        else {
            if (password === user.password) {
                res.send("Buyer Logged In");






            }
            else {
                res.send("Passwords didn't match");

            }

            return user;
        }
    });




});


router.post("/getinfo", (req, res) => {
    const email = req.body.emaile;


    var halo = 0;
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
        else {
            res.json(user);

        }
    });




});

router.post("/vgetinfo", (req, res) => {
    const email = req.body.email;


    var halo = 0;
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
        else {
            res.json(user);

        }
    });




});


router.post("/bupdate", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const contactNumber = req.body.contactNumber;
    const age = req.body.age;
    const batchName = req.body.batchName;



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
        else {
            user.name = name;
            user.email = email;
            user.password = password;
            user.contactNumber = contactNumber;
            user.age = age;
            user.batchName = batchName;

            user.save();
            res.send("Updated");


        }
    });




});




router.post("/foodupdate", function (req, res) {
    const id = req.body.id;
   


    Food.findById(id, function (err, users) {
        if (err) {


            console.log(err);
            res.send("An error occured");
        } else {
            console.log(users);
            users.name = req.body.name;
            users.price = req.body.price;
            users.type = req.body.type;
            users.save();
            res.send("Successfully updated");
        }
    })
});


router.post("/vupdate", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const contactNumber = req.body.contactnumber;
    const opentime = req.body.opentime;
    const closetime = req.body.closetime;
    const shopname = req.body.shopname;



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
        else {
            user.name = name;
            user.email = email;
            user.password = password;
            user.contactnumber = contactNumber;
            user.shopname = shopname;
            user.opentime = opentime;
            user.closetime = closetime;

            user.save();
            res.send("Updated");


        }
    });




});



router.post("/addfood", (req, res) => {
    const newfood = new Food({
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        email: req.body.email,
        type: req.body.type


    });




    // Find user by email
    newfood.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });



});



router.post("/delfood", (req, res) => {

    const id = req.body.id;

    Food.deleteOne({ "_id": req.body.id })
        .then(user => {
            res.send("Deleted successfully");

        })
        .catch(err => {
            res.status(400).send(err);

        });







    // Find user by email



});



// Find user by email
router.post("/editgetinfo", function (req, res) {
    const id = req.body.id;
    Food.findById(id, function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});













module.exports = router;

