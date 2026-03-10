export async function getClansFromApi(tag, TOKEN) {
    const url = `https://api.clashroyale.com/v1/clans/%23${tag}`;
    console.log("ушел запрос на апи")

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/json"
        }
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`CR API ERROR ${res.status}: ${text}`);
    };

    return res.json();
};