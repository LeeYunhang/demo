package main

import (
	"bytes"
)

func main() {
	arr := []int{1, 2, 3, 4, 5}
	arr1 := make([]int, 5, 10)

	println(len(arr1[2:2]))
	for i, v := range arr1 {
		println("i =", i, "v =", v)
	}
	println("sum =", sum(arr[:]))
}
func sum(arr []int) int {
	s := 0
	for i := 0; i < len(arr); i++ {
		s += arr[i]
	}

	return s
}

func init() {
	var buff bytes.Buffer
	var (
		hello = "hello"
		world = "world"
		a     int
	)

	buff.WriteString(hello)
	buff.WriteString(world)

	println("a =", a)
	println(buff.String())
}
