import React from "react";

const Content = React.forwardRef((props, ref) => {
    return (
        <h1 ref={ref}>CONTENT</h1>
    );
});

export default Content;