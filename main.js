/*You just heard that one of your guests can’t make the dinner, so you need to send out a new
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list.
*/
var myFriends = ["Zohaib", "Ayaz", "Junaid", "Rameez", "Faisal", "Kamran"];
console.log("due to some personal reasons Mr. ".concat(myFriends[1], " is will not come on my dinner"));
myFriends[1] = "Ali";
console.log("new list of my firends who are comming to my dinner");
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i, ". ").concat(myFriends[i]));
}
