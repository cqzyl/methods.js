# 常用函数方法

> 函数方法存放在全局对象cq内


## cqalert
> alert(msg)
- arguments:
    ```
    > msg: String 提示字段
    ```

## cqloading
> loading()

### proto:

- end: Function loading结束



## 删除url指定参数
  
> delURLParameter(parameter_name, not_change_url)
- arguments:
    ```
    > parameter_name: String 要删除的url
    > not_change_url: Boolean 是否更改url
    ```

- res:
    ```
    url中的指定参数（'parameter_name=parameter_value'）
    ```



## html转义

> HTMLTrope()

### proto:

- data: Object 要进行置换的参数
    ```
    { 编码后: 解码后 }
    ```

- setData: Function 新增转义字符
    
    - arguments:
      > obj: Object 要新增的置换参数{ 编码后: 解码后 }

- encode: Function 编码
    
    - arguments:
        ```
        > str: String 需要被编码的字符串
        ```
    - res:
        ```
        String 编码后的字符串
        ```
- decode: Function 解码

    - arguments:
        ```
        > str: String 需要被解码的字符串
        ```
    - res:
        ```
        String 解码后的字符串
        ```
