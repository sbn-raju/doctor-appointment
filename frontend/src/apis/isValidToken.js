const isValidToken = (error)=>{
    console.log(error)
    if(!(error.response.data.success) || error.status == 401 || error.status == 403 ){
        return true;
    }
    else{
        return false;
    }
}

export default isValidToken