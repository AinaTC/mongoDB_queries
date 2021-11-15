db.Restaurant.find( {} );
db.Restaurant.find( {}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1 } );
db.Restaurant.find( {}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0 } );
db.Restaurant.find( {}, {"restaurant_id":1, "name":1, "borough":1, "address.zipcode":1, "_id":0 } );
db.Restaurant.find( {"borough":"Bronx"} );
db.Restaurant.find( {"borough":"Bronx"} ).limit(5);
db.Restaurant.find( {"borough":"Bronx"} ).skip(5).limit(5);
db.Restaurant.find( {"grades.score": {$gt: 90} } );
db.Restaurant.find({"grades": {$elemMatch: {"score": {$gt:90, $lt:100}}}});
db.Restaurant.find( {"address.coord.0": {$lt: -95.754168} } );
db.Restaurant.find({$and:[{"address.coord.0": {$lt:-65.754168}}, {"grades.score": {$gt:70}},{"cuisine":{$ne:" American"}}]});
db.Restaurant.find({"address.coord.0": {$lt:-65.754168}, "grades.score": {$gt:70},"cuisine":{$ne:"American"}});
db.Restaurant.find({$and:[{"borough": {$ne:"Brooklyn"}}, {"grades.grade": "A"},{"cuisine":{$ne:" American "}}]}).sort({"cuisine":-1});
db.Restaurant.find({"name":/^Wil/}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});
db.Restaurant.find({"name":/ces$/}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});
db.Restaurant.find({"name": /Reg/}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});
db.Restaurant.find({"borough":"Bronx", "cuisine": { $in : [ "American", "Chinese" ]}}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});
db.Restaurant.find({"borough":{ $in : [ "Queens", "Bronx", "Staten Island", "Brooklyn" ]}}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});
db.Restaurant.find({"borough":{ $nin : [ "Queens", "Bronx", "Staten Island", "Brooklyn" ]}}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});
db.Restaurant.find({"grades.score":{$lt: 10}}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0});
db.Restaurant.aggregate([{$group:{ _id: {"restaurant_id":"$restaurant_id"},"name":{$push:"$name"}, "borough":{$push: "$borough"}, "cuisine":{$push:"$cuisine"}}}, {$match:{ $or: [ {$and: [ { cuisine: 'Seafood'}, {cuisine: { $nin: ['American ', 'Chinese']}}]},{ "name":/^Wil/ } ] }}]);
db.Restaurant.find({"grades":  {$elemMatch: {"date":ISODate("2014-08-11T00:00:00Z"),"grade":"A", "score":11}}}, {"restaurant_id":1, "name":1, "grades.grade":1, "_id":0});
db.Restaurant.find({"grades.1.date": ISODate("2014-08-11T00:00:00Z"),"grades.1.grade":"A", "grades.1.score":9}, {"restaurant_id":1, "name":1, "grades":1, "_id":0});
db.Restaurant.find({"address.coord.1":{$gt:42, $lt:52}}, {"restaurant_id":1, "name":1, "address":1, "_id":0});
db.Restaurant.find({},{"name":1, "_id":0}).sort({"name":1});
db.Restaurant.find({},{"name":1, "_id":0}).sort({"name":-1});
db.Restaurant.find({},{"cuisine":1,"borough":1, "_id":0}).sort({"cuisine":1, "borough":-1});
db.Restaurant.aggregate([{"$project": { "address": {"has_street": { "$gt": ["$address.street", null] }}}}]);
db.Restaurant.find({"address.coord": {$type: "double"}});
db.Restaurant.find({ "grades.score": { $mod: [ 7, 0] } }, {"restaurant_id":1, "name":1, "grades.grade":1, "_id":0});
db.Restaurant.find({"name" : /mon/}, {"restaurant_id":1, "name":1, "borough":1, "address.coord.0":1, "address.coord.1":1,"cuisine":1, "_id":0});
db.Restaurant.find({"name": /^Mad/}, {"restaurant_id":1, "name":1, "borough":1, "address.coord.0":1, "address.coord.1":1, "cuisine":1, "_id":0});