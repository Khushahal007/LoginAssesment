import React, { useState, useEffect } from 'react'

export default function Error({errorMessage}) {
  
    return (
        <div>
            <div className="alert alert-danger" role="alert">
               {errorMessage}
            </div>
        </div>
    )
}
