import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject('apple')
@observer
class AppleItem extends Component {
    render() {
        const { appleId, appleWeight } = this.props
        const { eatApple } = this.props.apple
        return (
            <div className="appleItem">
                <div className="apple">
                    <img src={require('../images/apple.png')} alt="" />
                </div>
                <div className="info">
                    <div className="name">红苹果 - {appleId}号</div>
                    <div className="weight">{appleWeight}克</div>
                </div>
                <div className="btn-div">
                    <button onClick={() => { eatApple(appleId) }}> 吃掉 </button>
                </div>
            </div>
        )
    }
}

export default AppleItem