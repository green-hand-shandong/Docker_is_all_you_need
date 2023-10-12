
### 创建nginx容器
后端单机运行
```
docker run -d -p 80:80 --name my-nginx `
  -v C:\Users\工大\Desktop\docker-learning\docker-nginx\html:/usr/share/nginx/html `
  -v C:\Users\工大\Desktop\docker-learning\docker-nginx\nginx\default.conf:/etc/nginx/conf.d/default.conf `
  nginx
```

负载均衡
```
docker run -d -p 80:80 --name my-nginx `
  -v C:\Users\工大\Desktop\docker-learning\docker-vue\dist:/usr/share/nginx/html `
  -v C:\Users\工大\Desktop\docker-learning\docker-nginx\nginx\conf.d\default.conf:/etc/nginx/conf.d/default.conf `
  -v C:\Users\工大\Desktop\docker-learning\docker-nginx\nginx\nginx.conf:/etc/nginx/nginx.conf `
  nginx
```

### 配置文件和前端文件

本地上提到的nginx文件夹中配置好，
本地上提到的html文件夹中配置好静态文件 

根据配置文件的设置
- localhost:80  —— html/index.html
- localhost:80/dist  —— html/dist/index.html

我想知道什么决定nginx的行为，注意行为都是配置文件配置的。而且配置文件不是热更新的，也许需要reload之类的。


### 前端nginx和后端不在同一机器时

vue工程中会指定请求的地址，所以不在同一机器也行。没毛病。