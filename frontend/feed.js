
console.log("yha aaya kya?")
axios.get('http://localhost:3000/issue')
.then(res=>{

    for(let i=0;i<res.data.length;i++)
    {   
        let issueTitle=res.data[i].issueId;
        let issueDesc=res.data[i].issueDesc;
        let issueStatus=res.data[i].issueStatus;
        let issueImageUrl=res.data[i].issueImageUrl;


        

    //var issue= document.getElementById('addCard').value;



    document.getElementById('addCard').innerHTML+=`

            <br>
            <div class="card" style="width:100%;box-shadow: 5px 10px 8px #888888;">
              <img class="card-img-top" src="../backend/${issueImageUrl}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${issueTitle}</h5>
                <p class="card-text" >${issueDesc}</p>
              </div>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a> <span>Status: ${issueStatus}</span>
              </div>
            </div>`

    }
})


let userType= localStorage.getItem('userType')
let userEmail = localStorage.getItem('email');


if(userType==="user"){
    axios.get(`http://localhost:3000/user/${userEmail}`)
    .then(res =>{


        
            let userName = res.data.username;
            let firstName= res.data.firstname;
            let lastName= res.data.lastname;
            let dateOfBirth= res.data.dateofbirth;
            let issuDone= res.data.issuDone;
            let issuReported= res.data.issueReported;
            let rating= res.data.rating;
            
    
    document.getElementById('profile').innerHTML+=`
    <div class="name">${firstName} ${lastName}</div>
    <div class="username">${userName}</div>
    <div class="about-me"></div>
    <div class="stats">
      <div class="item followers">
        <span class="num">${issuDone}</span>
        <div class="text">Issue Solved</div>
      </div>
      <div class="item stars">
        <span class="num">${rating}</span>
        <div class="text">Rating </div>
      </div>
      <div class="item following">
        <span class="num">${issueReported}</span>
        <div class="text">Issues Reported</div>
      </div>
   
    </div>`
})
}
else if(userType==="ngo"){
    axios.get(`http://localhost:3000/ngo/${userEmail}`)
    .then(res=>{
        let ngoName = res.data.ngoName;
        let ngoCode = res.data.ngoCode;
        let dateOfEstd = res.data.dateOfEstd;
        let issueDone= res.data.issueDone;
        let rating= res.data.rating;

        document.getElementById('profile').innerHTML+=`
            <div class="name">${ngoName}</div>
            <div class="username">${ngoCode}</div>
            <div class="about-me"></div>
            <div class="stats">
            <div class="item followers">
                <span class="num">${issueDone}</span>
                <div class="text">Issue Solved</div>
            </div>
            <div class="item followers">
                <span class="num">${rating}</span>
                <div class="text">Rating </div>
            </div>
            </div>`

    })
}


