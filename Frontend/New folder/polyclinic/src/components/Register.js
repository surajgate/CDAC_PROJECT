import React from 'react'

export default function 
() {
  return (

    <div className='container-fluid'>
       <div className='container'>
       
        <form>  
            
            <center>  <h1> Patient Registeration Form</h1> </center>  
            <hr/>  
            <label> Firstname </label>   
          <input type="text" name="firstname" placeholder= "Firstname" size="15" required />     
          <label> Lastname: </label>    
          <input type="text" name="lastname" placeholder="Lastname" size="15"required />   
          <div>  
          <label>   
          Blood Group :  
          </label>   
            
          <select>  
          <option value="O+ve">O+ve</option>  
          <option value="O-ve">O-ve</option>  
          <option value="A+ve">A+ve</option>  
          <option value="A-ve">A-ve</option>  
          <option value="B+ve">B+ve</option>
          <option value="B-ve">B-ve</option>    
          <option value="AB+ve">AB+ve</option>  
          <option value="AB-ve">AB-ve</option>  
          </select>  
          </div>  
          <div>  
          <label>   
          Gender :  
          </label><br/>  
          <input type="radio" value="Male" name="gender" checked /> Male   
          <input type="radio" value="Female" name="gender"/> Female   
          <input type="radio" value="Other" name="gender"/> Other  
            
          </div>  
          <label>   
          Phone :  
          </label>  
          <input type="text" name="country code" placeholder="Country Code"  value="+91" size="2"/>   
          <input type="text" name="phone" placeholder="phone no." size="10" / >   
          Current Address :  
          <textarea cols="80" rows="5" placeholder="Current Address" value="address" required>  
          </textarea>  
           <label for="email"><b>Email</b></label>  
           <input type="text" placeholder="Enter Email" name="email" required/>  
    
           <label> Username: </label>   
           <input type="text" name="username" placeholder="Username" size="15" required /> 
            
              <label for="psw"><b>Password</b></label>  
              <input type="password" placeholder="Enter Password" name="psw" required/>  
            
              <label for="psw-repeat"><b>Re-type Password</b></label>  
              <input type="password" placeholder="Retype Password" name="psw-repeat" required/>  
              <button type="submit" class="registerbtn">Register</button>    
          </form>
          </div>
    </div>
  )
}
