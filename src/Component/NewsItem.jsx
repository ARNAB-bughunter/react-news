import React from 'react'

const NewsItem = (props) => {
    let { title, content, contentTime, imgURL, URL, author, source } = props;

    return (
        <div className='col-6'>
            <div className="card mb-6" style={{ maxWidth: "540px" }}>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                    {source}
                    <span className="visually-hidden">unread messages</span>
                </span>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={!imgURL ? "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg" : imgURL} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{content}</p>
                            <p className="card-text"><small className="text-muted">By, {author} on {new Date(contentTime).toGMTString()}</small></p>
                            <a rel="noreferrer" href={URL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>

                </div>

            </div>
            <br />

        </div>
    )
}

export default NewsItem