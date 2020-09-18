## 常用的 react-hooks demo

> 使得 **function 组件**具有 **class 组件**同等的"特效"(state, 生命周期函数...)；
>
> 函数式开发；

- useState
- useEffect
> 替代生命周期函数：componentDidMount componentDidUpdate componentWillUnmount
>
> 可进行副作用操作（网络请求等）

- useLayoutEffect
> 类似 `useEffect`，不过 `useEffect` 是渲染后更新数据，不阻塞 DOM 更新；
>
> 而 `useLayoutEffect` 则会在内容更新到 DOM 上前运行，会阻塞 DOM 更新；

- useContext
> 父传子更简单，Maybe props directly

- useReducer
> **useReducer** --- 替换 **useState** 来处理逻辑复杂操作；

- useMemo
> **useMemo** --- 性能优化（**依赖项变化**时才进行重新计算 --- **缓存值**）

- useCallback
> 同 `useMemo`类似，只是返回的是**缓存的函数**。

- useRef
> 获取 DOM 对象；
>
> 获取上一次状态值；