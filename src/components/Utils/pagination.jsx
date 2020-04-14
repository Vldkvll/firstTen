import React, {useEffect, useState} from "react";

const Pagination = ({nextPage, totalListOfPages, currentPage, met, portionSize = 20}) => {

    let portionCount = Math.ceil(totalListOfPages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(1)
    }, [met])

    let pageLinks = [];
    for (let i = 1; i <= totalListOfPages; i++) {
        pageLinks = [...pageLinks, i]
    }

    let items = pageLinks.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
        .map((i) => {
            let active = currentPage === i ? 'active' : null
            return (
                <li className={`page-item ${active}`}
                    key={i}
                    onClick={() => nextPage(i, met)}
                >
                    <a className={`page-link`} href="#">{i}</a>
                </li>)
        })

    return (
        <div>
            <ul className="pagination">
                <li className={`page-item`}>
                    {portionNumber > 1 &&
                    <a onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }} className="page-link" href="#">&laquo;</a>
                    }
                </li>
                {items}
                <li className="page-item">
                    {portionCount > portionNumber &&
                    <a onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }} className="page-link" href="#">&raquo;</a>
                    }
                    </li>
            </ul>
        </div>
    )
};

export default Pagination;