// // You can edit this code!
// // Click here and start typing.
// package main
// import "fmt"
// func main() {
// 	fmt.Println("Hello, 世界")
// }

package main

import (
	"fmt"
	"log"

	"github.com/go-redis/redis"
)

func main() {
	// 创建Redis客户端实例
	client := redis.NewClient(&redis.Options{
		Addr:     "localhost:49154", // Redis服务器地址和端口
		Password: "redispw",         // Redis密码
		DB:       0,                 // Redis数据库编号 (默认为0)
	})

	// 进行连接测试
	pong, err := client.Ping().Result()
	if err != nil {
		log.Fatal(err)
	}

	// 打印连接结果
	fmt.Println(pong)

	// 关闭Redis客户端连接
	err = client.Close()
	if err != nil {
		log.Fatal(err)
	}
}
