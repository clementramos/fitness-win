import { useEffect } from "react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";

const Logout = () => {
    const router = useRouter();

    useEffect(() => {
        const logout = async () => {
            await supabase.auth.signOut();
            router.push("/");
        };
        logout();
    }, []);

    return (
        <p>
            En cours de déconnexion...
        </p>
    )
};

export default Logout;