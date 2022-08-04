import React from 'react'
// SearchForm Area
const SearchForm = () => {
    const handleSearchClose = () => {
        document.querySelector('.search-overlay').classList.remove('search-overlay-active')
    }
    return (
        <>

            <div className="search-overlay">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>

                        <div className="search-overlay-close" onClick={handleSearchClose}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..."/>
                                <button type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchForm
