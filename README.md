# repaint-perfs
test repaint rates of JS libs http://guimeisang.github.io/repaint-perfs  

## 目的对比主流MVVM框架在数据改变时的性能   
> 对比angular，angular2，vue，vue2，react的性能对比（重绘速度）

- 在100*5的数据表中
  - 数据更新率为10%   

|    框架   |  angular  |  angular2     |    vue      |    vue2      |     react  | 
|:---------:|:-----------:|:-----------:|:-----------:|:------------:|:----------:|
|repaint rate|       30|            30|         50    |         50 |       55     |

  - 数据更新率为50%  

|    框架   |  angular  |  angular2     |    vue      |    vue2      |     react  | 
|:---------:|:-----------:|:-----------:|:-----------:|:------------:|:----------:|
|repaint rate|       14|            23|         25    |         26 |       30     |

  - 数据更新率为100%  
  
|    框架   |  angular  |  angular2     |    vue      |    vue2      |     react  | 
|:---------:|:-----------:|:-----------:|:-----------:|:------------:|:----------:|
|repaint rate|       10|            19|         15    |         18 |       25     |

- 在1000*5的数据表中

