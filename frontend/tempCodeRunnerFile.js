function listSociety(){
    console.log("yaha hu main")
    axios.get('http://localhost:3000/issue')
    .then(res=>{
        document.getElementById("society").style.backgroundColor = "lightblue";
         document.getElementById("restro").style.backgroundColor = "blue"
        for(let i=0;i<res.data.length;i++)
        {   
            let issueTitle=res.data[i].issueId;
            let issueDesc=res.data[i].issueDesc;
            let issueStatus=res.data[i].issueStatus;
            let issueImageUrl=res.data[i].issueImageUrl;
    
    
            if(issueStatus=='0')
                {var status='unsolved';}
            else{
                var status='solved';
            }
            document.getElementById('list').innerHTML+=`
            <div class="container container1">
        <div class="todo-list" id="issues_list">
            <div class="item-card">
                <div class="note-title">
                    ${issueTitle}
                </div>
                <div class="note-desc">
                    ${issueDesc}
                </div>
                <div style="padding: 10px 5px 8px 10px;">
                  <button type="submit" class="btn btn-success" style="width:10%;">Accept</button>
                </div>
            </div>
            </div>
            </div>
             `
        }
    })
    }