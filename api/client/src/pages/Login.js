import { useContext, useRef } from 'react';
import {axiosInstance} from '../config'
import{ Link} from 'react-router-dom';
import { Context } from '../context/Context';
export default function   Login (){
   const userRef = useRef();
        const passwordRef = useRef();
        const {dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
      try{  
        const res = await axiosInstance.post("/auth/login", {
            username:userRef.current.value, 
            password:passwordRef.current.value,
        });
          
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        }catch(err){ 
            dispatch({type:"LOGIN_FAILURE"});
        }
        
    };
//   console.log(user);
    return( 
    <div className="login"> 
    <span className="loginTitle"> Login</span>
             <form className='loginForm' onSubmit={handleSubmit}>
         
                <label >  Username</label>
            <input 
            className="loginInput" 
            type="text" 
            placeholder='username' 
            ref ={userRef}
            />
                <label >  Password</label>
            <input 
            className="loginInput" 
            type="password" 
            placeholder='password'
            ref ={passwordRef} 
              />
            <button className='loginButton' type="submit" disabled={isFetching}>Login</button>
           
            

            </form> 
            

<button className="liRegisterButton">
    <Link to='/register' className="lnk" > Register</Link> 
</button>

    </div>
    )
}
