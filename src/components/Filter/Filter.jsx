import "./Filter.css"
const Filter = () => {
    return (
        <section className="filter-section">
        <div className="filter-container">
                <ul className="filter-btns">
                    <li className="filter-btn"><button>همه</button></li>
                    <li className="filter-btn"><button>مبل</button></li>
                    <li className="filter-btn"><button>صندلی</button></li>
                    <li className="filter-btn"><button>چراغ</button></li>
                    <li className="filter-btn"><button>میز</button></li>
                </ul>
            </div>
    </section>
    )
}

export default Filter
