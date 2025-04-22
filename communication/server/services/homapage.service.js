const data = [{
    userName: "Udit Sethi",
    Age: "25"
}]

export const homePageUserData = () => {
    return data;  
}

export const updateUserData = (user) => {
    data.push(user);
    homePageUserData();
}