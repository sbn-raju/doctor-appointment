  import{createSlice, createAsyncThunk, isRejectedWithValue, isRejected} from '@reduxjs/toolkit'
  import axios from 'axios'

  export const adminLogin = createAsyncThunk('/admin/login', async(loginData,{rejectWithValue})=>{
      try {
          const res = await axios.post("http://localhost:8080/api/v1/admin/login", loginData, {
              withCredentials: true
          }); 
          return res.data
        } catch (error) {
          const responseMessage = error.response?.data.message
          const errorMessage = Array.isArray(responseMessage)?responseMessage[0].msg:responseMessage 
          console.log(errorMessage);
          return rejectWithValue(errorMessage)
        }
          
  })


  const adminAuthSlice = createSlice({
      name: 'auth',
      initialState: { 
          message:null,
          token: null, 
          status: 'idle', 
          error: null 
      },
      reducers: {
         logOut:(state, action)=>{
            state.status = null
            state.token = null
         },
      },
      extraReducers: (builder) => {
        builder
          .addCase(adminLogin.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(adminLogin.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.token = action.payload.token;
            state.message = action.payload.message;
            state.error = null;
          })
          .addCase(adminLogin.rejected, (state, action) => {
            state.status = 'rejected';
            state.token = null;
            state.message = null;
            state.error = action.payload;
          });
      },
    });
    
export const {logOut} = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
