import axios from "axios";

import { LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
    CLEAR_ERRORS,
    ALL_ORLIST_REQUEST,
    ALL_ORLIST_SUCCESS,
    ALL_ORLIST_FAIL,

    UPDATE_STATUS_REQUEST,
    UPDATE_STATUS_SUCCESS,
    UPDATE_STATUS_FAIL,
    UPDATE_STATUS_RESET,
    OR_DETAILS_REQUEST,
    OR_DETAILS_SUCCESS,
    OR_DETAILS_FAIL,
    ALL_TOKEN_REQUEST,
    ALL_TOKEN_SUCCESS,
    ALL_TOKEN_FAIL,

    TOKEN_DETAILS_REQUEST,
    TOKEN_DETAILS_SUCCESS,
    TOKEN_DETAILS_FAIL,

    UPDATE_TOKEN_REQUEST,
    UPDATE_TOKEN_SUCCESS, 
    UPDATE_TOKEN_FAIL,
    UPDATE_TOKEN_RESET,

    PLICL_TOKEN_REQUEST,
    PLICL_TOKEN_SUCCESS,
    PLICL_TOKEN_FAIL,


  } from '../constants/userConstants';

//login 

export const login = (email, password) => async(dispatch)=>{
try {
    dispatch({type:LOGIN_REQUEST});
    const config = {headers: {"Content-Type": "application/json"}};

    const {data} =await axios.post(
        `/app/vi/login`,
        {email, password},
        config
    )
dispatch({ type:LOGIN_SUCCESS, payload: data.user });
    
} catch (error) {
    dispatch({type:LOGIN_FAIL, payload: error.response.data.message});
}

};

//register

export const register = (userData) => async(dispatch)=>{
    try {
        dispatch({type:REGISTER_USER_REQUEST});

        const config = {headers: {"Content-Type": "multipart/form-data"}};
    
        const {data} =await axios.post(`/app/vi/register`,userData, config);
      
    dispatch({ type:REGISTER_USER_SUCCESS, payload: data.user });
        
    } catch (error) {
        dispatch({type:REGISTER_USER_FAIL, payload: error.response.data.message});
    }
    
    };
    

    //Load Users

    export const loadUser = () => async(dispatch)=>{
        try {
            dispatch({type:LOAD_USER_REQUEST});
                   
            const {data} =await axios.get(
                `/app/vi/me`
            )
        dispatch({ type:LOAD_USER_SUCCESS, payload: data.user });
            
        } catch (error) {
            dispatch({type:LOAD_USER_FAIL, payload: error.response.data.message});
        }
        
        };

        //logout user
 
        export const logout  = () => async(dispatch)=>{
            try {
                                 
          await axios.get(`/app/vi/logout`
                )
            dispatch({ type:LOGOUT_SUCCESS});
                
            } catch (error) {
                dispatch({type:LOGOUT_FAIL, payload: error.response.data.message});
            }
            
            }; 

//Update Profile

            export const updateProfile = (userData) => async(dispatch)=>{
                try {
                    dispatch({type:UPDATE_PROFILE_REQUEST});
            
                    const config = {headers: {"Content-Type": "multipart/form-data"}};
                
                    const {data} =await axios.put(`/app/vi/me/update`,userData, config);
                  
                dispatch({ type:UPDATE_PROFILE_SUCCESS, payload: data.success });
                    
                } catch (error) {
                    dispatch({type:UPDATE_PROFILE_FAIL, payload: error.response.data.message});
                }
                
                };


    //Update Password

   export const updatePassword = (passwords) => async(dispatch)=>{
    try {
     dispatch({type:UPDATE_PASSWORD_REQUEST});
            
    const config = {headers: {"Content-Type": "application/json"}};
                
    const {data} =await axios.put(`/app/vi/password/update`,passwords, config);
                  
    dispatch({ type:UPDATE_PASSWORD_SUCCESS, payload: data.success });
                    
                } catch (error) {
                    dispatch({type:UPDATE_PASSWORD_FAIL,
                    payload: error.response.data.message});
                }
                
                };



// forgotPassword

export const forgotPassword = (email) => async(dispatch)=>{
    try {
        dispatch({type:FORGOT_PASSWORD_REQUEST});

        const config = {headers: {"Content-Type": "application/json"}};
    
        const {data} =await axios.post(`/app/vi/password/forgot`,email,config)
    dispatch({ type:FORGOT_PASSWORD_SUCCESS, payload: data.message });
        
    } catch (error) {
        dispatch({type:FORGOT_PASSWORD_FAIL, payload: error.response.data.message});
    }
    
    };


    // reset Password

export const resetPassword = (token, passwords) => async(dispatch)=>{
    try {
        dispatch({type:RESET_PASSWORD_REQUEST});

        const config = {headers: {"Content-Type": "application/json"}};
    
        const {data} =await axios.put(`/app/vi/password/reset/${token}`,
        passwords,
        config)
    dispatch({ type:RESET_PASSWORD_SUCCESS, payload: data.success });
        
    } catch (error) {
        dispatch({type:RESET_PASSWORD_FAIL, payload: error.response.data.message});
    }
    
    };

   
// get All Users

export const getAllUsers = () => async (dispatch) => {
  try {

      dispatch({type:ALL_USERS_REQUEST});

    const {data} =await axios.get(`/app/vi/admin/users`);

  dispatch({ type: ALL_USERS_SUCCESS, payload:data.users });

  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

  // get  User Details

  export const getUserDetails = (id) => async (dispatch) => {
    try {

      dispatch({ type: USER_DETAILS_REQUEST });

      const { data } = await axios.get(`/app/vi/admin/user/${id}`);
  
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });

    } catch (error) {
      dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
    }
  };
  
  // Update User
  
  export const updateUser = (id, userData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(
        `/app/vi/admin/user/${id}`,
        userData,
        config
      );
  
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete User
  export const deleteUser = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
  
      const { data } = await axios.delete(`/app/vi/admin/user/${id}`);
  
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//clearing Errors

export const clearErrors = () => async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS});
}



// get All Orlist

export const getAllOrList = () => async (dispatch) => {
  try {

      dispatch({type:ALL_ORLIST_REQUEST});

    const {data} =await axios.get(`/idra-ump.com/operator/orlist`);

  dispatch({ type: ALL_ORLIST_SUCCESS, payload:data.users });

  } catch (error) {
    dispatch({
      type: ALL_ORLIST_FAIL,
      payload: error.response.data.message,
    });
  }
};



    // get  Or Details

    export const getOrDetails = (id) => async (dispatch) => {
      try {
  
        dispatch({ type: OR_DETAILS_REQUEST });
  
        const { data } = await axios.get(`/idra-ump.com/operator/orlist/${id}`);
    
        dispatch({ type: OR_DETAILS_SUCCESS, payload: data.user });
  
      } catch (error) {
        dispatch({ type: OR_DETAILS_FAIL, payload: error.response.data.message });
      }
    };


    //or status update

    export const updateStatus = (id,userData) => async(dispatch)=>{
      try {
          dispatch({type:UPDATE_STATUS_REQUEST});
  
          const config = {headers: {"Content-Type": "multipart/form-data"}};
      
          const {data} =await axios.put(`/idra-ump.com/operator/statusupdate/${id}`,userData,config);
        
      dispatch({ type:UPDATE_STATUS_SUCCESS, payload: data });
          
      } catch (error) {
          dispatch({type:UPDATE_STATUS_FAIL, payload: error.response.data.message});
      }
      
      };

          // get  Token Details

    export const getAllTokens = () => async (dispatch) => {
      try {
  
        dispatch({ type: ALL_TOKEN_REQUEST });
  
        const { data } = await axios.get(`/idra-ump.com/officer/idratoken`);
    
        dispatch({ type: ALL_TOKEN_SUCCESS, payload: data.accessToken });
  
      } catch (error) {
        dispatch({ type: ALL_TOKEN_FAIL, payload: error.response.data.message });
      }
    };

    
        // get  Token Details

        export const getTokenDetails = (id) => async (dispatch) => {
          try {
      
            dispatch({ type: TOKEN_DETAILS_REQUEST });
      
            const { data } = await axios.get(`/idra-ump.com/officer/idratoken/${id}`);
        
            dispatch({ type: TOKEN_DETAILS_SUCCESS, payload: data.accessToken });
      
          } catch (error) {
            dispatch({ type: TOKEN_DETAILS_FAIL, payload: error.response.data.message });
          }
        };
    
        
    // Token update

    export const updateToken = (id,userData) => async(dispatch)=>{
      try {
          dispatch({type:UPDATE_TOKEN_REQUEST});
  
          const config = {headers: {"Content-Type": "multipart/form-data"}};
      
          const {data} =await axios.put(`/idra-ump.com/officer/idratoken/update/${id}`,userData,config);
        
      dispatch({ type:UPDATE_TOKEN_SUCCESS, payload: data });
          
      } catch (error) {
          dispatch({type:UPDATE_TOKEN_FAIL, payload: error.response.data.message});
      }
      
      };


      // PLICL TOKEN

export const getPliclToken = (id2) => async (dispatch) => {
  try {

      dispatch({type:PLICL_TOKEN_REQUEST});

    const {data} =await axios.get(`/idra-ump.com/operator/token/${id2}`);

  dispatch({ type: PLICL_TOKEN_SUCCESS, payload:data.token });

  } catch (error) {
    dispatch({
      type: PLICL_TOKEN_FAIL,
      payload: error.response.data.message,
    });
  }
};


