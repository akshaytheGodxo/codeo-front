import { cookies } from "next/headers";
import { useUserStore } from "@/stores/userStore";
export default async function Dashboard() {
    const cookieStores = await cookies();
    const token = cookieStores.get("auth_token");
    const { isAuthenticated, user, clearUser } = useUserStore();


    return (
        <div>
            {
                isAuthenticated ? 
                (
                    <div>
                        <h4>UserName: {user?.name}</h4>
                        <h4>UserMail: {user?.email}</h4>
                        <h4>AuthStatus: {isAuthenticated}</h4>
                    </div>
                    
                ) : (
                    <div>
                        <a href="/signup">Register</a>
                        <a href="/login">Login</a>
                    </div>
                )
            }
        </div>
    )
}