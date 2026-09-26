"use server";

type LoginState = {
    success: boolean,
    statusCode: number,
    message: string,
    data: {
        accessToken: string,
        refreshToken: string
    }
}

export const loginAction = async (prevState: LoginState, formData: FormData) => {

    const email = formData.get("email");
    const password = formData.get("password");

    const payload = {
        email,
        password
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    const result = await res.json();

    console.log(result);

    return result;
}

export const registerAction = async (formData: FormData) => {
    const name = formData.get("name")
    const email = formData.get("email");
    const password = formData.get("password");
    const profilePhoto = formData.get("profilePhoto")

    const payload = {
        name,
        email,
        password,
        profilePhoto
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    const result = await res.json();

    console.log(result);
}