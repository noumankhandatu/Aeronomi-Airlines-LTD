import React from 'react'
// Pagination Area
const Pagination = () => {
    return (
        <>
            <ul className="pagination">
                <li className="page-item">
              <span className="page-link">
                  <span>«</span>
              </span>
                </li>
                <li className="page-item active">
                    <span className="page-link">1</span>
                </li>
                <li className="page-item">
                    <span className="page-link">2</span>
                </li>
                <li className="page-item">
                    <span className="page-link">3</span>
                </li>
                <li className="page-item">
              <span className="page-link">
                  <span>»</span>
              </span>
                </li>
            </ul>
        </>
    )
}

export default Pagination
