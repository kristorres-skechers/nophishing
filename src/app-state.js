import norn from "@axel669/norn/esm";

const {store, actions} = norn(
    {
        screen: {
            initial: "HelloWorld",
            $update: (screen, {newValue}) => newValue
        }
    }
);

export {
    store,
    actions
};
