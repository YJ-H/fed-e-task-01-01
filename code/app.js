// const arr = [10,20,30]
// //解构
// let [a,b,c] = arr 
// console.log(a,b,c)
// // 解构可赋默认值
// let [q,w,e = 1,defaultValue = 'default value'] = arr 
// console.log(q,w,e, defaultValue)


//对象解构
// const obj = {
//   name: 'yj',
//   age: '11'
// }

// const { name } = obj
// console.log(name)
// //key冲突时使用重命名
// const { name: newName} = obj
// console.log(newName)

//带标签的模版字符串

// const name = 'yj'
// const gender = true
// function myFuncStr (str,name,gender) {
//   console.log(str,name,gender)
//   return gender ? name : gender
// }
// const str = myFuncStr`${name} is a ${gender}`
// console.log(str)




// const message = `error, ...defined.`
// console.log(
//   message.startsWith('error'),
//   message.endsWith('.'),
//   message.includes('err')
// )


//proxy

// let person = {
//   name: 'yj',
//   age: 11
// }
// console.log(process.memoryUsage(),'======')

// const personProxy = new Proxy(person, {
//   get (target, key) {
//     console.log(target, key)
//     return target[key]
//   },
//   set (target, key, value) {
//     console.log(target, key, value)
//     target[key] = value
//   }
// })
// console.log(personProxy.name)
// personProxy.name = 'yj1'
// console.log(personProxy.name)
// var a = 10
// var obj = {
//   a: 20,
//   fn () {
//     setTimeout(function () {
//       console.log(this.a)
//     },0)
//   }
// }
// obj.fn()
