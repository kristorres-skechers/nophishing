const sleep = (timeInSeconds) => new Promise(
    (resolve) => setTimeout(resolve, timeInSeconds * 1000)
);

export {
    sleep
};
