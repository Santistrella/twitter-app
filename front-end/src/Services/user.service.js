export const getUser = (id, onSuccess) => {
    if(id != null) {
        const token = localStorage.getItem('user');
        fetch(`http://localhost/api/user/${id}`, {
            method: "get",
            mode: "cors",
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + token,
            },
        }).then(res => {
            if (res.ok) {
                return res.json()
            } throw res
        }).then(resJson => {
            console.log("setUserData")
            onSuccess(resJson);
        });
    }
};
