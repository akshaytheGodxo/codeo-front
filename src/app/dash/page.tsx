import { cookies } from "next/headers";

export default async function Dashboard() {
    const cookieStores = await cookies();
    const token = cookieStores.get("auth_token");

    return (
        <div>
            {
                token? (<div>Yep i am authenticated!</div>) : (<div>Nope i am not</div>)
            }
        </div>
    )
}