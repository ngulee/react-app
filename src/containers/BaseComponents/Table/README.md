## Table API
属性 | 说明 | 类型 | 默认值 | 必选
----|----|----|----|----
columns         | 表格列的配置描述，具体项见下表 | ColumnProps[]  |     []     | true
dataSource      | 数据数组，参考ant design                   | any[]       |    []      | true
scrollDirection | 滚动的方向                  | string     | horizontal | false


### ColumnProps

属性        | 说明 | 类型 | 默认值 | 必选
----       |----|----|----|----
key        | React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性 | `string | number` | - | false
title      | 列头显示文字 | `string|number` | - | false
dataIndex  | 列数据在数据项中对应的 key，支持 | `string|number` | - | false
renderTitle| 列头显示文字 | `ReactNode` | - | false
render     | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 | `Function(text, record, index) {}` | - | false
fixed      | 列是否固定，可选 'left' 'right' | `boolean|string` | - | false
className  | 列样式类名 | `string` | - | false
width      | 列宽度 | `number|string` | - | false

### 注意事项
+ Table 组件实现了Ant Design Table 组件的基本功能，用法与Ant Design Table类似