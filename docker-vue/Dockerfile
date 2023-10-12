FROM node

WORKDIR /usr/src/app  

RUN apt-get update && \
    apt-get install -y npm && \
    npm install -g @vue/cli  

EXPOSE 4040 
# 这里只是提示 4040 


CMD ["/bin/sh"]


# 为了创建一个vue的开发环境
# https://chihokyo.com/post/9/  但是人家是mac，所以我们需要改一下Dockerfile

# docker run -v C:\Users\工大\Desktop\docker-learning\docker-vue:/usr/src/app -p 8080:8080 --name vue_dep -it -d vue_app_image

# 进入容器之后点奇怪，不过直接 cd /usr/src/app

# 看好端口映射哦
# 这个容器内显示 ：  App running at:   - Local:   http://localhost:8080/ 

