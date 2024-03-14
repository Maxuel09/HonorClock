import { AccessTokenResponse } from "../../Types/Types";
import { API_URL } from "../Auth/AuthConstants";

export default async function requestNewAccessToken(refreshToken: string) {
    const response = await fetch(`${API_URL}/refresh-token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
    });

    if (response.ok) {
        const json = (await response.json()) as AccessTokenResponse;

        if (json.error) {
            throw new Error(json.error);
        }
        return json.body.accessToken;
    } else {
        throw new Error("Unable to refresh access token.");
    }
}
