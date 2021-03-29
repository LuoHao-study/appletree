import React, { Component } from 'react';
import AppleItem from './AppleItem';
import { observer, inject } from 'mobx-react';

@inject('apple')
@observer
class Apple extends Component {
    render() {
        const { currentApples, currentEatedApples, currentApplesWeight, currentEatedApplesWeight, isPicking, pickApple } = this.props.apple
        return (
            <div className="appleBusket">
                <div className="title">苹果篮子</div>

                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">{currentApples.length}个苹果，{currentApplesWeight}克</div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">{currentEatedApples.length}个苹果，{currentEatedApplesWeight}克</div>
                    </div>
                </div>

                <div className="appleList">
                    {
                        currentApples.map(item => (
                            <AppleItem appleId={item.id} appleWeight={item.weight} />
                        ))
                    }
                </div>

                <div className="btn-div">
                    <button className={isPicking ? 'disabled' : ''} onClick={pickApple}>{isPicking ? '正在采摘...' : '摘苹果'}</button>
                </div>
            </div>
        )
    }
}

export default Apple