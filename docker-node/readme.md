### 创建node容器

创建并运行
- docker run -d -p 5555:8080 --name node1 -v C:\Users\工大\Desktop\docker-learning\docker-node\app:/usr/src/app -w /usr/src/app nodewebserver npm start
- docker run -d -p 5556:8080 --name node2 -v C:\Users\工大\Desktop\docker-learning\docker-node\app:/usr/src/app -w /usr/src/app nodewebserver npm start

配置解释
- -p 8080:8080：将容器内部的 8080 端口映射到主机上的 8080 端口，以便可以从主机访问容器内的应用程序。
- -v path_app_local:/usr/src/app：将主机当前工作目录挂载到容器内的 /usr/src/app 目录，以便容器内的应用程序可以访问主机上的文件。
- -w /usr/src/app：在容器内部设置当前工作目录为 /usr/src/app，以便当您在容器内运行任何命令时，它们都将在正确的工作目录中运行。
- node：使用 node 镜像来创建容器。
- npm start：在容器内运行应用程序。


### volume挂载

Dockerfile要和package.js放到一起。

### npm 

package.js 中的 dependency 决定了依赖包的安装 —— npm install

npm init 的时机不对，package.js可能会出错

### 负载均衡

后端往往有多个服务器，启动多个容器即可

但是注意端口不要冲突，当一台机器多个镜像时