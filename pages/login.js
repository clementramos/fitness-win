import { useEffect } from "react";
import { supabase } from "../utils/supabase";

const Login = () => {
    useEffect(() => {
        supabase.auth.signInWithOAuth({
            provider: 'google',
        });
    }, []);

    return(
        <p>
            En cours de connexion...
        </p>
    )
};

export default Login;