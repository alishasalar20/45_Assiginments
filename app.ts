let users: string[] = ['admin', 'mike','jackson','fatima','eric']


for (let user of users){
    if (user === 'admin'){
        console.log("hello admin,would you like to see a status report")
    }
    else{
        console.log('hello ${users},thankyou forlogging in again')
    }
}