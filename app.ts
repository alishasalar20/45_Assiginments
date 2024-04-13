let Guest_list: string[] = [ `Rohan`,`fatima`,`salar`];
for(let i=0; i<Guest_list.length; i++){
    console.log(`Dear Mr.` + Guest_list[i] + `,\n\nIt my pleasure to invite you in our dinner\n\n ThankYou `)
}






let absent_Guest : string = `Rohan`

let new_Guest : string = `NABEEL`

Guest_list[0] = new_Guest 

for(let i=0; i<Guest_list.length; i++){
    console.log(`Dear Mr.` + Guest_list[i] + `,\n\nIt my pleasure to invite you in our dinner\n\n ThankYou\n\n `)

}

console.log(`MR ${absent_Guest} is not coming in the dinner `)



