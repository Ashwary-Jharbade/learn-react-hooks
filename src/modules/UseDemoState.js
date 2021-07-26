import React from "react"

const useDemoState = (value) => {
    const update = (para) => {
        return [para, update]
    }

    return update(value)
}

export default useDemoState