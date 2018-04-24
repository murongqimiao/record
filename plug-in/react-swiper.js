/**
 * 项目不打算引用过多第三方,
 * 遂手写swiper
 * 算是第一个葡语项目, 原型图到设计稿对第三方语言挺糟心的, 如果可以有dom文本矫正测试工具就好了.自己撸一个.
 */

import './style.scss'
 
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Swiper extends Component {
  static propTypes = {
    items: PropTypes.array,
    clickcb: PropTypes.func,
    jumpFiled: PropTypes.string,
    imgFiled: PropTypes.string,
    interval: PropTypes.number,
    duration: PropTypes.number
  }

  static defaultProps = {
    items: [ { url: 'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524464874069&di=7463f3a01362f4123f554933eeb9bdb1&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F83025aafa40f4bfb992d212c054f78f0f63618cc.jpg' }, { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524464937181&di=6afa72e78c631e63807412df056259ee&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fvideo%2Fc7%2Fc7d34b801364f01b1f513a3c6b8fe25a.jpg'}],
    clickcb: () => {},
    jumpFiled: 'aaaa',
    imgFiled: 'aaaaaaa',
    interval: 2000,
    duration: 500
  }

  state = {
    itemWidth: '',
    currentIndex: 0,
    intervalHandler: null,
    pauseHandler: null,
    translateDistance: '',
    transitionDuration: this.props.duration + 'ms',
    startTouch: null,
    startDistance: 0,
    maxOffset: 0
  }

  componentWillMount() { // init width of child node
  }

  componentDidMount() { // 获取元素高宽对应更改内部图片大小
    let swiperWidth = this.refs.Swiper_container && this.refs.Swiper_container.getBoundingClientRect().width,
        swiperOffset = this.refs.Swiper_container && -1 * this.refs.Swiper_container.getBoundingClientRect().width * (this.props.items.length - 1)
    this.setState({
      itemWidth: swiperWidth, 
      maxOffset: swiperOffset 
    })
    this.startInterval()
  }

  componentWillUnmount() {
    // 组件将要被卸载
    clearInterval(this.state.intervalHandler)
  }

  onTouchStart = e => {
    e.stopPropagation()
    this.setState({
      startTouch: e.nativeEvent.touches[0],
      transitionDuration: '30ms',
      startDistance: this.state.translateDistance
    })
    clearInterval(this.state.intervalHandler)
  }

  onTouchMove = e => {
    e.stopPropagation()
    let distance = this.state.startDistance + (e.nativeEvent.touches[0].pageX - this.state.startTouch.pageX)
    if (distance < 0 && distance > this.state.maxOffset) {
      this.setState({
        translateDistance: distance
      })
    }
  }

  onTouchCancel = e => {
    e.stopPropagation()
    this.touchOffset(e.nativeEvent.changedTouches[0].pageX- this.state.startTouch.pageX)
  }

  onTouchEnd = e => {
    e.stopPropagation()
    this.touchOffset(e.nativeEvent.changedTouches[0].pageX- this.state.startTouch.pageX)
  }

  touchOffset(offset) {

    if (!this.state.pauseHandler) {
      this.setState({
        pauseHandler: setTimeout(() => {
          this.startInterval()
          clearTimeout(this.state.pauseHandler)
          this.state.pauseHandler = null
        }, this.state.interval),
        transitionDuration: this.props.duration + 'ms' // 切换时添加缓动效果
      })
    }

    // 移动距离小于1/5屏宽时复位
    if (Math.abs(offset) < this.state.itemWidth / 5) {
      this.setState({
        translateDistance: this.state.startDistance
      })
      return
    }

    let distance = this.state.startDistance + offset
    if (distance > 0 || distance < this.state.maxOffset) {
      return
    }

    let direction = offset > 0 ? -1 : 1;
    let index = (this.props.items.length + this.state.currentIndex + direction) % this.props.items.length
    this.props.items.length === (this.state.currentIndex + direction) ? this.switchFirstFromLast(index) : this.switchToIndex(index)
  }

  startInterval() { // 计时器
    this.setState({
      intervalHandler: setInterval(() => {
        let index = (this.state.currentIndex + 1) % this.props.items.length
        this.props.items.length === (this.state.currentIndex + 1) ? this.switchFirstFromLast(index) : this.switchToIndex(index)
      }, this.props.interval)
    })
  }

  switchFirstFromLast(index) {
    this.setState({
      currentIndex: index,
      translateDistance: -1 * this.state.itemWidth * this.props.items.length
    })
    setTimeout(() => {
      this.setState({
        transitionDuration: '0ms',
        translateDistance: 0
      })
      setTimeout(() => {
        this.setState({
          transitionDuration: this.props.duration + 'ms'
        })
      }, 10)
    }, this.props.duration + 50)
  }

  switchToIndex(index) {
    this.setState({
      currentIndex: index,
      translateDistance: -1 * this.state.itemWidth * index
    })
  }

  touchSwitch(index) { // 点击tag翻页
    this.switchToIndex(index)
    clearInterval(this.state.intervalHandler)
  }

  render() {
    const { items, clickcb } = this.props
    const { currentIndex } = this.state

    let listStyle = {
      transform: 'translateX(' + this.state.translateDistance + 'px)',
      transitionDuration: this.state.transitionDuration || '500ms',
      width: 100 * (items.length + 1) + '%'
    }
    let bannerStyle = {
      width: this.state.itemWidth + 'px'
    }

    return (
    <div
    className="Swiper_container"
    ref="Swiper_container"
    onTouchStart={this.onTouchStart}
    onTouchMove={this.onTouchMove}
    onTouchCancel={this.onTouchCancel}
    onTouchEnd={this.onTouchEnd}
    >
      <div className="Swiper_list" style={listStyle}>
        {items.concat(items[0]).map((each, i) => (
          <div
          className="list_each"
          style={bannerStyle}
          onClick={clickcb}
          key={i}>
            <img src={each.url} />
          </div>
        ))}
      </div>

      <ul className="tag">
      {items.map((each, index) => (
        <li
        key={index}
        className={currentIndex === index ? 'selected' : ''}
        onClick={this.touchSwitch.bind(this, index)}
        ></li>
      ))}
      </ul>
    </div>
    )
  }
}

export default Swiper
