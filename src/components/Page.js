import React from 'react'

export default function Page(props) {
    const { page, setPage, totalPages } = props;

    const clickHandlerR = () => {
        if (page != totalPages - 1) {
            setPage(page + 1);
        }
    }
    const clickHandlerL = () => {
        if (page != 0) {
            setPage(page - 1);
        }
    }
    return (
        <div>
            {page > 0 && (<div className="left-btn page-btn" onClick={clickHandlerL}>
                <img src='./images/btn.png' alt='r-btn'></img>
            </div>)}
            {page < totalPages - 1 && (<div className="right-btn page-btn" onClick={clickHandlerR}>
                <img src='./images/btn.png' alt='r-btn'></img>
            </div>)}
        </div>
    )
}
