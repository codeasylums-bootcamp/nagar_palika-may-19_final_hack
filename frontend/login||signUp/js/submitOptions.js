
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
            <input type="email" id="email" name="email" />
            <label for="password">Password:</label>
            <input
            type="password" 
            id="password" 
            name="password" 
            />

        <button class="btn btn-info">Submit</button>
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
            <input type="email" id="email" name="email" />
            <label for="password">Password:</label>
            <input
            type="password" 
            id="password" 
            name="password" 
            />

        <button class="btn btn-info">Submit</button>
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
            <input type="email" id="email" name="email" />
            <label for="password">Password:</label>
            <input
            type="password" 
            id="password" 
            name="password" 
            />

        <button class="btn btn-info">Submit</button>
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
            <input type="email" id="email" name="email" />
            <label for="password">Password:</label>
            <input
            type="password" 
            id="password" 
            name="password" 
            />

        <button class="btn btn-info">Submit</button>
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
            <label for="firstname">Firstname</label>
            <input 
            type="text" 
            id="firstname" 
            name="firstname" 
            />

            <label for="lastname">Lastname</label>
            <input type="text" id="lastname" name="lastname" />

            <label for="username">Username</label>
            <input type="text" id="username" name="username" />

            <label for="name">Date of Birth</label>
            <input type="text" id="lastname" name="lastname" />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" />


            <label for="password">Password:</label>
            <input
            type="password" 
            id="password" 
            name="password" 
            />

        <button class="btn btn-info">Submit</button>
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
        <label for="firstname">NGOname</label>
        <input 
        type="text" 
        id="ngoName" 
        name="ngoName" 
        />

        <label for="lastname">NGOcode</label>
        <input type="text" id="ngoCode" name="ngoCode" />

        <label for="username">Established Date</label>
        <input type="text" id="dateOfEstd" name="dateOfEstd" placeholder="DD/MM/YY"/>

        

        <label for="email">Email</label>
        <input type="email" id="email" name="email" />


        <label for="password">Password:</label>
        <input
        type="password" 
        id="password" 
        name="password" 
        />
      <button class="btn btn-info">Submit</button>
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
        <input 
        type="text" 
        id="restName" 
        name="restName" 
        />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" />


        <label for="password">Password:</label>
        <input
        type="password" 
        id="password" 
        name="password" 
        />

        <label for="lastname">Number of Persons that can be fed.</label>
        <input 
        type="text" 
        id="foodAvailable" 
        name="foodAvailable" 
        />

      <button class="btn btn-info">Submit</button>
      </div>
                                                        

    </div>
</div>`;
}