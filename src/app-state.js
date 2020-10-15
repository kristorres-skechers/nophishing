import norn from "@axel669/norn/esm";

const {store, actions} = norn(
    {
        screenKey: {
            initial: "HelloWorld",
            $update: (screenKey, {newValue}) => newValue
        }
    }
);

export {
    store,
    actions
};
