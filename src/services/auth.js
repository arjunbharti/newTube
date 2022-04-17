import axios from 'axios'

//login handler using email and password
export const loginHandler = async ({ e, email, password, saveUserInfo, setFormData, formInitialState, navigate }) => {
    e.preventDefault();
    try {
        const { data, status } = await axios.post('/api/auth/login', {
            email,
            password,
        });
        //error handling
        if(status === 200){
            saveUserInfo(data);
            setFormData(formInitialState);
            //redirect to videos listing page
            navigate('/videos');
        }
        if(status === 201){
            alert('wrong credentials');
        }
    } catch (error) {
        const { status } = error.response;
        if(status === 404){
            alert('user not found');
        }
    }
}