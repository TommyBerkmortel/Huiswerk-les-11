import React from "react";



function Button({buttontext, buttondisabled}) {
    return (

        <button
            type="button"
            disabled={buttondisabled}
            onClick={() => console.log({buttontext})}
        >
            {buttontext}
        </button>

    )
}

export default Button;






