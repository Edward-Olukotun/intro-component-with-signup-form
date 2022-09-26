import React from "react";
import "./Content.css";

function Content() {
    return (
        <div className="Content">
            <div className="top">
                <h2> Learn to code by watching others</h2>
                <p>
                    See how experienced developers solve problems in real-time. Watching
                    scripted tutorials is great, but understanding how developers think is
                    invaluable.
                </p>
            </div>
            <div className="ad">
                <span>
                    <span className="bold">Try it free 7 days</span>  then <br /> $20/mo. thereafter
                </span>
            </div>
        </div>
    );
}

export default Content;
