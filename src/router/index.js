
import React, { Component } from 'react'
import {Route,   Switch} from 'react-router-dom'
import config from './config.js'
import store from '../store/store.js'
import {storageManager} from '../tool/cache.js'
import Header from '../page/common/Header.js'
import BroadSide from '../page/common/BroadSide.js'

export default class Index extends Component {
  constructor(){
    super()
    this.state={
      logined:storageManager.getStorage('token'),
      collapsed:false
    }
  }
  changeLoginState(token){
    this.setState({
      logined:storageManager.getStorage('token')
    })
  }
  tollgeCollapsed(){
    this.setState({collapsed:!this.state.collapsed})
  }
  componentWillMount(){
    const  _self=this
    store.subscribe(() =>{
      _self.changeLoginState()
    })
  }
  render() {
    return (
      <div>
            {this.state.logined?<Header />:''}
            {this.state.logined?<BroadSide tollgeCollapsed={this.tollgeCollapsed.bind(this)} collapsed={this.state.collapsed} />:''}
            <Switch>
                {
                  config[this.state.logined?'isLogin':'noLogin'].map((route,index) => {
                        return(
                            <Route 
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}/>

                        )
                    })
                }
          </Switch>
      </div>
    )
  }
}
