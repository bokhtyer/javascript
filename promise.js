const newMeeting = true;

const meeting = new Promise((resolve,reject)=>{
    if(!newMeeting){
        const meetingDetals = {
            name: "New Meeting",
            date: "25 Jan 2022",
            location: "Google Meet"
        }
        resolve(meetingDetals);
    }else{
        reject(new Error("Meeting already Scheduled"));
    }
})

meeting.then((res)=>{
    console.log(JSON.stringify(res))
}).catch((err)=>{
    console.log(err.message);
})