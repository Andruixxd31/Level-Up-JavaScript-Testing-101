//The simplest arrow functions that you'll see
export const hello = () => "Hello"; //The function is export to imported to app.test.js

export const add = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") return null;
    return x + y;
};

export const removeSNames = (names) => {
    return names.filter((name) => name.toLowerCase().charAt(0) !== "s");
};
