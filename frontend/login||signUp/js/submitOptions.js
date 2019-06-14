localStorage.clear();
function userLoginForm(){
    document.getElementById('service').innerHTML=`<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
            <div class="title text-center">
                <h1 class="mb-10">Login as User</h1>
            </div>
        </div>
    </div>	

    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 offset-lg-2">
          <label for="email">Email</label>
            <input  required="true" type="email" id="userEmail" name="email" />
            <label for="userPassword">Password:</label>
            <input required="true"
            type="password" 
            id="userPassword" 
            name="password" 
            />

        <button class="btn btn-info" onclick="userLogin()">Submit</button>
        </div>
                                                        

    </div>
</div>	`;
}

function ngoLoginForm(){
    document.getElementById('service').innerHTML=`<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
            <div class="title text-center">
                <h1 class="mb-10">Login as NGO</h1>
            </div>
        </div>
    </div>	

    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 offset-lg-2">
          <label for="email">Email</label>
            <input required="true" type="email" id="ngoEmail" name="email" />
            <label for="password">Password:</label>
            <input required="true"
            type="password" 
            id="ngoPassword" 
            name="password" 
            />

        <button class="btn btn-info" onclick="ngoLogin()">Submit</button>
        </div>
                                                        

    </div>
</div>	`;
}

function restaurantLoginForm(){
    document.getElementById('service').innerHTML=`<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
            <div class="title text-center">
                <h1 class="mb-10">Login as Restaurant</h1>
            </div>
        </div>
    </div>	

    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 offset-lg-2">
          <label for="email">Email</label>
            <input required="true" type="email" id="restEmail" name="email" />
            <label for="password">Password:</label>
            <input required="true"
            type="password" 
            id="restPassword" 
            name="password" 
            />

        <button class="btn btn-info" onclick="restLogin()">Submit</button>
        </div>
                                                        

    </div>
</div>	`;
}

function staffLoginForm(){
    document.getElementById('service').innerHTML=`<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
            <div class="title text-center">
                <h1 class="mb-10">Login as STAFF</h1>
            </div>
        </div>
    </div>	

    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 offset-lg-2">
          <label for="email">Email</label>
            <input required="true" type="email" id="staffEmail" name="email" />
            <label for="staffPassword">Password:</label>
            <input required="true"
            type="password" 
            id="staffPassword" 
            name="password" 
            />

        <button class="btn btn-info" onclick="staffLogin()">Submit</button>
        </div>
                                                        

    </div>
</div>	`;
}






function userSignUpForm(){
    document.getElementById('service').innerHTML=`<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
            <div class="title text-center">
                <h1 class="mb-10">Sign Up as User</h1>
            </div>
        </div>
    </div>	

    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 offset-lg-2">
            <label for="userSignFirstname">Firstname</label>
            <input required="true" 
            type="text" 
            id="userSignFirstname" 
            name="firstname" 
            />

            <label for="userLastname">Lastname</label>
            <input required="true" type="text" id="userSignLastname" name="lastname" />

            <label for="userUsername">Username</label>
            <input required="true" type="text" id="userSignUsername" name="userUsername" />

            <label for="Date of Birth">Date of Birth</label>
            <input required="true" type="text" id="userSignDateofBirth" name="Date of Birth" />

            <label for="email">Email</label>
            <input required="true" type="email" id="userSignEmail" name="email" />


            <label for="userPassword">Password:</label>
            <input required="true"
            type="password" 
            id="userSignPassword" 
            name="password" 
            />

        <button class="btn btn-info" onclick="userSignUp()">Submit</button>
        </div>
                                                        

    </div>
</div>	`;
}

function ngoSignUpForm(){
    document.getElementById('service').innerHTML=`<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
            <div class="title text-center">
                <h1 class="mb-10">Sign Up as NGO</h1>
            </div>
        </div>
    </div>	

    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 offset-lg-2">
        <label for="firstname">NGO Name</label>
        <input required="true" 
        type="text" 
        id="ngoSignName" 
        name="ngoName" 
        />

        <label for="lastname">NGO Code</label>
        <input required="true" type="text" id="ngoSignCode" name="ngoCode" />

        <label for="username">Established Date</label>
        <input required="true" type="text" id="dateOfEstd" name="ngoDateOfEstd" placeholder="DD/MM/YY"/>

        

        <label for="email">Email</label>
        <input required="true" type="email" id="ngoSignEmail" name="email" />


        <label for="password">Password:</label>
        <input required="true"
        type="password" 
        id="ngoSignPassword" 
        name="password" 
        />
      <button class="btn btn-info" onclick="ngoSignUp()">Submit</button>
      </div>
                                                        

    </div>
</div>	`;
}

function restaurantSignUpForm(){
    document.getElementById('service').innerHTML=`<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="menu-content pb-70 col-lg-8">
            <div class="title text-center">
                <h1 class="mb-10">Sign Up as Restaurant</h1>
            </div>
        </div>
    </div>	

    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 offset-lg-2">
        <label for="restName">Name of the Restaurant</label>
        <input required="true" 
        type="text" 
        id="restSignName" 
        name="restName" 
        />

        <label for="email">Email</label>
        <input required="true" type="email" id="restSignEmail" name="email" />


        <label for="password">Password:</label>
        <input required="true"
        type="password" 
        id="restSignPassword" 
        name="password" 
        />

        <label for="lastname">Number of Persons that can be fed.</label>
        <input required="true" 
        type="text" 
        id="foodAvailable" 
        name="foodAvailable" 
        />

      <button class="btn btn-info" onclick="restSignUp()">Submit</button>
      </div>
                                                        

    </div>
</div>`;
}

// Login||SignUp Form End

// SUBMIT FROM ALL FORMS


function userLogin(){
    let userEmail=document.getElementById('userEmail').value;
    let userPassword=document.getElementById('userPassword').value;

    axios.post("http://localhost:3000/user/login",{
        email:userEmail,
        password:userPassword
    }).then(res=>{
        if(res.data.message==="Authentication successful")
            {
                localStorage.setItem('email',userEmail);
                localStorage.setItem('userType',"user")
                window.open('../feed.html',"_self");
            }
        else{
            alert(res.data.message);
        }
            
    }).catch(err=>{
        alert(err);
    })

}

function ngoLogin(){
    let ngoEmail=document.getElementById('ngoEmail').value;
    let ngoPassword=document.getElementById('ngoPassword').value;


    axios.post("http://localhost:3000/ngo/login",{
        email:ngoEmail,
        password:ngoPassword
    }).then(res=>{
        if(res.data.message==="Authentication successful")
            {
                localStorage.setItem('email',ngoEmail);
                localStorage.setItem('userType',"ngo");
                window.open('../feed.html',"_self");
            }
        else{
            alert(res.data.message);
        }
    }).catch(err=>{
        alert(err);
    })


}

function restLogin(){
    let restEmail=document.getElementById('restEmail').value;
    let restPassword=document.getElementById('restPassword').value;

    axios.post("",{
        email:restEmail,
        password:restPassword
    }).then(res=>{

    }).catch(err=>{
        alert(err);
    })
}

function staffLogin(){

    let staffEmail=document.getElementById('staffEmail').value;
    let staffPassword=document.getElementById('staffPassword').value;

    axios.post("http://localhost:3000/staff/login",{
        email:staffEmail,
        password:staffPassword
    }).then(res=>{
        if(res.data.message==="Authentication successful")
            {
                localStorage.setItem('email',staffEmail);
                localStorage.setItem('userType',"staff")
                window.open('../feed.html',"_self");
            }
        else{
            alert(res.data.message);
        }
    }).catch(err=>{
        alert(err);
    })

}

function userSignUp(){
    console.log("aftescxsr")
    let userFirstname=document.getElementById('userSignFirstname').value;
    let userLastname=document.getElementById('userSignLastname').value;
    let userUsername=document.getElementById('userSignUsername').value;
    let userDateofBirth=document.getElementById('userSignDateofBirth').value;
    let userEmail=document.getElementById('userSignEmail').value;
    let userPassword=document.getElementById('userSignPassword').value;


    axios.post("http://localhost:3000/user/",{
        firstname:userFirstname,
        lastname:userLastname,
        username:userUsername,
        dateofBirth:userDateofBirth,
        email:userEmail,
        password:userPassword
    }).then(res=>{
        if(res.data.message==="Account Created")
        {
            console.log("aaya hu yaha")
            localStorage.setItem('email',userEmail);
            localStorage.setItem('userType',"user")
            window.open('../feed.html',"_self");
        
        }
        else{
           console.log(res);
            alert(res.data.message);
        }
        
    }).catch(err=>{
        console.log(err)
    })
    
    

}

function ngoSignUp(){
    console.log
    let ngoName=document.getElementById('ngoSignName').value;
    let ngoCode=document.getElementById('ngoSignCode').value;
    let dateOfEstd=document.getElementById('dateOfEstd').value;
    let email=document.getElementById('ngoSignEmail').value;
    let password=document.getElementById('ngoSignPassword').value;


    axios.post("http://localhost:3000/ngo",{
        ngoName:ngoName,
        ngoCode:ngoCode,
        dateOfEstd:dateOfEstd,
        email:email,
        password:password
    }).then(res=>{
        if(res.data.message==="Account Created")
        {
            localStorage.setItem('email',email);
            localStorage.setItem('userType',"ngo");
            window.open('../feed.html',"_self");
        }
        else{
            alert(res.data.message);
        }

    }).catch(err=>{
        alert(err);
    })

}

function restSignUp(){
    
    let restSignName=document.getElementById('restSignName').value;
    let restSignEmail=document.getElementById('restSignEmail').value;
    let restSignPassword=document.getElementById('restSignPassword').value;
    let foodAvailable=document.getElementById('foodAvailable').value;


    axios.post("",{
        restName:restSignName,
        email:restSignEmail,
        password:restSignPassword,
        foodAvailable
    })
}