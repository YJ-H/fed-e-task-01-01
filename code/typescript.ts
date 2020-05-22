// let a = 10 
// let b: number = 10 
// let arr: Array<number> = [10,20,20]
// enum postStatus {
//   D = 0,
//   A = 1,
//   B = 'bbb'
// }
// const hello = (name: string) => {
//   console.log(`Hello 
//   ${name}`)
// }
// hello('yj')
// 类型断言
// let res
// const num = res as number



// 接口 interface
interface Post {
  title: string
  content: string
}
function printPost (post: Post) {
  console.log(post)
}
printPost({
  title: '111',
  content: '222'
})

// 类  class

class person {
  name: string
  private age: number
  protected gender: boolean
  
  constructor (name: string, age: number,gender: boolean) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  sayHi (name: string): void {
    console.log('Hi ' + name)
  }
}
const tom = new person('tom', 18)
console.log(tom.name)
