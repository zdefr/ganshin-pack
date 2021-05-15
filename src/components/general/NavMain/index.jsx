import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'
import icon from './iconfont.module.css'
import classNames from 'classnames'

export default function NavMain() {
    const [flash, setFlash] = useState(true);

    return (
        <div className={style.outer}>
            <div className={style.pos}>
                <div className={style.Logo}>
                    <Link className={style.logoText} to="/index" onClick={()=>{setFlash(classNames(style.choosed, style.fir))}}><i>NItendoPack</i></Link>
                </div>
                <div className={style.navList} >
                    <Link className={style.navNode} to='/index' onClick={()=>{setFlash(classNames(style.choosed, style.fir))}}>
                        <span className={classNames(icon.iconfont, icon.iconMain)}></span>
                        <span className={style.navText}>首页</span>
                    </Link>
                    <Link className={style.navNode} to='/tops' onClick={()=>{setFlash(classNames(style.choosed, style.sec))}}>
                        <span className={classNames(icon.iconfont, icon.iconTops)}></span>
                        <span className={style.navText}>排行榜</span>
                    </Link>
                    <Link className={style.navNode} to='/new' onClick={()=>{setFlash(classNames(style.choosed, style.thir))}}>
                        <span className={classNames(icon.iconfont, icon.iconNew)}></span>
                        <span className={style.navText}>新游</span>
                    </Link>
                    <Link className={style.navNode} to='/community' onClick={()=>{setFlash(classNames(style.choosed, style.four))}}>
                        <span className={classNames(icon.iconfont, icon.iconCommunity)}></span>
                        <span className={style.navText}>动态</span>
                    </Link>
                    <div className={flash}>
                    </div>
                </div>
            </div>
        </div>

    )
}
