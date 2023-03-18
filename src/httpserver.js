var express = require("express");
var app = express();
app.listen(9090);
app.use(express.static(__dirname));

var mongoose = require("mongoose");
var UsersSchema = new mongoose.Schema( { _id: Number, email: String, personName: String, password: String, mobile: String, dateOfBirth: Number, monthOfBirth: Number, yearOfBirth: Number, amount: Number, receiveNewsLetters: Boolean, gender: String, country: String  }, { versionKey: false } );
var Users = mongoose.model("users", UsersSchema);

var QuestionsSchema = new mongoose.Schema( { _id: Number, questionname: String, questiondateandtime: String, userid: String, categoryid: String, viewscount: Number, answerscount: Number, votescount: Number }, { versionKey: false } );
var Questions = mongoose.model("questions", QuestionsSchema);

var CategoriesSchema = new mongoose.Schema( { _id: Number, categoryname: String }, { versionKey: false } );
var Categories = mongoose.model("categories", CategoriesSchema);

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded( { extended: true } ));
app.use(bodyparser.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/insertuser", function(req, res) {
  mongoose.connect("mongodb://localhost/stackoverflow");
  var d = new Date();
  var newUser = new Users( { email: req.body.email, personName: req.body.personName, password: req.body.password, mobile: req.body.mobile, dateOfBirth: req.body.dateOfBirth, monthOfBirth: req.body.monthOfBirth, yearOfBirth: req.body.yearOfBirth, amount: req.body.amount, receiveNewsLetters: req.body.receiveNewsLetters, gender: req.body.gender, country: req.body.country, _id: d.getTime() } );
  newUser.save(function(err) {
    if (err)
    {
      console.log(err);
      res.send("Failed");
    }
    else
    {
      res.send("Successfully Inserted");
    }
    mongoose.connection.close();
  });
});

app.post("/checkemailandpassword", function(req, res) {
  mongoose.connect("mongodb://localhost/stackoverflow");
  console.log(req.body.email);
  console.log(req.body.password);
  Users.find({ email: req.body.email, password: req.body.password }, function(err, data) {
    if (err)
    {
      console.log(err);
      res.send("Failed");
    }
    else
    {
      res.send(data);
    }
    mongoose.connection.close();
  });
});

app.get("/getlatestquestions", function(req, res) {
  setTimeout( function() {
    mongoose.connect("mongodb://localhost/stackoverflow");
    Questions.find(function(err, data) {
      if (err)
      {
        console.log(err);
        res.send("Failed");
      }
      else
      {
        console.log(data);
        res.send(data);
      }
      mongoose.connection.close();
    });
  }, 200);
});

app.get("/getquestionbyquestionid", function(req, res) {
  mongoose.connect("mongodb://localhost/stackoverflow");
  Questions.findOne({ _id: req.query._id }, function(err, data) {
    if (err)
    {
      console.log(err);
      res.send("Failed");
    }
    else
    {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

app.get("/getcategories", function(req, res) {
  mongoose.connect("mongodb://localhost/stackoverflow");
  Categories.find(function(err, data) {
    if (err)
    {
      console.log(err);
      res.send("Failed");
    }
    else
    {
      console.log(data);
      res.send(data);
    }
    mongoose.connection.close();
  });
});

app.post("/insertcategory", function(req, res) {
  mongoose.connect("mongodb://localhost/stackoverflow");
  console.log(req.body);
  var newCategory = new Categories( { _id: req.body._id, categoryname: req.body.categoryname  } );
  newCategory.save(function(err) {
    if (err)
    {
      console.log(err);
      res.send("Failed");
    }
    else
    {
      res.send("Successfully Inserted");
    }
    mongoose.connection.close();
  });
});

app.put("/updatecategory", function(req, res) {
  setTimeout(() => {
    mongoose.connect("mongodb://localhost/stackoverflow");
    console.log(req.body);
  
    Categories.findOne({ _id: req.body._id }, function(err, data)
    {
      if (err)
      {
        console.log(err);
        res.send("Failed");
      }
      else
      {
        console.log(data);
        data.categoryname = req.body.categoryname;
        data.save(function(err) {
          if (err)
          {
            console.log(err);
            res.send("Failed");
          }
          else
          {
            res.send("Successfully Updated");
          }
          mongoose.connection.close();
        });
      }
    });
  }, 4000);
  
});

app.delete("/deletecategory", function(req, res) {
  mongoose.connect("mongodb://localhost/stackoverflow");
  console.log(req.query);

  Categories.remove({ _id: req.query._id }, function(err, data)
  {
    if (err)
    {
      console.log(err);
      res.send("Failed");
    }
    else
    {
      console.log(data);
      res.send("Successfully Deleted");
      mongoose.connection.close();
    }
  });
});


  