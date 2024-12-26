declare var value: any;
declare function bindProperty(): {
    check: (valueToSet: {
        value: any;
        type: 'Input' | 'state';
    }) => void;
};
export { bindProperty as twoWayBinding };
