
console.log("yha aaya kya?")
axios.get('http://localhost:3000/issue')
.then(res=>{

    for(let i=0;i<res.data.length;i++)
    {
        let issueTitle=res.data[i].issueId;
        let issueDesc=res.data[i].issueDesc;
        let issueStatus=res.data[i].issueStatus;
        let issueImageUrl=res.data[i].issueImageUrl;

        console.log('issue location is this')
        console.log(res.data[i].issueLocationLat)

    //var issue= document.getElementById('addCard').value;



    document.getElementById('addCard').innerHTML+=`

            <br>
            <center>
            <div class="card" style="width:100%;box-shadow: 0.2em .2em .2em #888888;">

            <div class="big_red">


              <img class="card-img-top" src="../backend/${issueImageUrl}" alt="Card image cap">
              <div class="smalls">
              <p>Hi! I stick to the bottom right of my red parent. Drag big_red's lower right hand corner and resize. I won't take candy from you strangers.
              </div>
            </div>
            <br>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-3">
                  like
                </div>
                <div class="offset-lg-1 col-lg-4">
                <a href="">contribute<a>
                </div>
            </div>
            </div>

              <div class="card-body">
                <h5 class="card-title">${issueTitle}</h5>
                <p class="card-text" >${issueDesc}</p>
              </div>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a> <span>Status: ${issueStatus}</span>
              </div>
            </div>
            </center>
            `


    }
})


let userType= localStorage.getItem('userType')
let userEmail = localStorage.getItem('email');

console.log(userType)


if(userType==="user"){
    axios.get(`http://localhost:3000/user/${userEmail}`)
    .then(res =>{



            let userName = res.data.username;
            let firstName= res.data.firstname;
            let lastName= res.data.lastname;
            let dateOfBirth= res.data.dateofbirth;
            let issueDone= res.data.issuDone;
            let issueReported= res.data.issueReported;
            let rating= res.data.rating;


    document.getElementById('profile').innerHTML+=`
    <div class="name">${firstName} ${lastName}</div>
    <div class="username">${userName}</div>
    <div class="about-me"></div>
    <div class="stats">
      <div class="item followers">
        <span class="num">${issueDone}</span>
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


axios.get('http://localhost:3000/user')
.then(res=>{
  console.log(res)
  for(let i=0;i<res.data.length;i++)
  {
    document.getElementById('topContri').innerHTML+=`<li><a href="">${res.data[i].firstname} ${res.data[i].lastname}</a></li>`
  }
})