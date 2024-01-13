import React from 'react';
import './App.css';
import {NavLink, Route, Routes, useParams} from "react-router-dom";

/*
//1. если один параметр
const Profile = () => {
    //если типизируем то всегда значение должно совподать с(:id)
    // <Route path={'/profile/:id'} element={<Profile/>}/>
    const params = useParams<'id'>()

    const some = params

    console.log(some)//{id: '1'}
    console.log(some.id)//1->это всегда строка


    return (
        <div>
            profile
        </div>
    )
}
*/
/*
//2. если два параметр
const Profile = () => {

    //если типизируем то всегда значение должно совподать с(:x/:y)
    // <Route path={'/profile/:x/:y'} element={<Profile/>}/>
    const params = useParams<'x'|'y'>()

    const some = params

    console.log(some)//{x: '1', y: '8'}
    console.log(some.x)//1->это всегда строка
    console.log(some.y)//8->это всегда строка


    return (
        <div>
            profile
        </div>
    )
}
*/
//3. после profile может быть что угодно (*)
const Profile = () => {

    //если типизируем то всегда значение должно совподать с(:x/:y)
    // <Route path={'/profile/:x/:y'} element={<Profile/>}/>
    const params = useParams<'*'>()

    const some = params
//при клике на
// <div><NavLink to={'/profile/1'}>profile/first param 1</NavLink></div>
    console.log(some)//{*: '1'}
    console.log(some["*"])//1->это всегда строка
        //если после profile несколько параметров то сохраняйте в переменную и пишите какуюто логику
        //<div><NavLink to={'/profile/1/8'}>profile/first param 1/second param 8</NavLink></div>
    const someParams = params
    const allParams=someParams["*"]
    console.log(allParams)
    const urlArr=allParams?.split('/')
    console.log(urlArr)
    return (
        <div>
            profile
            profile
            profile
            profile
            profile
        </div>
    )
}


function App() {

    return (
        <div className="App">
            <div><NavLink to={'/'}>main</NavLink></div>
            <div><NavLink to={'/login'}>login</NavLink></div>
            <div><NavLink to={'/profile'}>profile</NavLink></div>
            {/*1. если один параметр*/}
            {/*<div><NavLink to={'/profile/1'}>profile/first param 1</NavLink></div>*/}
            {/*2. если два параметр*/}
            {/*<div><NavLink to={'/profile/1/8'}>profile/first param 1/second param 8</NavLink></div>*/}
            {/*3. после profile может быть что угодно (*)*/}
            <div><NavLink to={'/profile/1'}>profile/first param 1</NavLink></div>
            <div><NavLink to={'/profile/1/8'}>profile/first param 1/second param 8</NavLink></div>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                {/*1. если один параметр*/}
                {/*<Route path={'/profile/:id'} element={<Profile/>}/>*/}
                {/*2. если два параметр*/}
                {/*<Route path={'/profile/:x/:y'} element={<Profile/>}/>*/}
                {/*3. после profile может быть что угодно (*)*/}
                <Route path={'/profile/*'} element={<Profile/>}/>
            </Routes>
        </div>
    )
}

export default App;


