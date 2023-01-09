import React from "react";

const Content = React.forwardRef((props, ref) => {
    return (
        <div id="content" ref={ref}>
            <a href="#content" hidden={true} />
            {props.children}
        </div>
    );
});

export default Content;