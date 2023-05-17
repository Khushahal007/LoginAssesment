import React from 'react'

export default function Success({successMessage}) {
    console.log(successMessage);
    return (
        <div>
            <div className="alert alert-success" role="alert">
                {successMessage}
            </div>
        </div>

    )

}
