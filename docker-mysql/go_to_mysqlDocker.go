package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// 连接到MySQL数据库
	db, err := sql.Open("mysql", "root:123456@tcp(localhost:3306)/mysql")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	// 测试连接
	err = db.Ping()
	if err != nil {
		panic(err.Error())
	}
	fmt.Println("Connected to MySQL database!")

	// 查询示例
	rows, err := db.Query("SELECT VERSION()")
	if err != nil {
		panic(err.Error())
	}
	defer rows.Close()

	var version string
	for rows.Next() {
		err = rows.Scan(&version)
		if err != nil {
			panic(err.Error())
		}
	}

	fmt.Printf("Database version: %s\n", version)
}
