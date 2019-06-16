let c=[]
console.log("yha aaya kya?")
axios.get('http://localhost:3000/issue')
.then(res=>{

    for(let i=0;i<res.data.length;i++)
    {
      c.push(0);
        let issueTitle=res.data[i].issueId;
        let issueDesc=res.data[i].issueDesc;
        let issueStatus=res.data[i].issueStatus;
        let issueImageUrl=res.data[i].issueImageUrl;
        let issueVotes=res.data[i].issueVotes;

        console.log('issue location is this')
        console.log(res.data[i].issueLocationLat)

    //var issue= document.getElementById('addCard').value;



    document.getElementById('addCard').innerHTML+=`

            <br>
            <center>
            <div class="card" style="width:100%;box-shadow: 0.2em .2em .2em #888888;">

            <div class="big_red">


              <img class="card-img-top" src="../backend/${issueImageUrl}" alt="Card image cap">
              
            </div>
            <br>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-4">
                <button class="btn btn-light" onclick="updateVote(${i},'${issueTitle}')">🔥<span id="v${i}">${issueVotes}</span></button>
                </div>
                <div class=" col-lg-7">
                <button class="btn btn-warning" onclick="openChat('${issueTitle}')" >contribute</button>
                </div>
            </div>
            </div>

              <div class="card-body">
                <h5 class="card-title">${issueTitle}</h5>
                <p class="card-text" >${issueDesc}</p>
              </div>
              <div class="card-body">
                <span>Status: ${issueStatus}</span>
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
            let dateOfBirth= res.data.dateOfbirth;
            let issueDone= res.data.issueDone;
            let issueContributed= res.data.issueContributed;
            let issueReported=res.data.issueReported;
            let rating= res.data.rating;


    document.getElementById('profile').innerHTML+=`
    <div class="name">${firstName} ${lastName}</div>
    <div class="username">${userName}</div>
    <div class="about-me"></div>
    <div class="stats">
      <div class="item followers">
        <span class="num">${issueContributed.length}</span>
        <div class="text">Issue Solved</div>
      </div>
      <div class="item stars">
        <span class="num">${rating}</span>
        <div class="text">Rating </div>
      </div>
      <div class="item following">
        <span class="num">${issueReported.length}</span>
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
        let issueContributed= res.data.issueContributed;
        let rating= res.data.rating;

        document.getElementById('profile').innerHTML+=`
            <div class="name">${ngoName}</div>
            <div class="username">${ngoCode}</div>
            <div class="about-me"></div>
            <div class="stats">
            <div class="item followers">
                <span class="num">${issueContributed.length}</span>
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


function updateVote(x,issueTitl){
  console.log("dekho wo aa gya function ke andar")
  console.log(`v${x}`);
  let upVotes=document.getElementById(`v${x}`).innerHTML;
  let upVote=parseInt(upVotes)
  console.log(upVote);
  if(c[x]===0)
  {
    upVote=upVote+1;
    c[x]++;
  }
  else{
  upVote=upVote-1;
  c[x]--;
  }
  console.log(upVote);
  
  axios.put(`http://localhost:3000/issue/vote/${issueTitl}`,{
    issueVotes:upVote
  }).then(res=>{
    console.log(res)
    document.getElementById(`v${x}`).innerHTML=upVote;
  }).catch(err=>{
    alert(err)
  })

}

function openChat(title){
  let name = localStorage.getItem('userName');
  let nemail = localStorage.getItem('email');
  let userType=localStorage.getItem('userType');
  let type;
  if(userType==="user")
    type=userType;
  else{
    type=userType;
  }


  axios.put(`http://localhost:3000/issue/chat/${title}`,{
    email:nemail
  })
  .then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })
  console.log(type)
  axios.put(`http://localhost:3000/${type}/chat/${nemail}`,{
    title:title
  })
  .then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })
  window.open(`https://himanshu-node-socket-chat-app.herokuapp.com/chat.html?username=${name}&room=${title}`)
}