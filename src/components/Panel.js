import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Navs from './navigators/Navs'
import Contents from './contents/Contents'
import Btns from './btns/Btns'
import Note from './Note'
import Page from './Page'
import axios from 'axios'
import Home from './contents/Home'
import { Route, Routes } from 'react-router-dom'
import Order from './contents/Order'

export default function Panel() {
    const [category, setCategory] = useState(0);
    const [page, setPage] = useState(0);
    const [pagination, setPagination] = useState({
        "content": null,
        "totalPages": 0
    });

    // switch to page 0 when category change
    const myCategory = (p) => {
        setPage(0);
        setCategory(p);
    }

    // get new content when category/page change
    useEffect(() => {
        let url = `http://localhost:8080/product/show/category/${category}/${page}`;
        axios.get(url)
            .then(response => {
                setPagination({
                    "content": response.data.content,
                    "totalPages": response.data.totalPages
                });
            });
    }, [category, page]);

    return (
        <div className='panel'>
            <Logo />
            <Note />
            <Btns />
            <Navs setCategory={myCategory} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={
                    <>
                        <Contents content={pagination.content} />
                        <Page page={page} setPage={setPage} totalPages={pagination.totalPages} />
                    </>
                } />
                <Route path='/order' element={<Order />} />
            </Routes>
        </div>
    )
}
