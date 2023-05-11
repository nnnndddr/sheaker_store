import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {shoe} = useContext(Context)
    const pageCount = Math.ceil(shoe.totalCount / shoe.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                    active={shoe.page === page}
                    onClick={() => shoe.setPage(page)}
                >{page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;