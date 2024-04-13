var Guest_list = ["Rohan", "fatima", "salar"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr." + Guest_list[i] + ",\n\nIt my pleasure to invite you in our dinner\n\n ThankYou ");
}
var absent_Guest = "Rohan";
var new_Guest = "NABEEL";
Guest_list[0] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr." + Guest_list[i] + ",\n\nIt my pleasure to invite you in our dinner\n\n ThankYou\n\n ");
}
console.log("MR ".concat(absent_Guest, " is not coming in the dinner "));
console.log("Gos News! we fine a big table so we are inviting a 3 more guest");
Guest_list.unshift("sir zia khan");
Guest_list.splice(2, 0, "KAFEEL AHMED");
Guest_list.push("SAAD SALAR");
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr." + Guest_list[i] + ", \n\n It my pleasure to invite you in our dinner\n\n ThankYou \n\n ");
}
console.log("\nsorry we can not arrange big table only two people will be invited");
while (Guest_list.length > 2) {
    var remove_Guest = Guest_list;
    console.log("Dear Mr. ".concat(remove_Guest, " You are still not invited for dinner"));
}
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr.  " + Guest_list[i] + "n\n You are still invited. n\n Thankyou n\n ");
}
;
// I remove all guest
Guest_list.splice(0, 2);
console.log(Guest_list);
