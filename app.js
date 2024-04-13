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
