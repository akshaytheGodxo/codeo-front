"use client";
import { redirect } from "next/navigation";
const URL = process.env.CODEO_AUTH || "http://localhost:8080"
export default function SignUpForm() {

    const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const res = await fetch(`${URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify({email, password, name}),
            credentials: "include",
        })     
        const data = await res.json();
        console.log(data);
        redirect("/dash");
    }

    return (
        <div className="">
            <form onSubmit={handleFormSubmit} className="flex flex-col justify-center gap-y-5">
                <label>Enter username: </label>
                <input name="name" type="text" placeholder="Username" />
                <label>Enter email: </label>
                <input name="email" type="email" placeholder="Useremail"/>
                <label>Enter password: </label>
                <input name="password" type="password" placeholder="Password"/>

                <button className="w-12 h-12 bg-gray-700 text-white">Submit Details</button>
            </form>
        </div>
    )
}